# Folder structure:
src/
│
├── components/
│   ├── Header.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── Footer.jsx
│   └── FilterButton.jsx
│
├── context/
│   └── TodoContext.jsx
│
├── config/
│   └── filterConfig.js
│
├── images/
│   └── expand-arrow.png
│
├── pages/
│   └── Home.jsx (todoApp.jsx)
|
├── routes/
│   └── routes.jsx 
|
├── App.jsx
└── index.js


# useRef Usage:
1. **Direct DOM interaction:**
useRef allows to directly access and manipulate DOM elements (like focusing an input, scrolling into view, etc.).

2. **Does not cause re-renders:**
Updating ref.current does not cause a component to re-render — it's a mutable value that persists across renders.

3. **Used to focus inputs / scroll to elements:**
a common use case is auto-focusing an input field or scrolling an element into view.

# useContext Usage:
1. **Global state management:**
Context allows sharing state and functions across multiple components without prop drilling.

2. **Simplifies data flow:**
Makes it easy to pass data/functions to deeply nested components.

# FilterFunction 
1. used for scalability and resuability.

# useLocation Usage:
1. uselocation helps to get the query params from the url(access current URL, including pathname and query parameters).