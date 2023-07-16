app.get("/movies/:id", function(req,res){
    let {id}=req.params
    let movie=movies.find((mv)=>mv.id==id)
    res.send(movie)
})