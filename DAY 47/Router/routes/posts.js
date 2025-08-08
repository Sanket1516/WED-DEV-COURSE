const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.send("this is the posts route");
})


router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`This is the post with ID: ${id}`);
});


router.get("/:id/comments", (req, res) => {
    const { id } = req.params;
    res.send(`These are the comments for post with ID: ${id}`);
});


router.get("/user", (req, res) => {
    const { userId } = req.query; 
    res.send(`Showing posts made by user with ID: ${userId}`);
});


router.get("/category/:categoryName", (req, res) => {
    const { categoryName } = req.params;
    res.send(`Showing posts in the category: ${categoryName}`);
});

module.exports = router;