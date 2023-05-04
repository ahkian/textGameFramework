import React from "react";
import { useSelector, useDispatch } from "react-redux";
import statsSlice, { decrement, increment, setTF } from "./statsSlice";
import { v4 as uuidv4 } from 'uuid';
import styles from './stats.module.css';

export function Stats () {
    const stats = useSelector(state => state.stats)
    const dispatch = useDispatch();
    const statEntries = []

    function regStatLI (key) {
        return(<li key={uuidv4()} className={styles.listItems}><button onClick={() => dispatch({type: decrement, payload: { stat: key, value: 1}})}>-</button>{key}: {stats[key]} <button onClick={() => dispatch({type: increment, payload: {stat: key, value: 1}})}>+</button></li>)
      }
      
      function trueFalse (key) {
        return(<li key={uuidv4()} className={styles.listItems}><button onClick={() => dispatch({type: setTF, payload: {stat: key, value: 1}})}>T/F</button> {key}: {stats[key] ? "T" : "F"}</li>)
      }

    for (const key in stats){
        statEntries.push(key.includes("TF") ? trueFalse(key) : regStatLI(key) )

    }

    return(
        <ul className={styles.list}>
            {statEntries}
        </ul>
    )
}