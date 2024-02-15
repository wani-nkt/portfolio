import Link from 'next/link';
import Image from 'next/image';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// スタイルテーマを選択（例: vs、prism、atomDarkなど）
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// ブログポストの詳細の型を定義
interface PostDetail {
    title: string;
    date: string;
}

export default function Post() {

    const post: PostDetail = {
        title: `GPT-4先生に聞いてポートフォリオにブログ機能を追加した話`,
        date: `2024/02/15`,
    };

    const content = (
        <>
            <div className='text-xl'>
                <p className='my-4'>
                    この記事では自分のポートフォリオサイトにGPT-4先生に聞きながらブログ機能を追加した話をします。
                    今回は今まさにご覧頂いているブログページを作成するベースとなるコードの作成にChatGPTを活用してみました。
                    ブログ機能といっても簡易的なもので、目的としてはポートフォリオのコンテンツを増やしたかったという感じです。
                    最近の生成AIの進歩は凄まじく簡易的なブログなら作れそうだなと思って試してみました。
                </p>

                <p className='my-4'>
                    早速↓の様なリクエストをしました。
                </p>
                <p className='m-4 flex justify-center border-2'>
                    <Image
                        src="/image/gpt1.png"
                        width={500}
                        height={200}
                        alt="nkt tech blog"
                    />
                </p>
                <p className='mt-10'>
                    記事一覧は以下のコードでおおむね動きますが、next/linkの中身はaタグを入れられないというエラーが出ました。
                    このあたり最新情報ではない感じでしょうか。
                </p>
                <div className='m-4'>
                    <SyntaxHighlighter language="typescript" style={xonokai}>
                        {"import Link from 'next/link';\nexport default function Home() {\n  // サンプルのブログポストデータ\n  const posts = [\n    {id: 1, title: 'ブログポスト1', summary: 'これはブログポスト1のサマリーです。' },\n    {id: 2, title: 'ブログポスト2', summary: 'これはブログポスト2のサマリーです。' },\n    // 他のポストも同様に追加...\n  ];\n  return (\n    <div className=\"p-8\">\n      <h1 className=\"text-3xl font-bold mb-4\">ブログ</h1>\n      <div className=\"space-y-4\">\n        {posts.map((post) => (\n          <div key={post.id} className=\"border p-4 rounded-lg\">\n            <Link href={`/posts/${post.id}`}>\n              <a className=\"text-xl font-semibold\">{post.title}</a>\n            </Link>\n            <p className=\"mt-2\">{post.summary}</p>\n          </div>ll\n        ))}\n      </div>\n    </div>\n  );\n}\n"}
                    </SyntaxHighlighter>
                </div>
                <p className='mt-10'>
                    記事の中身は以下のコードが生成されました。
                    「実際のアプリケーションでは、IDに基づいてポストのデータをフェッチする」とコメントがあるように実際はマークダウンとかでブログ記事を作成して読み込むのが一般的なようです。
                    今回はあくまで簡易的なもので良かったのでそこまでせずにJSXで直接記事を書いてます。
                </p>
                <div className='m-4'>
                    <SyntaxHighlighter language="typescript" style={xonokai}>
                        {"import { useRouter } from 'next/router';\n\nexport default function Post() {\n  const router = useRouter();\n  const { id } = router.query;\n\n  // 実際のアプリケーションでは、IDに基づいてポストのデータをフェッチする\n  const post = {\n    title: `ブログポスト ${id}`,\n    content: `これはブログポスト ${id} の内容です。`,\n  };\n\n  return (\n    <div className=\"p-8\">\n      <h1 className=\"text-3xl font-bold mb-4\">{post.title}</h1>\n      <p>{post.content}</p>\n    </div>\n  );\n}\n"}
                    </SyntaxHighlighter>
                </div>
                <p className='mt-10'>
                    ということで、上記2つのファイルを追加して今ご覧いただいている記事のページが出来上がりました。
                    まとめると、元々のポートフォリオサイトに合わせる形で微修正や追加は必要でしたが、いわゆるたたき台としては十分でした。
                </p>
                <p className='mt-10'>
                    ちなみにコードブロックは<a className=' underline' href='https://github.com/react-syntax-highlighter/react-syntax-highlighter'>react-syntax-highlighter</a>というライブラリを利用しました。
                    色々なコードハイライトのパターンから選択可能なので便利でした。

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
