let screenResult=document.getElementById("reultScreen")
const button=document.getElementsByClassName("btn")
for(let i=0; i<button.length; i++){
    button[i].addEventListener("click",()=>{
            if (button[i].value==="AC"){
                clearFunction()
            }
            else if(button[i].value==="DEL"){
                screenResult.textContent=screenResult.textContent.slice(0,-1)
            } 
            else if (button[i].value==="="){
                screenResult.textContent=eval(screenResult.textContent)
            }
            else{
                if(limitNumbers()){
                    screenResult.textContent+=button[i].value
                }
                
            }   
        
    })
}
const clearFunction=()=>{
    screenResult.textContent=""
}
const limitNumbers=()=>{
    return screenResult.textContent.length<=12
}