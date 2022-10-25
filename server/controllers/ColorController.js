const {Color} = require('../models/models')


class ColorController {
    async create(req,res){
        const {name} = req.body
        const color = await Color.create({name})
        return res.json(color)
    }
    async getAll(req,res){
        const colors = await Color.findAll()
        return res.json(colors)
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Color.findOne({where: {id}})
                .then( async data => {
                    if (data) {
                        await Color
                            .destroy({where: {id}})
                            .then(() => res.json('[-] Color deleted'))
                    } else return res.json(`[!] Doesn't exist in data base`)
                })
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new ColorController()