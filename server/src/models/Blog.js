const { genSalt } = require("bcrypt-nodejs")

module.exports = ( sequelize, DataTypes ) => {
    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.STRING,
        category: DataTypes.STRING,
        gen: DataTypes.STRING,
        price: DataTypes.STRING,
        function: DataTypes.STRING,
        brand: DataTypes.STRING,
    })
    return Blog
}