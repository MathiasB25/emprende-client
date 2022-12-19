import axios from "axios";

export default async function handler(req, res) {
    const { email, password } = req.body;

	const { data } = await axios.post(`${process.env.SERVER_URL}/users/login`, { email, password })
	return res.json(data);
}