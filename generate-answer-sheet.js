var fs = require('fs');
var surveys = JSON.parse(fs.readFileSync('surveys.json', 'utf8'));
var surveyNames = Object.keys(surveys);

var answerSheet = "# Answer Sheet";

surveyNames.forEach(function(key) {
   answerSheet += "\n## " + key + "\n";
   for (var i = 0; i < surveys[key].length; i++) {
      var answerNum = i + 1;
      answerSheet += answerNum + ". " + surveys[key][i][0] + ": " + surveys[key][i][1] + "\n";
   }
});

fs.writeFileSync('answers.md', answerSheet);