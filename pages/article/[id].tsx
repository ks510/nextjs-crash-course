import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import { Article } from '../../models/Article';
import Link from 'next/link';

interface Props {
  article: Article;
}

const Article: NextPage<Props> = (props) => {
  const { article } = props;
  /*  const router = useRouter();
    const { id } = router.query;*/

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

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

export default Article;