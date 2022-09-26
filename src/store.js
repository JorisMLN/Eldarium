import { createStore } from 'redux';

// State
const initialState = {
  kartState: false
}


// Actions --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- //

export const setKart = (newState) => ({
  type: "setKart",
  payload: newState
})


// Reducer use switch/case --- --- --- --- --- --- --- --- --- --- --- --- --- --- //

function reducer(state = initialState, action) {
  if (action.type === "setKart") {
    return {
      ...state,
      kartState: action.payload
    }
  }

  return state;
}


// export store --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- //

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
