import {Schema , model} from 'mongoose'


const contactSchema =new Schema(
    {
        Name:{
            type:String,
            required: true
        },
        Email:{
            type:String,
            required: true
        },
        Devicename:{
            type:String,
            required: true
        },
        Sversion:{
            type:String,
            required: true
        },
        Query:{
            type:String,
            required: true
        }
    },
    {
        timestamps:true
    }
)

const Contact = model("Contact" , contactSchema)

export default Contact;