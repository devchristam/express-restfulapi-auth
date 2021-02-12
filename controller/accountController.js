const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

class accountController{
    constructor(inputModule){
        this.module = inputModule
    }

    register = async (req, res) => {
        const account = this.module
        if(!req.body.password || !req.body.name){
            res.status(400).json({
                error: 'missing info'
            })
            return null
        }

        if(await account.exists({ name: req.body.name})){
            res.status(400).json({
                error: 'user exist'
            })
            return null
        }

        const hash = await bcrypt.hash(req.body.password, 10)
        const newUser = new account({
            name: req.body.name,
            password: hash
        })

        newUser.save()
        .then((user) => {
            res.status(200).json({
                register: user._id
            })
            return null
        })
        .catch(() => {
            res.status(400).json({
                error: 'cannot insert record'
            })
            return null
        })
    }

    login = async (req, res) => {
        const account = this.module
        if(!req.body.password || !req.body.name){
            res.status(400).json({
                error: 'missing info'
            })
            return null
        }

        const userRecord = await account.find({ name : req.body.name })
        if(userRecord.length !== 1){
            res.status(400).json({
                error: 'cannot find user'
            })
            return null
        }

        const compare = await bcrypt.compare(req.body.password, userRecord[0].password)
        if(!compare){
            res.status(400).json({
                error: 'wrong password'
            })
            return null
        }

        const accesstoken = jwt.sign({
            user: userRecord[0]._id,
            name: userRecord[0].name
            //the token expire time is not set for this project
        }, process.env.ACCESS_TOKEN_HASH);

        res.status(200).json({
            user: userRecord[0]._id,
            name: userRecord[0].name,
            accesstoken
        })
        return null
    }
} 

module.exports = accountController