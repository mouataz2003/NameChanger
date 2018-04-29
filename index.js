const Eris = require("eris");
var x5bzteam = new Eris("Mjg5NzQ1MjczNDk0OTYyMTg2.DbzmWA.ll6Q1jcU2eZDbfvuvyeJY2G2wp8");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "427083303208615937";
nick = "『LNT』ϺȫʊãƬȥ2003";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){

     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;

     },1);
}
x5bzteam.connect();