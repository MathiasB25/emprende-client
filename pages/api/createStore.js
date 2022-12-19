import axios from "axios";

export default async function handler(req, res) {
    const { name, config } = req.body;
    try {
        const { data } =  await axios.request({
            method: 'POST',
            url: `${process.env.SERVER_URL}/myStore`,
            headers: {
                'Authorization': config.headers.Authorization
            },
            data: {
                name
            },
        })
        return res.json(data);
    } catch (error) {
        return res.status(404).json(data);
    }
}