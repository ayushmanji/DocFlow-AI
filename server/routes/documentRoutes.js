const express = require("express");
const router = express.Router();
const Document = require("../models/Document");

// Create document
router.post("/", async (req, res) => {
    try {
        const doc = await Document.create({
            title: req.body.title,
        });

        res.json(doc);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all documents
router.get("/", async (req, res) => {
    try {
        const docs = await Document.find().sort({
            createdAt: -1,
        });

        res.json(docs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get single document
router.get("/:id", async (req, res) => {
    try {
        const doc = await Document.findById(
            req.params.id
        );

        res.json(doc);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update document
router.put("/:id", async (req, res) => {
    try {
        const doc = await Document.findByIdAndUpdate(
            req.params.id,
            {
                content: req.body.content,
                title: req.body.title,
            },
            {
                new: true,
            }
        );

        res.json(doc);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/:id/share", async (req, res) => {
    try {
        const { email } = req.body;

        const doc = await Document.findById(req.params.id);

        if (!doc.sharedWith.includes(email)) {
            doc.sharedWith.push(email);
            await doc.save();
        }

        res.json(doc);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;