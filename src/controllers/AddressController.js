const User = require('../models/User');
const Address = require('../models/address');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });
      
        return res.json(user.addresses);
    },
    
    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        //buscar User pelo ID
        const user = await User.findByPk(user_id);
        //Verificando se existe User com esse ID
        if(!user) {
            return res.status(400).json({ error: 'User not Found' });
        }
        const address = await Address.create({ zipcode, street, number, user_id }); 

        return res.json(address);
    }
}