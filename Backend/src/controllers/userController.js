const userModel = require("../models/UserModel");
const mongoose = require("mongoose");
const { isValid, isValidName, isValidEmail, isValidContact, isValidPassword } = require("./validation");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

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
            return res.status(400).json({ msg: "Email already exists" })
        }
        // pass
        if (!isValid(userPassword)) {
            return res.status(400).json({ msg: "Please Enter PassWord" })
        }
        if (!isValidPassword(userPassword)) {
            return res.status(400).json({ msg: "Password must contain 6-20 charcters, 1 uppercase,1 lowercase, 1 number and 1 special character" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userPassword, salt)

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

        let validGenders = ["male", "female", "others"]
        if (!validGenders.includes(gender.trim().toLowercase())) {
            return res.status(400).json({ msg: "Gender must be 'male', 'female', 'others' " })
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
        if (Object.keys(data).length === 0) {
            return res.status(400).json({ msg: "Bad Request, No data Provided" })
        }

        let { userName, userEmail, userContact, userPassword, gender, age, userAddress } = data;

        //validate username
        if (userName != undefined) {
            if (!isValid(userName)) {
                return res.status(400).json({ msg: "user Name is required" })
            }
            if (!isValidName(userName)) {
                return res.status(400).json({ msg: "Invalid user name" })
            }
        }
        //validate user email
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
        //validate user contact
        if (userContact != undefined) {
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
        //password
        let salt;
        let hashedPassword;
        if (userPassword !== undefined) {
            if (!isValidPassword) {
                return res.status(400).json({ msg: "Password is Required" })
            }
            if (!isValidPassword(password)) {
                return res.status(400).json({ msg: "password must contain 6-20 characters, i upeercase, i lowercase, 1 number and 1 special character" })
            }
            salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }
        //validate user address
        if (userAddress !== undefined) {
            if (!isValid(userAddress)) {
                return res.status(400).json({ msg: "Address is required" })
            }
        }
        // valid gender
        if (gender !== undefined) {
            if (!isValid(gender)) {
                return res.status(400).json({ msg: "Gender is Required" })
            }
            let validGenders = ["male", "female", "others"];
            if (!validGenders.includes(gender.trim().toLowercase())) {
                return res.status(400).json({ msg: "Gender must be 'male','female'and 'others'" })
            }
        }
        //age validate
        if (age !== undefined) {
            if (!isValid(age)) {
                return res.status(400).json({ msg: "Age Required" })
            }
        }
        let update = await userModel.findByIdAndUpdate(userId, { userName, userEmail, userContact, userPassword: hashedPassword, userAddress, gender, age }, { new: true })
        if (!update) {
            return res.status(404).json({ msg: "No user found" })
        }
        return res.status(200).json({ msg: "User data update successfully", update });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ msg: "Internal server error" });
    }
}

// delete user data
const deleteUser = async (req, res) => {
    try {
        let deleteId = req.params.id;
        if (!mongoose.Type.ObjectId.isValid(deleteId)) {
            return res.status(400).json({ msg: "Invalid user Id" })
        }
        // const user=await userModel.findById(userId);
        // if(!user){
        //     return res.status(404).json({msg:"user not found"})
        // }
        // await userModel.findByIdAndDelete(userId);
        // return res.status(200).json({"user deleted successfully"})
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

//login user
const loginUser=async(req,res)=>{
    try{
        if(Object.keys(req.body).length===0){
            return res.status(400).json({msg:"Bad request, No data found"});
        }
        let{userEmail, userPassword}=req.body;
        if(!isValid(userEmail)  ){
            return res.status(400).json({msg:"Email  are require"})
        }
        if(!isValid(userPassword)){
            return res.status(400).json({msg:" Password are require"})
        }
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(404).json({msg:"User not found with this email"})
        }
        const matchUser=await bcrypt.compare(userPassword, user.userPassword);
        if(!matchUser){
            return res.status(401).json({msg:"Incorrect password"})
        }
        const token=jwt.sign(
            {userId:user._id,userEmail:user.userEmail},"my-secret-key",{expiresIn:"1h"}
        );
        return res.status(200).json({msg:"Login successfully",token});
    }catch(error){
        console.log(error);
        return res.status(500).json({ msg: "internal server error" });
    }
}
module.exports = { addUser, getUser, updateUser, deleteUser ,loginUser};
