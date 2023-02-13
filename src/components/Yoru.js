import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Yoru() {
    return (
        <>
        <h1>ヨル</h1>
        <img src="/yoru.jpg"></img>
            <p></p>
            <p></p>
            <p></p>
<Link to={"/"}>TOP</Link>
        </>
    );
};