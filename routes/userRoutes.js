const express = require('express')
const router = express.Router()
const db = require('../models/db')

// Register new user or add address to existing user

router.post('/register', (req, res) => {
   const {name, address} = req.body

   // First, check if the user exists
   const queryUser = `SELECT * FROM User WHERE name = ? `;

   db.get(queryUser, [name], (err, user) => {
    if(err){
        res.status(500).json({error: err.message});
    }else if(user){
        // If user exists, add address for existing user
        const insertAddress = `INSERT INTO Address(address, userId) VALUES (?, ?)`;
        db.run(insertAddress, [address, user.id], function(err) {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                res.status(200).json({message: 'New address added for existing user', addressId: this.lastID});
            }
        })
    }else{
        // If user does not exist, create a new user and add the address
        const insertUser = `INSERT INTO User(name) VALUES(?)`;
        db.run(insertUser, [name], function(err){
            if(err){
                res.status(500).json({error: err.message});
            }else{
                const userId = this.lastID // Get the newly created user ID
                const insertAddress = `INSERT INTO Address(address, userId) VALUES(?, ?)`;
                db.run(insertAddress, [address, userId], function(err){
                    if(err){
                        res.status(500).json({error: err.message});
                    }else{
                        res.status(200).json({message: "New user and address register successfully", userId, addressId: this.lastID});
                    }
                })
            }
        })
    }
   })
})

module.exports = router