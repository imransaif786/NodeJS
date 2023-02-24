// Install Express and work with routes
// const express = require('express')
// const app = express();             // here we will bring express into executable State

// app.get('',(req,resp)=>{
// resp.send('Welcome this is my home page')
// })

// app.get('/about',(req,resp)=>{
//     resp.send('Welcome this is my about page')
//     })

//     app.listen(8888) 

//  const express = require('express')
//  const app = express();

//  app.get('/home',(req,resp)=>{
//     resp.send(`<h1>this is my home again</h1> <a href="/about">Go to About</a> <a href="/help">Go to help</a>`)
//  });
//  app.get('/about',(req,resp)=>{
//     resp.send(`
//     <input type= "text" placeholder = "User Name" value = "${req.query.name}">
//     <button>Click me</button>
//     <a href="/home">Go to home</a>
//     `)
//  });

//  app.get('/help',(req,resp)=>{
//         resp.send( `
//             [{
//                  name:'imran',
//                     email:'imran@hotmai.com'
//                 },
//                 {
//                     name:'xyz',
//                     email:'xyz@hotmai.com'
//                 }
//             ])
//             <a href="/home">Go to home</a>
//             `)

//  })
//  app.listen(8888)

// lesson 5 create folder make file and access them
// const express =  require('express');
// const app = express();
// const path = require('path');
// const publicPath = path.join(__dirname,'public')
// app.use(express.static(publicPath))
// app.listen(8888)

//LESSON   6 

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath = path.join(__dirname,'public')
// // app.use(express.static(publicPath))
// app.get('', (__,resp)=>{
// resp.sendFile(`${publicPath}/index.html`)
// });
// app.get('/about', (__,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
//     })
//     app.get('*', (__,resp)=>{
//         resp.sendFile(`${publicPath}/pageNotFound.html`)
//         })
// app.listen(8888)


//LESSON 7 
// Template Engine  install ejs Packages,
// Set Dynamics routing make dynamic page.


// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname,'public');


// app.set('view engine','ejs'); // tell our app that we are using ejs engine

// app.get('',(req,resp)=>{
// resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/profile',(req,resp)=>{
//     const user = {
//         name: 'imran',
//         email:'imran@hotmail.com',
//         city:'fsd'
//     }
// resp.render('profile',{user});
// })
// app.listen(8888)



//LESSON 8
// Make Loop, Header file,and show common header file.

// const express = require('express');
// const app = express();
// const path = require('path');
// // const publicPath = path.join(__dirname,'profile')
// app.set('view engine','ejs');
// app.get('/profile',(req,resp)=>{
//     const user = {
//         name: 'imran',
//         email: 'imran@hotmail.com',
//         city : 'FSD',
//         skill: [
//             'php','js','C++'
//         ]
//     }
//     resp.render('profile',{user})
// })
// app.get('/login',(res,resp)=>{
// resp.render('login')
// })
// app.listen(8888)


//Middleware LESSON 8


// const express = require('express');
// const app = express();

// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send('please provide age')
//     }else if(req.query.age<18){
//         resp.send('You are under age no access')
//     }else{

//         next();
//     }
// }
// app.use(reqFilter);
// app.get('/',(req,resp)=>{
//     resp.send('welcome to home page')
// });
// app.get('/user',(req,resp)=>{
//     resp.send('welcome to User page')
// });

// app.listen(8888);

//LESSON 9 Use middleware filter on specific route 

// const express = require('express');
// const app = express();
// const reqFilter = (req,resp,next)=>{
// if (!req.query.age) {
//     resp.send('Please Provide Age')
// }else if(req.query.age<18){
//     resp.send('you are under age')
// }else{
//     next();
// }
// }
// // app.use(reqFilter) this command we will use when we want to apply filter in all route.
// app.get('/',(req,resp)=>{
//     resp.send('WELLCOME TO HOME PAGE')
// })
// app.get('/user', reqFilter,(req,resp)=>{
//     resp.send('WELLCOME TO USER PAGE')
// })
// app.listen(8888);


//LESSON 9A Use middleware filter from outside file 

// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');
// const route = express.Router();
// // app.use(reqFilter) this command we will use when we want to apply filter in all route.
// route.use(reqFilter)


// app.get('/',(req,resp)=>{
//     resp.send('WELLCOME TO HOME PAGE')
// });
// route.get('/user',(req,resp)=>{
//     resp.send('WELLCOME TO USER PAGE')
// });
// app.get('/about',(req,resp)=>{
//     resp.send('WELLCOME TO About PAGE')
// });
// route.get('/contact', reqFilter,(req,resp)=>{
//     resp.send('WELLCOME TO Contact PAGE')
// });
// app.use('/', route)
// app.listen(8888);


// LESSON 10 MONGODB installation;


const dbConnect = require('./MongoDB/mongoDB')

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     });
// })

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();

