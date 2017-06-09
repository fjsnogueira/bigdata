var express = require('express');
var router = express.Router();
var projectsCtrl = require('../controllers/projects.server.controller');

/* GET projects page. */
router.get('/', function(req, res) {
  return projectsCtrl.list(req, res);
});

/* POST filter by member name - projects page. */
router.post('/', function(req, res) {
    return projectsCtrl.filterByMember(req, res);
});

/* GET New Project page. */
router.get('/new', function(req, res) {
    return projectsCtrl.getNote(req, res);
});

/* POST New Project page. */
router.post('/new', function(req, res) {
    return projectsCtrl.create(req, res);
});

module.exports = router;
