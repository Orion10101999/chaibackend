import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    Quantity:{
        type:Number,
        require:true
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice:{
        typpe:Number,
        required:true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type : [orderItemSchema]
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELED","DELIVERED"],
        default:"PENDING"
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)