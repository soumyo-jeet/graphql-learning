import mongoose from "mongoose"
const { Schema, model } = mongoose

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    occ: String,
    age: Number,
    gender: String
})

const User = model('User', UserSchema)
export default User