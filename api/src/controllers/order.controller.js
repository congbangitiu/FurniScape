const { Order } = require('../models');
const { getUserId } = require('../utils/verifyToken');
const { getProduct } = require('./product.controller');

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
        const payment = req.body.payment || 'cash';
        var userId = req.user.id;
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
            payment,
            products,
        });
        // Associate products with order
        for (let i = 0; i < products.length; i++) {
            const product = await getProduct(products[i].id);
            const quantity = products[i].quantity;
            await newOrder.addProduct(product, { through: { quantity } });
        }
        
        // if payment is banking, send back account number
        if (payment === 'banking') {
            return res.status(201).json({ message: 'Order placed', bankingInfo: 'Vietcombank\n9933808121\nDao Minh Huy' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getOrderFromUser = async (req, res, next) => {
    try {
      var id = req.user.id;
      const orders = await Order.findAll({ where: { userId: id } });
      if(orders.length === 0) return res.status(404).json({ msg: "No order found" });
      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

const getAllOrders = async (req, res, next) => {
    try{
        const orders = await Order.findAll();
        if(orders.length === 0) return res.status(404).json({ msg: "No order found" });
        return res.status(200).json(orders);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {  placeOrder,
                    getOrderFromUser,
                    getAllOrders,
                };