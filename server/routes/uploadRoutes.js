const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({
    dest: "uploads/",
});

router.post(
    "/",
    upload.single("file"),
    async (req, res) => {
        res.json({
            filename:
                req.file.originalname,
        });
    }
);

module.exports = router;