import axios from "axios";

export default async function handler(req, res) {
    const { template, config } = req.body;
	
    const { data } =  await axios.request({
        method: 'POST',
        url: `${process.env.SERVER_URL}/myStore/template`,
        headers: {
            'Authorization': config.headers.Authorization
        },
        data: {
            template
        },
    })
    console.log(data)
    return res.json(data);
}