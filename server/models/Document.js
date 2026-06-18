const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: "Untitled Document",
        },

        content: {
            type: String,
            default: "",
        },

        owner: {
            type: String,
            default: "ayushman@gmail.com",
        },

        sharedWith: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Document",
    documentSchema
);