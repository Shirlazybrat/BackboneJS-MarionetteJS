// on the server there is a RESTful API that returns a list of objects 
// that can be mapped to backbone models and collections.

// Collection fundamentals

// // Creating collections
// ///collections are an ordered set of models 
// /// and provide an easy way to work with a group of models

// var Song = Backbone.Model.extend();
// var Songs = Backbone.Collection.extend({
//     model: Song
// });

// var songs = new Song([
//     new Song({ title: "Song 1" }),
//     new Song({ title: "Song 2" }),
//     new Song({ title: "Song 3" }),
// ]);

// songs.add(new Song({ title: "Song 4" }));

// var firstSong = songs.at(0);
// var songWithIdC1 = songs.get("c1");
// songs.remove(firstSong);
// songs.length();

//............................................................................//

// the add method insert a new item at the end of the model,
// but using the index paratamter of the add method will add it a a specific location in the model
songs.add(new Song({
    title: "Song 5",
    genre: "Jazz",
    downloads: 110
}), { at: 0 });

// another way to add methods is push method
songs.push(new Song({
    title: "Song 5",
    genre: "Jazz",
    downloads: 110
}));

//methods for searching for models or items in models using "where" and "findWhere"
//search for attributes in the model
var firstJazzSong = songs.findWhere({ genre: "Jazz" });
console.log("Jazz Songs", jazzSongs);
console.log("First Jazz Song", firstJazzSong);

// can also add multiple filters to the add method
var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered songs", filteredSongs);

// to filter by some cutome logig, use the filter method
// if true, backbone adds it to the list of filter models
var topDownloads = songs.filter(function(songs) {
    return song.get("downloads") > 100;
});
console.log("top downloads", topDownloads);

// grab each of the objects in the model or specefied items using hte each method
song.each(function(song) {
    consle.log(song);
});

//............................................................................//

// How to get collections from a RESTful API on the server
// same as with Models

// result request made ---> GET /api/songs
var Song = Backbone.Collection.extend({
    urlRoot: "/api/songs"
});
var song = new Song();
song.fetch();

// Backbone can make AJAX calls using a data hash
// result request made ---> GET /api/songs?page=2
var songs = new Songs();
songs.fetch({
    data: {
        page: 2
    },
    success: function() {},
    error: function() {}
});