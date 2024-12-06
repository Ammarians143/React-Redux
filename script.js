import { myCreateStore } from "./redux-store";

const initialState = {
  count: 0,
  name: "Amamr Ansari",
  age: 22,
};

const INCREAMENT = "count/increament";
const DECREAMENT = "count/decreament";
const INCREAMENT_BY = "count/increamentBy";
const DECREAMENT_BY = "count/decreamentBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, count: state.count + 1 };
    case DECREAMENT:
      return { ...state, count: state.count - 1 };
    case INCREAMENT_BY:
      return { ...state, count: state.count + action.payload };
    case DECREAMENT_BY:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const myStore = myCreateStore(reducer);

myStore.subscribe(() => {
  console.log(myStore.getState());
});

myStore.dispatch({ type: INCREAMENT });
myStore.dispatch({ type: DECREAMENT });
myStore.dispatch({ type: INCREAMENT_BY, payload: 100 });
myStore.dispatch({ type: DECREAMENT_BY, payload: 100 });
