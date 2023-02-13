import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Roulette(memo) {
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);

    const rouletteContents = [
        <Link to={"/jett"}>ジェット</Link>,
        <Link to={"/killjoy"}>キルジョイ</Link>,
        <Link to={"/neon"}>ネオン</Link>,
        <Link to={"/chamber"}>チェンバー</Link>,
        <Link to={"/yoru"}>ヨル</Link>,
        <Link to={"/sky"}>スカイ</Link>,
        <Link to={"/fade"}>フェイド</Link>,
        <Link to={"/reyna"}>レイナ</Link>
];

    //ボタンの文言を変更する処理
    const startRoulette = useCallback(() => {
        setStart(!start);
    }, [start]);

    //ルーレットを回す処理
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setIndex((oldIndex) => {
                    if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
                    return 0;
                });
            }, 50);//ルーレットの中身を切り替える速度
            return () => clearInterval(interval);
        } else if (!start) {
            return () => clearInterval();
        }
    }, [start]);

    return (
        <>
            <div>
                <h1>今日使った方がいいキャラは。。。？</h1>
                <p>{rouletteContents[index]}</p>
            </div>
            <button type="button" onClick={startRoulette}>
                {start ? "ストップ" : "スタート"}
            </button>
        </>
    );
};
