import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Fade() {
    return (
        <>
        <h2>フェイド</h2>
        <img src="/fade.jpg"></img>
            <p>フェイドは索敵能力に優れ、味方のサポートがメインのイニシエーターですが、相手にデバフ効果を与え自分から攻撃を仕掛けていくこともできます。</p>
            <p>アビリティを組み合わせて使用して有利な状況を作り出しましょう。</p>
            <p>味方のサポートをしつつ自分でも積極的に立ち回りたい方におすすめのエージェントです。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};