
    refreshAll=function(){
      setTimeout(refreshSeverity,1500);
      setTimeout(linkJira,1500);
      setTimeout(reviewStatus,1500);
      setTimeout(refreshCaseStatus,1500);
        
    }
    
    function refreshCaseStatus(){$(".x-grid3-col-CASES_STATUS").each(function(index){if($(this).html() == "Waiting Tech Support"){$(this).parent().parent().css("background","#FFFF80");}});}

    function reviewStatus(){
	$(".x-grid3-col-CASES_TYPE").each(function(index){
		if($(this).html() == "&nbsp;"){
            $(this).parent().css({"background":"#FF0000","color": "blue"});
				}
			}
		);
	
	$(".x-grid3-col-00N70000002ynPI").each(function(index){
		if($(this).html() == "&nbsp;" || $(this).html() == "General" ){
            $(this).parent().css({"background":"#FF0000","color": "blue"});
				}
			}
		);
	}

function linkJira(){$(".x-grid3-col-00N70000002ynPL").each(function(index){if(1 > 0){$(this).wrap(' <a href="https://jira.corp.ooyala.com/browse/' + $(this).html() + '" target="_blank">' );}});}

function checkIsPublished() {
    if($("#IsPublished")[0].checked){$("#CommentBody").css("background-color", "#FFEBE6");}else{ $("#CommentBody").css("background-color", "#E6FFF2");}
}

function refreshSeverity() {
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate() -1;
    //var hours = d.getHours();
    var hours = 0; //To start at 0:00
    //var minutes = d.getMinutes();
    var minutes = 0; //To start at 0:00
    var output = new Date(d.getFullYear(), month, day, hours, minutes);
    //console.log("SF compare to date: " +output)
   //console.log(output);
    //alert($(this).html() + ' -- ' + $(this).parent().attr('class'));
      $(".x-grid3-col-CASES_LAST_UPDATE").each(function(index) {
          var rowID = $(this).attr('id').substring(0,15);
          //console.log(rowID);
          var parsed = new Date($(this).html());
          //console.log(parsed);
          var statusTest = $.inArray($("#"+rowID+"_CASES_STATUS").html(),['Awaiting Release','Escalated','TAM Pending','Solution Provided/Monitoring']);
          //console.log(statusTest);                          
        if (parsed < output) {
            if (statusTest < 0) {
                $(this).parent().parent().css("background", "#87CEFA");
            }
        }
    });
     $(".x-grid3-col-00N70000002zHUF").each(function(index) {
        //alert($(this).html());
        if ($(this).html() == "Sev 2" || $(this).html() == "Sev 1") {
            $(this).parent().parent().css("background", "#FF9797");
        }
    });

    }


$(document).on("click","#00B70000007uuj0_refresh",function(){refreshAll();});

$( document ).ready(function() {

//If case listing changes, render new colors on top.
//    $(".individualPalette listViewportWrapper").change(function(){
//        alert("The text has been changed.");
//    });

//$(window).bind('load', function() {
    //Reload everything when cases table gets refreshed.
   // $("#00B70000007uuj0_refresh").on('click', alert("test"));
    //Reloads the page each 3 minutes.
    
    if ($("#CommentBody").length > 0) {
        $("#CommentBody").css({
            "width": "800px",
            "height": "400px"
        });
        checkIsPublished();
        $('#IsPublished').change(checkIsPublished);
    }

// Previously used to show timer.
//  $( ".divisionLabel" ).append( '<div>Registration closes in <span id="time"></span> minutes!</div>' );
    
    if ($(".listBody").length > 0){
        refreshAll();
    }
    
    setInterval(function(){
        $("#00B70000007uuj0_refresh").click();console.log("refreshing");refreshAll();},60000);

      
});

