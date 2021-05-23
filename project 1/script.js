const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const form = document.getElementById("form");


function Errorcheck(a,b){
    //    a.parentElement.className="flow-control error";
          const formcontrol= a.parentElement;
          formcontrol.className="flow-control error";
       const m=a.querySelector("small");
       m.innerText=b;
   }

   function successcheck(a,b){
    // a.parentElement.className="flow-control success";
    const formcontrol= a.parentElement;
    formcontrol.className="flow-control success";
    const m=a.querySelector("small");
    m.innerText=b;
}   

form.addEventListener("submit",function(e){
    e.preventDefault();

    if(username.value==""){
       Errorcheck(username,"Username is required");
    }else{
        successcheck(username,"Username is Valid")
    }
    // else if(username.value<8){
    //     lengthcheck(username,"Name characters must be 8 or greater");
   // }
    // else if(username.value==>8){
    //     successcheck(username,"Valid Username");
   // }

    
}
);