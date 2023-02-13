import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Jett() {
    return (
        <>
        <h2>ジェット</h2>
        <img src="/jett.jpg"></img>
            <p>ジェットの基本的な立ち回りとしては、チーム先頭を進んでスモークからブリンクでエントリーを行う事です。</p>
            <p>理想としてはブリンクを使った際に横を一瞬向いて、敵がいるかどうかを確認してあげるようにしましょう。</p>
            <p>エントリーをしたら少し待って追加スモークをしながら後続の援護を待ったり、自身から飛び出してキルを狙います。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};