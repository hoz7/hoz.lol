const express = require('express');
const app = express();
const request = require('request');

// Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1277329297492934656/cM58_iF4MOo-eaiX3kmI-FnFX4u3oyc1jl0jhous2uLpxTCdPAEAHxtDS6LBhCpYICnb';

// Log IP addresses
app.use((req, res, next) => {
  const ip = req.ip;
  console.log(`IP address: ${ip}`);
  sendToDiscord(ip);
  next();
});

// Send IP address to Discord webhook
function sendToDiscord(ip) {
  const payload = {
    'content': `New visitor from IP address: ${ip}`,
    'username': 'IP Logger',
    'avatar_url': 'https://example.com/avatar.png'
  };

  request.post({
    url: webhookUrl,
    json: true,
    body: payload
  }, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Sent IP address to Discord webhook: ${ip}`);
    }
  });
}

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
