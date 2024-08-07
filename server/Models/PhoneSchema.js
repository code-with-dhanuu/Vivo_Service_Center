import {Schema , model} from 'mongoose'


const phoneschema =Schema(
    {
        img:{
            type:String,
             required:true
            },
   
    
        dname:{
            type:String,
             required:true
            },
    
    
        gb:{
            type:String,
             required:true
            },
   
        category:{
            type:String,
             required:true
            },
   
        price:{
            type:String,
             required:true
            }
    }
)


const Phone = model("Phone" ,phoneschema )

export default Phone;