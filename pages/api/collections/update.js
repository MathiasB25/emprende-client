import axios from "axios";

export default async function handler(req, res) {
    const { id } = req.query;
    const { collection } = req.body;
    const { title, description, media, status } = collection;

    try {
        const { data } =  await axios.request({
            method: 'PATCH',
            url: `${process.env.SERVER_URL}/myStore/collections/${id}`,
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