import axios from "axios";

export default async function handler(req, res) {
    const { announceBar, pages, footer, config } = req.body;
	
    const { data } =  await axios.request({
        method: 'PATCH',
        url: `${process.env.SERVER_URL}/myStore/template`,
        headers: {
            'Authorization': config.headers.Authorization
        },
        data: {
            announceBar, 
            pages, 
            footer
        },
    })
    return res.json(data);
}