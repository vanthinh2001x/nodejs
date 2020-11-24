module.exports.postCreate = (req,res,next)=>{
    var errors = [];
    if(!req.body.name){
        errors.push('name is required');
    } 
    if(!req.body.phone){
        errors.push('phone is requried');
    }
    if(errors.length){
        res.render('users/create',{
            errors: errors,
            values: req.body//giu lai gia tri moi nhap
        });
        return;
    }
    res.locals.success = true;// bien nay duoc truyen cho postCreate sau    
    next();
}