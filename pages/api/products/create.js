import axios from "axios";

export default async function handler(req, res) {
    const { product } = req.body;
    const { title, price, description, discount, costPerItem, media, status, inventory, shipping, options } = product;

    try {
        const { data } =  await axios.request({
            method: 'POST',
            url: `${process.env.SERVER_URL}/myStore/products`,
            headers: {
                'Authorization': config.headers.Authorization
            },
            data: {
                title, 
                price, 
                description, 
                discount, 
                costPerItem, 
                media, 
                status, 
                inventory, 
                shipping, 
                options
            },
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404);
    }
}