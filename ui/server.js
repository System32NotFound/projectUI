const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(fileUpload());

app.post('/compare', (req, res) => {
  const file1 = req.files.file1.data.toString('utf8');
  const file2 = req.files.file2.data.toString('utf8');

  if (file1 === file2) {
    res.json({ message: 'The files are identical.' });
  } else {
    res.json({ message: 'The files are different.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
