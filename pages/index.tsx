import type { NextPage } from 'next';
import Head from 'next/head';
import { Article } from '../models/Article';
import ArticleList from '../components/ArticleList';

interface Props {
  articles: Article[];
}

const Home: NextPage<Props> = (props) => {
  const { articles } = props;

  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};

export default Home;

