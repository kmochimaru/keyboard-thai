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
    var elem = document.getElementById("myBarAdd");   


    $("#keyboardAdd >ul > li")
        .mouseover(function () {
 
            width=0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgressAdd").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressAdd").hide();
           
        })
        .click(function () {
            compare();
        });


        $("#keyboardShiftAdd >ul > li")
        .mouseover(function () {
            width=0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgressAdd").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressAdd").hide();
           
        })
        .click(function () {
            compare();
        });


        
        $("#keyboardCapAdd >ul > li")
        .mouseover(function () {
            width=0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(Loading, timer);
            $("#myProgressAdd").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressAdd").hide();
           
        })
        .click(function () {
            compare();
        });

        
        
        $("#btnsave")
        .mouseover(function () {
            width=0;
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(LoadingSave, timer);
            $("#myProgressAdd").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressAdd").hide();
           
        })
        .click(function () {
            saveData();
        });


        $("#close")
        .mouseover(function () {
            width=0;
            
            livalue = ($(this).attr('rel'));
            if (intervalId) {
                clearInterval(intervalId);           
            }
            intervalId = setInterval(close, timer);
            $("#myProgressAdd").show()
        })
        .mouseout(function () {
            width=0;
            clearInterval(intervalId);
            $("#myProgressAdd").hide();
           
        });


     function compare (){
        if(livalue=='clear'){
            textbook="";
            document.getElementById('textareaReadAdd').value = '';
            livaluebefore =0;
        }else  if(livalue=='tab'){
            document.getElementById('textareaReadAdd').value = '';
            textbook = textbook + "\t";
            document.getElementById("textareaReadAdd").value = textbook;
            livaluebefore =0;
        }else  if(livalue=='cap'){
            $("#keyboardAdd").hide();
            $("#keyboardCapAdd").show();
            livaluebefore =0;
        }else  if(livalue=='capshift'){
            $("#keyboardCapAdd").show();
            $("#keyboardShiftAdd").hide();
            livaluebefore = 1;
        }else  if(livalue=='capcap'){
            $("#keyboardAdd").show();
            $("#keyboardCapAdd").hide();
            livaluebefore =0;
        }else  if(livalue=='enter'){
            document.getElementById('textareaReadAdd').value = '';
            textbook = textbook + "\n";
            document.getElementById("textareaReadAdd").value = textbook;
            livaluebefore =0;
        }else  if(livalue=='shift'){
            $("#keyboardAdd").hide();
            $("#keyboardShiftAdd").show();
            livaluebefore = 1;
        }else  if(livalue=='shiftshift'){
            $("#keyboardAdd").show();
            $("#keyboardShiftAdd").hide();
            livaluebefore = 1;
        }else  if(livalue=='shiftcap'){
            $("#keyboardCapAdd").hide();
            $("#keyboardShiftAdd").show();
            livaluebefore = 1;
        }else  if(livalue=='delete'){
            value = document.getElementById("textareaReadAdd").value;
            textbook = value.substring(0, value.length-1);
            document.getElementById("textareaReadAdd").value = textbook;
            livaluebefore =0;
        }else{
            if(  livaluebefore ==1){
                $("#keyboardAdd").show();
                $("#keyboardShiftAdd").hide();
            }
            document.getElementById('textareaReadAdd').value = '';
            value = document.getElementById("textareaReadAdd").value;
            text = livalue + value;
            textbook = textbook + text;
            document.getElementById("textareaReadAdd").value = textbook;
            livaluebefore =0;
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

     function LoadingSave() {
        if (width == 100) {
            clearInterval(intervalId); 
            setTimeout(function(){ saveData(); }, );
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
    function close() {
        if (width == 100) {
            clearInterval(intervalId);
            $('#myModal').modal('hide');
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }

     function saveData() {
        value = document.getElementById("textareaReadAdd").value;
        if(value==""){
            swal({
                title: "กรุณากรอกข้อมูล!",
                text: "   ",
                icon: "error",
                button: false,
                timer: 1500,
              });
        }else {
        if(localStorage.length>0){
           
        let dataStr = localStorage.getItem('menu');
        let dataArr = dataStr.split(",");
        dataArr.push(value)
        localStorage.setItem('menu', dataArr);
       
        }else{
            dataArr=[];
            dataArr.push(value);
            localStorage.setItem('menu', dataArr);
          
        }
        

        swal({
            title: "บันทึก!",
            text: "ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
            icon: "success",
            button: false,
            timer: 1500,
          });
          setTimeout(function(){
            window.location.reload(1);
         }, 1500);

         setTimeout(function(){
        $('#myModalAdd').modal('hide');   
         }, 1500);
     }
    }

});



