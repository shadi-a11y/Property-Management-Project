import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    // avatar: {type: String, required: true},
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
},
    {timestamps: true},
);

//This function will always return 1 value: true or false 
UserSchema.methods.checkPassword = async function(
    candidatePassword, //Coming from the frontend as a plaintext
    userPassword //Coming from the database as a hashed value  (ORDER IS IMP)
    ) {
        return await bcrypt.compare(candidatePassword,userPassword);
};

const userModel = mongoose.model('User', UserSchema);
export default userModel;