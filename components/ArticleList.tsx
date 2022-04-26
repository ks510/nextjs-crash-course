import { FC } from 'react';
import articleStyles from '../styles/Article.module.scss';
import { Article } from '../models/Article';

interface Props {
  articles: Article[];
}

const ArticleList: FC<Props> = (props) => {
  const { articles } = props;

  return (
    <div className={articleStyles.grid}>
      {articles.map(article => <h3>{article.title}</h3>)}
    </div>
  );
};

export default ArticleList;