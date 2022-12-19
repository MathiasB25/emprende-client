import axios from "axios";

export default async function handler(req, res) {
    const { url } = req.body;
    try {
        const { data } = await axios.get(`${process.env.SERVER_URL}/store/${url}`)
        if(data.success) {
            return res.json(data.data);
        } else {
            return res.status(404).json(data);
        }
    } catch (error) {
        return res.status(404).json(data);
    }
}