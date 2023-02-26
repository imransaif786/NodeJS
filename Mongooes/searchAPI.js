const express = require('express');
const items = require('./CURD/item');
require('./CURD/config');
const app  = express();
app.use(express.json());


app.get('/search/:key',async(req,resp)=>{
    console.log(req.params.key);

    let data = await items.find({
        "$or":[
            {"brand":{$regex:req.params.key}},
            {"name":{$regex:req.params.key}}

        ]
    })
    resp.send(data)
})

app.listen(8888)