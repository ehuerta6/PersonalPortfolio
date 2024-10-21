# Gacha Game in Java

## Overview

This Java implementation of a Gacha Game features a graphical user interface where players can collect heroes and battle against villains. The game combines elements of chance, strategy, and character progression in an engaging combat system.

## Features

- **Graphical User Interface**: Play through a user-friendly GUI built with Java Swing.
- **Character Collection**: Draw heroes from a gacha pool with different rarity levels.
- **Turn-Based Combat**: Engage in battles against villains with strategic gameplay.
- **Dynamic Battle System**: Real-time updates of character health and actions during combat.
- **Villain Defeat Counter**: Tracks the number of villains defeated in a session.
- **Interactive Menus**: Includes main menu, character selection, and battle screens.
- **Multiple Classes**: Game logic split into separate classes for better organization and maintainability.
- **Enhanced Battle Start Screen**: Displays hero and villain stats side-by-side with a central battle sprite.
- **Consecutive Victory Bonuses**: Heal percentage of max HP after certain victory milestones.
- **Improved Character Panels**: Shows character stats as color-coded progress bars.
- **Stylish Exit Game Dialog**: Confirms user's intention to exit with a visually appealing dialog.

## Files

- `GachaGameBoard.java`: Core game logic, including battle system and GUI updates.
- `GachaGame.java`: Manages the gacha drawing system and character pools.
- `GachaHero.java`: Represents hero characters with their attributes and methods.
- `GachaVillain.java`: Represents villain characters with their attributes and methods.
- `lab2-herodataset - Sheet1.csv`: CSV file containing hero data.
- `lab2-villaindataset - Sheet1.csv`: CSV file containing villain data.

## How to Run

1. Clone the repository and navigate to the project directory.
2. Ensure all Java files and CSV files are in the correct directories.
3. Compile and run the Java program:
   ```
   javac GachaGameBoard.java GachaGame.java GachaHero.java GachaVillain.java
   java GachaGameBoard
   ```
4. Use the GUI to play the game, draw characters, and engage in battles.

## GUI Features

- Main menu with options to start a new game, view rules, or exit.
- Character drawing interface with rarity displays and stat progress bars.
- Enhanced battle start screen showcasing both characters and a central battle sprite.
- Interactive battle screen with health bars, action buttons, and real-time updates.
- End-battle dialog with options to continue or return to main menu.
- Visually appealing character portraits and battle backgrounds.
- How-to-play dialog with game instructions.

This project demonstrates proficiency in Java programming, GUI design with Swing, file I/O operations, object-oriented programming principles, and implementing complex game systems while maintaining a user-friendly interface. It showcases skills in managing game state, balancing gameplay mechanics, and creating an engaging user experience with enhanced visual elements and gameplay features.
