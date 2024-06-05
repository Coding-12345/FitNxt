var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
// var button=document.getElementById("button");
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
const box = document.querySelector(".getExercise");

function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
    console.log(p)
    box.innerHTML=""
    const a = document.createElement("a")
    const btn = document.createElement("button")
    btn.innerText+="Get Started!"
    let url;
    if (p[4]>18.5 && p[4]<24.9){
      url="home_normal"
    }
    else if(p[4]>20){
      url="sample2/";
    }
    // else if(
    
    // )

    a.setAttribute("href",url);
    a.append(btn);
    box.append(a);
    // box.append(btn);
   }
  
}
var p=[]
var bmi
function countBmi(){
  p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("Gym");
  }else if(female.checked){
    p.push("Home");
  }
  
  bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  p.push(bmi)  
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}
// function getdata(){
//   console.log("I received a click")
// }





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// p.push(bmi)

// button.addEventListener('click',function(){
//   var url1;
//   url1=document.getElementById("url")
//   console.log("hi")
//   if (age<20){
      
//       url1.setAttribute('href','/templates/sample.html')
//   }
// });
// p.push(bmi)
// button.addEventListener('click',function(){
//   // var xhr = new XMLHttpRequest();
//   // var url = '/process_data/';

//   // xhr.open('POST', url, true);
//   // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   // xhr.onreadystatechange = function () {
//   //     if (xhr.readyState === 4 && xhr.status === 200) {
//   //         console.log('Data sent successfully:', xhr.responseText);
//   //     }
    
//   // };
//   // var data = 'age=' + encodeURIComponent(p[0]) +
//   //            '&height=' + encodeURIComponent(p[1]) +
//   //            '&weight=' + encodeURIComponent(p[2]) +
//   //            '&gender=' + encodeURIComponent(p[3]) +
//   //            '&bmi=' + encodeURIComponent(p[4]);

//   // xhr.send(data);
//   var xhr = new XMLHttpRequest();
// var url = "/process_data/";

// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// // Add the following line to include the CSRF token in the request header
// xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log("Data sent successfully:", xhr.responseText);
//     } else {
//       console.error("Failed to send data:", xhr.statusText);
//     }
//   }
// };

// var data =
//   "age=" +
//   encodeURIComponent(p[0]) +
//   "&height=" +
//   encodeURIComponent(p[1]) +
//   "&weight=" +
//   encodeURIComponent(p[2]) +
//   "&gender=" +
//   encodeURIComponent(p[3]) +
//   "&bmi=" +
//   encodeURIComponent(p[4]);
// console.log(data)
// xhr.send(data);
// });

// // Function to get the CSRF token from cookies
// function getCookie(name) {
// var cookieValue = null;
// if (document.cookie && document.cookie !== "") {
//   var cookies = document.cookie.split(";");
//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i].trim();
//     // Check if the cookie name matches the expected format
//     if (cookie.substring(0, name.length + 1) === name + "=") {
//       cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//       break;
//     }
//   }
// }
// return cookieValue;
// }

    