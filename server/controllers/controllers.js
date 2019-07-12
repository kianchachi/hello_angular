const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    all: function(req, res) {
        User.find({}, function(err, x){

            res.json({users: x});
        })
},

    delete: function(req, res) {
        User.remove({name: req.params.name}, function(err){
            console.log('removed')
        });
        res.json('User is being deleted');
        
    },

   show: function(req, res) {
    User.findOne({name: req.params.name}, function(err, x) {
        res.json( {data: x});
        });
},

    create: (req, res) => {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
        
    
    },

    update: function(req, res) {
        User.update({_id: req.params.id, title: req.body.title, description: req.body.description, completed: req.body.completed, created_at: req.body.created_at, updated_at: req.body.updated_at}, function(err){
    
    
            if(err) {
                console.log('something went wrong');
              } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
              }
              res.redirect('/');
            })
          }
}


    
 




