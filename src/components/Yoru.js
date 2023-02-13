import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Yoru() {
    return (
        <>
        <h2>ヨル</h2>
        <img src="/yoru.jpg"></img>
            <p>ヨルは日本人のエージェントで、アビリティ・スキルは他のエージェント・キャラと比べて瞬間移動やデコイなど特徴的なスキルを多く持っています。</p>
            <p>空間の裂け目を移動したり、フラッシュを使えたりなどオーメンとフェニックスを融合させたようなエージェント・キャラです。</p>
            <p>ヨルのアビリティを理解するだけで、敵を翻弄したり、味方をサポートしたりすることが容易になります。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};