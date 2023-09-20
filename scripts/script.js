$(document).ready(function () { 
  let replyMessage = $("#response");
  replyMessage.text("");
  
  $("#btnJudgeUsername")
    .click(function () {
    replyMessage.text("What's up " + $("#gamertag").val() + ", your gamertag is MAJOR EPIC!  ");
  });
  
});