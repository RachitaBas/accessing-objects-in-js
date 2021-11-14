Window.onload=function(){     //after window/webapge loads
    var http= new XMLHttpRequest();   //request passing
    if(http.onreadystate == 4 && http.status == 200){   //4 or 200 means request is complete
     console.log(json.parse(http.response));    //provides respons eif complete//pass the string and return it to some kind of js format

    }
};
http.open("GET","data/tweets.json",true);    //get method with data retreievd and true =asynchronus
http.send(); //send outside js

//jquery method
$.get("data/tweets.json",function(data){  
    console.log(data);
});
console.log("test");

/* READY STATES
O- request not initialized
1- request has been set up
2-request has been sent
3- request is in process
4- request is complete
*/
// if false= synchronous