# 📋 Interview Assessment

This repository contains the solutions to three interview assessment tasks. Each solution is provided in a separate folder with the associated code and test cases.

## 📂 Repository Structure

- **Task 1**: Contains the implementation of the *Train Composition* problem using a doubly linked list.
   - [🔗 `trainComposition_linkedlist.js`](Task%201/trainComposition_linkedlist.js): The JavaScript code that implements the Train Composition.
   - [🔗 `trainComposition.test.js`](Task%201/trainComposition.test.js): The test file with several test cases to validate the implementation.
- **Task 2**: Contains the SQL queries for two questions.
   - [🔗 `queries.txt`](Task%202/queries.txt): A text file with SQL queries.
- **Task 3**: Contains the implementation of the *Tic-Tac-Toe* game.
   - [🔗 `tic-tac-toe.js`](Task%203/tic-tac-toe.js): The JavaScript code that implements the Tic-Tac-Toe game.
   - [🔗 `tic-tac-toe.test.js`](Task%203/tic-tac-toe.test.js): The test file with several test cases to validate the game implementation.

## 🚂 Task 1: Train Composition

The Train Composition problem is implemented using a doubly linked list. The `Train` object has two methods `attachWagonFromLeft` and `attachWagonFromRight`, which take an integer (the wagon ID), and attach it to the left or right side of the train, respectively. It also has methods `detachWagonFromLeft` and `detachWagonFromRight` which remove and return the wagon ID from the left or right side of the train, respectively.

The tests ensure that the `Train` object behaves correctly when attaching and detaching wagons.

## 🗃 Task 2: SQL Queries

This task involves writing SQL queries for a relational database containing the tables `CUSTOMER`, `SALES`, and `VIP`. The queries are stored in a text file (`queries.txt`) and include:
- A query that shows total sales by customer.
- A query that creates a list of customers that are not VIPs.

## ❌⭕ Task 3: Tic-Tac-Toe

This task involves implementing a Tic-Tac-Toe game in JavaScript. The `Game` class is able to keep track of a game's state and tell you if the game has been won or not. The game can be played on a board of any size. The `move` method allows a player with a given ID to make a move at specified x and y coordinates.

The tests ensure that the game behaves correctly when making moves, and that it correctly identifies winning conditions or a tie.

## 🚀 Running the Tests

To run the tests for Task 1 and Task 3, follow these steps:
1. Open a terminal or command prompt.
2. Navigate to the directory containing the repository.
3. Run `npm install` to install the necessary dependencies.
4. Navigate to the specific task directory where you want to run the tests (e.g., `Task 1` or `Task 3`).
5. Run `npm test <test-filename>` to run the tests for that task. Replace `<test-filename>` with the appropriate test file name (e.g., `trainComposition.test.js` or `tic-tac-toe.test.js`).

## 👤 Author
Chinmay Tagade
