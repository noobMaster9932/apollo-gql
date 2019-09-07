import mongoose from 'mongoose'
export default mongoose.model('User', {
    username: String,
    password: String,
    birth_day: Date,
    is_active: Boolean,
    created_date: Date,
    created_by: String,
    modified_date: Date,
    modified_by: String
})
