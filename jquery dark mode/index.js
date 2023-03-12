$("h1").on("click", function() {
    $("body").toggleClass("dark");

    if ($("body").hasClass("dark"))
        $("h1").html("🌞");
    else
        $("h1").html("🌙");
        
})