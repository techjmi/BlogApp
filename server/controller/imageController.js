
const uploadFile = (req, res) => {
    const url = "http://localhost:8000/api";

    if (!req.file) {
        return res.status(404).json({ msg: "File Not Found" });
    }

    const imageUrl = `${url}/file/${req.file.filename}`;
    console.log("Image uploaded successfully:", imageUrl);

    return res.status(200).json(imageUrl);
};

module.exports = uploadFile;
