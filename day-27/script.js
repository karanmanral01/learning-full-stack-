 let prm = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    }, 3000);
});


prm.then(function(){
   console.log("resolved");
});




let prm1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject();
    }, 2000);
});

prm1.catch(function(){
    console.log("reject");
});



