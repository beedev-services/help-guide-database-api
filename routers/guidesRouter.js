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


// Put Requests

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('guides')
      .where('id', id)
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json({message: 'record numbers changed:', count});
        } else {
          res.status(404).json({message: 'That id does not exist, can not update record'});
        }
      })
      .catch((err) => console.log(err));
});

// router.delete('/:id', (req, res) => {

// });

module.exports = router;