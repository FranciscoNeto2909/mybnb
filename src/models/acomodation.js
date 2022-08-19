const Sequelize = require("sequelize")
const database = require("../configs/db")

const Acomodation = database.define("alocation", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shifts: {
        type: Sequelize.STRING,
        allowNull: false
    },
    place: {
        type: Sequelize.STRING,
        alowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likes:{
        type:Sequelize.NUMBER,
        alowNull:false
    }
})

module.exports = Acomodation  