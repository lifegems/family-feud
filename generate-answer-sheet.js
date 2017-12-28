var fs = require('fs');
var surveys = JSON.parse(fs.readFileSync('surveys.json', 'utf8'));
var surveyNames = Object.keys(surveys);

var answerSheet = "<h1>Answer Sheet</h1>";

surveyNames.forEach(function(key) {
   answerSheet += "<h2>" + key + "</h2>";
   answerSheet += "<ol>";
   for (var i = 0; i < surveys[key].length; i++) {
      var answerNum = i + 1;
      // answerSheet += answerNum + ". " + surveys[key][i][0] + ": **" + surveys[key][i][1] + "**\n";
      answerSheet += "<li>" + surveys[key][i][0] + "<b> (" + surveys[key][i][1] + ")</b></li>";
   }
   answerSheet += "</ol>";
});

fs.writeFileSync('answers.html', answerSheet);