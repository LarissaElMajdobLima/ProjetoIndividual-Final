'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

// Configuraçoes da estrutura da MINHA tabela

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		idUsuario: {
			field: 'id_usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nickname: {
			field: 'nickname',
			type: DataTypes.STRING,
			allowNull: false
		},
		data_nasc: {
			field: 'data_nasc',
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
	},
		{
			tableName: 'usuario',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};

// As execuções retornam para Usuário