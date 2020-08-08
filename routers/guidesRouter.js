const express = require('express');

const db = require('../database/db-config.js');

const router = express.Router();

// all has /api/guides in front


// Get Requests

router.get('/', (req, res) => {
  db.select('*')
    .from('guides')
    .then(tips => res.status(200).json({data: tips}))
    .catch((err) => console.log(err));
});


// Post Requests

router.post('/', (req, res) => {
  const guideData = req.body;
  db('guides')
    .insert(guideData)
    .then( id => res.status(201).json({data: id}))
    .catch((err) => console.log(err));
});

// router.put('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

module.exports = router;