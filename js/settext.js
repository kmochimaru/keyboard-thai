var counter = 0;
var myInterval = null;
var text = "";
var textbook = "";
var value;
var livalue;
var intervalId;
var livaluebefore;
var width = 0;
var timer = 30;
$(document).ready(function () {
    var elem = document.getElementById("myBar");


    $("#keyboard >ul > li")
        .mouseover(function () {

            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            compare();
        });


    $("#keyboardShift >ul > li")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            compare();
        });


    $("#keyboardCap >ul > li")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            compare();
        });



    $("#btnvoice")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(LoadingVoice, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            voice();
        });
    ;

    $("#back")
        .mouseover(function () {
            width = 0;

            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(Back, timer);
            $("#myProgress").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            window.history.back();
        });
    ;;


    function compare() {
        if (livalue == 'clear') {
            textbook = "";
            document.getElementById('textareaRead').value = '';
            livaluebefore = 0;
        } else if (livalue == 'tab') {
            document.getElementById('textareaRead').value = '';
            textbook = textbook + "\t";
            document.getElementById("textareaRead").value = textbook;
            livaluebefore = 0;
        } else if (livalue == 'cap') {
            $("#keyboard").hide();
            $("#keyboardCap").show();
            livaluebefore = 0;
        } else if (livalue == 'capshift') {
            $("#keyboardCap").show();
            $("#keyboardShift").hide();
            livaluebefore = 1;
        } else if (livalue == 'capcap') {
            $("#keyboard").show();
            $("#keyboardCap").hide();
            livaluebefore = 0;
        } else if (livalue == 'enter') {
            document.getElementById('textareaRead').value = '';
            textbook = textbook + "\n";
            document.getElementById("textareaRead").value = textbook;
            livaluebefore = 0;
        } else if (livalue == 'shift') {
            $("#keyboard").hide();
            $("#keyboardShift").show();
            livaluebefore = 1;
        } else if (livalue == 'shiftshift') {
            $("#keyboard").show();
            $("#keyboardShift").hide();
            livaluebefore = 1;
        } else if (livalue == 'shiftcap') {
            $("#keyboardCap").hide();
            $("#keyboardShift").show();
            livaluebefore = 1;
        } else if (livalue == 'delete') {
            value = document.getElementById("textareaRead").value;
            textbook = value.substring(0, value.length - 1);
            document.getElementById("textareaRead").value = textbook;
            livaluebefore = 0;
        } else {
            if (livaluebefore == 1) {
                $("#keyboard").show();
                $("#keyboardShift").hide();
            }
            responsiveVoice.speak(livalue, 'Thai Female');
            document.getElementById('textareaRead').value = '';
            value = document.getElementById("textareaRead").value;
            
            text = livalue + value;
            textbook = textbook + text;
            document.getElementById("textareaRead").value = textbook;
            livaluebefore = 0;
        }

    }


    function Loading() {
        if (width == 100) {
            width = 0;
            compare();
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }

    function LoadingVoice() {
        if (width == 100) {
            clearInterval(intervalId);
            setTimeout(function () { voice(); }, );
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
    function Back() {
        if (width == 100) {
            clearInterval(intervalId);
            window.history.back();
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
    function voice() {
        value = document.getElementById("textareaRead").value;
        responsiveVoice.speak(value, 'Thai Female');
    }
});



