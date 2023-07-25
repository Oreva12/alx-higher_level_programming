#!/usr/bin/node

/* a Script that writes a string to a file */
const fs = require('fs');

const filePath = process.argv[2];
const contentToWrite = process.argv[3];

const writeFileContent = (filePath, content) => {
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('file written successfully');
    }
  });
};

if (filePath && contentToWrite) {
  writeFileContent(filePath, contentToWrite);
} else {
  console.error('please provide a file path');
}
