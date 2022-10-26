const {Brand} = require('../models/models')


class BrandController {
    async create(req,res){
        // ; if exists -> if already has -> push
        /**
          if not exist -> create
          if exists ->
            if subcategories_id hasn't such number -> add to it
            if categories_id hasn't such number -> add to it
         **/
        const {name, category, subcategory} = req.body
        // const brand = await Brand.create({name, subcategories_id: })
        console.log(name, category, subcategory)
        try{
            const brands = await Brand.findAll({where: {name}})
            console.log(brands)
        } catch (e) { //not found
            const brand = await Brand.create( {name, categories_id: [category.id], subcategories_id: [subcategory.id]})
            return res.json(brand)
        }
        return res.json('exited')
    }
    async getAll(req,res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Brand.findOne({where: {id}})
                .then( async data => {
                    if (data) {
                        await Brand
                            .destroy({where: {id}})
                            .then(() => res.json('[-] Brand deleted'))
                    } else return res.json(`[!] Doesn't exist in data base`)
                })
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new BrandController()