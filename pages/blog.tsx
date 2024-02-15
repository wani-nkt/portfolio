import Link from 'next/link';
import Image from 'next/image';

// ブログポストの型を定義
interface Post {
    id: number;
    title: string;
    date: string;
}

export default function Home() {
    const posts: Post[] = [
        { id: 1, title: `GPT-4先生に聞いてポートフォリオにブログ機能を追加した話`, date: `2024/02/15`, },
        { id: 2, title: 'テスト記事',date: '2024/02/15' },
    ];

    return (
        <div className='flex justify-center'>
            <div className="px-8 w-1/2">
                <Image
                    src="/image/blog_icon.png"
                    width={1000}
                    height={100}
                    alt="nkt tech blog"
                />

                <div className="space-y-4 mt-4">
                    {posts.map((post) => (
                        <div key={post.id} className="border p-4 rounded-lg">
                            <Link href={`/blog/${post.id}`}>
                                <div className="text-xl font-semibold">{post.title}</div>
                            </Link>
                            <p className="mt-2">{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
