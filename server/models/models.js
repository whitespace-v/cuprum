//Data Models
const sequelize  = require('../database')  //data base
const {DataTypes} = require('sequelize')  // for data types by destructuring

//create entities
const User = sequelize.define('user', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number:              {type: DataTypes.STRING, allowNull: false },  //need to set , unique: true
    password:            {type: DataTypes.STRING, allowNull: false},
    role:                {type: DataTypes.STRING, defaultValue: 'USER'}  //need to set , unique: true defaultValue: 'USER'
})

const Item = sequelize.define('item', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category:            {type: DataTypes.STRING,    allowNull: false },
    subcategory:         {type: DataTypes.STRING,    allowNull: false },
    brand:               {type: DataTypes.STRING,    allowNull: false },
    model:               {type: DataTypes.STRING,    allowNull: false },
    description:         {type: DataTypes.STRING,    allowNull: false },
    color:               {type: DataTypes.STRING,    allowNull: false },
    size:                {type: DataTypes.STRING,    allowNull: false },
    material:            {type: DataTypes.STRING,    allowNull: false },
    availability:        {type: DataTypes.STRING,    allowNull: false },
    price:               {type: DataTypes.INTEGER,   allowNull: false },
    image:               {type: DataTypes.STRING,    allowNull: false },
})

const Category = sequelize.define('item_category', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})

const Subcategory = sequelize.define('item_subcategory', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false },
    category_id:         {type: DataTypes.INTEGER,    allowNull: false },
})

const Brand = sequelize.define('item_brand', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})

const Model = sequelize.define('item_model', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})

const Color = sequelize.define('item_color', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})
const Size = sequelize.define('item_size', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})
const Material = sequelize.define('item_material', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})
const Availability = sequelize.define('item_availability', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})

const ItemImages = sequelize.define('item_images', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img:                 {type: DataTypes.STRING,    allowNull: false}
})


//for belongsToMany
const CategorySubcategory = sequelize.define('category_subcategory', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CategoryBrand = sequelize.define('category_brand', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CategoryModel = sequelize.define('category_model', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const CategoryColor = sequelize.define('category_color', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CategorySize = sequelize.define('category_size', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CategoryMaterial = sequelize.define('category_material', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CategoryAvailability = sequelize.define('category_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


const SubcategoryBrand = sequelize.define('subcategory_brand', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const SubcategoryModel = sequelize.define('subcategory_model', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const SubcategoryColor = sequelize.define('subcategory_color', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const SubcategorySize = sequelize.define('subcategory_size', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const SubcategoryMaterial = sequelize.define('subcategory_material', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const SubcategoryAvailability = sequelize.define('subcategory_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


const BrandModel = sequelize.define('brand_model', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const BrandColor = sequelize.define('brand_color', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const BrandSize = sequelize.define('brand_size', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const BrandMaterial = sequelize.define('brand_material', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const BrandAvailability = sequelize.define('brand_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const ModelColor = sequelize.define('model_color', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const ModelSize = sequelize.define('model_size', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const ModelMaterial = sequelize.define('model_material', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const ModelAvailability = sequelize.define('model_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const ColorSize = sequelize.define('color_size', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const ColorMaterial = sequelize.define('color_material', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const ColorAvailability = sequelize.define('color_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const SizeMaterial = sequelize.define('size_material', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const SizeAvailability = sequelize.define('size_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const MaterialAvailability = sequelize.define('material_availability', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
//5. has many
Category.hasMany(Subcategory)
Subcategory.belongsTo(Category)

Item.hasMany(ItemImages,{as: 'images'})
ItemImages.belongsTo(Item)

Category.hasMany(Item)
Item.belongsTo(Category)

Subcategory.hasMany(Item)
Item.belongsTo(Subcategory)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Model.hasMany(Item)
Item.belongsTo(Model)

Color.hasMany(Item)
Item.belongsTo(Color)

Size.hasMany(Item)
Item.belongsTo(Size)

Material.hasMany(Item)
Item.belongsTo(Material)

Availability.hasMany(Item)
Item.belongsTo(Availability)

// 6. belongsToMany
Category.belongsToMany(Brand,{through: CategoryBrand})
Category.belongsToMany(Model,{through: CategoryModel})
Category.belongsToMany(Size,{through: CategorySize})
Category.belongsToMany(Color,{through: CategoryColor})
Category.belongsToMany(Material,{through: CategoryMaterial})
Category.belongsToMany(Availability,{through: CategoryAvailability})

Subcategory.belongsToMany(Brand,{through: SubcategoryBrand})
Subcategory.belongsToMany(Model,{through: SubcategoryModel})
Subcategory.belongsToMany(Size,{through: SubcategorySize})
Subcategory.belongsToMany(Color,{through: SubcategoryColor})
Subcategory.belongsToMany(Material,{through: SubcategoryMaterial})
Subcategory.belongsToMany(Availability,{through: SubcategoryAvailability})

Brand.belongsToMany(Category,{through: CategoryBrand})
Brand.belongsToMany(Subcategory,{through: SubcategoryBrand})
Brand.belongsToMany(Model,{through: BrandModel})
Brand.belongsToMany(Size,{through: BrandSize})
Brand.belongsToMany(Color,{through: BrandColor})
Brand.belongsToMany(Material,{through: BrandMaterial})
Brand.belongsToMany(Availability,{through: BrandAvailability})

Model.belongsToMany(Subcategory,{through: SubcategoryModel})
Model.belongsToMany(Brand,{through: BrandModel})
Model.belongsToMany(Category,{through: CategoryBrand})
Model.belongsToMany(Size,{through: ModelSize})
Model.belongsToMany(Color,{through: ModelColor})
Model.belongsToMany(Material,{through: ModelMaterial})
Model.belongsToMany(Availability,{through: ModelAvailability})

Size.belongsToMany(Subcategory,{through: SubcategorySize})
Size.belongsToMany(Brand,{through: BrandSize})
Size.belongsToMany(Model,{through: ModelSize})
Size.belongsToMany(Category,{through: CategorySize})
Size.belongsToMany(Color,{through: ColorSize})
Size.belongsToMany(Material,{through: SizeMaterial})
Size.belongsToMany(Availability,{through: SizeAvailability})

Color.belongsToMany(Subcategory,{through: SubcategoryColor})
Color.belongsToMany(Brand,{through: BrandColor})
Color.belongsToMany(Model,{through: ModelColor})
Color.belongsToMany(Size,{through: ColorSize})
Color.belongsToMany(Category,{through: CategoryColor})
Color.belongsToMany(Material,{through: ColorMaterial})
Color.belongsToMany(Availability,{through: ColorAvailability})

Material.belongsToMany(Subcategory,{through: SubcategoryMaterial})
Material.belongsToMany(Brand,{through: BrandMaterial})
Material.belongsToMany(Model,{through: ModelMaterial})
Material.belongsToMany(Size,{through: SizeMaterial})
Material.belongsToMany(Color,{through: ColorMaterial})
Material.belongsToMany(Category,{through: CategoryMaterial})
Material.belongsToMany(Availability,{through: MaterialAvailability})

Availability.belongsToMany(Subcategory,{through: SubcategoryAvailability})
Availability.belongsToMany(Brand,{through: BrandAvailability})
Availability.belongsToMany(Model,{through: ModelAvailability})
Availability.belongsToMany(Size,{through: SizeAvailability})
Availability.belongsToMany(Color,{through: ColorAvailability})
Availability.belongsToMany(Material,{through: MaterialAvailability})
Availability.belongsToMany(Category,{through: CategoryAvailability})

//export
module.exports = {
    User, Item, Category, Subcategory, Brand, Model, Color, Size, Material, Availability, ItemImages,
    CategorySubcategory, CategoryBrand, CategoryModel, CategoryColor, CategorySize, CategoryMaterial,
    CategoryAvailability, SubcategoryBrand, SubcategoryModel, SubcategoryColor, SubcategorySize, SubcategoryMaterial,
    SubcategoryAvailability, BrandModel, BrandColor, BrandSize, BrandMaterial, BrandAvailability, ModelColor, ModelSize,
    ModelMaterial, ModelAvailability, ColorSize, ColorMaterial, ColorAvailability, SizeMaterial, SizeAvailability,
    MaterialAvailability,
}