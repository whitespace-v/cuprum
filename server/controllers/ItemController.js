const {Item, ItemImages} = require('../models/models')
const path = require('path')
const uuid = require('uuid')
const sequelize  = require('../database')

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
        //todo: limit, page, offset, search query, sorting into front
        const {category, subcategory, availability, brand} = req.query
        const categoryId = Number(category.id)
        const subcategoryId = Number(subcategory.id)
        const brandId = Number(brand.id)
        let items
        const sorting = {name: 'asc price'}
        try {
            if (categoryId && subcategoryId && brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, brandId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, brandId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, brandId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, brandId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, brandId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && subcategoryId && brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, subcategoryId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, subcategoryId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, subcategoryId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, subcategoryId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, brandId, subcategoryId}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && subcategoryId && brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && !subcategoryId && brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, brandId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, brandId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && subcategoryId && !brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && subcategoryId && !brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, subcategoryId}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && !subcategoryId && brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, brandId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, brandId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, brandId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, brandId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, brandId}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && !subcategoryId && !brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (categoryId && !subcategoryId && !brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {categoryId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {categoryId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {categoryId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {categoryId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {categoryId}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && subcategoryId && brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {subcategoryId, brandId}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && subcategoryId && !brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {subcategoryId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {subcategoryId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {subcategoryId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && !subcategoryId && brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {brandId, availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {brandId, availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {brandId, availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {brandId, availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {brandId, availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && !subcategoryId && brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {brandId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {brandId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {brandId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {brandId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {brandId}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && subcategoryId && !brandId && !availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {subcategoryId}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {subcategoryId}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {subcategoryId}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {subcategoryId}, order: [['id', 'DESC']]})
                }
            }
            if (!categoryId && !subcategoryId && !brandId && availability.name){
                switch (sorting.name) {
                    case 'asc price':
                        items = await Item.findAndCountAll({where: {availability: availability.name}, order: [['price', 'ASC']]})
                        break
                    case 'desc price':
                        items = await Item.findAndCountAll({where: {availability: availability.name}, order: [['price', 'DESC']]})
                        break
                    case 'asc marks':
                        items = await Item.findAndCountAll({where: {availability: availability.name}, order: [['marksCount', 'ASC']]})
                        break
                    case 'desc marks':
                        items = await Item.findAndCountAll({where: {availability: availability.name}, order: [['marksCount', 'DESC']]})
                        break
                    default:
                        items = await Item.findAndCountAll({where: {availability: availability.name}, order: [['id', 'DESC']]})
                }
            }
            return res.json(items)
        }catch (e) {

        }

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