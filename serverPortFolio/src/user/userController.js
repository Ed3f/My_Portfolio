var userService = require('./userService');

var createUserControllerFn = async (req,res) =>{

    try{
        console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        console.log(status);
        if(status){
            res.send({"status": true, "message": "User created successfully"});
        }
        else {
            res.send({"status": false, "message": "Error creating user"});
        }
    }
    catch(err){
        console.log(err);
    }
}

var loginUserControllerFn = async(req, res) =>{
    var result = null; 
    try{
        result = await userService.loginUserDBService(req.body);
        if(result.status){
            res.send({"status": true, "message": result.msg});
        }
        else{
            res.send({"status": false, "message": result.msg});
        }
    }
    catch(error){
        console.log(error);
        res.send({"status": false, "message": error.msg});
    }
}


var createUserWork = async (req,res) =>{
    try{
        console.log(req.body);
        var status = await userService.createWorkDBService(req.body);
        console.log(status);
        if(status){
            res.send({"status": true, "message": "Work has been created"});
        }
        else{
            res.send({"status": false, "message": "Error creating work!"});
        }
    }
    catch(err){
        console.log(err);
    }
}
var readAllUserWork = async (req, res) => {
    try{
        var result= await userService.readAllUserWork();
        console.log(result);
        if(result){
            res.send({"status":true, "message": result})
        }else{
            res.send({"status": false, "message": "error to read"})
        }
    }
    catch(error){
        console.log(error);
    }
}
var updateUserWork = async (req,res) =>{
    try{
        console.log(req.body);
        var status = await userService.updateWorkDBService(req.body);
        console.log(status);
        if(status){
            res.send({"status": true, "message": "Work updated successfully"});
        }
        else {
            res.send({"status": false, "message": "Error updating work"});
        }
    }
    catch(error){
        console.log(error);
        res.send({"status": false, "message": error.msg});
    }
}
var deleteUserWork = async (req,res) =>{
    try{
        console.log(req.body);
        var status = await userService.deleteWorkDBService(req.body);
        console.log(status);
        if(status){
            res.send({"status": true, "message": "Work deleted successfully"});
        }
        else {
            res.send({"status": false, "message": "Error deleting work"});
        }
    }
    catch(error){
        console.log(error);
        res.send({"status": false, "message": error.msg});
    }
}

module.exports = { createUserControllerFn, loginUserControllerFn, createUserWork, updateUserWork, deleteUserWork, readAllUserWork };