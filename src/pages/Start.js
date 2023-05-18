import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import statsSlice, { setAttr } from "../features/stats/statsSlice";
import styles from '../styles/Pages.module.css';
function Start () {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    return(
        <div>
            <h3>Welcome to Title Pending</h3>
            <p>What would you like to name the main character?</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => dispatch({type: setAttr, payload: {stat: "Name", value: name} })}> Enter Name</button>
            <p>Your character's name is {useSelector(state => state.stats["Name"])}</p>
            <Link style={{textDecoration: "none", border: "solid", borderColor: "black", padding: "0.5%", color: "black"}} to={'/Day1MorningBedroom'}>Next </Link>
        </div>
    )
}

export default Start;