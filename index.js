const fs = require("fs");
const pify = require("pify");

const currentDirectory = __dirname;

const getFullDirectoryPath = name => `${currentDirectory}\\${name}`;
const getTextFilePath = name => `${currentDirectory}\\${name}.txt`;

const createTextFile = (fileName, text) =>
  pify(fs.writeFile)(getTextFilePath(fileName), text, "utf-8")
    .then(() =>
      console.log(`file created successfully at: ${getTextFilePath(fileName)}`)
    )
    .catch(err => console.log(err));

const readTextFile = name =>
  pify(fs.readFile)(getTextFilePath(name), "utf-8")
    .then(data => console.log(data))
    .catch(err => console.log(err));

const createDirectory = dirName =>
  pify(fs.mkdir)(getFullDirectoryPath(dirName), true)
    .then(() =>
      console.log(`${getFullDirectoryPath(dirName)} created successfully`)
    )
    .catch(err => console.log(err));

const main = () => {
  console.log(`current working directory: ${currentDirectory}`);

  createTextFile("amit", "hello");
  createTextFile("sharon", "world");

  readTextFile("amit");

  createDirectory('firstDir');

  setTimeout(() => console.log('bye'), 10000);
};

main();
