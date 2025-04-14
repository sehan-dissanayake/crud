const express = require('express');
const router = express.Router();
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    } catch(error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const aliens = await Alien.findById({_id: req.params.id})
        res.json(aliens)
    } catch(error) {
        res.status(500).send(error.message)
    }
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const savedAlien = await alien.save()
        res.json(savedAlien)
    } catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const removedAlien = await Alien.deleteOne({_id: req.params.id})
        res.json(removedAlien)
    } catch(error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;