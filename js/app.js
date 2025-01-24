let inputs=document.querySelectorAll("input");
let error=document.querySelector(".error-text")
let checkboxes=document.querySelectorAll(".checkbox")
let h5=document.querySelector("h5");
let progressvalues=document.querySelector(".progress-value")
let progresstext=document.querySelector(".progress-text")
let count=0;

checkboxes.forEach((checkbox)=>{
checkbox.addEventListener("click",()=>{

    let isfullfield= Array.from(inputs).every((input)=>{
        return input.value
    })

    if(isfullfield){
checkbox.parentElement.classList.toggle("completed");
progressvalues.style.width="33.33%"
h5.innerHTML="Just a step away, keep going!"

if(count<3){
    count++;
progresstext.innerHTML=`${count}/3 Completed`;
}
           }
    else{
        error.style.opacity="1";
    }
})
})

inputs.forEach((input)=>{
    input.addEventListener("focus",()=>{
        error.style.opacity="0"
    })
})

  

