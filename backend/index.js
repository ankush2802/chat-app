const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "2a8d6ec5-f826-48f9-a5d1-f632336578dd"}}
    )
    return res.status(r.status).json(r.data)
  } 
  catch(e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);