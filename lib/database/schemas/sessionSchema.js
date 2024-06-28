import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    expires_at: {
        type: Date,
        required: true,
    },
});

const userModel = mongoose.model('Session', SessionSchema);
export default SessionSchema;
