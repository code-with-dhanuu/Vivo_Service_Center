import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import User from "./Models/UserSchema.js";
import Device from './Models/DeviceSchema.js';
import Request from './Models/CrequestSchema.js';
import Phone from './Models/PhoneSchema.js';

const app = express();
app.use(express.json());
app.use(cors());


const PORT = 4000;

const Database = async()=>{
    await mongoose.connect("mongodb+srv://bhoyatedhanashree:pAGWf0rdgP7v7soD@cluster0.tkmvcuk.mongodb.net/Mobile")
    console.log("Database Connected")
}
Database();

app.listen(PORT,()=>{
    console.log("Server Is Running On" , PORT)
})

//USER 

//user post api when user register data stored 

app.post('/user' , async(req , res)=>{
try{
    const {name , email , password , role}=req.body;
    const userpost= await User.create({
        "name":name,
        "email":email,
        "password":password,
        "role":role
    })

    res.json({
        Sucess:true,
        data:userpost,
        msg:"You are Signup Successfully"
    })

}catch(error){
    res.json({
        Sucess:false,
        msg:error.msg
    })
}
})

//user get api to store all registered users data

app.get('/userdata' ,async (req , res)=>{
    try{

    const alldata = await User.find()
    res.json({
        Success:true,
        data:alldata,
        msg:"All Signup Members data stored here"
    })
}catch(error){
    res.json({
        Success:false,
        msg:error.msg
         // console.log(error)
    })
}
})


// Login those who have there account already

app.post('/login' , async(req , res)=>{
    const {email , password} = req.body; 
    
    
    const logindata = await User.findOne({
        email:email ,
        password:password
    })
    if(logindata){
      
        res.json({
            Success:true,
          msg:"Login succesfully"
       }); 
      }
      else{
        res.json({
           Success:false,
           msg:"You didn't have an account"
       });
      }
})


//DEVICE

//Add Device post API

app.post('/device', async(req , res)=>{
    try{
         const {userid , model ,status ,serviceHistory} =req.body;
         const addmobile= await Device.create({
            userid:userid,
            model:model,
            status:status,
            serviceHistory:serviceHistory
         })
         res.json({
            Success:true,
            data:addmobile,
            msg:`${model} was added`
         })
    }catch(error){
        res.json({
            Success:false,
            msg:error.message
        })
    }
})

//device all details get api

app.get('/devices' , async(req , res)=>{
    try{
        const {model}=req.body;
        const alldevice=await Device.find();
        res.json({
            Sucess:true,
            data:alldevice,
            msg:`${model}`
        })
    }catch(error){
        res.json({
            Success: false,
            msg: error.message
        })
    }
})

//delete the device by his id

app.delete('/device/:_id' , async(req , res)=>{
    try{
         const {model}= req.body;
         const {_id} = req.params;
         const deldevice=await Device.deleteOne({_id:_id});
         res.json({
            Success: true,
            _id: _id,
            data: deldevice,
            msg: `${model}Student details deleted sucessfully `
        })
    }catch(error){
      res.json({
        Success: false,
        msg: error.message
       })
    }
})



//update device by id


app.put('/device/:_id' , async(req , res)=>{
    try{
          const {_id}=req.params;
          const {userid , model ,status ,serviceHistory}=req.body;
          const updateDevice=await Device.updateOne({_id:_id} ,
            { $set:{userid , model , status ,serviceHistory}}
        );
        res.json({
            Success: true,
            msg: "Device updated successfully",
            data:updateDevice
            })
    }catch(error){
        res.json({
            Success: false,
            msg: error.message
            })
    }
})

app.post('/service' , async(req ,res)=>{
    try{
        const {deviceId ,requestDate ,status ,details}=req.body;
        const servicepost = await Request.create({
            // customerName:customerName, 
            deviceId:deviceId,
            requestDate:requestDate,
            status:status,
            details:details
        });
        res.json({
            Success: true,
            msg: "Service created successfully",
            data:servicepost
        })
    }catch(error){
    res.json({
        Success: false,
        msg: error.message
        })}
})

app.get('/services' , async(req , res)=>{
   try{
    // const{deviceId}= req.body;
    const getrequest = await Request.find();
    res.json({
        Success: true,
        msg: "Services retrieved successfully",
        data:getrequest
        })
   }catch(error){
    res.json({
        Success: false,
        msg: error.message
        })
   }
})




//Add Phone post API

app.post('/phone', async(req , res)=>{
    try{
         const {img , dname ,gb ,category ,price} =req.body;
         const addphone= await Phone.create({
            "img":img,
            "dname":dname,
            "gb":gb,
            "category":category,
            "price":price
         })
         res.json({
            Success:true,
            data:addphone,
            msg:`${dname} was added`
         })
    }catch(error){
        res.json({
            Success:false,
            msg:error.message
        })
    }
})

//Phone all details get api

app.get('/phones' , async(req , res)=>{
    try{
        const {dname}=req.body;
        const allphones=await Phone.find();
        res.json({
            Sucess:true,
            data:allphones,
            msg:`${dname}`
        })
    }catch(error){
        res.json({
            Success: false,
            msg: error.message
        })
    }
})

//delete the phone by his id

app.delete('/phone/:_id' , async(req , res)=>{
    try{
         const {dname}= req.body;
         const {_id} = req.params;
         const delphone=await Phone.deleteOne({_id:_id});
         res.json({
            Success: true,
            _id: _id,
            data: delphone,
            msg: `${dname}Student details deleted sucessfully `
        })
    }catch(error){
      res.json({
        Success: false,
        msg: error.message
       })
    }
})



//update phone by id


app.put('/phone/:_id' , async(req , res)=>{
    try{
          const {_id}=req.params;
          const {img , dname ,gb ,category , price}=req.body;
          const updatephone=await Phone.updateOne({_id:_id} ,
            { $set:{img , dname , gb ,category ,price}}
        );
        res.json({
            Success: true,
            msg: "Device updated successfully",
            data:updatephone
            })
    }catch(error){
        res.json({
            Success: false,
            msg: error.message
            })
    }
})