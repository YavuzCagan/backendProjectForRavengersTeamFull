import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    userId: {
        type: String,
        required: 'IDnizi giriniz'
    },
    firstName: {
        type: String,
        required: 'adınızı giriniz'
    },
    lastName: { 
        type: String,
        required: 'soyadınızı giriniz'
    },
    profileImageURL: {
        type: String,
        required: 'profil fotoğrafınızın URL sini yapıştırınız'
    }
});