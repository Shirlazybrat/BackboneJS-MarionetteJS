// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// var Song = Backbone.Model.extend({
//     // initialize function called when a new model is instantiated
//     initiailize: function() {
//         console.log("a new song");
//     }
// });
// // create a new instance of the song model
// var song = new Song();

//............................................................................//


// var Song = Backbone.Model.extend({
//     // set the default of a value in the attributes
//     defaults: {
//         genre: "Jazz"
//     }
// });

// var song = new Song();


// // backbone store models in a hash so use the SET method to set attributes
// song.set("title", "Blue ing Green");
// // or use JSON object to set more than one at a time
// song.set({
//     artist: "Miles Davis",
//     publishYear: 1959
// });

// // get an attribute by calling the get method
// song.get("title");

// // unset a atttibute using the unset method
// song.unset("title");

//............................................................................//
// implement validation

// var Song = Backbone.Model.extend({
//     // validate values in attributes
//     validate: function(attrs) {
//         if (!attrs.title) {
//             return "Titile is required"
//         }
//     }
// });

// var song = new Song();

// // call isvalid method to check
// song.isValid();


//............................................................................//

// backbone model support for inheritance
/// use extend to creat subModel types

// var Animal = Backbone.Model.extend({
//     // create walk method
//     walk: function() {
//         console.log("Animal walking...");
//     }
// });

// // create new model type that inherites from the Animal
// var Dog = Animal.extend({
//     // can also override methods in a base class
//     walk: function() {
//         // get the walk method from the Animal as well
//         Animal.prototype.walk.apply(this);

//         console.log("Dog walking...");
//     }
// });
// var dog = new Dog();
// dog.walk();
// // Dog model now inherites all the capibilities of the Animal

//............................................................................//

// Connecting to the server
// three operations tha work with the persistent store
fetch() //GET the model from the server
save() //update or insert the model to the server (PUT/POST)
destroy() //DELETE a model from the server

// Backbone knows the URL of the API by reling on a URL root property of the models
// to construct a url to the corresponding endpoint
var Song = Backbone.model.extend({
    urlRoot: "/api/songs"
});

// example.com/api/songs

// fetch a Model from the server
// result request made ---> GET /api/songs/1
var song = new Song({
    id: 1
});
song.fetch();

//Update a model in the server
// result request made ---> PUT /api/songs/1
song.set("title", "newTitle");
song.save();

// Tell backbone which property of the model to use as the id instead of the default unique id
var Song = Backbone.model.extend({
    idAttribute: "songId"
});
var song = new Song({ songId: 1 });

// all methods are asynchronous and accept an error callback
var song = new Song();

song.fetch({
    success: function() {
        console.log(successMessage);
    },
    error: function() {
        console.log(errorMessage);
    }
});