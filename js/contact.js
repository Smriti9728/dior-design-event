console.log($)
$(function(){
    $('#menu-bar').click(function(){
        $('.navlist').slideToggle(1000,function(){
            console.log("Slide toggle done")
        });
    })


// $("#userCheck").hide();
// $("#phnCheck").hide();
// $("#mailCheck").hide();

// username validation
// $("#username").keyup(username_check)

// function username_check(){
//     let data=$("#username").val();
//     console.log("User Value:",data);
//     if(data.length<1){
//         $("#userCheck").show();
//         $("#userCheck").html("**Requird field");
//     }
//     else if(data.length<5){
//         $("#userCheck").show();
//         $("#userCheck").html("**Minimum 5 characters");
//     }
//     else{
//         $("#userCheck").hide(); 
//     }
// }


// $("#phnCheck").keyup(username_check)

// function username_check(){
//     let data=$("#phone").val();
//     console.log("User Value:",data);
//     if(data.length<1){
//         $("#phnCheck").show();
//         $("#phnCheck").html("**Requird field");
//     }
//     else if(data.length<10){
//         $("#phnCheck").show();
//         $("#phnCheck").html("**Minimum 5 characters");
//     }
//     else{
//         $("#phnCheck").hide(); 
//     }
// }


// $("#mailCheck").keyup(username_check)

// function username_check(){
//     let data=$("#email").val();
//     console.log("User Value:",data);
//     if(data.length<1){
//         $("#mailCheck").show();
//         $("#mailCheck").html("**Requird field");
//     }
//     else if(data.length<5){
//         $("#mailCheck").show();
//         $("#mailCheck").html("**Minimum 5 characters");
//     }
//     else{
//         $("#mailCheck").hide(); 
//     }
// }


})