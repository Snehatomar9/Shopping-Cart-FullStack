const userModel = require("../models/UserModel");
const mongoose = require("mongoose");
const { isValid, isValidName, isValidEmail, isValidContact, isValidPassword } = require("./validation");

// add Data
const addUser = async (req, res) => {
    try {
        const userData = req.body;

        if (Object.keys(userData).length === 0) {
            return res.status(400).json({ msg: "Bad request, No data Provided" })
        }

        const { userName, userEmail, userPassword, userContact, userAddress, gender, age } = userData;

        // name
        if (!isValid(userName)) {
            return res.status(400).json({ msg: "Please Enter User Name" })
        }
        if (!isValidName(userName)) {
            return res.status(400).json({ msg: "Invalid User Name" })
        }
        // email
        if (!isValid(userEmail)) {
            return res.status(400).json({ msg: "please Enter Email" })
        }

        if (!isValidEmail(userEmail)) {
            return res.status(400).json({ msg: "Invalid user Email" })
        }
        let duplicateEmail = await userModel.findOne({ userEmail });
        if (duplicateEmail) {
            return res.status(400).json({ msg: "Emial already exists" })
        }
        // pass
        if (!isValid(userPassword)) {
            return res.status(400).json({ msg: "Please Enter PassWord" })
        }
        if (!isValidPassword(userPassword)) {
            return res.status(400).json({ msg: "Invalid user Password" })
        }
        // phone
        if (!isValid(userContact)) {
            return res.status(400).json({ msg: "Please Enter Contact Number" })
        }
        if (!isValidContact(userContact)) {
            return res.status(400).json({ msg: "Invalid user Contact" })
        }
        let duplicatePhone = await userModel.findOne({ userContact })
        if (duplicatePhone) {
            return res.status(400).json({ msg: "Phone number already exists" })
        }
        // address
        if (!isValid(userAddress)) {
            return res.status(400).json({ msg: "Please Enter Address" })
        }
        // gender
        if (!isValid(gender)) {
            return res.status(400).json({ msg: "Please Enter gender" })
        }
        // age
        if (!isValid(age)) {
            return res.status(400).json({ msg: "Please Enter Age" })
        }

        let user = await userModel.create(userData)
        return res.status(201).json({ msg: "user Data Added successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Intenal server error" });
    }
}

// get data
const getUser = async (req, res) => {
    try {
        const data = await userModel.find();
        return res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Ineternal server error" })
    }

}

// update
const updateUser = async (req, res) => {
    try {
        let userId = req.params.id;
        let data = req.body;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ msg: "Invalid user Id" });
        }

        let { userName, userEmail, userContact, userPassword, gender, age, userAddress } = data;

        if (userName != undefined) {
            if (!isValid(userName)) {
                return res.status(400).json({ msg: "user Name is required" })
            }
            if (!isValidName(userName)) {
                return res.status(400).json({ msg: "Invalid user name" })
            }
        }

        if (userEmail != undefined) {
            if (!isValid(userEmail)) {
                return res.status(400).json({ msg: "Email is required" })
            }
            if (!isValidEmail(userEmail)) {
                return res.status(400).json({ msg: "Invalid Email" })
            }
            let duplicateEmail = await userModel.findOne({ userEmail });
            if (duplicateEmail) {
                return res.status(400).json({ msg: "Email already exists" })
            }
        }

        if (userContact !=undefined) {
            if (!isValid(userContact)) {
                return res.status(400).json({ msg: "Contact is required" })
            }
            if (!isValidContact(userContact)) {
                return res.status(400).json({ msg: "Invalid Phone number" })
            }
            let duplicatePhone = await userModel.findOne({ userContact });
            if (duplicatePhone) {
                return res.status(400).json({ msg: "Phone number is already exists" })
            }
        }

        if (userAddress !== undefined) {
            if (!isValid(userAddress)) {
                return res.status(400).json({ msg: "Address is required" })
            }
        }

        if (gender !== undefined) {
            if (!isValid(gender)) {
                return res.status(400).json({ msg: "Gender is Required" })
            }
        }

        if (age !== undefined) {
            if (!isValid(age)) {
                return res.status(400).json({ msg: "Age Required" })
            }
        }

        let update = await userModel.findByIdAndUpdate(userId, data, { new: true });
        return res.status(200).json({ msg: "User data update successfully", update });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ msg: "Internal server error" });
    }
}

// delete
const deleteUser = async (req, res) => {
    try {
        let deleteId = req.params.id;
        const deleteUserById = await userModel.findByIdAndDelete(deleteId);
        if (!deleteUserById) {
            return res.status(400).json({ msg: "user not found" })
        }
        return res.status(200).json({ msg: "user deleted successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" });
    }
}

// get user by gender
const getUserByGender = async (req, res) => {
    try {
        const gender = req.body.gender;

        if (!isValid(gender)) {
            return res.status(400).json({ msg: "Gender is required" })
        }

        const users = await userModel.find({ gender: gender.toLowerCase() })

        if (users.length === 0) {
            return res.status(404).json({ msg: "No users found" })
        }

        return res.status(200).json({ users })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })

    }
}


module.exports = { addUser, getUser, updateUser, deleteUser, getUserByGender };
