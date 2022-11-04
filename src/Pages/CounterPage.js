import {useReducer} from "react";
import {useCounter} from "../hooks/useCounter";





export function CounterPage() {
    const initialState = {count: 0,value:""};
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return handleIncrement(state)
            case 'decrement':
                return handleDecrement(state)
            case 'reset':
              return handleReset()
            case 'update':
                return handleUpdate(action.payload)
            default:
                throw new Error();
        }
    }
    const {
      actions:{
          handleIncrement,
          handleReset,
          handleDecrement,
          handleUpdate
      }
    }=useCounter();
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="h-100 d-flex align-items-center justify-content-center">

            <div className="col-md-4">
                <div className="row ">
                    <h1 className="itemName">Count:{ state.count}</h1>
                </div>
           <button  className="btn btn-secondary" title={"increment"} onClick={() => dispatch({type: 'increment'})}> <span className="fa" aria-hidden="true">
              +
            </span></button>
            <button className="btn btn-info m-2"  title="Decrement" onClick={() => dispatch({type: 'decrement'})}> <span className="fa" aria-hidden="true">
              -
            </span></button>
            <button  className="btn btn-success m-2" onClick={() => dispatch({type: 'reset'})}><span className="fa" aria-hidden="true">
          Reset
        </span></button>
                <div className={"row"}>
                    <label htmlFor={'setValue'}>
                        Set Value{" "}
                        <input
                            id={"setValue"}
                            value={state.value}
                            type={"number"}
                            placeholder="new value"
                            onChange={({target: {value: newValue}}) => {
                                dispatch({type: "update", payload: newValue});
                            }}
                        />
                    </label>
                </div>
            </div>

            </div>

    );
}
