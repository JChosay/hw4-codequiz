# hw4-codequiz

This was a VERY difficult assignment for me; that the instructor said as much in class Friday has been a great relief to me. At the time I submitted my links, at the new due date, my result would not have fulfilled many of the criteria. As I finalize it now, it is two days past the due date, and I'm trying to sneak some commits in.

My project is fully functional, to which I say "thank God." I'm sure that there were a great many better ways to do things code-wise than the way I have done them, but there is a LOT of information being covered and deadlines are what they are. 

Briefly, my code begins by declaring a few global variables - including an array of questions, each item of which is an array consisting of a question, four answers, and the correct answer each as seperate elements within the array element. 

At page load, the landingScreen function is called - this populates the screen dynamically with some text and a button to start the quiz. When the button is clicked, both the time startQuiz and quizTimer functions are called. The latter simply populates a scorecard area with the countdown clock, while the former loads the first quiz screen, along with its question and answers. When users click each answer in response to the question, the next question is loaded and the score changed (or not changed, in the case of incorrect answers).

The questions are randomly chosen from the array each time a new question is presented. When users answer correctly, the corresponding question and its elements are removed from the questions array. I feel that this is an improvement over the method discussed in class and during office hours, which would have presented the questions in the same order each time the app loads.

If the user answers all ten quiz questions correctly within the allotted time, or if the countdown clock hits zero, a win screen presents the user with their score and an evaluation message "'Not too great,' 'not bad,' pretty good!'". This screen also generates a form with label, text input field, and submission button asking users for their initials. 

When users submit their initials, a lot of crazy Rube Goldberg nonsense happens with local storage. We want older scores to persist, so when users click the button we first have to query local storage for its current value. If it is empty, we push the first initial/score pair (with a key of "highScoreTrack") inside; otherwise, we simply append the new score to the old ones. I had to use some JSON parse/stringify witchcraft, and since I'm sure I am messing with things I don't understand here, I can only be grateful my machine hasn't come alive and eaten me whole, shoes and all.

Increasingly, this course is feeling like that part of an RPG where players have to grind the holy Christ out of the game leveling their characters up high enough to carry on to new stages. At my current level, this assignment was EXTREMELY hard; I'm glad to see the back of it, and I'm not even a LITTLE sorry that it's late.