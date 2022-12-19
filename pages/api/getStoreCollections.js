import axios from "axios";

export default async function handler(req, res) {
    const { url } = req.body;
	const { data } = await axios.get(`${process.env.SERVER_URL}/myStore/collections/${url}`)
    return res.json(data);
}