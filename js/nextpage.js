var counter = 0;
var myInterval = null;
var text = "";
var textbook = "";
var value;
var livalue;
var intervalId;
var timer=20;
var width = 0;

$(document).ready(function () {
    var elem = document.getElementById("myBar");   
 

    $("#keyboard")
        .mouseover(function () {
            $('#body').addClass('bodyg');
            $('#head').addClass('head1');
            $('#keyboard').addClass('box1');
            $('#voicebox').addClass('box1');      
            width=0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(Nextpagekeyboard, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgress").hide();
            $('#body').removeClass('bodyg');
            $('#head').removeClass('head1');
            $('#keyboard').removeClass('box1');
            $('#voicebox').removeClass('box1');
        })
        .click(function () {
            document.location.href = "keyboard.html";
        });


        $("#voicebox")
        .mouseover(function () {
            $('#body').addClass('bodyg');
            $('#head').addClass('head1');
            $('#keyboard').addClass('box1');
            $('#voicebox').addClass('box1');      
            width=0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(Nextpageboxvoice, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgress").hide();
            $("#myProgress").hide();
            $('#body').removeClass('bodyg');
            $('#head').removeClass('head1');
            $('#keyboard').removeClass('box1');
            $('#voicebox').removeClass('box1');
        })
        .click(function () {
            document.location.href = "boxvoice.html";
        });

    
     function Nextpagekeyboard() {
         if (width == 100) {
             clearInterval(intervalId); 
             document.location.href = "keyboard.html";
         } else {
             width++;
             elem.style.width = width + '%';
             elem.innerHTML = width * 1 + '%';
         }
     }
     function Nextpageboxvoice() {
        if (width == 100) {
            clearInterval(intervalId); 
            document.location.href = "boxvoice.html";
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }

   
});



