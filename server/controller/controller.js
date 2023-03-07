var Userdb=require('../model/model');

//create and save people
exports.create=(req,res)=>{
    //validate request
    if(!read.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    //new user
    const user=new Userdb({
        fullName:req.body.fullName,
        nameInitials:req.body.nameInitials,
        preferedName:req.body.preferedName,
        Gender:req.body.Gender,
        dob:req.body.dob,
        email:req.body.email,
        mobile:req.body.mobile,
        designation:req.body.designation,
        employeeType:req.body.employeeType,
        joinedDate:req.body.joinedDate,
        experience:req.body.experience,
        salary:req.body.salary,
        personalNotes:req.body.personalNotes
    })

    //save user
    user
        .save(user)
        .then(data=>{
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occured"
            })
        })
}

//retrieve and return user
exports.find=(req,res)=>{

    if(req.query.id){
        const id=req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving user with id"+id})
        })

    }else{
        Userdb.find=(req,res)=>{
            Userdb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message:err.message || "Error occured"})
            })

    }
    
    }

}

//update user by user id
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update cannot be empty"})
    }

    const id = req.param.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id},. Maybe user not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error updat user information"})
    })

}

//delete user
exports.delete=(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message:"User was deleted successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete User with id=" +id
        });
    });

}