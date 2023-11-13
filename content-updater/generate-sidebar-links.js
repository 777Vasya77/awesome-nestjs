import fs from 'fs';
import { markdownSplit } from './markdown-split.js';

const sidebar = [];
export const generateSidebarLinks = ({category, folderPath}) => {
  const files = fs.readdirSync(folderPath);

  const items = files.map((file) => {
    const fileUrl = file.replace('.md', '');
    const folderUrl = folderPath.replace('content', '');

    const fileContent = fs.readFileSync(`${folderPath}/${file}`, 'utf8');
    const sections = markdownSplit(fileContent, '#');
    const [title] = sections.map(({name}) => name).filter(Boolean);

    return {
      text: title,
      link: `${folderUrl}/${fileUrl}`
    };
  })

  sidebar.push({
    text: category,
    items
  });

  return sidebar;
}
