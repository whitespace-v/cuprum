const {Model} = require('../models/models')


class ModelController {
    async create(req,res){
        const {name} = req.body
        const model = await Model.create({name})
        return res.json(model)
    }
    async getAll(req,res){
        const models = await Model.findAll()
        return res.json(models)
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Model.findOne({where: {id}})
                .then( async data => {
                    if (data) {
                        await Model
                            .destroy({where: {id}})
                            .then(() => res.json('[-] Model deleted'))
                    } else return res.json(`[!] Doesn't exist in data base`)
                })
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new ModelController()