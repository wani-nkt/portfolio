import Image from "next/image";

export default function WorksModalContent() {
    return (
        <div className=' p-10 mt-10 font-notosans text-center'>
            <h3 className='text-3xl'>研究室向けデジタルサイネージ</h3>
            <p className='text-xl p-5'>2023 May</p>
            <div className='flex justify-center items-center'>
                <Image src="/image/watalab_signage.png"
                    width={640}
                    height={360}
                    alt="nkt logo" />
            </div>
            <div className=" text-left p-10">
                <p className=" text-nkt-blue text-xl">機能一覧</p>
                <ul>
                    <li>ヘッドラインニュース: 最新ニュースを取得して表示</li>
                    <li>時刻表示、今日は何の日: 今日が何の記念日かを取得して表示2つめの項目</li>
                    <li>タイムライン: Slack に投稿されたチャットと画像を取得してタイムライン形式で表示</li>
                    <li>天気情報: 研究室内のセンサから取得した温湿度、CO2 濃度と大阪市内のアメダスから取得した温湿度、降水量を表示</li>
                    <li>時刻表: 研究室最寄り駅・最寄りバス停の発車時刻を表示</li>
                </ul>
            </div>
        </div>
    );
}