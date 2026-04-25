function afterDelay(time, cb) {
    setTimeout(function () {
        cb();
    }, time);
}

afterDelay(3000, function () {
    console.log("hey everyone");
});




function getUser (username, cb){
    console.log("getiing user details...")
    setTimeout(()=>{
      cb({id: 1, username: "karan"});
    }, 1000);
}

function getUserPosts(id, cb){
    console.log("getiing user Posts...")
    setTimeout(()=>{
        cb(["hello", "too good", "its fun time", "maybe I am not"]);
    },2000);
}

getUser("karan", function(data){
    getUserPosts(data.id, function(allposts){
        console.log(data.username, allposts);
    });
});




function loginUser(username, cb) {
    console.log(" loggin in User...");
    setTimeout(() => {
        cb({ id: 1212, username: "karan" });
    }, 1000);
}
function fetchPermissions(id, cb) {
    console.log(" Fetching permissions...");
    setTimeout(() => {
        cb(["read", "write", "delete"]);
    }, 2000)
}
function loadDashboard(permissions, cb) {
    console.log(" loading dashboard...");
    setTimeout(() => {
        cb();
    });
}




loginUser("karan", function (userdata) {
    fetchPermissions(userdata.id, function (permissions) {
        loadDashboard(permissions, function () {
            console.log("Dashboard loaded");
        });
    });
});








