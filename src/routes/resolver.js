import express from "express";
import mongoose from "../util/dbconnect.js";

import Url from "../model/url.js";

const app = express();

app.get("/:linkid", async (req, res) => {
    const linkid = req.params.linkid;
    if (!linkid) {
        return res.status(400).json({ error: "No link ID provided" });
    }

    // Resolves the link ID to the original URL
    const findlink = await Url.findOne({ urlId: req.params.linkid});

    if (!findlink) {
        return res.status(400).json({
            message: 'Link does not exist'
            });
    }
    //sum 1 to clicks
    findlink.clicks++;
    try {
        await findlink.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Server error" });
    }

    console.log(findlink);
    res.redirect('https://' + findlink.origUrl);
    
});

export default app;