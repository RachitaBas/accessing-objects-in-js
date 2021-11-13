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
var userOne= new User('rachita1@gmail.com','Rach');
var userTwo= new User('raju21@gmail.com','Raju');
// userOne.login();//class methods
// userTwo.logout();//class methods
userOne.login().updateScore().updateScore().logout();//method chaining will run now one by one

// console.log(userOne);
// console.log(userTwo);
