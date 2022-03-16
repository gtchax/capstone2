const express = require("express");
const helmet = require("helmet");
const request = require("request");
const cors = require("cors");

const BASEURL = "https://itunes.apple.com/search?";
const app = express();

//===== Middleware
app.use(cors()); // Avoids the cross origin request error on the frontend
app.use(express.json());
app.use(helmet()); // Adds security to the API

// ===== Routes
app.post("/api", (req, res) => {
  let { media, search } = req.body;
  request(
    `${BASEURL}term=${search}&media=${media}&limit=10`,

    (err, _, body) => {
      if (err) return res.send(err);

      return res.send(body);
    }
  );
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
