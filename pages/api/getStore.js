import axios from "axios";

export default async function handler(req, res) {
    const { url } = req.body;
    const { data } = await axios.get(`${process.env.SERVER_URL}/store/${url}`)
    console.log(data)
    if(data.success) {
        return res.json(data.data);
    } else {
        return res.json(data);
    }
}