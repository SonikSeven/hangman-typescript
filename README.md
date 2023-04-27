# Hangman

Welcome to the Hangman Command-Line Game! This Node.js application provides a simple yet engaging text-based version of the classic Hangman game. Dive into the game, guess letters to uncover hidden words, keep track of your victories and defeats, and enjoy endless rounds of Hangman right in your terminal.

## Features

- **Play Hangman**: Guess the word letter by letter. Be careful, you only have 8 attempts!
- **Scoreboard**: Keep track of how many games you've won and lost.
- **Replayability**: With a random selection from predefined words, each game offers a fresh challenge.
- **Simple Controls**: Use the keyboard to input your guesses and navigate through the options.

## Requirements

- [Node.js](https://nodejs.org/)

## Installation

This application is written in TypeScript, so you'll need Node.js installed on your computer to run it. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

To install this project, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/SonikSeven/hangman-typescript.git
```

2. Navigate to the cloned repository:

```
cd hangman-typescript
```

3. Install the required dependencies:

```
npm install
```

## How to Run

To run the program, follow these steps:

1. Open a terminal and navigate to the directory where the script is located.
2. Run the following command:

```
npx ts-node index.ts
```

## How to Play

1. **Start the Game**

   You'll be greeted with the Hangman banner and options to play, view results, or exit.

2. **Making Choices**

   Input your choices as prompted. Type:
   - `"play"` to start a new game.
   - `"results"` to view your score.
   - `"exit"` to quit the application.

3. **Playing the Game**

   - After choosing to play you'll see a series of underscores (_) representing each letter of a hidden word.
   - Input a letter you guess might be in the word. Remember:
     - Only input single letters.
     - Use lowercase letters from the English alphabet.
   - If you guess a letter correctly, it will reveal its position(s) in the word.
   - Guess wrong, and you're one step closer to hanging — you have 8 attempts to guess the word correctly.

4. **Game Over**

   - Win by guessing all the letters in the word.
   - Lose if you fail to guess the word within 8 attempts.
   - Your victory or defeat will be recorded in the scoreboard.

## License

This project is licensed under the [MIT License](LICENSE.txt).
