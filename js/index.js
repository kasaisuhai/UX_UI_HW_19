///Functions
function expandNavMenu(){
    $(".header").animate({
        width: "100%",
        height: "100%",
        backgroundSize: "120% 120%",
        backgroundPosition: "center",
        top: 0,
        left: 0,
    });
}

///Event Listeners
$(".navIcon").click(function(){ //Toggle Hamburger
    $(this).toggleClass("hamburger close");
    // $("header").toggleClass("openNav");
    expandNavMenu();
    $("nav").toggleClass("open");
    $("nav ul").toggleClass("mobileHidden");
    $("body").toggleClass("scrollLock");
});