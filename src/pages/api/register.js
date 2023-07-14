import axios from "axios";
export default async function handler(req, res) {
  const baseUrl = process.env.BASE_URL;
  const token = process.env.TOKEN;
  const params = new URLSearchParams();
  params.append("name", req.body.name);
  params.append("birthdate", req.body.birthdate);
  params.append("gender", req.body.phone);
  params.append("phone", req.body.phone);
  params.append("code", req.body.code);
  try {
    const data = await axios.post(`${baseUrl}/register`, params, {
      headers: {
        Token: `${token}`,
      },
    });
    res.status(200).json(data.data);
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}