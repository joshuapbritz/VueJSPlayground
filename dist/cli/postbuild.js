const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

console.time('Build');
console.log(`\n\r`);
console.log('Building out "index.html"');
console.log(`\n\r`);

const { minify } = require('html-minifier');

const chalk = require('chalk');

// Functions
const page = new JSDOM(fs.readFileSync('./index.html').toString());
const body = page.window.document.body;

const script = body.querySelector('script');

const resolvedSrc = resolveSrc(script.src);
script.src = resolvedSrc;

body.removeAttribute('style');

const indexExists = fs.existsSync('./dist/index.html');
if (indexExists) fs.unlinkSync('./dist/index.html');

fs.writeFileSync('./dist/index.html', runMinification(page.serialize()));

const mapExists = fs.existsSync('./dist/build.js.map');
if (mapExists) fs.unlinkSync('./dist/build.js.map');

console.timeEnd('Build');

function resolveSrc(src) {
  console.info(chalk.green.bold('Step:'), chalk.grey('Resolving build file'));
  const s = String(src);
  return `${s.replace('/dist', '')}?v=${new Date().getTime().toString(36)}`;
}

function runMinification(htmlFile) {
  console.info(chalk.green.bold('Step:'), chalk.grey('Minifing HTML File'));
  return minify(htmlFile, {
    removeAttributeQuotes: true,
    removeTagWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
    collapseWhitespace: true,
  });
}

console.log(`\n\r`);
