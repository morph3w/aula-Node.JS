const fs = require('fs');
const path = require('path');

// // Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log('Erro: ', error);
//     }

//     console.log('Pasta criada com sucesso!');
// })

// Criar um arquivo
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'hello node!', (error) => {
    if (error) {
        return console.log('Erro: ', error);
    }
    console.log("Arquivo criado com sucesso!");


    // Adicionar um arquivo
    fs.appendFile(path.join(__dirname, 'test', 'test.txt'), "hello morph1", (error) => {
        if (error) {
            return console.log('Erro: ', error);
        }
        console.log("Arquivo modificado com sucesso!");
    });

    // Ler Arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), "UTF-8", (error, data) => {
        if (error) {
            return console.log('Erro: ', error);
        }
        console.log(data);
    });
});





// documentação fs
// Leitura de Arquivos:

// fs.readFile(path, [options], callback): Lê um arquivo assincronamente.
// fs.readFileSync(path, [options]): Lê um arquivo de forma síncrona.
// Escrita de Arquivos:

// fs.writeFile(file, data, [options], callback): Escreve em um arquivo assincronamente.
// fs.writeFileSync(file, data, [options]): Escreve em um arquivo de forma síncrona.
// Manipulação de Diretórios:

// fs.mkdir(path, [options], callback): Cria um diretório assincronamente.
// fs.mkdirSync(path, [options]): Cria um diretório de forma síncrona.
// fs.readdir(path, [options], callback): Lê o conteúdo de um diretório assincronamente.
// fs.readdirSync(path, [options]): Lê o conteúdo de um diretório de forma síncrona.
// Renomear e Mover Arquivos/Diretórios:

// fs.rename(oldPath, newPath, callback): Renomeia ou move um arquivo/diretório assincronamente.
// fs.renameSync(oldPath, newPath): Renomeia ou move um arquivo/diretório de forma síncrona.
// Exclusão de Arquivos/Diretórios:

// fs.unlink(path, callback): Exclui um arquivo assincronamente.
// fs.unlinkSync(path): Exclui um arquivo de forma síncrona.
// fs.rmdir(path, callback): Exclui um diretório assincronamente.
// fs.rmdirSync(path): Exclui um diretório de forma síncrona.