const express = require("express");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Text = require("../Models/Text");
const router = express.Router();

router.get("/fetchalltexts", fetchUser, async (req, res) => {
  try {
    const text = await Text.find({ user: req.user.id });
    res.send(text);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error!!!");
  }
});

router.post(
  "/addtext",
  [body("text").exists()],
  fetchUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const text = await Text.create({
        user: req.user.id,
        text: req.body.text,
      });
      res.send(text);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error!!!");
    }
  }
);

router.delete("/deletetext/:id", fetchUser, async (req, res) => {
  try {
    let text = await Text.findById(req.params.id);
    if (!text) {
      return res.status(404).send("Not Found.");
    }
    if (text.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed.");
    }
    text = await Text.findByIdAndDelete(req.params.id);
    res.json({ Success: "Text has been deleted.", text: text });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error!!!");
  }
});
module.exports = router;
