module.exports = reqFilter = (req,resp,next)=>{
    if (!req.query.age) {
        resp.send('Please Provide Age')
    }else if(req.query.age<18){
        resp.send('you are under age')
    }else{
        next();
    }
    }