const express = require('express')

const TeamCtrl = require('../controllers/team-ctrl.js')

const router = express.Router()

router.post('/team', TeamCtrl.createTeam)
router.put('/team/:id', TeamCtrl.updateTeam)
router.dekete('/team/:id', TeamCtrl.deleteTeam)
router.get('/team/:id', TeamCtrl.getTeamById)
router.get('/teams', TeamCtrl.getTeams)

module.exports = router
