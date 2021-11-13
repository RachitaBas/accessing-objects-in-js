var userOne = {
  email:'rachita@gmail.com',
  name:'rachita',
  login(){
      console.log(this.email, 'has logged in ');
  },
  logout(){
      console.log(this.email, 'has logged out');
  }

};
console.log(userOne.name);