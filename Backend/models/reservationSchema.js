import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be at least 3 characters long"],
    maxLength: [30, "First name must be less than 30 characters long"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be at least 3 characters long"],
    maxLength: [30, "Last name must be less than 30 characters long"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must be at least 11 characters long"],
    maxLength: [11, "Phone number must be less than 11 characters long"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
