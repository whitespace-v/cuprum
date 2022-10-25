const {Size} = require('../models/models')


class SizeController {
    async create(req,res){
        const {name} = req.body
        const size = await Size.create({name})
        return res.json(size)
    }
    async getAll(req,res){
        const sizes = await Size.findAll()
        return res.json(sizes)
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Size.findOne({where: {id}})
                .then( async data => {
                    if (data) {
                        await Size
                            .destroy({where: {id}})
                            .then(() => res.json('[-] Size deleted'))
                    } else return res.json(`[!] Doesn't exist in data base`)
                })
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new SizeController()