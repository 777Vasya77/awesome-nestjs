export const removeEmoji = (str) => {
    return str
        .replace(/:[^)]*:/g, '') // remove emoji, example: ":books:"
        .replace(/[^\x00-\x7F]/g, ''); // remove non-ASCII characters, example: "📚"
};

export const prepareString = (str) => {
    return str
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('-/-', '-')
        .replaceAll('-&-', '-and-')
        .replace(/-:[^)]*:/g, '') // remove emoji, example: "-:books:"
        .replace(/[^\x00-\x7F]/g, '') // remove non-ASCII characters, example: "📚"
        .replace(/-\([^)]*\)/g, '') // remove text in parentheses, example: " -(i18n)"
};
