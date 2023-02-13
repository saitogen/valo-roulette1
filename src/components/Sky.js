import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Sky() {
    return (
        <>
        <h1>スカイ</h1>
        <img src="/sky.jpg"></img>
            <p></p>
            <p></p>
            <p></p>
<Link to={"/"}>TOP</Link>
        </>
    );
};