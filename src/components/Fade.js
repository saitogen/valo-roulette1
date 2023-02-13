import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Fade() {
    return (
        <>
        <h2>フェイド</h2>
        <img src="/fade.jpg"></img>
            <p></p>
            <p></p>
            <p></p>
<Link to={"/"}>TOP</Link>
        </>
    );
};