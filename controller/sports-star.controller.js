const express = require('express');
const router = express.Router();

const mongoose = require("mongoose")
const Schema = require('mongoose').Schema;

// ###################################################
// SCHEMA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
SportsStarSchema = new Schema({
    // Insert schema here!!
}, { collection : 'sportsStar' });


// ###################################################
// MODEL ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const SportsStarModel = mongoose.model("SportsStar", SportsStarSchema);

function addSportsStar(sportsStar) {
}

function getSportsStarByID(name) {
}

function getAllSportStars() {

}

function getSportsStarsByTeam(teamName) {
}

function getSportsStarByAtLeastXWins(winCount) {
}

function updateSportsStar(sportStar) {
}

function deleteSportsStar(id) {
}

// ###################################################
// CONTROLLER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get All Sport Stars
router.get('/', (req, res) => {
    // ...
});

// Get Sports Star by ID
router.get('/:id', (req, res) => {
    // ...
});

// Get Sport Stars By Team
router.get('/team/:team', (req, res) => {
    // ...
});

// Get Sport Star With at least {count} wins
router.get('/win/:count', (req, res) => {
    // ...
});

// Add Sports Star
router.post('/', (req, res) => {
    // ...
});

// Update Sports Star
router.put('/:id', (req, res) => {
    // ...
});

// Delete Sports Star
router.delete('/:id', function (req, res) {
    // ...
});

module.exports = router;