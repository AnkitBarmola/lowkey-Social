const express = require('express');
const multer = require('multer'); //middleware for handling multipart/form-data, which is primarily used for uploading files(image)
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});

app.post('/create-post', upload.single('image'), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  const post = await postModel.create({
    image: result.url,
    Caption: req.body.Caption
  })
  return res.status(201).json({
    message: "Post created successfully",
    post: postModel
  });
});

app.get('/posts', async (req, res) => { 
  const posts = await postModel.find();
  return res.status(200).json({
    message: "Posts fetched successfully",
    posts
  });
});
module.exports = app;