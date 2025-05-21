require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { RateLimiterMemory } = require('rate-limiter-flexible'); // ←追加

const app = express();
app.use(cors());
app.use(express.json());

// ✅ RateLimiter の設定（例：1時間に3回まで）
const rateLimiter = new RateLimiterMemory({
  points: 3, // 回数制限（1時間に3回）
  duration: 3600, // 時間（秒）
});

// ✅ メール送信設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ ルート
app.post('/api/contact', async (req, res) => {
  try {
    await rateLimiter.consume(req.ip); // IPでレート制限をチェック

    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `お問い合わせ: ${name}`,
      text: `名前: ${name}\nメール: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('送信に失敗しました');
      }
      console.log('メール送信完了:', info.response);
      res.status(200).send('メッセージが送信されました');
    });
  } catch (rateLimiterRes) {
    // ✅ レート制限に引っかかったとき
    res.status(429).send('リクエストが多すぎます。しばらくしてから再度お試しください。');
  }
});

// ✅ サーバー起動
app.listen(3001, () => {
  console.log('サーバーが http://localhost:3001 で起動中');
});