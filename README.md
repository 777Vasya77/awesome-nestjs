<!-- markdownlint-disable MD033 MD041 MD002 -->
<h1 align="center">

<br>

<img src=".github/hero.svg" alt="Awesome NestJS" width="320">

<br>
<br>

Awesome NestJS

</h1>

<h3 align="center">A curated list of awesome things related to NestJS</h3>

<p align="center">
   <a href="https://awesome.re">
    <img src="https://awesome.re/badge.svg" alt="Awesome">
  </a>
</p>

<hr />
<!-- markdownlint-enable MD033 -->

This project does not aim to replace the **[official NestJS Awesome List][nestjs/awesome-nestjs]** but rather to provide a nicer experience when browsing the content.

[nestjs/awesome-nestjs]: https://github.com/nestjs/awesome-nestjs

## Instructions

To run this application on your machine, first clone the repository and install the required dependencies:

```bash
git clone https://github.com/777Vasya77/awesome-nestjs.git
cd awesome-nestjs
npm install
```

Run the `dev` script to compile the content and spawn a local server to serve the compiled code. While this script is running, any changes made to the markdown files will automatically be updated on the locally served pages. Go to <http://localhost:5173> on your web browser to view the site.

```bash
npm run dev
```

To prepare the application for deployment, first run `npm run build` to compile the application in production mode. This will generate a directory in `content/.vitepress` called **`dist`**.

```bash
npm run build
# You can use `npm run preview` to inspect the output
npm run preview --port 4173
```

## Scripts

| Script    | Description                                             |
|-----------|---------------------------------------------------------|
| `dev`     | Compiles content and serves bundled code                |
| `build`   | Compiles content and other static assets for deployment |
| `preview` | Locally preview the production build                    |

## Contributing

Please refer to the [Contributing Guide](.github/CONTRIBUTING.md).

## License

This is free and unencumbered software released into the public domain.

For more information, please refer to <https://unlicense.org>
