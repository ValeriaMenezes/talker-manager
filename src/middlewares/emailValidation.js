const emailValidation = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  const validation = /\S+@\S+\.\S+/;
  const testValidation = validation.test(email);
  if (!testValidation) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = emailValidation;