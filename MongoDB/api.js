const express = require('express');
const dbConnect = require('./mongoDB');
const getData = require('./getData');
const mongoDB = require('mongodb');
const app = express();


app.use(express.json())


app.get('/',async(req,resp)=>{
    const db  = await dbConnect();
    const result = await getData();
 resp.send({result})
})
app.post('/',async(req,resp)=>{
    let db = await dbConnect(); // connect with database (its a funcation describe in another file)
    let result= await db.insertOne(req.body)
    resp.send(req.body)
});

app.put('/',async(req,resp)=>{
    let db = await dbConnect();
    let result = db.updateMany({brand:"asus"},{$set:{price:"09877665"}})
    // console.log(req.body);
    resp.send({result:"updated"})
});

app.delete('/:id', async(req,resp)=>{
   console.log(req.params.id);
//    const data = await dbConnect();
//    const result =await data.deleteOne({_id:new mongoDB.ObjectId(req.params.id)})
    resp.send('done')
})
app.listen(8888);