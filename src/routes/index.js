const express = require('express');
const routerAlbum = require('./album.routes');
const routerArtist = require('./artist.routes');
const routerGenre = require('./genre.routes');
const routerSong = require('./songs.routes');
const router = express.Router();

// colocar las rutas aquí
router.use('/albums',routerAlbum);
router.use('/artists',routerArtist);
router.use('/genres',routerGenre);
router.use('/songs',routerSong);

module.exports = router;