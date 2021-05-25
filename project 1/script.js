const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const form = document.getElementById("form");


function Errorcheck(a,b){
   
          const formcontrol= a.parentElement;
          formcontrol.className="form-control error";
       const small=formcontrol.querySelector("small");
       small.innerText=b;
       small.className="errorText";
   }

   function successcheck(a,b){
    
    const formcontrol= a.parentElement;
    formcontrol.className="form-control success";
    const small=formcontrol.querySelector("small");
    small.innerText=b;
    small.className="successText";
}   

form.addEventListener('submit',function(e){
    console.log("hello world");
    e.preventDefault();
    //  console.log(username.value);

    //statement for username validation.
    if(username.value ===''){
       Errorcheck(username,"Username is required");
    }else{
        successcheck(username,"Username is Valid");
    }
    
    //statement for email validation.
    if(email.value ===''){
        Errorcheck(email,"email is required");
     }else{
         successcheck(email,"email is Valid");
     }

     //statement for password validation.
     if(password.value ===''){
        Errorcheck(password,"password is required");
     }else{
         successcheck(password,"password is Valid");
     }
     

     //statement for password2 validation.
     if(password2.value ===''){
        Errorcheck(password2,"Confirm your Password");
     }else{
         successcheck(password2,"password is Valid");
     }

    // else if(username.value<8){
    //     lengthcheck(username,"Name characters must be 8 or greater");
    // }
    // else if(username.value==>8){
    //     successcheck(username,"Valid Username");
    // }   
}
);