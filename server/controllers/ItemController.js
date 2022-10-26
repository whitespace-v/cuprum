const {Item, ItemImages} = require('../models/models')
const path = require('path')
const uuid = require('uuid')

class ItemController {
    async create(req,res){
        const {
            name, description, price,
            currentAvailability, currentBrand, currentCategory,
            currentSubcategory
        } = req.body
        const {images} = req.files;
        let imgName = uuid.v4() + '.jpg';
        const item = await Item.create({
            image: imgName,
            name,
            description,
            mark: 0,
            marksCount: 0,
            oldPrice: 0,
            vendor: `${currentAvailability.length}${currentCategory}${currentSubcategory}${currentBrand}${name.length}${description.length}${price.length}`,
            price,
            availability: currentAvailability,
            categoryId: currentCategory,
            subcategoryId: currentSubcategory,
            brandId: currentBrand,
        }).then(images[0].mv(path.resolve(__dirname,'..', 'static', imgName)))

        for (let i = 0; i<images.length;i++) {
            imgName = uuid.v4() + '.jpg'
            await images[i].mv(path.resolve(__dirname,'..', 'static', imgName))
            await ItemImages.create({img: imgName, itemId: item.id})
        }
        return res.json('item')
    }

    async getAll(req,res){
        const items = await Item.findAll()
        return res.json(items)
    }
    async getOne(req,res){                      //get a car by id
        const {id} = req.params
        const item = await Item.findOne(          //extract a car by id and get info
            {
                where: {id},
                include: [{model: ItemImages, as: 'images'}]
            }
        )
        return res.json(item)
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Item.findOne({where: {id}})
                .then( async data => {
                    if (data) {
                        await Item
                            .destroy({where: {id}})
                            .then(() => res.json('[-] Item deleted'))
                    } else return res.json(`[!] Doesn't exist in data base`)
                })
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new ItemController()