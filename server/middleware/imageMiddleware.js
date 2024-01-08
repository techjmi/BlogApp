
// Import the GridFsStorage class correctly
const { GridFsStorage } = require("multer-gridfs-storage");
// require("dotenv").config() 
const multer = require("multer");
// const URI=process.env.MONGO_URI
const storage = new GridFsStorage({
  url: "mongodb+srv://contactshamim62:Koltech@blog-app.qqnhzg3.mongodb.net/?retryWrites=true&w=majority",
  options: { useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];

    // Check the mimetype property (may also be file.mimetype.type in some versions)
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      fileName: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

// Export multer middleware configured with the storage engine
module.exports = multer({ storage });
