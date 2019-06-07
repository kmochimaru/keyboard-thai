
//Create value       



var counter = 0;
var myInterval = null;
var text = "";
var textbook = "";
var value;
var livalue;
var intervalId;
var livaluebefore;
var width = 0;
var elemJS;
var DataStorage = [];
var scrollbarindex = 0;
var scrollbarinterval;
var scroll;
var timer = 20;

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    // รองรับการใช้งาน Speech Recognition
    console.log("รองรับการใช้งาน Speech Recognition")
  }
  if ("SpeechSynthesisUtterance" in window) {
    // รองรับการใช้งาน Speech Synthesis
    console.log("รองรับการใช้งาน Speech Synthesis")
  }
$(document).ready(function () {
 
    var elem = document.getElementById("myBar");
    var elemCenter = document.getElementById("myBarCenter");

    $("#upPage")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(upPage, timer);
            $("#myProgressCenter").show();

        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressCenter").hide();

        })
        .click(function () {
            var ScrollTop = parseInt($(window).scrollTop());
            $('body,html').animate({
                scrollTop: ScrollTop - 500
            }, 800);
        });

    $("#downPage")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(downPage, timer);
            $("#myProgressCenter").show();
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgressCenter").hide();

        })
        .click(function () {

            var ScrollTop = parseInt($(window).scrollTop());
            $('body,html').animate({
                scrollTop: ScrollTop + 500
            }, 800);
        });



    $("#back1")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(Back, timer);
            $("#myProgress").show();
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            window.history.back();
        });


    $("#add")
        .mouseover(function () {
            width = 0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(showmodal, timer);
            $("#myProgress").show();
        })
        .mouseout(function () {
            width = 0;
            clearInterval(intervalId);
            $("#myProgress").hide();

        })
        .click(function () {
            $('#myModal').modal('show');
        });

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
    function upPage() {
        if (width == 100) {
            var ScrollTop = parseInt($(window).scrollTop());
            $('body,html').animate({
                scrollTop: ScrollTop - 500
            }, 800);
            width = 0;
        } else {
            width++;
            elemCenter.style.width = width + '%';
            elemCenter.innerHTML = width * 1 + '%';
        }
    }
    function downPage() {
        if (width == 100) {
            var ScrollTop = parseInt($(window).scrollTop());
            $('body,html').animate({
                scrollTop: ScrollTop + 500
            }, 800);
            width = 0;
        } else {
            width++;
            elemCenter.style.width = width + '%';
            elemCenter.innerHTML = width * 1 + '%';
        }
    }
    function showmodal() {
        if (width == 100) {
            clearInterval(intervalId);

            $('#myModal').modal('show');
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }



    container = document.getElementById('container');

    if (localStorage.length > 0) {
        //Get value       

        let dataStr = localStorage.getItem('menu');
        //String to Array

        // v let dataArr = dataStr.split(',');ar dataArr = JSON.parse("[" + string + "]");
        let dataArr = dataStr == null ? " " : dataStr.split(",");

        if (dataArr !== " ") {

            //Array Loop     
            dataArr.forEach(function (element, index) {
                // console.log(index);
                container.innerHTML +=
                    `
          
                <div class="w3-col s6  btninbox" >
                <div id="value" hidden></div>
                 <button id="btnD${index}"  class="btn  btn-lg btn-danger pull-right"><i class="fa fa-trash"></i></button>
                 <button id="btnE${index}" data-target="${index}" class="btn  btn-lg btn-info pull-right"><i class="fa fa-edit"></i></button>
               

                <div class="w3-hover-pale-red box" id="${index}" style="z-index: 100;center:0;">
                ${element}
                <div id="myProgress${index}"  class="myProgress " style="display: none;	z-index: -1;left:0px;" >
                <div id="myBar${index}" class="myBar ">0%</div>
                </div>
                </div>     
          
               
            `;



                $(".btninbox")
                    .mouseover(function ($event) {
  
                        var chk = (event.target.id).substring(0, 4);
                        var chkindex = (event.target.id).substring(4, event.target.id.length);
                         $('#div'+chkindex).addClass('bg');
                        if (chk == 'btnD') {
                            width = 0;
                            if (intervalId) {
                                clearInterval(intervalId);
                            }
                            intervalId = setInterval(function () { LoadingDeleteStorage(chkindex); }, timer);

                            $("#myProgress" + chkindex).show();
                        } else if (chk == 'btnE') {
                            width = 0;
                            if (intervalId) {
                                clearInterval(intervalId);
                            }
                            intervalId = setInterval(function () { LoadingModaledit(chkindex); }, timer);

                            $("#myProgress" + chkindex).show();
                        }

                    })
                    .mouseout(function ($event) {
                        var chkindex = (event.target.id).substring(4, event.target.id.length);
                        width = 0;
                        clearInterval(intervalId);
                        $("#myProgress" + chkindex).hide();
                    })
                    .click(function () {
                        var chk = (event.target.id).substring(0, 4);
                        var chkindex = (event.target.id).substring(4, event.target.id.length);
                        if (chk == 'btnD') {

                            $('#myModalDel').modal('show');
                            document.getElementById("valuedel").value = chkindex;

                        } else if (chk == 'btnE') {
                            $('#myModalEdit').modal('show');

                            document.getElementById("value").value = chkindex;
                            document.getElementById("textareaReadEdit").value = dataArr[chkindex];


                        }
                    });


                $(".box")
                    .mouseover(function ($event) {
                        var data = event.target.id;

                        width = 0;
                        if (intervalId) {
                            clearInterval(intervalId);
                        }
                        intervalId = setInterval(function () { LoadingVoice(data) }, timer);

                        $("#myProgress" + event.target.id).show();
                    })
                    .mouseout(function ($event) {
                        width = 0;
                        clearInterval(intervalId);
                        $("#myProgress" + event.target.id).hide();



                    });





                function LoadingModaledit(data) {
                    var elemlopp = document.getElementById("myBar" + data);
                    if (width == 100) {
                        clearInterval(intervalId);
                        setTimeout(function () { showmodalEdit(data); }, );
                        $("#myProgress" + data).hide();
                    } else {
                        width++;
                        elemlopp.style.width = width + '%';
                        elemlopp.innerHTML = width * 1 + '%';
                    }
                }
                function showmodalEdit(data) {
                    if (width == 100) {
                        clearInterval(intervalId);

                        $('#myModalEdit').modal('show');

                        document.getElementById("value").value = data;
                        document.getElementById("textareaReadEdit").value = dataArr[data];
                    } else {
                        width++;
                        elem.style.width = width + '%';
                        elem.innerHTML = width * 1 + '%';
                    }
                }


                function LoadingDeleteStorage(data) {
                    var elemlopp = document.getElementById("myBar" + data);
                    if (width == 100) {
                        clearInterval(intervalId);
                        $('#myModalDel').modal('show');
                        document.getElementById("valuedel").value = data;
                        //setTimeout(function () { DeleteStorage(data); }, 1);
                    } else {
                        width++;
                        elemlopp.style.width = width + '%';
                        elemlopp.innerHTML = width * 1 + '%';
                    }
                }
                function LoadingVoice(data) {
                    var elemlopp = document.getElementById("myBar" + data);
                    if (width == 100) {
                        clearInterval(intervalId);
                        voice(data)
                    } else {
                        width++;
                        elemlopp.style.width = width + '%';
                        elemlopp.innerHTML = width * 1 + '%';
                    }
                }
                function voice(data) {
                    var valuedata = dataArr[data]
                   responsiveVoice.speak(valuedata, 'Thai Female');
        
          
            	
             
                }
                
        

            });

        }

    }


});




