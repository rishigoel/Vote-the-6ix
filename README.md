# Vote-the-6ix

### Overview
With the NBA All-Star Game being held in Toronto this year, we need to ensure our city is represented by voting Kyle Lowry 
and Demar Derozan into the game.  However, despite the numerous methods to vote, people are still sometimes too lazy to vote
for their hometown players.  Vote-the-6ix is a Chrome extension that allows the user to vote for Kyle Lowry and Demar Derozan 
via twitter in three simple clicks.  All you have to do is choose which player you want to vote for, and the extension generates
a tweet with their name and #NBAVote.  Either submit that tweet right away, or customize the tweet to your liking.  Help ensure the Toronto Raptors are represented by their best players at the All-Star game!

### Problem Statement

How might we automate voting Kyle Lowry and Demar Derozan into the NBA All-Star game?

### Persona - Stefan Radonovic

![alt text] (https://github.com/rishigoel/Vote-the-6ix/blob/master/Sketched%20Persona%20Pic.png)

### Design Iterations

#### Version 1:  
Based on my persona, Twitter voters are more likely to vote through their mobile phone via the Twitter app rather than use their desktop.  Therefore, I first was going to design a mobile solution.  Seeing that the persona is lazy and forgetful, I thought the best thing to do would be automate his tweets.  Maybe once a day have his Twitter automatically tweet out votes for Kyle Lowry and Demar Derozan .  However, due to Twitter API limitations, I can't send tweets out for someone, they have to physically press the tweet button. That scratched this idea.

#### Version 2:

Next, I thought about constantly parsing the user's tweet.  If they type in Kyle Lowry or Demar Derozan, #NBAVote would automatically be added to the tweet.  However, to do that on moblie would require the user to download a separate app, which they wouldn't want to do.  As for desktop, Twitter API limitations once again wouldn't allow me to do this solution

#### Version 3:

Finally, I realized that clearly I needed to do more reading into the API.  After much research, I learned that the API allows me to create pre-filled tweets.  I then thought about making a Chrome Extension to allow the user to choose their player and the rest can be seen by downloading Vote the 6ix ;)

### Tech Specs:

* Javascript function running on basic HTML page
* Uses twitter API to generate the tweet

