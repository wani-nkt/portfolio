import Link from 'next/link';
import Image from 'next/image';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// スタイルテーマを選択（例: vs、prism、atomDarkなど）
import { xonokai, dark, twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// ブログポストの詳細の型を定義
interface PostDetail {
    title: string;
    date: string;
}

export default function Post() {

    const post: PostDetail = {
        title: `テスト記事`,
        date: `2024/02/15`,
    };

    const content = (
        <>
            <div className='text-xl'>
                <p className='my-4'>
                    この記事はテスト記事です。
                </p>
            </div>
        </>
    )

    return (
        <div className=''>
            <div className="flex justify-center">
                <div className=' px-8 w-1/2'>
                    <Image
                        src="/image/blog_icon.png"
                        width={1000}
                        height={100}
                        alt="nkt tech blog"
                    />
                </div>
            </div>

            <div className='flex justify-center'>
                <div className="p-8 w-1/2">
                    <h1 className="flex justify-center text-3xl font-bold mb-4">{post.title}</h1>
                    <h2 className=' flex justify-end'>{post.date}</h2>
                    <div>{content}</div>
                </div>
            </div>

            <div className='mt-5 flex justify-center'>
                <Link href="/blog" className='w-1/8'>
                    <div className="px-5 m-5 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">記事一覧に戻る</div>
                </Link>
            </div>
        </div>
    );
}
