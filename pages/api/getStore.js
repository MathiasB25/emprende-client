import axios from "axios";

export default async function handler(req, res) {
    const { url } = req.body;
	const { data } = await axios.get(`${process.env.SERVER_URL}/store/${url}`)
    return res.json(data.data);
}