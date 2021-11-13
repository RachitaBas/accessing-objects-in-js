
function User(email,name){
    this.email=email;
    this.online=false;
    this.online=false;
    
    }

User.prototype.login=function(){   //using prototype for loggin in 
this.online=true;
console.log(this.email,'has logged in');
}
User.prototype.logout=function(){     ///for logging out
    this.online=false;
    console.log(this.email,'has logged out');

}

    var userOne = new User('rach1@gmail.com','Rach');
var userTwo = new User('samir2@gmail.com','samir');
console.log(userOne);
userTwo.login();