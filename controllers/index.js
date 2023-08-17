
import Product from "../modal/products.js"



const getAllProducts = async (req, res)=>{
    try{
      const {priceSort} =req.query; 
      const sorting = priceSort === "0" ?  {id:1}:{ price:priceSort, id:1 };
      const data = await Product.find().sort(sorting)
      res.send(data);

    }
    catch(e){
       console.error(e, "=============>");
    }
}

const udpateProduct = async (req, res)=>{
   try{
      const {id, price, isReset} = req.body;
      console.log(req.body)
      const product = await Product.findOne({id});
      
      if(!product){
         res.send("Invalid product")
      }
      else{
         let newPrice = isReset ? product.defaultPrice : price;
         await Product.updateOne({id}, {price: newPrice});
         res.send("Data Updated Succesfully");
      }

    }
    catch(e){
       console.error(e, "=============>");
    }
}
export {
   getAllProducts,
   udpateProduct,
}