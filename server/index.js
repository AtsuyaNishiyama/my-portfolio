const nodemailer = require('nodemailer');

// メール送信設定
const transporter = nodemailer.createTransport({
  service: 'gmail',  // 使用するメールサービス
  auth: {
    user: 'your-email@gmail.com', // 送信元のメールアドレス
    pass: 'your-email-password',   // 送信元のメールアカウントのパスワード
  },
});

// メール送信処理
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,  // 送信元のメールアドレス
    to: 'your-email@gmail.com',  // 受信するメールアドレス
    subject: `お問い合わせ: ${name}`,  // メールのタイトル
    text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,  // メール本文
  };

  // メール送信
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('送信に失敗しました');
    } else {
      console.log('メールが送信されました: ' + info.response);
      return res.status(200).send('メッセージを受け取りました');
    }
  });
});
