const middlefunction=(req,res,next)=>{
    if(req.params.id==2){
        req.name='swapnil'
        return next()
    }
    return res.send('notworking')
}

module.export={middlefunction}