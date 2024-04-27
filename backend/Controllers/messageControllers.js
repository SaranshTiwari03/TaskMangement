const messageModel=require("../Models/messageModel")


// Inserts a new message into the database
const messageInsert = async (req, res) => {
    try {
        let uname = req.body.uname;
        let message = req.body.message;

        const messagedata = new messageModel({
            uname: uname,
            message: message,
        });

        await messagedata.save();
        res.send("Data received");
    } catch (error) {
        console.error("Error inserting task:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Displays all messages from the database
const messageDisplay = async (req, res) => {
    try {
        const data = await messageModel.find();
        res.send(data);
    } catch (error) {
        console.error("Error displaying tasks:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Deletes a message from the database
const messageDelete = async (req, res) => {
    try {
        const id = req.body.id;
        const message = await messageModel.findByIdAndDelete(id);
        if (!message) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "Are you sure you want to delete this task?",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    messageInsert,
    messageDisplay,
    messageDelete,
}
