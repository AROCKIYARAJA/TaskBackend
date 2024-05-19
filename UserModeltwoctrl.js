import { UserModelTwo } from "./UserModel2.js";

export const ReadUsersTwo = async (req, res) => {
    try {
        const AllUsers = await UserModelTwo.find();
        return res.status(200).json({ success: true, message: "All Users", FinalOut: AllUsers })
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}

export const addsomenew = async (req, res) => {
    try {
        const AllUsers = await UserModelTwo.find()
        if (AllUsers.find(target => target._id == req.body._id)) {
            return res.status(303).json({ success: false, message: "already present" })
        }
        await UserModelTwo.create(req.body)
        return res.status(200).json({ success: true, message: "All Users", FinalOut: await UserModelTwo.find() })
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}

export const removeone = async (req, res) => {
    try {
        const { ID } = req.params;

        if (await UserModelTwo.findById(ID)) {
            await UserModelTwo.findByIdAndDelete(ID);
            return res.status(200).json({ success: true, message: "User Data Deleted" })
        } else {
            return res.status(404).json({ success: false, message: "User Id not Founded 🤔, re-Check the User ID" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}