
//actions dispatch
const addCounter = () => {
  const state = store.getState();
  const newCounter = {
    id: state.length > 0 ? state.length + 1 : 1,
    value: 0,
  };
  store.dispatch(addCounterItem(newCounter));
};

const incrementCounter = (id) => {
  const inputValue = document.getElementById(`input-${id}`);
  store.dispatch(increment(id, +inputValue.value));
};
const decrementCounter = (id) => {
  const inputValue = document.getElementById(`input-${id}`);
  store.dispatch(decremnet(id, +inputValue.value));
};
const resetCounter = () => {
  store.dispatch(resetCount());
};

//actions
const addCounterItem = (counter) => {
  return {
    type: ADD_COUNTER,
    payload: counter,
  };
};
const increment = (id, value) => {
  return {
    type: INCREMENT,
    payload: {
      id,
      value,
    },
  };
};
const decremnet = (id, value) => {
  return {
    type: DECREMENT,
    payload: {
      id,
      value,
    },
  };
};
const resetCount = () => {
  return {
    type: RESET_COUNTER,
  };
};
