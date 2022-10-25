const {Material} = require('../models/models')


class MaterialController {
    async create(req,res){
        const {name} = req.body
        const material = await Material.create({name})
        return res.json(material)
    }
    async getAll(req,res){
        const materials = await Material.findAll()
        return res.json(materials)
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Material.findOne({where: {id}})
                .then( async data => {
                    if (data) {
                        await Material
                            .destroy({where: {id}})
                            .then(() => res.json('[-] Material deleted'))
                    } else return res.json(`[!] Doesn't exist in data base`)
                })
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new MaterialController()