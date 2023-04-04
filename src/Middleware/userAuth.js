const express = require('express');
const db = require('../Configs/db');

// Assigning db.user to User variable
const User = db.user;

const saveUser = async (req, res, next) => {
    // Search for user in database
    try {
        const user = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });

        // If user exist in database then return error
        if (user) {
            return res.status(409).json('Username already exist');
        }
        // checking if email exist in database
        const emailcheck = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        // If email exist in database then return error
        if (emailcheck) {
            return res.status(409).json('Email already exist');
        }
        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    saveUser,
}