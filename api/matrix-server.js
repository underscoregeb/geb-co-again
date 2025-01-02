export default function handler(req, res) {
  res.status(200).json({
    "m.server": "matrix.geb.company:443"
  });
}
