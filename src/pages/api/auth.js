import axios from "axios";
import qs from "qs";

export default async function handler(req, res) {
  const baseUrl = process.env.BASE_URL;
  const token = process.env.TOKEN;
  // const params = new URLSearchParams();
  // params.append("phone", req.body.phone);
  // params.append("code", req.body.code);
  // console.log(params)

  let qData = { phone: req.body.phone, code: req.body.code };

  try {
    const data = await axios.post(`${baseUrl}/auth`, qs.stringify(qData), {
      headers: {
        Token: `${token}`,
      },
    });
    return res.status(200).json((data || {}).data || {});
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}