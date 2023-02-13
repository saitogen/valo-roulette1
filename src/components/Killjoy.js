import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Killjoy() {
    return (
        <>
        <h1>キルジョイ</h1>
        <img src="/joy.jpg"></img>
            <p>キルジョイは、設置型のアビリティによる高い索敵能力や妨害性能を持っているエリア制圧に優れたセンチネルのキャラです。</p>
<p>敵の接近に反応して起動する「タレット」と「アラームボット」は索敵と妨害を行うことができ、遠隔起動できる「ナノスワーム」はクリアリングやスパイクの設置・解除阻止にも利用できるのでエリア確保を得意としています。</p>

<p>特にULTの「ロックダウン」はマップ相性があるものの、範囲内の敵を全て追い出すことができる強力な効果を持つので、ランクや競技シーンにおいても重宝されています。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};