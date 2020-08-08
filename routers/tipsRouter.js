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

// router.put('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

module.exports = router;