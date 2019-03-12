const fs = require('fs');

const folders = Array.from(fs.readdirSync('./dist')).filter(
  folder => !folder.includes('.')
);

const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title id="title">Entry Page</title>
  </head>
  <body>
    <ul>
        ${folders
          .map(
            (f, i) =>
              `${i > 0 ? '\t\t\t\t' : ''}<li><a href="/${f}">${f}</a></li>`
          )
          .join('\n')}
    </ul>
  </body>
</html>
`;

const indexExists = fs.existsSync('./dist/index.html');
if (indexExists) fs.unlinkSync('./dist/index.html');

fs.writeFileSync('./dist/index.html', template);
