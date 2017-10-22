var     express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        mongoose    = require("mongoose"),
        User        = require("./models/user.js"),
        Event       = require("./models/event.js");

mongoose.connect("mongodb://localhost/wellbeing");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
    // get all campgrounds from db
    Event.find({}, function(err, allEvents){
        if(err){
            console.log(err);
        } else {
            res.render("index", {event: allEvents});
        }
    });
});

app.get("/event", function(req,res){
    // get test from db
    Event.find({}, function(err, eventInformation){
        if(err){
            console.log(err);
        } else {
            res.render("index", {event: eventInformation});
        }
    });
    //render them all
});

app.post("/profile", function(req,res){
    // get data from form
    var name = req.body.name;
    var location = req.body.location;
    var age = req.body.age;
    var bio = req.body.bio;
    var newUser = {name: name, location: location, age: age, bio: bio}
    // Create new campground and save to DB
    User.create(newUser, function(err, newUser){
        if(err){
            console.log(err);
        }   else {
             res.render("profile", {user: User});
        }
    });
    res.redirect("/profile");
});

app.get("/profile/new", function(req,res){
   res.render("new"); 
});

app.post("/event", function(req,res){
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var location = req.body.location;
    var date = req.body.date;
    var info = req.body.info;
    var newEvent = {name: name, location: location, date: date, info: info}
    // Create new campground and save to DB
    Event.create(newEvent, function(err, newEvent){
        if(err){
            console.log(err);
        }   else {
             res.render("index", {event: Event});
        }
    });
    res.redirect("/event");
});

app.get("/event/new", function(req,res){
   res.render("newEvent"); 
});
app.get("/event/:id", function(req,res){
    Event.findById(req.params.id, function(err,foundEvent){
       if(err){
           console.log(err);
       } else {
           res.render("show", {event: foundEvent});
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started! "); 
});