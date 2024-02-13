const path = require('path');

exports.getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../templates', 'login.html'));
};


exports.getRegisterPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../templates', 'registration.html'));
};

exports.getIndexPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../templates', 'index.html'));
};