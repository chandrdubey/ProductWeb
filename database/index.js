import mongoose from'mongoose';
const uri = `mongodb+srv://${process.env.username}:${process.env.password}@products-app.6szlc0c.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log('Connected!')).catch(err => console.log("=================>,", err));

  export default mongoose