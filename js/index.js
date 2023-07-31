///Functions
function initProjects(){ //Initializes Project Card Content Height
    var projectCount = $(".projectCard").length;
    console.log("Projects: " + projectCount);
    for(let i=0; i<projectCount; i++){
        var titleHeight = $(".projectCard").eq(i).find(".projectTitle").height();
        
        console.log("Project " + (i+1));
        console.log("Title height: " + titleHeight);
        $(".projectCard").eq(i).find(".projectContent").height(titleHeight);
    }
}
function openNav(){ //Open Navigation Menu
    $(".mobileHeader").animate({ //Animate Background Expanding
        width: "120vw",
        height: "120vh",
        top: "-10vh",
        left: "-10vw",
    }, 400,
    function(){ //On Completion
        $("nav ul").animate({ //Animate Nav Menu Sliding In
            right: "-10px",
            opacity: "1"
        }, 150);
    });
    
    console.log("Opening Nav");
}
function closeNav(){ //Close Navigation Menu
    $("nav ul").animate({ //Animate Nave Menu Sliding Out
        right: "-50px",
        opacity: "0"
    }, 150,
    function(){ //On Completion
        $(".mobileHeader").animate({ //Animate Background Shrinking
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
        }, 400);
    });
    
    console.log("Closing Nav");
}

///Event Listeners
$(".navIcon").click(function(){ //Toggle Hamburger Menu
    if($(this).hasClass("hamburger")){
        openNav();
    }
    else{
        closeNav();
    }
    $(this).toggleClass("hamburger close");
    $("body").toggleClass("scrollLock");
});

$(".projectCard").hover( //Project Card Hover
    function(){
        $(this).find(".projectContent").animate({
            height: "100%"
        }, 200);
    }, 
    function(){
        var titleHeight = $(this).find(".projectTitle").height();
        $(this).find(".projectContent").animate({
            height: titleHeight
        }, 200);
});