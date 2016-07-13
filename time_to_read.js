$(document).ready(function timeToRead() {
  var fullText = $("body").text();
  var arrayOfWords = fullText.split(" ");
  var numberOfWords = arrayOfWords.length;
  var wpm = 230;
  var timeToRead = (numberOfWords/wpm).toFixed(0);
  var timeToRead_2 = parseInt(timeToRead) + 1;
  $(".time-to-read-view").text("it will take you about " + timeToRead + "~" + timeToRead_2 + " minutes to read this page.");
});
