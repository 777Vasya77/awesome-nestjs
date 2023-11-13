const DividerMap = {
    '#': /^\s*#(?:\s+(.+?))?\s*$/,
    '##': /^\s*##(?:\s+(.+?))?\s*$/,
    '###': /^\s*###(?:\s+(.+?))?\s*$/,
    '####': /^\s*####(?:\s+(.+?))?\s*$/,
}

// https://github.com/marceljs/markdown-split/blob/master/src/index.js
export const markdownSplit = (content, divider) =>  {
    const lines = content.split(/\n/);
    var result = [], section, content = '', item;

    lines.forEach(function(line) {
        const match = line.match(DividerMap[divider]);
        if (match) {
            // new section encountered
            if (content = content.trim()) {
                item = { content: content };
                if (section) item.name = section;
                result.push(item);
            }
            section = match[1];
            content = '';
        } else {
            // content of a section
            content += '\n' + line;
        }
    });

    if ((content = content.trim()) || section) {
        item = { content: content };
        if (section) item.name = section;
        result.push(item);
    }

    return result;
};
