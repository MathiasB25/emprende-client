import axios from "axios";

export default async function handler(req, res) {
	const { config } = req.body;
	const { data } = await axios.get(`${process.env.SERVER_URL}/users/profile`, config)
	return res.json(data);
}