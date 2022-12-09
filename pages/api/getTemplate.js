import axios from "axios";

export default async function handler(req, res) {
    const { template } = req.query;
	const { data } = await axios.post(`${process.env.SERVER_URL}/template/get`, { id: template })
	return res.json(data);
}