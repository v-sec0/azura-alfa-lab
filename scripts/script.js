$(document).ready(function () { 
  let replyMessage = $("#response");
  replyMessage.text("");

   let gamertag = $("#gamertag").val()

  $("#btnJudgeUsername")
    .click(function () {
    replyMessage.text(`The gamertag ${gamertag} is taken. Maybe try ${gamertag}123 or ${gamertag}01.`);
  });
  
});