MY_NAME = "Arturo";
MY_TICKET_ALERT = "http://se.ooyala.com/~hugo.deluna/bell2.mp3";
OTHER_TICKET_ALERT = "http://se.ooyala.com/~hugo.deluna/oink2.mp3";
 
 
if ($("embed").length && $("embed").remove()){
         
    next = $("div.content span.next").html();
     
    if(next == MY_NAME){
        $("body").append('<embed height="0" width="0" src="' + MY_TICKET_ALERT + '" style="position:absolute;display:hidden" />');
        console.log("Dashboard: Wake up, time to work!");
    }
    else{
        $("body").append('<embed height="0" width="0" src="' + OTHER_TICKET_ALERT + '" style="position:absolute;display:hidden" />');
        console.log("Dashboard: Calm down, it's for somebody else.");  
    }
}
else{
    console.log("Dashboard: No ticketzzz.");
}