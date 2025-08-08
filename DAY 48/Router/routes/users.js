const express = require("express");
const router = express.Router();


//Replaced all the app with the router
 //also replaced if only /listings as a / and removed the /listngs from all the routes only in the http request not in callbacks

router.get("/",(req,res)=>{
    res.send("this is the users route");
})

router.get("/:id",(req, res)=>{
    let {id} = req.params;
    res.send(`this is the users route with id ${id}`);
})

router.get("/profile", (req, res) => {
    res.send("This is the profile of the currently logged-in user");
});

router.get("/:id/posts", (req, res) => {
    const { id } = req.params;
    res.send(`These are all the posts by user with ID ${id}`);
});


router.get("/search", (req, res) => {
    const { q } = req.query;  
    res.send(`Searching users with query: ${q}`);
});

module.exports = router;