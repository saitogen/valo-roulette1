import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Chamber() {
    return (
        <>
        <h2>チェンバー</h2>
        <img src="/chamber.jpg"></img>
            <p>チェンバーは2021年11月16日(火)に実装された新エージェント。</p>
            <p>アビリティーにより第四の武器、第五の武器を使用することができる。</p>
            <p>戦いのバリエーションが増えるだけでなく、試合開始直後や攻守交代直後といったピストルラウンドで有利に戦えるポテンシャルを持っているのが強みだ。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};