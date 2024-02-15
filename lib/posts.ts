import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PostData } from './types';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // フロントマターの解析
    const matterResult = matter(fileContents);

    // MarkdownをHTMLに変換
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    // idと内容を組み合わせて返す
    return {
        id,
        contentHtml,
        ...(matterResult.data as { title: string; date: string }),
    };
}
