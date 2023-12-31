export const generateHeadSection = (name, fileUrl) => {
    return `---
sidebarDepth: 3
head:
  - - meta
    - name: description
      content: ${name} for NestJS projects
  - - meta
    - name: og:title
      content: ${name}
  - - meta
    - name: og:type
      content: website
  - - meta
    - name: og:url
      content: https://awesome-nestjs.org/${fileUrl}
  - - meta
    - name: og:image
      content: https://awesome-nestjs.org/hero.svg
  - - meta
    - name: og:description
      content: ${name} for NestJS projects
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: ${name}
  - - meta
    - name: twitter:description
      content: ${name} for NestJS projects
  - - meta
    - name: twitter:image:src
      content: https://awesome-nestjs.org/hero.svg
---`;
};
