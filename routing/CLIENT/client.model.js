/* Organisation Schema */
const mongoose = require('mongoose');
const { CLIENT_DB } = require('./client.config')
const bcrypt = require('bcryptjs');

SALT_WORK_FACTORY = 10;

const userSchema = mongoose.Schema( {
    email: {
        type: String,
        unique: true,
        required: [true, 'Email address is required'],
        //Regex may not be perfect 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, required: [true, 'Password required']}, 

    username: { type: String },
    first_name: { type: String },
    nickname: { type: String },
    surname: { type: String },

    date_added: { type: Date, default: Date.now() }
});

userSchema.pre('save', function(next) {
    var user = this;
    
    /* Only hashing if password has been modified or is new */
    if (!user.isModified('password')) return next();

    /* Generate Salt */
    bcrypt.genSalt(SALT_WORK_FACTORY, (err, salt) => {
        if (err) return next(err);
        
        /* Hash password w/ new salt */
        bcrypt.hash(user.password, SALT_WORK_FACTORY, (err, hash) => {
            user.password = hash
            next();
        });
    })
})
userSchema.methods.comparePassword = function(enterd_password, cb) {
    bcrypt.compare(enterd_password, this.password, (err, match) =>  {
        if (err) return cb(err);
        cb(null, match);
    })
}
const User = module.exports = CLIENT_DB.model('user', userSchema);