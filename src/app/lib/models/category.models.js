import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
    catName: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const CategoryTable = mongoose.models.CategoryTable || mongoose.model('CategoryTable', CategorySchema);

export default CategoryTable;
