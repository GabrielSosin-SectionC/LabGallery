$(document).ready(function(){
    console.log("1");
    
    $(".filter").click(function(){
        let category = $(this).data("category");
        if (category === "all") {
            $(".image").fadeIn();
            console.log("Fading in all images");
        } else {
            $(".image").fadeOut("fast", function() {
                $(".image." + category).fadeIn("slow");
            });
        }
    });

    $("img").click(function(){
        let imgLink = $(this).attr("src");
        $(".lightbox-img").attr("src", imgLink);
        $(".lightbox").fadeIn();
    });

    $(".lightbox").click(function(){
        $(".lightbox").fadeOut();
    });
});
