const user = require('../Model/model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        // const userData = await user.create(req.body);

        const { name, email, password, role, phone, department, rollNumber } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password with a salt round of 10
        //bcrypt(password, saltRounds)  -> to encrypt the password
        const userData = await user.create({
            name, email, password: hashedPassword,
            role, phone, department, rollNumber
        });
        res.status(201).json({ message: "User registered successfully", user: userData });

        // res.send(userData);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await user.findOne({ email: email });
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(password, userData.password);
        //bcrypt.compare(plainPassword, hashedPassword) -> to compare the password
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        //Token Generation using jwt
        //jwt.sign(payload, secretKey, expireTime)
        const token = jwt.sign({id:userData._id, role: userData.role, email: userData.email}, "lenovo", {expiresIn:"1h"});

        res.json({
            message: "Login successful",
            user: {
                id: userData._id,
                name: userData.name,
                email: userData.email,
                role: userData.role,
                phone: userData.phone,
                department: userData.department,
                rollNumber: userData.rollNumber
            },
            token: token
        })

        // res.status(200).json({ message: "Login successful", user: userData });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
  const users = await user.find().select("-password");
  res.json(users);
};

module.exports = { registerUser, loginUser, getAllUsers };