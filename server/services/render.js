const axios=require('axios');

exports.homeRoutes = (req,res) =>{
    //Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
    .then(function(response){
        res.render('index', {users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.add_people = (req,res) =>{
    res.render('add_people');
}

exports.update_people = (req,res) =>{
    axios.get('http://localhost:5000/api/users', {params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_people", {user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}