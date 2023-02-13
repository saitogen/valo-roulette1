import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Reyna() {
    return (
        <>
        <h2>レイナ</h2>
        <img src="/reyna.jpg"></img>
            <p>メキシコの中心部で鍛え上げられたレイナは、敵を倒すたびに姿を消し、一対一の状況で優位に立てる。</p>
            <p>その真の能力を開花できるかは、戦いのパフォーマンスによって大きく左右される。</p>
            <p>回復、無敵での移動、フラッシュ、自己強化、どれも強力で使いやすくキルを取りやすいです。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};