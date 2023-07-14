import axios from "axios";
import qs from "qs";
export default async function handler(req, res) {
  const baseUrl = process.env.BASE_URL;
  const token = process.env.TOKEN;
  const params = new URLSearchParams();
  params.append("phone", req.body.phone);
  try {
    const data = await axios.post(`${baseUrl}/send-code`, params, {
      headers: {
        Token: `${token}`,
      },
    });
    res.status(200).json(data.data);
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}
