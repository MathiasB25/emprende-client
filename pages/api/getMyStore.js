import axios from "axios";

export default async function handler(req, res) {
    const { params, config } = req.body;
    let user, template;
    if(params) {
        const { user: userParams, template: templateParams } = params;
        user = userParams;
        template = templateParams;
    }
    const urlParams = `${user && template ? '?user=true&template=true' : user ? '?user=true' : template ? '?template=true' : ''}`
	const { data } = await axios.get(`${process.env.SERVER_URL}/myStore/get${urlParams}`, config)
    if(data.success) {
        return res.json(data.data[0]);
    }
    return res.status(404).json(data);
}