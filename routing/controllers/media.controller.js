const multer = require('multer');
const Media = require('../models/media.model');

const MIME_TYPE_MAP = {
    'image/gif': 'gif',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png'
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let err = new Error("Invalid Mime Type")
        if (isValid) err = null;
        cb(err, './public/images')
    },
    filename: (req, file, cb) => {
        console.log(file);
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, `image-${Date.now()}.${ext}`)
    }
})

module.exports.upload = multer({storage: storage});
module.exports.addImage = async (req, res, next) => {
    console.log("Adding New Image");

    const url = `${req.protocol}://${req.get("host")}`
    console.log(url);

    if (req.file) {
        //New File Added
        let img = new Image({
            name: req.body.name,
            decription: req.body.decription,
            
            path: url + '/images',
            media_type: 'image',//Change Later
        });
        img.save((err, doc) => {
            if (err) {
                console.log("Failed to add Image\n" +err)
                res.json({msg: "Failed to add Image"});
            } else {
                res.json({msg: 'Image added'})
            }
        });
        console.log(req.file.filename);
    } else {
        return res.status(500).send({"message": 'Upload Failure'})
    }
}

module.exports.getImage = (req, res, next) => {
    Image.findById({_id: req.params.id}, function(err, img) {
        console.log("Getting specfic Image");
        content = {
            'id': img._id ,
            'path': img.path + '/' + img.filename
        };
        res.json(content);
    })
}
module.exports.getList = (req, res, next) => {
    //Temporary Solution #002
    console.log("Getting List of  Image");
    Image.find(function(err, img) {
        var content = []
        for (i = 0; i < img.length; i++) {
            content.push({
                'id': img[i]._id ,
                'path': img[i].path + '/' + img[i].filename
            });
        }
        res.json(content)
    })
}

module.exports.delImage = (req, res, next) => {
    Image.remove({_id: req.params.id}, function(err, result) {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}