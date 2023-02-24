const dbConnect = require('./mongoDB')

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     });
// })

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    return data;
}
main();

module.exports = main;