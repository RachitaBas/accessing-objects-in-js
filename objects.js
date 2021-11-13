class User {
    constructor(email,name){
this.email= email;
this.name = name;
this.score=0;//at the beginning
    }
    login(){       //methods function
        console.log(this.email,'just logged in');
        return this; //for method chaining
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this; //for method chaining
    }
    updateScore(){
        this.score++;//increasing score
        console.log(this.email,'score is now',this.score);
        return this; //for method chaining
    }
}
class Admin extends User { //Inheritance
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email ;
        })
    }
}
var userOne= new User('rachita1@gmail.com','Rach');
var userTwo= new User('raju21@gmail.com','Raju');
var admin = new Admin ('rabina2@gmail.com','rabina');
var users = [userOne,userTwo,admin];
admin.deleteUser(userOne);
console.log(users);
// userOne.login();//class methods
// userTwo.logout();//class methods
userOne.login().updateScore().updateScore().logout();//method chaining will run now one by one

// console.log(userOne);
// console.log(userTwo);
