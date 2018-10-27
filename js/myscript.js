
$(document).ready(function () {

    $('#save-btn').click(function(){

        number = $("#numb").val();
    
        if($.isNumeric(number) && number > 0){
            number = number
        }
        else{
            number = 0;
        }
        
        final = number + " BTC";
        $("#title").html(final);
        $("#numb").val("");
        $("#exampleModal").modal('hide');
    });    
    
    // 1
    $('#cont-save-btn').click(function(){

        var select = $('#combo :selected').text();

        if(select == "Received"){
            $(".cont-div .col-4 .n1").html("RECEIVED").css({"color": "#0BBABD"}); 
            $(".cont-div .p1").css({"background-color": "#0BBABD"}); 
        }else {
            // $(".cont-div .col-4 #sent").html("SENT");
            $(".cont-div .col-4 .n1").html("SENT").css({"color": "#F36C58"}); 
            $(".cont-div .p1").css({"background-color": "#F36C58"}); 
        }

        date = $("#sentmodel-date").val();
        amt = $("#sentmodel-numb").val() + " BTC";

        $(".cont-div .col-4 .dt").html(date);
        $(".cont-div .col-5 .amt").html(amt);

        $("#sentmodel").modal('hide');
    });

    //2
    $('#cont-save-btn1').click(function(){
        
        var select = $('#combo1 :selected').text();

        if(select == "Received"){
            $(".cont-div .col-4 .n2").html("RECEIVED").css({"color": "#0BBABD"}); 
            $(".cont-div .p2").css({"background-color": "#0BBABD"}); 
        }else {
            $(".cont-div .col-4 .n2").html("SENT").css({"color": "#F36C58"}); 
            $(".cont-div .p2").css({"background-color": "#F36C58"}); 
        }
        
        date1 = $("#sentmodel-date1").val();
        amt1 = $("#sentmodel-numb1").val() + " BTC";

        $(".cont-div .col-4 .dt1").html(date1);
        $(".cont-div .col-5 .amt1").html(amt1);
        
        $("#recmodel").modal('hide');
    });

    //3
    $('#cont-save-btn2').click(function(){

        
        var select = $('#combo2 :selected').text();
        
        if(select == "Received"){
            $(".cont-div .col-4 .n3").html("RECEIVED").css({"color": "#0BBABD"}); 
            $(".cont-div .p3").css({"background-color": "#0BBABD"});
        }else {
            $(".cont-div .col-4 .n3").html("SENT").css({"color": "#F36C58"}); 
            $(".cont-div .p3").css({"background-color": "#F36C58"}); 
        }
        
        date2 = $("#sentmodel-date2").val();
        amt2 = $("#sentmodel-numb2").val() + " BTC";

        $(".cont-div .col-4 .dt2").html(date2);
        $(".cont-div .col-5 .amt2").html(amt2);
        
        $("#sentmodel1").modal('hide');
    });

    //4
    $('#cont-save-btn3').click(function(){
        
        var select = $('#combo3 :selected').text();
        
        if(select == "Received"){
            $(".cont-div .col-4 .n4").html("RECEIVED").css({"color": "#0BBABD"}); 
            $(".cont-div .p4").css({"background-color": "#0BBABD"});
        }else {
            $(".cont-div .col-4 .n4").html("SENT").css({"color": "#F36C58"}); 
            $(".cont-div .p4").css({"background-color": "#F36C58"}); 
        }

        date3 = $("#sentmodel-date3").val();
        amt3 = $("#sentmodel-numb3").val() + " BTC";

        $(".cont-div .col-4 .dt3").html(date3);
        $(".cont-div .col-5 .amt3").html(amt3);
        
        $("#recmodel1").modal('hide');
    });

    //5
    $('#cont-save-btn4').click(function(){
        
        var select = $('#combo4 :selected').text();
        
        if(select == "Received"){
            $(".cont-div .col-4 .n5").html("RECEIVED").css({"color": "#0BBABD"}); 
            $(".cont-div .p5").css({"background-color": "#0BBABD"});
        }else {
            $(".cont-div .col-4 .n5").html("SENT").css({"color": "#F36C58"}); 
            $(".cont-div .p5").css({"background-color": "#F36C58"}); 
        }

        date4 = $("#sentmodel-date4").val();
        amt4 = $("#sentmodel-numb4").val() + " BTC";

        $(".cont-div .col-4 .dt4").html(date4);
        $(".cont-div .col-5 .amt4").html(amt4);
        
        $("#sentmodel2").modal('hide');
    });

});