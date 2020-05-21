const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema(
    {
	name: { type: String, required: true},
	pColour: { type: String, require false},
	sColour: { type: String, require false},
    },
    { timestamps: true },
)

module.exports = mongoose.model('teams', Team)
