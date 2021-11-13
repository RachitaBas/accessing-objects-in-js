
function User(email,name){
    this.email=email;
    this.online=false;
    this.login=function(){
        console.log(this.email,'has logged in');

    }
}
var userOne = new User('rach1@gmail.com','Rach');
var userTwo = new User('samir2@gmail.com','samir');
console.log(userOne);
userTwo.login();