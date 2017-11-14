var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum= 0;
  this.period =parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt =fullTxt.substring(0, this.txt.length-1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length+1);
  }

this.el.innerHTML ='<span class="wrap">'+this.txt+'</span>'
   var that = this;
   var delta = 200 - Math.random() * 100;
   if (this.isDeleting) { delta /= 2;}
   if (!this.isDeleting && this.txt === fullTxt) {
     delta = this.period;
     this.isDeleting = true;
   } else if (this.isDeleting && this.txt === fullTxt) {
     this.isDeleting = false;
     this.loopNum++;
     delta = 500;
   }
 setTimeout(function() {
   that.tick();
 }, delta);
 }
 window.onload= function() {
   var elements =
   document.getElementsByClassName('typewrite');
   for (var i=0; i<elements.length; i++) {
     var toRotate =
     elements[i].getAttribute('data-type');
       var period = elements[i].getAttribute('data-period');
           if (toRotate) {
             new TxtType(elements[i],
            JSON.parse(toRotate), period);
           }
   }

  //this is typewite css inside my js
  var css = document.createElement("style");
  css.type ="text/css";
  css.innerHTML =".typewrite> .wrap { border-right: 0.08em solid ##E44424}";

};
function toggleSidebar(ref) {
  ref.classList.toggle('active');
  document.getElementById('sidebar').classList.toggle('active');
}
// i will imsert some simple jquerry code here



  var userArray = [];
function divisibility (input) {
  userArray=[];

  var userinput = parseInt(input);

  for (var i = 0; i <= input; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
      userArray.push('Ping-Pong');
    } else if (i % 3 == 0) {
      userArray.push('Ping');
    } else if (i % 5 == 0) {
      userArray.push('Pong');
    } else {
      userArray.push(i);
    }
    // $('#list').push("<li>" + i);
  };

  return userArray;
};
$(document).ready(function(){
  $('button#submit').click(function() {
    $("#list").text("");
     var input =divisibility( $('#mynumber').val());

  console.log(userArray);

  for (var i = 0; i < userArray.length; i++) {
        $("#list").append("<li>"+userArray[i]+"</li>");
  }
  });

// different
  $("#showme").click(function() {
    $("#hidden").toggle();
  });
  // Instructions
  $("#display").click(function() {
    $("#Thidden").toggle();
  });

});
