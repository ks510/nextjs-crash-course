import Head from 'next/head';
import { NextPage } from 'next';

const about: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
};

export default about;