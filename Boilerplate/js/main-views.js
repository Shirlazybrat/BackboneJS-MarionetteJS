// the view is responsoble for the rendering of the content and handling model and DOM events
//views are more like controllers in the MVC
// every view is responsible for rendering the content a DOM element and listening to events from DOM
var SongView = Backbone.View.extend({
    tagName: "span",
    className: "song",
    id: "1234",
    arrtubutes: {
        "data-genre": "Jazz"
    },
    render: function() {
        this.$el.html("Hello World");

        return this;
    }
});

//declare an instance of the view and telling the view which DOM element to attach to
var songView = new SongView({ el: "#container" });
songView.render();
// or
var songView = new SongView();
songView.render();
$("#container").html(songView.$el);
// or

// chaining the view
$("#container").html(songView.render().$el);

//............................................................................//
// pass a model to the view based on th Models attributes
var Song = Backbone.Collection.extend();

var SongView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.model.get("title"));

        return this;
    }
});
var song = new Song({ title: "Blue in gGreen" });

// pass the model view to the constructor
var songView = new SongView({ el: "#container", model: song });
songView.render();