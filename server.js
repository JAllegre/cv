const express = require('express');
const twilio = require('twilio');

const TWILIO_ACCOUNT_SID = 'AC785029671434993c4d626d4957e5a983';
const TWILIO_AUTH_TOKEN = 'ba96ee632a0e0ba16ad8fe319c3cfe87';
const TWILIO_FROM_ALPHA_SENDERID = 'VIABEEZ';
const PORT = process.env.PORT || 80;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/go', (req, res) => {
  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, { logLevel: 'debug' });
  const body = `Rappel: PAYER TRANSACTIONS`;
  const to = '+33785310314';

  client.messages
    .create({
      body,
      from: TWILIO_FROM_ALPHA_SENDERID,
      to
    })
    .then((message) => {
      console.log('SUCCESS', message);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });

  res.send('go');
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
