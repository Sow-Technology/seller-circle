import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  workEmail: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 7
  },
  brandName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  service: {
    type: String,
    required: true,
    minlength: 2
  },
  service2: {
    type: String,
    required: true,
    minlength: 2
  },
  message: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
