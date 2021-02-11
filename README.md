# Learning Redux the right way 🚀

There are mainly 4 things to look out:

1. Store
   where all the data, functionalities moreover everything is avial

2. Actions Creators
   Functions which defines the change/action to be taken over

3. Reducers
   Functions that take in the actions by the action creators and the current state, and returns a new state to be reflected in UI

4. Our Components
   Consumes the data from the store to feed the UI also calls for action creators for any change to be undertaken

We could formulate a repeated cycle for ease of analysing behind the hood.

> Thus the cycle UI -> actionCreators -> reducer -> store -> UI
