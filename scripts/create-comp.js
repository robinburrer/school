//const fs = require('fs');
const fs = require('fs/promises');
const readline = require('readline');

// Create a readline interface to get user input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define your template string
const compTemplateString = `import React from 'react';
import styles from './{{name}}.module.css';

interface {{name}}Props {}

const {{name}}: React.FC<{{name}}Props> = () => {
  return <div className={styles.container}>hello boilerplate</div>;
};

export default {{name}};`;

const stylingTemplateString = `.container {
    background: red;
  }`;

// Prompt the user to enter the component name
rl.question('Enter the component name: ', async (name) => {
  rl.close();

  // Replace the placeholders in the template string with actual values
  const values = {
    name: name,
  };
  const filledTemplate = compTemplateString.replace(
    /{{(.*?)}}/g,
    (match, key) => values[key.trim()]
  );

  // folder should start with lowercase
  const folderPath = `src/components/${
    values.name[0].toLowerCase() + values.name.slice(1)
  }`;

  const filePathComp = `${folderPath}/${values.name}.tsx`;
  const stylePath = `${folderPath}/${values.name}.module.css`;

  try {
    // first wirte comp folder
    await fs.mkdir(folderPath, { recursive: true });

    // then write comp and css module
    await fs.writeFile(filePathComp, filledTemplate);
    console.log('template written');

    await fs.writeFile(stylePath, stylingTemplateString);
    console.log('css module written');
  } catch (error) {
    console.log('Error:', error);
  }
});
