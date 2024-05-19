import { UserModel } from "./UserModel.js";

export const CreateUser = async (req, res) => {
    try {

        if ((await UserModel.find()).some(target => target.Email == req.body.Email)) {
            return res.status(300).json({ success: false, message: "Email is Already used, try some new" })
        }


        await UserModel.create(req.body);
        return res.status(200).json({ success: true, message: "User Added ✅" })
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}

export const ReadUsers = async (req, res) => {
    try {
        const AllUsers = await UserModel.find();
        return res.status(200).json({ success: true, message: "All Users", FinalOut: AllUsers })
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}

export const GetSingleUser = async (req, res) => {
    try {
        const { ID } = req.params;
        const ExactUser = await UserModel.findById(ID)
        if(ExactUser){
            return res.status(200).json({ success: true, message: "User Founded", FinalOut: ExactUser })
        }else{
            return res.status(404).json({ success: false, message: "User Id not Founded 🤔, re-Check the User ID" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}

export const UpdateUser = async (req, res) => {
    try {
        const { ID } = req.params;
        const { Name, Email, Password, Image } = req.body;
        const Updated = await UserModel.findByIdAndUpdate(ID, { Name: Name, Email: Email, Password: Password, Image: Image });
        return res.status(200).json({ success: true, message: "User Data Updated ✅", FinalOut: Updated })
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}

export const DeleteUser = async (req, res) => {
    try {
        const { ID } = req.params;

        if (await UserModel.findById(ID)) {
            await UserModel.findByIdAndDelete(ID);
            return res.status(200).json({ success: true, message: "User Data Deleted" })
        } else {
            return res.status(404).json({ success: false, message: "User Id not Founded 🤔, re-Check the User ID" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "err -->", error })
    }
}