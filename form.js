function validateForm(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var message=document.getElementById("comment");
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if(message.value=="" || name.value=="" || email.value=="" ){
        alert("please fill all the data");
        return false;
    }
    if(name.value.length<3){
        alert("please enter a valid name");
        return false;
    }
    if(!email.value.match(validRegex)){
        alert("email address not valid");
        return false;
    }
    if(message.value.length<10){
        alert("message should be atleast 8 letter long");
        return false;
    }

    return true;
}


// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })
