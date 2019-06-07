var counter = 0;
var myInterval = null;
var value;
var livalue;
var intervalId;
var livaluebefore;
var width = 0;
var timer =20;
$(document).ready(function () {
    var elem = document.getElementById("myBarDel");   
   
    $("#btn-del")
    .mouseover(function () {
        width=0;
        if (intervalId) {
            clearInterval(intervalId);           
        }
        var delindex = document.getElementById("valuedel").value;
        intervalId = setInterval(function () { LoadingDel(delindex); }, timer);
        $("#myProgressDel").show()
    })
    .mouseout(function () {
        width=0;
        clearInterval(intervalId);
        $("#myProgressDel").hide();
       
    })
    .click(function () {
        var delindex = document.getElementById("valuedel").value;
        DeleteStorage(delindex)
    });


    $("#close-del")
        .mouseover(function () {
            width=0;
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(close, timer);
            $("#myProgressDel").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressDel").hide();
           
        })
        .click(function () {
            $('#myModal').modal('hide');
        });


        $("#cancle")
        .mouseover(function () {
            width=0;
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(close, timer);
            $("#myProgressDel").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressDel").hide();
           
        })
        .click(function () {
            $('#myModal').modal('hide');
        });


        function close() {
            if (width == 100) {
                clearInterval(intervalId);
                $('#myModalDel').modal('hide');
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }   

        function LoadingDel(data) {
            if (width == 100) {
                clearInterval(intervalId);
               
                setTimeout(function () { DeleteStorage(data); }, );
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
        function DeleteStorage(id) {
            $('#myModalDel').modal('hide');
            var menu = localStorage.getItem('menu');
            let menuArr = menu.split(',');

            if (menuArr.length < 2) {
                localStorage.clear();
            } else {
                menuArr.splice(id, 1);
                localStorage.setItem('menu', menuArr);
            }

        
            swal({
                title: "เสร็จสื้น!",
                text: "ทำการลบข้อมูลเรียบร้อยแล้ว",
                icon: "success",
                button: false,
                timer: 1500,
             });
            setTimeout(function () {
                window.location.reload(1);
            }, 1500);
        }

  
});