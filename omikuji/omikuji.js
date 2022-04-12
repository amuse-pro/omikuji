let username;
let userresult;
username=prompt("名前を教えてください");
if(username==""){
    username="名無し";
}
document.getElementById("name").innerHTML = username;

let rand = Math.floor( Math.random() * 5) ;
if (rand == 0) {
    userresult = "大吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }
  document.getElementByld("result").innerHTML=userresult;