
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS
  res.status(200).json({
    "m.homeserver": {
      "base_url": "https://matrix.geb.company"
    }
  });
}
