const express = require('express');
const Items = require('../item');
require('./config');

const app = express();
app.use(express.json())
app.post('/create',async(req,resp)=>{
    let data = new Items(req.body)
    let result =await data.save()
    console.log(req.body)
    resp.send('done')

});
app.get('/list',async(req,resp)=>{
    let data =await Items.find();
    resp.send(data);
});
app.delete('/delete/:_id',async(req,resp)=>{
    let data =await Items.deleteOne(req.params);
     resp.send("done");
});

app.put('/update/:_id',async(req,resp)=>{
    let data =await Items.updateOne(
        req.params,
        {
            $set:req.body
        });
     resp.send(data);
});
app.listen(8888)





























































// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

// const main = async () => {
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-comm",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }).then(() => {
//             console.log('connected')
//         });
//     const ItemSch = new mongoose.Schema({
//         name: String
//     });
//     const ItemsModel = mongoose.model("Item",ItemSch,"Products1");

//     let data = new ItemsModel({ name: "google" });
//     let result = await data.save();
//     console.log(result);
// }
// main();

// // const mongoDB = "mongodb://127.0.0.1:27017/e-comm";

// // // Wait for database to connect, logging an error if there is a problem
// // main().catch(err => console.log(err));
// // async function main() {
// //   await mongoose.connect(mongoDB);
// //   }
// //   const Schema = mongoose.Schema;

// // const SomeModelSchema = new Schema({
// //   a_string: String,
// //   a_date: Date,
// // });
// // const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
