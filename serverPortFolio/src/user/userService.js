var userModel = require("./userModel");
var workModel = require("./workModel");

var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

//()=> per funzioni anonime di callback
module.exports.createUserDBService = (userDetails) =>{

    //risulato della funzione await
    return new Promise(function myFn(resolve, reject){

        var userModelData = new userModel();
        userModelData.firstname = userDetails.firstname;
        userModelData.lastname= userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        var encrypeted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypeted;

        userModelData.save()
        .then(result => resolve(true))
        .catch(error => reject(false));
        
    });
}

module.exports.loginUserDBService = (userDetails) => {

    return new Promise((resolve, reject) => {
      
        userModel.findOne({ email: userDetails.email }).exec()
        
        .then(result => {
          
            if (!result) {
            reject({ status: false, msg: "Invalidate User Details" });
          } else {
            
            const decrypted = encryptor.decrypt(result.password);
            
            if (decrypted === userDetails.password) {
              resolve({ status: true, msg: "User Validated Successfully" });
            } else {
              reject({ status: false, msg: "User Validation Failed" });
            }
          }
        })
        .catch(error => {
          reject({ status: false, msg: "Invalid Data" });
        });
    });
};

module.exports.createWorkDBService=(workDetails) =>{

    return new Promise(function myFn(resolve, reject){

        var workModelData= new workModel();
        workModelData.email = workDetails.email;
        workModelData.title = workDetails.title; 
        workModelData.description = workDetails.description;
        workModelData.prize = workDetails.prize;
        workModelData.save()
        .then(result => resolve(true))
        .catch(error => reject(false));
    });
        
}
module.exports.readAllUserWork=()=>{
    
    return new Promise((resolve, reject)=>{
        workModel.find({})
        .then(docs => resolve(docs))
        .catch(err => reject(err));
    });
}

module.exports.updateWorkDBService=(workDetails) =>{
    
    return new Promise((resolve, reject) =>{
        const filter = {email: workDetails.email};
        const update = {
            title: workDetails.title,
            description: workDetails.description,
            prize: workDetails.prize
        };
        workModel.updateMany(filter, update)
        .then(result => {
          
            console.log(`Match record: ${result.matchedCount}`);
            console.log(`Record update: ${result.modifiedCount}`);
            if (result.modifiedCount > 0){
                resolve({status: true, msg:" Updated Information "});
            }
            else{
                reject({status: false, msg: "Error for updated information "});
            }
        })
        .catch(error => {
          reject({ status: false, msg: "Invalid Data" });
        });
    });
};

module.exports.deleteWorkDBService = (workDetails) =>{

    return new Promise((resolve,reject)=>{
        
        workModel.deleteOne({title: workDetails.title})
        .then(result => {
            if(result.deletedCount === 1 ){
                resolve({status: true, msg:"Deleted Information"});
            }
            else{
                reject({status: false, msg:"Error for deleted information"});
            }
        })
        .catch( result =>{
            reject({ status: false, msg: "Invalid Data" });
        });
    });
};