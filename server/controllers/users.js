var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {

    login:function(request, response){
        // console.log(request.body)
        User.find({name: request.body.name}, function(err, users){
            if(users.length < 1) {
                User.create({name: request.body.name}, function(err, user){
                    console.log("###############", user)
                    request.session.user = user;
                    response.json({user: request.session.user});
                    // request.session.save();
                    // console.log(request.session)
                });
            }else{
                console.log("--------------------------------------------------------------")
                request.session.user = users[0];
                response.json({user: request.session.user});
                // request.session.save();
            }
            // request.session.save();
        });
    }
}
