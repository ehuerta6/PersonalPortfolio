# Wordle Game in Java

## Overview
This Java implementation of the popular Wordle game features both console and graphical user interfaces. Players attempt to guess a hidden five-letter word within five tries, receiving color-coded feedback for each guess.

## Features
- **Dual Interface**: Play through console or a user-friendly GUI built with Java Swing.
- **Guess Feedback**: Real-time color-coded feedback on guessed words:
  - Green for correct letters in the right position.
  - Yellow for correct letters in the wrong position.
  - Red for incorrect letters.
- **Word Validation**: Checks guesses against a dictionary for valid words.
- **File Handling**: Reads word lists from external files (answers.txt and dictionary.txt).
- **Interactive GUI**: Includes a main menu, game rules, and gameplay examples.
- **Multiple Classes**: Game logic split into separate classes for better organization and maintainability.

## Files
- `Main.java`: Entry point, handles the game flow and GUI initialization.
- `WordleGame.java`: Core game logic, including word checking and GUI updates.
- `WordBank.java`: Manages word lists and file reading.
- `WordleLetter.java`: Represents individual letters and provides utility methods for displaying rules and examples.
- `answers.txt`: Contains the list of possible answers.
- `dictionary.txt`: Contains a broader list of valid guessable words.

## How to Run
1. Clone the repository and navigate to the project directory.
2. Ensure `answers.txt` and `dictionary.txt` are in the same directory as the `.java` files.
3. Compile and run the Java program:
   ```
   javac Main.java WordleGame.java WordBank.java WordleLetter.java
   java Main
   ```
4. Use the GUI to play the game, view rules, or see gameplay examples.

## GUI Features
- Main menu with options to play, view rules, and see examples.
- Interactive game board with color-coded feedback.
- End-game dialog with option to play again or exit.
- Visually appealing instructions and gameplay examples.

This project demonstrates proficiency in Java programming, GUI design with Swing, file I/O, and implementing game logic while maintaining a user-friendly interface.
