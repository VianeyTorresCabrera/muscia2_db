const { getAll, create, getOne, remove, update, setArtists, setGenres} = require('../controllers/song.controllers');
const express = require('express');

const routerSong = express.Router();

routerSong.route('/')
    .get(getAll)
    .post(create);

routerSong.route('/:d/artists')
    .post(setArtists);

routerSong.route('/:d/genres')
    .post(setGenres);

routerSong.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerSong;