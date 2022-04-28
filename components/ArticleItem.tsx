import { FC } from 'react';
import articleStyles from '../styles/Article.module.scss';
import Link from 'next/link';
import { Article } from '../models/Article';

interface Props {
  article: Article;
}

const ArticleItem: FC<Props> = (props) => {
  const { article } = props;

  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;