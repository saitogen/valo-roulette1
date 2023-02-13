import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Neon() {
    return (
        <>
        <h1>ネオン</h1>
            <p>ネオンはフィリピン出身のデュエリストです。</p>
<p>先頭を切って敵と撃ち合いをしたり、サイト内へエントリー（先陣を切ってサイトに入ること）をして味方を勝利へ導くことが得意なエージェントになります。</p>

<p>下記で解説するスキルも味方と合わせると強力なものがいくつかあるため、基本的には味方と一緒に動いて先頭で動くのが良いでしょう。</p>
<p>「ハイギア」を使えば短時間で長距離を移動できるため、単独で動くことも出来るかもしれませんが、毎回単独行動すると味方が困ってしまうため、3ラウンドに一回程度であったり、そもそも単独行動しないことを心がけましょう。</p>

<h2>スキルの使い方</h2>
<p>ネオンのスキルは即発動、つまりスキルを構える動作がないものばかりです。</p>
<p>銃を構えながらスキルを使っても、他のエージェントほど隙は出来ないので、ガンガン使っていきましょう。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};