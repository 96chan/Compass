var backgroundHeight = $(window).height();
var backgroundWidth = $(window).width();
var container_margin_left = $('#home').css('margin-left');

function showCheckmark(clickTarget){
        (clickTarget).children(':nth-child(3)').css({
            display:'block',
        });
        (clickTarget).children(':nth-child(3)').animate({
            opacity:1,
        },300);
}	  

$(document).ready(function(){

    $('#signinButton').click(
        function(){
              document.location.href='selection.html';
        }
    );

    $('#nextButton').click(
        function(){
            $('#interest-container').animate({
                left:-container_margin_left,
                opacity:1,
            },600);
            $('#interest-container').delay(300).css({
                display:'none'
            },400);
            $('#expert-container').delay(300).css({
                display:'block'
            });
            $('#expert-container').animate({
                // opacity:1,
            },400);
        }
    );

    $('#backButton').click(
        function(){
            $('#expert-container').animate({
                right:backgroundWidth,
                // opacity:0,
            },400);
            $('#expert-container').delay(300).css({
                display:'none'
            },400);
            $('#interest-container').delay(300).css({
                display:'block',
            });
            $('#interest-container').animate({
                left:container_margin_left,
                // opacity:1
            },400);
        }
    );
    $('#postButton').click(
        function(){
            document.location.href='timeline.html';
        }
    );
    
    $('#menuButton').click(
            function(event){
                event.stopPropagation();
                $(this).animate({
                    opacity:0,
                },200);
                $('#leftSlider').filter(':not(:animated)').animate({
                    opacity:1,
                    left:0,
                },300);
            }
            
    );

    $('#write_new_comment').click(
            function(event){
                document.location.href='write.html';        
        }
    );
    $('#my_comment').click(
            function(event){
                document.location.href='archive.html';        
        }
    );


    $('.container').click(
            function() {
                $('#leftSlider').animate({
                    opacity:0,
                    left:-260,
                },300);
                $('#menuButton').delay(300).animate({
                    opacity:1,
                },200);
            }
    );


    $('.interest,.expert').hover(
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

    $('.interest,.expert').click(
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
    $('.more').click(function(){
       $('.collapsed').css('display','block');
       $('.more').css('display','none');
    });

    // write.html
    $('#writeButton').click(function(){
        localStorage['comment']=$('#input-comment').val();
        localStorage['url']= $('#input-url').val();
        localStorage['title']= $('#input-title').val();
        document.location.href='archive.html';        

    });



});


