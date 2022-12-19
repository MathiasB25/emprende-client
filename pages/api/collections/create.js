import axios from "axios";

export default async function handler(req, res) {
    const { collection, config } = req.body;
    const { title, description, media, status } = collection;

    try {
        const { data } =  await axios.request({
            method: 'POST',
            url: `${process.env.SERVER_URL}/myStore/collections`,
            headers: {
                'Authorization': config.headers.Authorization
            },
            data: {
                title, 
                description, 
                media, 
                status
            },
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404);
    }
}