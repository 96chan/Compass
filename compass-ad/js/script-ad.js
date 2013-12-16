$(document).ready(function(){

    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var signInWidth = $('#signIn').width();
    var categoriesWidth = $('#categories').width();
    var expertsWidth = $('#experts').width();
    var newsFeedWidth = viewportWidth -265;

    $('#wrapper, #onboarding').css({
        width: viewportWidth,
        height: viewportHeight,
    });

    $('#signedInUser').css({
        width: viewportWidth,
    });

    $('#newsFeed').css({
        width: newsFeedWidth,
    });

    $('#signedInUser').animate({
        opacity:0,
        zIndex:0,
    },0);

    $('#signIn, #categories, #experts').css({
        left:viewportWidth,
    });

    $('#signIn').delay(300).animate({
        left:(viewportWidth-signInWidth)/2,
        opacity:1,
    },300);

    $("#profileMenu").animate({
        left:-300,
        opacity:0,
    },0);

    $("#feedMenu").delay(300).animate({
        left:0,
        opacity:1,
    },0);

    $('#signInClose, #signInButton').click(
        function(){
            $('#signIn').animate({
                left:-750,
                opacity:0,
            },300);

            $('#categories').delay(300).animate({
                left:(viewportWidth-categoriesWidth)/2,
                opacity:1,
            },300);
        }
    );

    $('#categoryClose, #categoryButton').click(
        function(){
            $('#categories').animate({
                left:-1000,
                opacity:0,
            },300);

            $('#experts').delay(300).animate({
                left:(viewportWidth-expertsWidth)/2,
                opacity:1,
            },300);
        }
    );

    $('#expertClose, #expertButton').click(
        function(){
            $('#experts').animate({
                left:-1000,
                opacity:0,
            },300);

            $('#onboarding').delay(400).animate({
                opacity:0,
                zIndex:0,
            },300);

            $('#signedInUser').delay(400).animate({
                opacity:1,
                zIndex:200,
            });
        }
    );

     $('.category, .expert').hover(
        function(){
            $(this).children(':nth-child(2)').css({
                display:'block',
            });
            $(this).children(':nth-child(2)').filter(':not(:animated)').animate({
                opacity:1,
            },300);
        },
        function() {
            $(this).children(':nth-child(2)').animate({
                opacity:0,
            },300);
            $(this).children(':nth-child(2)').css({
                display:'none',
            });
        }
    );

    $('.category, .expert').click(
        function(){
            if($(this).children(':nth-child(3)').css("opacity")==1){
                //remove the tick symbol
                $(this).children(':nth-child(3)').css({"display":"none","opacity":"0"});
            }
            else{
                showCheckmark($(this));
            }
        }
    );

    $('.menuToggle').click( 
        function() {
            console.log('click');
            if($('#feedMenu').css("opacity")==1){ 
                $("#feedMenu").animate({
                    left:-300,
                    opacity:0,
                },300);
                $("#profileMenu").delay(300).animate({
                    left:0,
                    opacity:1,
                },300);
            }

            else {
                $("#profileMenu").animate({
                    left:-300,
                    opacity:0,
                },300);
                $("#feedMenu").delay(300).animate({
                    left:0,
                    opacity:1,
                },400);
            } 
        }
    );

    function showCheckmark(clickTarget){
        (clickTarget).children(':nth-child(3)').css({
            display:'block',
        });
        (clickTarget).children(':nth-child(3)').animate({
            opacity:1,
        },300);
    }

});