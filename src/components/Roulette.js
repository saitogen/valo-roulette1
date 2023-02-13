import { useState, useEffect, useCallback, memo } from "react";
import { Link } from 'react-router-dom';

export default function Roulette(memo) {
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);

    const rouletteContents = [
        "ジェット",
        "キルジョイ",
        <Link to={"/neon"}>ネオン</Link>,
            "チェンバー",
            "ヨル",
            "スカイ",
            "フェイド",
            "レイナ"
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
                <p>今日使った方がいいキャラは。。。？</p>
                <p>{rouletteContents[index]}</p>
            </div>
            <button type="button" onClick={startRoulette}>
                {start ? "ストップ" : "スタート"}
            </button>
        </>
    );
};
