import express from "express";
import validateUrl from "../util/validateUrl.js";
import shortid from "shortid";

import Url from "../model/url.js";

const app = express();

app.post("/short", (req, res) => {
    const url = req.body.url || req.query.url;
    var urlId = shortid.generate();
    
    if (req.body.identifier || req.query.identifier) {
        urlId = req.body.identifier || req.query.identifier;   
    }

    if (!url) {
        return res.status(400).json({ error: "No URL provided" });
    }
    if (!validateUrl(url)) {
        return res.status(400).json({ error: "Invalid URL" });
    }

    const shortUrl = `${req.protocol}://${req.hostname}:${process.env.PORT}/${urlId}`;

    const newUrl = new Url({
        urlId,
        origUrl: url,
        shortUrl,
        ownerip: req.ip,
    });

    try {
        newUrl.save();
        res.status(201).json(newUrl);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default app;