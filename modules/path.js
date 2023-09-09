const path = require('path');

// Basename
console.log(path.basename(__filename));

// Nome do Diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));

// const fullPath = path.join('my', 'folder', 'file.txt');
// console.log(fullPath); // Exemplo de saída: my/folder/file.txt (Unix-like) ou my\folder\file.txt (Windows)

