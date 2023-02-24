const dbConnect = require('./mongoDB');

const insert =async ()=>{
   const db = await dbConnect();
   
//const result = await db.insertOne({name : 'google',brand:'asus',price:'3000',category: 'mobile'})//one data inserted

const result = await db.insertMany([
        { name: 'google', brand: 'asus', price: '3000', category: 'mobile' },
        { name: 'Nokia', brand: 'nokia', price: '300', category: 'mobile' },
    ])
   if(result.acknowledged){
       console.log('data inserted');
   }
}

insert();