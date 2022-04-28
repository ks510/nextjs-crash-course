import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { Article } from '../../models/Article';
import Link from 'next/link';
import { server } from '../../config';
import Meta from '../../components/Meta';

interface Props {
  article: Article;
}

const Article: NextPage<Props> = (props) => {
  const { article } = props;
  /*  const router = useRouter();
    const { id } = router.query;*/

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${server}/api/articles/${params!.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};

/*export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params!.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const articles = await res.json();

  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};*/

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params!.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  };
};
*/

export default Article;