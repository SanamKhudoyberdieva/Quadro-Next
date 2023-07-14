import axios from "axios";
export default async function handler(req, res) {
  const baseUrl = process.env.BASE_URL;
  const token = process.env.TOKEN;
  try {
    const data = await axios.get(`${baseUrl}/get-data`, {
      headers: {
        Token: `${token}`,
      },
    });
    res.status(200).json(data.data);
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}
