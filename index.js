const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const PORT = process.env.PORT || 5100;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/', upload.single('filename'), (req, res) => {
  const {
    file: { originalname, size }
  } = req;

  res.send({ name: originalname, size });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
