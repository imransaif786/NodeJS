const app = require('./app')
// const fs = require('fs').writeFileSync;
const http = require('http')
const color = require('colors')


// http.createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "text/plain" });
//     resp.write("hello im request");
//     resp.end();
// }).listen(6500);
//  console.warn("hello".red);
// console.log("hello".bgWhite);


// Create Simple and first  API Node Js which will get data from data.js file
// const data = require('./data')
// const http = require('http')
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'content-type' : 'application/json'})
// resp.write(JSON.stringify(data))
// resp.end
// }).listen(6100)

// Crate file and its data from command line  in NODE.JS
// const fs = require('fs');
// const input = process.argv;

// // console.log(process.argv);
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2] =='remove'){
//     fs.unlinkSync(input[3])
// }else{
//    console.log('invalid input');
// }




// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname,'files')
// console.warn(dirPath)

// // for (let i = 0; i < 5; i++) {
// //     fs.writeFileSync(dirPath+`/apple${i}.txt`,'how are you')
    
// // }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((file)=>{
//         console.log(file);
//     })
// })


//Creat File with and For CURD operatio

const fs = require('fs');
const path = require('path');
const { rejects } = require('assert');
const dirPath = path.join(__dirname,'curd')
const filePath = `${dirPath}/apple.txt`

//  fs.writeFileSync(filePath,'this my curd file');
// this line will read the file content
// fs.readFile(filePath ,'utf8' ,(err,item)=>{
//  console.log(item);
// }) 


// fs.appendFile(filePath,' and this part came from appenFile code',(err)=>{
//     if (!err) console.log('file updated')
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file name updated');
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)


// Working with ASYNCHRONOUS Data

// let a = 10;

// let waitingData = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },3000)
// })
// waitingData.then((data)=>{
//     console.log(a+data)
// })