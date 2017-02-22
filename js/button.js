$("input[type='text']").on("keyup", function(){
    if($(this).val() != ""){
        $("input[type='submit']").removeAttr("disabled");
    }
});