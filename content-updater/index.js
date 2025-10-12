import fs from 'fs';
import axios from 'axios';
import { markdownSplit } from './markdown-split.js';
import { prepareString, removeEmoji } from './prepare-string.js';
import { generateHeadSection } from './generate-head-section.js';
import { generateSidebarLinks } from './generate-sidebar-links.js';

// README.md file URL
const url = 'https://raw.githubusercontent.com/nestjs/awesome-nestjs/master/README.md';

// Function for downloading and parsing a file
async function parseReadme() {
  try {
    // Loading the contents of the README.md file
    const response = await axios.get(url);
    const content = response.data;

    // Dividing content into sections
    const sections = markdownSplit(content, '##');

    // Creating a results folder
    const outputFolder = 'content';
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    // Processing each section
    sections.forEach(({ name, content }) => {
      const skipSections = ['Contents <!-- omit in toc -->', 'Contribute', 'License'];
      if (!name || !content || skipSections.includes(name)) {
        return;
      }

      const folderName = prepareString(name);
      const folderPath = `${outputFolder}/${folderName}`;

      // Creating a folder if it doesn't exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }

      const fileName = prepareString(name)
      const filePath = `${folderPath}/${fileName}.md`;

      // Writing content to a file
      fs.writeFileSync(filePath, content.trim());

      //
      parseSection({filePath, folderPath, category: name});
    })

    console.log('Parsing done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

function parseSection({filePath, folderPath, category}) {
  try {
    // Reading content file
    const content = fs.readFileSync(filePath, 'utf8');

    // Dividing content into sections
    let sections = markdownSplit(content, '####');

    const hasNamedSections = sections.some(({ name }) => Boolean(name && name.trim()));
    if (!hasNamedSections) {
      sections = sections.map((section) => ({
        ...section,
        name: category
      }));
    }

    // Processing each section
    sections.forEach(({ name, content }) => {
      if (!content.trim()) {
        return;
      }

      const sectionName = ((name ?? category) || '').trim();
      if (!sectionName) {
        return;
      }
      const fileName = prepareString(sectionName);
      const entryFilePath = `${folderPath}/${fileName}.md`;

      const fileUrl = entryFilePath
        .replace('content/', '')
        .replace('.md', '.html');

      // Create content file
      const fileContent = {
        headSection: generateHeadSection(removeEmoji(sectionName).trim(), fileUrl),
        title: `# ${sectionName}`,
        content: content.trim()
      };
      const generateFileContent = () => {
        const {headSection,title,content} = fileContent;
        return `${headSection}\n\n${title}\n\n${content}\n`;
      };
      fs.writeFileSync(entryFilePath, generateFileContent());
    });

    // Remove temp file
    const skipFiles = ['meetups.md'];
    if (hasNamedSections && !skipFiles.some(file => filePath.includes(file))) {
      fs.unlinkSync(filePath);
    }

    // Generate sidebar.json
    const sidebarLinks = generateSidebarLinks({category, folderPath});
    fs.writeFileSync('sidebar.json', JSON.stringify(sidebarLinks, null, 2));

    console.log('[Created]', folderPath);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call parseReadme function
parseReadme();
