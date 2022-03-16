const express = require("express");
const helmet = require("helmet");
const request = require("request");
const cors = require("cors");

//temporary data set whilst offline
const data = require("./data");

const BASEURL = "https://itunes.apple.com/search?";
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.post("/api", (req, res) => {
  let { media, search } = req.body;
  request(
    `${BASEURL}term=${search}&media=${media}&limit=10`,
    // `${BASEURL}term=adele&media=all&limit=10`,
    (err, _, body) => {
      if (err) return res.send(err);

      return res.send(body);
    }
  );
  //   res.send(data);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
