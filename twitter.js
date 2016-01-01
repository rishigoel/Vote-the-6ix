function kLowry () {

var text = "Kyle Lowry"; 
window.open("https://twitter.com/intent/tweet?button_hashtag=NBAVote "+text);


	
}

function derozan () {

var text = "Demar Derozan"; 
window.open("https://twitter.com/intent/tweet?button_hashtag=NBAVote "+text);

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('kLow').addEventListener('click', kLowry);

});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('demar').addEventListener('click', derozan);

});
