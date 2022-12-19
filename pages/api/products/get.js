import axios from "axios";

export default async function handler(req, res) {
    const { store } = req.query;

    try {
        const { data } =  await axios.request({
            method: 'GET',
            url: `${process.env.SERVER_URL}/myStore/products/${store}`,
            headers: {
                'Authorization': config.headers.Authorization
            }
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404);
    }
}