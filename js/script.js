// This is an object template Pass in 

function person(name, age, gender, race, city){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.race = race;
  this.city = city;
}
var user = [];
var html = document.getElementById("data");

//Takes user data, stores it in an array.
function userSubmit(){
  var fname = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var race = document.getElementById('race').value;
  var gender = document.getElementById('gender').value;
  var city = document.getElementById('city').value;
  var iAge = parseInt(age);
  user.push(fname, iAge, race, gender, city);
  console.log(user);
  afterDomLoad();
}



//Displys said users data back to them
function afterDomLoad(){
  html.innerHTML = "<h1> Hi there, I am " + user[0] + "</h1><br>" + "<h2> I am " + user[1] + " years old </h2><br>" + "<h3> I am a " + user[2] + " " + user[3] + " living in " + user[4] + "</h3>";
  var player = new person(user[0], user[1], user[3], user[2], user[4]);
  console.log(player.name, player.age, player.gender, player.city, player.race);
  isEmpty();
}

//Checks if the array contains any data. If so it resets the array!
function  isEmpty(){
  if(user.length > 0){
    user = [];
  }else{
    html.inner ="<h2> There is no data. </h2>";
  }
}
