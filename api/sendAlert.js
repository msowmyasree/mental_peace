const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    // Vercel may parse JSON for you; fall back to parsing raw body if needed
    const body = req.body && Object.keys(req.body).length ? req.body : JSON.parse(req.body || "{}");
    const { name, phone, message } = body;
    if (!phone) return res.status(400).json({ error: "Phone number is required" });

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const ALERT_TO = process.env.ALERT_TO;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: ALERT_TO,
      subject: "🚨 Emergency Support Request — Immediate Attention Needed",
      text: `A user requested human support.\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
