import axios from "axios";

export default async function handler(req, res) {
  const { token } = req.body;

  try {
    const response = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      new URLSearchParams({
        secret: process.env.CLOUDFLARE_SECRET_KEY,
        response: token,
      })
    );

    if (response.data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
