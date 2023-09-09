const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.htu6u1z.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log("Erro ao conectar ao banco de dados: ", error)
        }
        return console.log("Conexão ao banco de dados realizada com sucesso!")
    })
}

module.exports = connectToDatabase;