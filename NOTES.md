## REDUX

- a predictable state container for javascritp applications
- Redux is a collection of al the data that describes the app
- It is a single object referred to as the state
- Redux stores the state of the app
- Redux core topic is reducers

## REDUCERS

- a reducer is a function that returns a piece of the applications state
- there can be many pieces of state so there can be many reducers
- ** RECOMMENDED to name reducer files with reducer in the title - reducer_books.js
- Must be exported - export default function() { ... }
- Any file that imports the created reducer will have access to it

2 step Process:
1) create reducer
2) wire it into the application

## ReactRedux

- A separate library used to connect Redux with React  (State data storage to View)
- I create a Component as a Container
- A Container is a React Component that has a direct connection to the state manged by Redux.
- also considered a smart Component compared to a dumb Component
- in general I want the most parent container that cares about a piece of state to be a Container
- whenever I forge a connection between a Component and Redux it turns the Component into a Container

## Changing state

- I use Actions and Action Creators to change the application's state
- Everything in a React app starts off with an event triggered by a user (directly or indirectly)
1) Any user event can call an Action Creator 
2) An Action Creator is a function that returns an action
3) That action is an object that is automatically sent to all reducers
4) reducers can choose (depending on the action) to return a different piece of state
5) the newly returned piece of state gets piped in to the Application state
6) the application state gets piped into the React Application which causes all the components to re-render