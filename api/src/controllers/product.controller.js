const { Product } = require('../models');

const addProduct = async (req, res, next) => {
    try {
        const { name, category, price, quantity, description, image_dir } = req.body;
        const newProduct = await Product.create({
            name,
            category,
            price,
            quantity,
            description,
            image_dir,
        });
        return res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
};

const addProducts = async (req, res, next) => {
    try {
        const products = req.body;
        const newProducts = await Product.bulkCreate(products);
        return res.status(201).json(newProducts);
    } catch (error) {
        next(error);
    }
};

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const getProduct = async (productId) => {
    return await Product.findByPk(productId);
  };

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, category, price, quantity, description,status, image_dir } = req.body;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.category = category;
        product.price = price;
        product.quantity = quantity;
        product.description = description;
        product.status = status;
        product.image_dir = image_dir;
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const searchByKeyword = async (req, res, next) => {
    try {
        const { keyword } = req.params;
        const products = await Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%`,
                },
            },
        });
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const searchByCategory = async (req, res, next) => {
    try {
        const { category } = req.params;
        const products = await Product.findAll({
            where: {
                category,
            },
        });
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = { addProduct ,addProducts, 
                    getProducts, getProduct,
                    updateProduct,
                    searchByKeyword, searchByCategory
                };
