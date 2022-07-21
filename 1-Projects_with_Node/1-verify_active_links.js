import chalk from 'chalk';
// import fs, { read } from 'fs';
import fs from 'fs';

function trateErr(error){
    throw new Error(chalk.red(error.code,"there is no file in this path"));
}

function readFile(filePath){
    const encoding = 'utf-8';
    fs.promises.readFile(filePath, encoding)
    .then((text) => console.log(text))
    .catch((err)=> trateErr(err))
}

// function pegarArquivo(caminhoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoArquivo,encoding,(error,data)=>{
//         if(error){
//             trateErr(chalk.red(error.code,"there is no file in this path"));
//         }
//         console.log(chalk.green(data));
//     }
//     );
// }

readFile('../archives/1-links.md');


const text = chalk.red('text returned by function');

function text_func(string){
    console.log(string);
}

text_func(text);