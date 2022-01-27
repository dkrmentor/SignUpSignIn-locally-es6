let signUp=()=>{

    let userEmail = document.getElementById("email").value
    let userPassword = document.getElementById("password").value
    // let checkSpace = userEmail.trim()
    let re = /^[^\s@]+@[^\s@]+$/;
    if (!re.test(userEmail)) {  
        alert("Kindly add correct email");  
        return false;  
      }else if(userPassword.length<6){  
        alert("Kindly add correct password");  
        return false;  
        }  


    let data = localStorage.getItem('userData');
 
    let obj = {
        userEmail,
        userPassword
    }  
    let flagUser =false;
  
  
    if(!data){
      
         
        localStorage.setItem("userData",JSON.stringify([obj]))
    }
    else{
        let usersData = JSON.parse(data);
        for(let i =0 ; i<usersData.length;i++){
            if(userEmail == usersData[i].userEmail)
            {
                alert("exist")
                flagUser = true
            }
        }
        if(!flagUser){
            usersData.push(obj);
            localStorage.setItem("userData",JSON.stringify(usersData))
        }
    
    }

}
let signIn=()=>{
    let data = localStorage.getItem('userData');
let userEmail_signin = document.getElementById("email-signin").value
let userPassword_signin = document.getElementById("password-signin").value
let flagUser2 =false;

let usersData = JSON.parse(data);
for(let i =0 ; i<usersData.length;i++){
    if(userEmail_signin == usersData[i].userEmail && userPassword_signin == usersData[i].userPassword )
    {
        alert("signin")
        flagUser2 = true
    }
}
if(!flagUser2){
    alert("error")
}


}