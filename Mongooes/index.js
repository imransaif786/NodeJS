const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('connected')
        });
    const ItemSch = new mongoose.Schema({
        name: String
    });
    const ItemsModel = mongoose.model("Items", ItemSch);

    let data = new ItemsModel({ name: "google" });
    let result = await data.save();
    console.log(result);
}
main();

// const mongoDB = "mongodb://127.0.0.1:27017/e-comm";

// // Wait for database to connect, logging an error if there is a problem
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
//   }
//   const Schema = mongoose.Schema;

// const SomeModelSchema = new Schema({
//   a_string: String,
//   a_date: Date,
// });
// const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
