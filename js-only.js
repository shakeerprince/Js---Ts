const input1 = document.querySelector('num1')
const input2 = document.querySelector('num2')
const button = document.querySelector('button')

function add(num1, num2){
    return num1 + num2
}

button.addEventListener('click', function(){
    console.log(add(input1.value, input2.value));
    
})
  // const button = document.querySelector("button");
// const input1 = document.getElementById("num1");
// const input2 = document.getElementById("num2");

// function add(num1, num2) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(input1.value, input2.value));
// });
    
