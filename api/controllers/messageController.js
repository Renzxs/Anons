exports.fetchMessage = async (req, res) => {
    try {
        res.json({message: "Fetch Messages Successfully"});
    }
    catch(error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}
