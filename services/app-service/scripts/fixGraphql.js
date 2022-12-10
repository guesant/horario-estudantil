const { join } = require('path');
const { readFileSync, writeFileSync, existsSync } = require('fs');

const pattern =
  '/** All built-in and custom scalars, mapped to their actual values */';

const FILE = join(__dirname, '../src/graphql/__generated__/graphql.ts');

if (existsSync(FILE)) {
  const originalContent = readFileSync(FILE, 'utf8');

  const fixedContent = originalContent.slice(
    0,
    originalContent.lastIndexOf(pattern),
  );

  writeFileSync(FILE, fixedContent);

  console.log('ok');
}
