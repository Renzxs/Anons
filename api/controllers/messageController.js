const MessageModel = require("../models/messageModel");

// GET METHOD
exports.fetchMessage = async (req, res) => {
    try {
        const messageData = await MessageModel.find();

        if(messageData.length === 0){
            return res.status(404).json({error: "Could not found on the server"}); 
        }

        return res.json({message: "Fetch Messages Successfully", result: messageData});
    }
    catch(error) {
        return res.status(500).json({error: "Internal Server Error"});
    }
}

// POST METHOD
exports.createMessage = async (req, res) => {
    try {
        const messageData = new MessageModel(req.body);
        const saveMessage = await messageData.save();
        return res.json({message: "Message Created Successfully", result: saveMessage});
    }
    catch(error) {
        return res.status(500).json({error: "Internal Server Error"}); 
    }
}

// DELETE METHOD
exports.deleteMessage = async (req, res) => {
    try {
        const id = req.params.id;
        const messageExist = await MessageModel.findOne({_id:id});

        if(!messageExist) {
            return res.status(404).json({error: "Could not found on the server"}); 
        }

        const deleteMessage = await MessageModel.findOneAndDelete(id);
        return res.json({message: "Message Deleted Successfully", result: deleteMessage});

    }
    catch(error) {
        return res.status(500).json({error: "Internal Server Error"});
    }
}

// EDIT METHOD
exports.editMessage = async (req, res) => {
    try {
        const id = req.params.id;
        const messageExist = await MessageModel.findOne({_id:id});

        if(!messageExist) {
            return res.status(404).json({error: "Could not found on the server"}); 
        }

        const updateMessage = await MessageModel.findByIdAndUpdate(id, req.body, {new:true});
        return res.json({message: "Message Updated Successfully", result: updateMessage});
    }
    catch(error) {
        return res.status(500).json({error: "Internal Server Error"});
    }
}
