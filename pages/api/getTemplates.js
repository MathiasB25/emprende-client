import axios from "axios";

export default async function handler(req, res) {
	const { data } = await axios(`${process.env.SERVER_URL}/template`)
	return res.json(data.data);
}