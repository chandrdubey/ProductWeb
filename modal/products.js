
import mongoose from "mongoose"
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: Number,
  image: String,
  name: String,
  category: String,
  price: String,
  defaultPrice: String,
  label:String,
  description:String,
});
  

 const Product =  mongoose.model("Product", ProductSchema);
 

export default Product