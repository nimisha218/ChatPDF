const fs = require('fs');
const pdf = require('pdf-parse');

const pdfParser = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return null;
  }
};

module.exports = pdfParser;
