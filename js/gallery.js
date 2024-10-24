

$(function(){
    $('#menu-bar').click(function(){
        $('.navlist').slideToggle(1000,function(){
            console.log("Slide toggle done")
        });
    })
})
