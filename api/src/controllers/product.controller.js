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

module.exports = { addProduct , addProducts, getProducts};
