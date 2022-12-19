import axios from "axios";

export default async function handler(req, res) {
    const { template, config } = req.body;
    
    try {
        const { data } =  await axios.request({
            method: 'POST',
            url: `${process.env.SERVER_URL}/myStore/template/add`,
            headers: {
                'Authorization': config.headers.Authorization
            },
            data: {
                template
            },
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404);
    }
}