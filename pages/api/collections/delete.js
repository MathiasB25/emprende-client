import axios from "axios";

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const { data } =  await axios.request({
            method: 'DELETE',
            url: `${process.env.SERVER_URL}/myStore/collections/${id}`,
            headers: {
                'Authorization': config.headers.Authorization
            }
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404);
    }
}