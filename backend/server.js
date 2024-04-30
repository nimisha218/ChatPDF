const express = require('express');
const pdfParser = require('./pdfParser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/questions', async (req, res) => {
  const { question } = req.body;
  const pdfText = await pdfParser('StartupPlaybook.pdf'); 

  const answer = 'This is a test answer.';
  print("answer: ", answer)

  res.json({ answer });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
