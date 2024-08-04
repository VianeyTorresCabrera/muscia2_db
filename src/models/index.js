const Album = require("./Album")
const Artist = require("./Artist")
const Genre = require("./Genre")
const Song = require("./Song")


Artist.belongsToMany(Genre, { through: 'genreArtists' })
Genre.belongsToMany(Artist, { through: 'genreArtists' })

Artist.belongsToMany(Song, {through: 'songArtist'})
Song.belongsToMany(Artist, {through: 'songArtist'})

Song.belongsToMany(Genre, {through: 'songGenre'})
Genre.belongsToMany(Song, {through: 'songGenre'})



Album.belongsTo(Artist)
Artist.hasMany(Album)

Song.belongsTo(Album)
Album.hasMany(Song)



