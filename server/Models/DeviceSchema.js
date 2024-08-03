import {Schema , model} from 'mongoose'



const deviceSchema = new Schema({
    userid:{
        type:String,
        ref:'user',
        required:true
    },
    model: {
        type: String,
        required: true
      },
    status: {
        type: String,
        enum: ['received', 'in repair', 'repaired', 'returned'],
        default: 'received'
      },

      serviceHistory: [{
        date: {
          type: Date,
          default: Date.now
        },
        status: String,
        details: String
      }]
    
},
{
    timestamps:true
});

const Device  = model("Device" , deviceSchema)

export default Device;