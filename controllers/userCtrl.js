const userModel = require("../models/userModels")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if (existingUser) {
            return res.status(200).send({message:"user already", success:false})
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message: "Register Succesfull", success: true})
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message: `Register Controller: ${error.message}`})
    }
}

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email:req.body.email})
        if (!user) {
            return res.status(200).send({message: "user not found", success:false})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(200).send({message: "Invalid email or password", success:false})
        }

        if (req.body.email === 'admin@gmail.com' && req.body.password === 'admin') {
            const token = jwt.sign({ id: user._id, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1d' })
            return res.status(200).send({ 
                message: "Admin login successful", 
                success: 'admin', 
                token,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: true,
                    isDoctor: user.isDoctor,
                    seenNotication: user.seenNotication,
                    notification: user.notification
                }
            })
        } else {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
            res.status(200).send({
                message: "Login Successful", 
                success: 'user', 
                token,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: false,
                    isDoctor: user.isDoctor,
                    seenNotication: user.seenNotication,
                    notification: user.notification
                }
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message: `Login Controller: ${error.message}`})
    }
}

const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        if (!user) {
            return res.status(401).send({
                message: "User not found",
                success: false
            })
        }else {
            res.status(200).send({
                success:true,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isDoctor: user.isDoctor,
                    seenNotication: user.seenNotication,
                    notification: user.notification
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'auth error', error: error.message})
    }
};

const markAllNotifications = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        const seenNotification = user.seenNotication;
        const notification = user.notification;
        
        seenNotification.push(...notification);
        user.notification = [];
        user.seenNotication = seenNotification;

        const updatedUser = await user.save();
        
        res.status(200).send({
            success: true,
            message: "All notifications marked as read",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error in notification",
            success: false,
            error,
        });
    }
};

const deleteAllNotifications = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        user.notification = [];
        user.seenNotication = [];
        
        const updatedUser = await user.save();
        
        res.status(200).send({
            success: true,
            message: "All notifications deleted",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error in notification",
            success: false,
            error,
        });
    }
};

module.exports = { loginController, registerController, authController, markAllNotifications, deleteAllNotifications }
