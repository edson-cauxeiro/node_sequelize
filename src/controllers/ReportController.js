const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos usuarios que tem email que termina com @example.com
        // Desses usuarios eu quero buscar todos que moram Guilherme Gembala
        // Desses usuarios eu quero buscar as tecnologias que começam com React
    
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@example.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Guilherme Gembala' } }, //Endereços
                { association: 'techs', 
                  required: false,
                  where: { 
                     name: { 
                        [Op.iLike]: 'React%'
                     }
                  }
                }, //Tecnologias
            ]
        });

        return res.json(users);
    }
};