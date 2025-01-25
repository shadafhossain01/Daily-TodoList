let inputs=document.querySelectorAll("input");
let error=document.querySelector(".error-text")
let checkboxes=document.querySelectorAll(".checkbox")
let h5=document.querySelector("h5");
let progressvalues=document.querySelector(".progress-value")
let progresstext=document.querySelector(".progress-text")

let obj={
    first:{
        name:"",
        complete:false
    },
    second:{
        name:"",
        complete:false
    },
    third:{
        name:"",
        complete:false
    },
}

 let localData=JSON.parse(localStorage.getItem('allGoals')) || obj;
 let count=Object.values(localData).filter((complete)=>complete.complete).length

count=Object.values(localData).filter((complete)=>complete.complete).length
progressvalues.style.width=`${(count/inputs.length)*100}%`
progresstext.innerHTML=`${count}/3 Completed`


checkboxes.forEach((checkbox)=>{
checkbox.addEventListener("click",()=>{

    let isfullfield= Array.from(inputs).every((input)=>{
        return input.value
    })

    if(isfullfield){

checkbox.parentElement.classList.toggle("completed");
h5.innerHTML="Just a step away, keep going!"

let inputId=checkbox.nextElementSibling.id;
localData[inputId].complete=!localData[inputId].complete;

count=Object.values(localData).filter((complete)=>complete.complete).length
progressvalues.style.width=`${(count/inputs.length)*100}%`

progresstext.innerHTML=`${count}/3 Completed`

 localStorage.setItem("allGoals",JSON.stringify(localData))
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

    if(localData[input.id]){  
     input.value=localData[input.id].name;
 } 

    if(localData[input.id].complete){
        input.parentElement.classList.add('completed');
    }

    input.addEventListener("input",(e)=>{

        if (localData[input.id] && localData[input.id].complete) {
            input.value = localData[input.id].name
            return
          }

        localData[e.target.id].name=input.value;
        let string=JSON.stringify(localData)
        localStorage.setItem("allGoals",string);

    })
})

