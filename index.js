const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
mongoose.connect("mongodb://127.0.0.1:27017/product");
const Product = require('./product');
const app = express();
app.use(morgan('tiny'));

app.use(express.json())
app.use(cors());
app.get('/', async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
});

app.post('/', async (req, resp) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(req.body)
    resp.send('done')
});

app.put('/:_id', async (req, resp) => {
    let data = await Product.updateOne(
        req.params,
        {
            $set: req.body
        });
    resp.send(data);
});

app.delete('/:_id', async (req, resp) => {
    let data = await Product.deleteOne(req.params);
    resp.send("done");
});

const port = 8888;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});




























































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
