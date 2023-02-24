const dbConnect = require('./mongoDB');

const updateData = async ()=>{
    const db = await dbConnect();
    const updateResult = await db.updateOne({ name : 'IPhone 14' },{ $set: {model:"Pro Max Max" }});
    
    if(updateResult.acknowledged){
        console.log('Updated documents');
    }
}
updateData();