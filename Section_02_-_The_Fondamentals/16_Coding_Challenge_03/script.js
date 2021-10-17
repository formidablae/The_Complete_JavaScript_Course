/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const averageScoreDolphins = (dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length) || 0;
const averageScoreKoalas = (koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length) || 0;

console.log("Average score of the Dolphins = " + averageScoreDolphins + ".");
console.log("Average score of the Koalas = " + averageScoreKoalas + ".");

console.log(averageScoreDolphins == averageScoreKoalas ? ("Draw! Average score = " + averageScoreDolphins + ".") : ("The winners are the " + (averageScoreDolphins > averageScoreKoalas ? "Dolphins with an average score of = " + averageScoreDolphins : "Koalas with an average score of = " + averageScoreKoalas) + "."));

// BONUS 1
console.log("\nBonus 1");

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const averageScoreDolphinsBonus1 = (dolphinsScoresBonus1.reduce((a, b) => a + b, 0) / dolphinsScoresBonus1.length) || 0;
const averageScoreKoalasBonus1 = (koalasScoresBonus1.reduce((a, b) => a + b, 0) / koalasScoresBonus1.length) || 0;

console.log("Average score of the Dolphins = " + averageScoreDolphinsBonus1 + ".");
console.log("Average score of the Koalas = " + averageScoreKoalasBonus1 + ".");

if (averageScoreDolphinsBonus1 == averageScoreKoalasBonus1) {
    console.log("Draw! Average score = " + averageScoreDolphinsBonus1 + ".")
} else if (averageScoreDolphinsBonus1 >= 100 && averageScoreKoalasBonus1 >= 100) {
    console.log("The winners are the " + (averageScoreDolphinsBonus1 > averageScoreKoalasBonus1 ? ("Dolphins with an average score of = " + averageScoreDolphinsBonus1) : ("Koalas with an average score of = " + averageScoreKoalasBonus1)) + ".");
} else if (averageScoreDolphinsBonus1 >= 100) {
    console.log("The winners are the Dolphins with an average score of " + averageScoreDolphinsBonus1 + ".");
} else if (averageScoreKoalasBonus1 >= 100) {
    console.log("The winners are the Koalas with an average score of " + averageScoreKoalasBonus1 + ".");
} else {
    console.log("No winners. Both the Dolphins and the Koalas have an average score of less than 100 and the scores aren't equal.");
}

// BONUS 2
console.log("\nBonus 2");

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const averageScoreDolphinsBonus2 = (dolphinsScoresBonus2.reduce((a, b) => a + b, 0) / dolphinsScores.length) || 0;
const averageScoreKoalasBonus2 = (koalasScoresBonus2.reduce((a, b) => a + b, 0) / koalasScores.length) || 0;

console.log("Average score of the Dolphins = " + averageScoreDolphinsBonus2 + ".");
console.log("Average score of the Koalas = " + averageScoreKoalasBonus2 + ".");

if (averageScoreDolphinsBonus2 >= 100 && averageScoreKoalasBonus2 >= 100) {
    if (averageScoreDolphinsBonus2 == averageScoreKoalasBonus2) {
        console.log("Draw! Average score = " + averageScoreDolphinsBonus2 + ".")
    } else {
        console.log("The winners are the " + (averageScoreDolphinsBonus2 > averageScoreDolphinsBonus2 ? ("Dolphins with an average score of = " + averageScoreDolphinsBonus2) : ("Koalas with an average score of = " + averageScoreDolphinsBonus2)) + ".");
    }
} else if (averageScoreDolphinsBonus2 >= 100) {
    console.log("The winners are the Dolphins with an average score of " + averageScoreDolphinsBonus2 + ".");
} else if (averageScoreKoalasBonus2 >= 100) {
    console.log("The winners are the Koalas with an average score of " + averageScoreKoalasBonus2 + ".");
} else {
    console.log("No winners or draws. Both the Dolphins and the Koalas have an average score of less than 100.");
}
