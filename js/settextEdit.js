var counter = 0;
var myInterval = null;
var text = "";
var textbook = "";
var value;
var livalue;
var intervalId;
var livaluebefore;
var width = 0;
var timer = 20;
$(document).ready(function () {
    var elem = document.getElementById("myBarEdit");


    $("#keyboard >ul > li")
        .mouseover(function () {

            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgressEdit").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressEdit").hide();

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
            $("#myProgressEdit").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressEdit").hide();

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
            $("#myProgressEdit").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressEdit").hide();

        })
        .click(function () {
            compare();
        });


    $("#btnEdit")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(LoadingUpdate, timer);
            $("#myProgressEdit").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressEdit").hide();

        })
        .click(function () {
           Update();
        });


    $("#closeEdit")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(close, timer);
            $("#myProgressEdit").show()
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressEdit").hide();

        });


    function compare() {
        if (livalue == 'clear') {
            textbook = "";
            document.getElementById('textareaReadEdit').value = '';
            livaluebefore = 0;
        } else if (livalue == 'tab') {
            document.getElementById('textareaReadEdit').value = '';
            textbook = textbook + "\t";
            document.getElementById("textareaReadEdit").value = textbook;
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
            document.getElementById('textareaReadEdit').value = '';
            textbook = textbook + "\n";
            document.getElementById("textareaReadEdit").value = textbook;
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
            value = document.getElementById("textareaReadEdit").value;
            textbook = value.substring(0, value.length - 1);
            document.getElementById("textareaReadEdit").value = textbook;
            livaluebefore = 0;
        } else {
            if (livaluebefore == 1) {
                $("#keyboard").show();
                $("#keyboardShift").hide();
            }
            textbook = document.getElementById("textareaReadEdit").value;
            document.getElementById('textareaReadEdit').value = '';
            value = document.getElementById("textareaReadEdit").value;
            text = livalue + value;
            textbook = textbook + text;
            document.getElementById("textareaReadEdit").value = textbook;
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
            width = 0;
            setTimeout(function () { voice(); }, );
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }

    function LoadingUpdate() {
        if (width == 100) {
            width = 0;
            setTimeout(function () { Update(); }, );
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
    function close() {
        if (width == 100) {
            clearInterval(intervalId);
            $('#myModalEdit').modal('hide');
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
    function voice() {
        value = document.getElementById("textareaReadEdit").value;
        responsiveVoice.speak(value, 'Thai Female');
    }
    function Update() {
        valueindex = document.getElementById("value").value;
        value = document.getElementById("textareaReadEdit").value;
        if (value == "") {
            swal({
                title: "กรุณากรอกข้อมูล!",
                text: "   ",
                icon: "error",
                button: false,
                timer: 1500,
            });
        } else {
            var res = [];
            var menu = localStorage.getItem('menu');
            let menuArr = menu.split(',');

            for (i = 0; i < menuArr.length; i++) {

                if (i == valueindex) {
                    res.push(value);
                } else {

                    res.push(menuArr[i]);
                }
            }



            localStorage.setItem('menu', res);

            swal({
                title: "เสร็จสื้น!",
                text: "ทำการแก้ไขข้อมูลเรียบร้อยแล้ว",
                icon: "success",
                button: false,
                timer: 1500,
            });
            setTimeout(function () {
                window.location.reload(1);
            }, 1500);

            setTimeout(function () {
                $('#myModalEdit').modal('hide');
            }, 1500);
        }
    }
});



