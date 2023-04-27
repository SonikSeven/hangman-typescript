import * as readlineSync from 'readline-sync';

type Score = {victories: number, defeats: number};

function main() {
    console.log("H A N G M A N");
    const score = {victories: 0, defeats: 0};
    while (true) {
        switch (readlineSync.question('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ')) {
            case ("play"):
                play(score);
                break;
            case ("results"):
                console.log(`You won: ${score.victories} times.\nYou lost: ${score.defeats} times.`);
                break;
            case ("exit"):
                return;
        }
    }
}

function play(score: Score) {
    const word = ["python", "java", "swift", "javascript"][Math.floor(Math.random() * 4)];
    const userLetters = new Set();
    let attempts = 8;

    while (attempts > 0) {
        console.log("\n" + [...word].map(letter => userLetters.has(letter) ? letter : "-").join(""));
        let newLetter = readlineSync.question("Input a letter: ");
        if (newLetter.length !== 1) {
            console.log("Please, input a single letter.\n");
            continue;
        } else if (!/[a-z]/.test(newLetter)) {
            console.log("Please, enter a lowercase letter from the English alphabet.\n");
            continue;
        } else if (userLetters.has(newLetter)) {
            console.log("You've already guessed this letter.");
            continue;
        } else if (!word.includes(newLetter)) {
            console.log("That letter doesn't appear in the word.");
            attempts -= 1;
        }
        userLetters.add(newLetter);
        if ([...word].filter(letter => !userLetters.has(letter)).length === 0) {
            console.log(`\nYou guessed the word ${word}!\nYou survived!`);
            score.victories += 1;
            return;
        }
    }
    console.log("\nYou lost!");
    score.defeats += 1;
    return;
}

main();
