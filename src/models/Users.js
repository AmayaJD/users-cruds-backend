const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
// Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING(20)
        // allowNull por defecto esta en true
        },
            last_name: {
                type: DataTypes.STRING(20)
                // allowNull por defecto esta en true
                },
                email: {
                    type: DataTypes.STRING(30)
                    // allowNull por defecto esta en true
                    },
                    password: {
                        type: DataTypes.STRING(20)
                        // allowNull por defecto esta en true
                        },
                        birthday: {
                            type: DataTypes.DATE
                            // allowNull por defecto esta en true
                            }
});
module.exports = User;