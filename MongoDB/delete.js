const  dbConnect = require('./mongoDB');

const deleteData = async ()=>{
    let db = await dbConnect();
    let result = await db.deleteMany({name:'note'});
    console.log(result);
    if(result.acknowledged){
        console.log('data deleted');
    }
}
deleteData()

// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log('Deleted documents =>', deleteResult);