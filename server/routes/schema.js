var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/', function(req, res) {
    var obj = JSON.parse(fs.readFileSync('./server/schemas/schema.json', 'utf8'));
    res.send(obj);
})

router.post('/update', function(req, res) {
  saveSchemaToPublicFolder(req.body, function(err) {
    if (err) {
      res.status(404).send('schema not saved');
      return;
    }

    res.send('schema saved');
  });
})

function saveSchemaToPublicFolder(schema, callback) {
  fs.writeFile('./server/schemas/schema.json', JSON.stringify(schema, null, 4), callback);
}

module.exports = router