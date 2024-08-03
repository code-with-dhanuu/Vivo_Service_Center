import {Schema , model} from 'mongoose'

//customer service request

const serviceSchema = Schema(
    {
        customerName: {
            type: String,
             required: true
            },
        deviceId: {
            type: Schema.Types.ObjectId,
            ref: 'Device',
            required: true
          },
          requestDate: {
            type: Date,
            default: Date.now
          },
          status: {
            type: String,
            enum: ['pending', 'in progress', 'completed', 'cancelled'],
            default: 'pending'
          },
          details: {
            type: String,
            required: true
          }
    },
    {
        timestamps:true
    }
);

const Request = model("Request" , serviceSchema)

export default Request;