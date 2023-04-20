const User = require('../CLIENT/client.model')
const jwt = require("jsonwebtoken");

/*                    GET                    */
module.exports.getInfo = async(req, res, next) => {
    User.findById({_id: req._id}, function (err, user) {
        if (err) {
            res.json({error: "Failed to find user"})
            console.error(`Error getting user of ID '${req._id}':\n` +err)
        } else {
            /**
                username
                email
                fitrtname
             */
            res.json(user)
        }
    }).select([
        'username',
        'email',
        'nickname',
        'first_name'
    ])
}

/*                    POST                    */
module.exports.login = async(req, res, next) => {
    /*    Each email should be unique hence can find by email    */
    User.find({username: req.body.username}, function (err, list) {
        if (err || list.length < 1) {
            res.json({error: "Failed to find user"})
            console.error(`Error getting user of username '${req.body.username}':\n` +err)
        } else {
           user = list[0]
           
           /*        Authenticate User        */
            user.comparePassword(req.body.password, (err, match) => {
                if (err) res.json({error: "Error with password verfication"})
                if (match) { 
    
                    /* Login Sucessful */
                    const token = jwt.sign(
                        {
                            /*      Payload      */
                            user_id: user._id,
                            expiresIn: "5h",
                            iat: Date.now()
                        },
                        process.env.CLIENT_JWT_KEY /* Key */
                    )
                    user.token = token;
                    res.json({
                        token: token,
                        msg: "Successful Login"
                    })/* In final would send something else */ 
                    //res.json({msg: "Successful Login"})


                } else {
                    res.json({error: "Incorrect password"})
                }
            })
        }
    })
}
module.exports.register = async(req, res, next) => {
    let new_user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        nickname: req.body.nickname,
        surname: req.body.surname
    });
    new_user.save((err, doc) => {
        if (err) {
            console.error(err)
            res.json({msg: "Failed to make connection",})
        } else {
            
            /* Registered Successfully */
            const token = jwt.sign(
                {
                    /*      Payload      */
                    user_id: new_user._id,
                    //iat: new Date().toJSON()
                },
                process.env.CLIENT_JWT_KEY /* Key */
            )
            res.json(
                {
                    msg: "User Added",
                    token: token
                }
                )
        }
    })
}
/*                    PUT                    */

/*                    DELETE                    */
module.exports.del = async(req, res, next) => {
    /* Not including rn */
    User.remove({_id: req._id}, function (err, result) {
        if (err) {
            res.json({error: "Failed to delete user"})
            console.error(`Error deleting user of ID '${req._id}':\n` +err)
        } else {
            res.json(result)
        }
    })
}