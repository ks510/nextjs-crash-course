import { FC } from 'react';
import articleStyles from '../styles/Article.module.scss';
import { Article } from '../models/Article';
import ArticleItem from './ArticleItem';

interface Props {
  articles: Article[];
}

const ArticleList: FC<Props> = (props) => {
  const { articles } = props;

  return (
    <div className={articleStyles.grid}>
      {articles.map(article => <ArticleItem article={article} />)}
    </div>
  );
};

export default ArticleList;