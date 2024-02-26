let selectField = document.querySelector(".selectField");
let list = document.querySelector("#list");
let selectText = document.querySelector("#selectText");
let options = document.querySelectorAll(".options");
let arrowIcon = document.getElementById("arrowIcon"); // for rotating arrow icon
// console.log(options);
    for(let option of options){
        option.onclick = function(){
            // console.log(this);
            selectText.innerHTML = this.textContent;
            list.classList.toggle("hide"); //after select any option then the hide box
        }
    }


//its my logic for hide box and show box 
// let data = 0;
// selectField.addEventListener("click",()=>{
//     // console.log("hello");

//     if(data == 0){
//         list.style.opacity = 1;
//         data =1;
//     }else{
//         list.style.opacity = 0;
//         data = 0;
//     }  
// });

// its a video logic for hide box and show box
selectField.addEventListener("click",()=>{
    // console.log("hello");
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
})