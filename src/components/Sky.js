import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Sky() {
    return (
        <>
        <h2>スカイ</h2>
        <img src="/sky.jpg"></img>
            <p>スカイは「イニシエーター」として登場しました。</p>
            <p>味方を回復するスキルを持っていたり、索敵するスキルを持っていたり、視界を阻害するフラッシュ系のスキルを持っていたりと、</p>
            <p>自分自身が前に出て積極的に撃ち合うというよりは、味方をサポートするのが得意なエージェントです。</p>
<Link to={"/"}>TOP</Link>
        </>
    );
};