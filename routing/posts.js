const express = require("express");
const router = express.Router();
const posts = require("../posts")

//TODO: INDEX
//[GET]/posts(index)
router.get("/", (req, res) => {
  console.log(req.params);
  // res.send(`you requested the posts list`);
  //*Bonus 1
  res.json(posts) 
});

//TODO: SHOW
//[GET]/posts/:id(show)
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`you requested data of the post with slug : ${id}`);
});

//TODO: STORE
//[POST]/posts(store)
router.post("/", (req, res) => {
  const id = req.params.id;
  res.send(`create a new post with slug: ${id}`);
});

//TODO: UPDATE
//[PUT]/posts(update)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Integral update of post with slug: ${id}`);
});

//TODO: MODIFY
//[PATCH]/posts(modify)
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Partial modify of post with slug: ${id}`);
});

//TODO: DESTROY
//[DELETE]/posts(destroy
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Deleting post with slug: ${id}`);
});

module.exports = router;
