import { FC } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta: FC<Props> = (props) => {
  const { title, keywords, description } = props;

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDev Newz',
  keywords: 'web development, programming',
  description: 'Get the latest news and updates on web development'
};

export default Meta;