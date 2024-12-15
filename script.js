let input1 = document.getElementById("userInput")
let input2 = document.getElementById("passInput")
let leftE = document.getElementById("lefteye")
let rightE = document.getElementById("righteye")

input1.addEventListener("focus",()=>{

    leftE.style.top = "84px"
    rightE.style.top = "84px"
    
})
input2.addEventListener("focus",()=>{

    leftE.style.top = "60px"
    rightE.style.top = "60px"
    
})
input1.addEventListener("blur",()=>{

    leftE.style.top = "75px"
    rightE.style.top = "75px"
    leftE.style.left = "110px"
    rightE.style.left = "174px"
    
})
input2.addEventListener("blur",()=>{

    leftE.style.top = "75px"
    rightE.style.top = "75px"
    leftE.style.left = "110px"
    rightE.style.left = "174px"
    
})
let addleft= 105
let addright= 165
input1.addEventListener("keydown",(event)=>{




    // console.log(event.keyCode);
    

if(event.keyCode==8 && addleft > 107){
    addleft--
    addright--


}else if( addleft <= 124 ){
    addleft++
    addright++
    console.log(addleft);
    
}

     leftE.style.left = `${addleft}px`
     rightE.style.left = `${addright}px`
    
  
    
})

// input1.addEventListener("",()=>{

//     addleft+=1
//     addright+=1

//     console.log(addleft);
    

//      leftE.style.left = `${addleft}px`
//      rightE.style.left = `${addright}px`
    
  
// })
