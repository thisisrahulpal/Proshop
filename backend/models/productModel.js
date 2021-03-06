// This page is for creating schemas and structuring the database by adding user name image brand category description reviews rating numReviews price and countInStock

import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //which admin created which product
      required: true,
      ref: "User",
    },
    //created a schema for users
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//adding schema info to Product bcoz we want to make models from this schema
const Product = mongoose.model("Product", productSchema);

export default Product;
=======
const reviewSchema=mongoose.Schema({
    name:{type:String, required:true},
    rating:{type:Number, required:true},
    comment:{type:String, required:true}
},{
    timestamps:true
})

const productSchema =mongoose.Schema({ 
    user:{
        type:mongoose.Schema.Types.ObjectId,                    //which admin created which product
        required:true,
        ref: 'User'
    },
    //created a schema for users
    name={
        type:String,
        required:true
    },
    image={
        type:String,
        required:true,
    },
    brand={
        type:String,
        required:true
    },
    category={
        type:String,
        required:true,
    },
    description={
        type:String,
        required:true,
    },
    reviews: [reviewSchema],
    rating={
        type:Number,
        required:true,
        default:0
    },
    numReviews={
        type:Number,
        required:true,
        default:0
    },
    price={
        type:Number,
        required:true,
        default:0
    },
    countInStock={
        type:Number,
        required:true,
        default:0
    },
},{
    timestamps:true
})

//adding schema info to Product bcoz we want to make models from this schema
const Product=mongoose.model('Product', productSchema)

export default Product

