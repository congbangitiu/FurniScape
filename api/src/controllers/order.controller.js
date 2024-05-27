const { Order } = require('../models');
const { getUserId, getProduct } = require('../utils/verifyToken');

const placeOrder = async (req, res) => {
    try {
        const { products } = req.body;
        // {
        //     [
        //         product:{
        //             id, quantity
        //         }
        //     ]   
        // }
        const jwt = req.cookies.access_token || req.headers['authorization'];
        // verify if user exists
        if (!jwt) {
            return res.status(400).json({ message: 'Login is required' });
        }
        const userId = getUserId(jwt);
        if (!userId) {
            return res.status(400).json({ message: 'Invalid user' });
        }

        // verify if products exist and have enough quantity
        for (let i = 0; i < products.length; i++) {
            const product = await getProduct(products[i].id);
            if (!product) {
                return res.status(400).json({ message: 'Product' + products[i].id + 'not found' });
            }
            if (product.quantity < products[i].quantity) {
                return res.status(400).json({ message: 'Insufficient quantity of' + product.name });
            }
        }
        // calculate total
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            const product = await getProduct(products[i].id);
            total += product.price * products[i].quantity;
        }


        const newOrder = await Order.create({
            userId,
            status: 'pending',
            total,
            products,
        });
        // Associate products with order
        for (let i = 0; i < products.length; i++) {
            const product = await getProduct(products[i].id);
            for (let j = 0; j < products[i].quantity; j++) {
                await newOrder.addProduct(product);
            }
        }
        
        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {  placeOrder 
                    
                };