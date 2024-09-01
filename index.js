const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r=await axios.put('https://api.chatengine.io/users',
        {username:username,secret:username, first_name:username},
        {headers:{"private-key":"e7a18568-5747-43b2-a50e-cef1d83b95b2"}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);



// Project-id : 86e9241b-771e-4727-b1ea-8d92e1f7fc22
// Private key : e7a18568-5747-43b2-a50e-cef1d83b95b2