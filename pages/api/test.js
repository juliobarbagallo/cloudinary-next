var cloudinary = require('cloudinary');
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

cloudinary.config({
  cloud_name: CLOUD_NAME, // add your cloud_name
  api_key: API_KEY, // add your api_key
  api_secret: API_SECRET, // add your api_secret
  secure: true
});

export default (req, res) => {
  cloudinary.v2.api.resources({
  type: 'upload',
  prefix: 'test' // add your folder
  },
  
  function(error, result) { 
    console.log(error);
    res.status(200).json(result); 
    });
    


  // res.status(200).json({ name: 'John Doe' })
}