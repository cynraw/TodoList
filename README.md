# TodoList
## Overview
This project is a simple, interactive To-Do List application built with HTML, CSS, and JavaScript. The application allows users to add, manage, and delete tasks in a visually appealing and user-friendly interface. It also includes optional features to enhance user experience, such as task reordering and persistent data storage.

### Task Requirements

1. HTML

The structure of the To-Do List application includes:
- A Heading: Displays the title of the application (e.g., "My To-Do List").
- Input Field: Allows users to type new tasks.
- Add Button: Adds the entered task to the list when clicked.
- Task List: An empty list (<ul> or <ol>) where tasks are displayed.

2. CSS
The CSS file is used to style the application to ensure:

- A clean and responsive layout.
- Proper spacing for better readability.
- Usage of colors, fonts, and hover effects to enhance visual appeal.

3. JavaScript

JavaScript adds interactivity to the application with the following features:

Core Functionalities:

Add Task:

Adds a new task to the list when the "Add" button is clicked.

Clears the input field after adding the task.

Mark as Complete:

Allows users to mark tasks as complete by clicking on them (e.g., by applying a strike-through style or changing the text color).

Delete Task:

Each task has a "Delete" button that removes it from the list when clicked.

Empty List Alert:

Displays an alert message (e.g., "No more tasks to show!") if the user deletes the last task in the list.

Bonus Features:

Reorder Tasks:

Implements drag-and-drop functionality to reorder tasks.

Persistent Data:

Uses localStorage to save tasks so they persist even after the page is refreshed.
