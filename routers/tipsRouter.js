const express = require('express');

const db = require('../database/db-config.js');

const router = express.Router();

// all has /api/tips in front


// Get Requests
router.get('/', (req, res) => {
  db.select('*')
    .from('tips')
    .then(tips => res.status(200).json({data: tips}))
    .catch((err) => console.log(err));
});

router.get('/:guides_id', (req, res) => {
    const {guides_id} = req.params;
    db('tips')
     .where("guides_id", guides_id)
     .then((tips) => res.status(200).json({data: tips}))
     .catch((err) => console.log(err));
});


// Post Requests
router.post('/', (req, res) => {
  const tipData = req.body;
  db('tips')
    .insert(tipData)
    .then( id => res.status(201).json({data: id}))
    .catch((err) => console.log(err));
});


// Put Requests

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('tips')
      .where('id', id)
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json({message: "Record numbers changed:", count});
        } else {
          res.status(404).json({message: "that id does not exist, can not update record"});
        }
      })
      .catch((err) => console.log(err));
});


// Delete Requests

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('tips')
      .where('id', id)
      .delete()
      .then(count => {
        if (count > 0) {
          res.status(200).json({message: "Number of recors deleted", count});
        } else {
          res.status(404).json({message: "That is not a valid id.  Can not delete"});
        }
      })
      .catch((err) => console.log(err));
});

module.exports = router;