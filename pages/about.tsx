import { NextPage } from 'next';
import Meta from '../components/Meta';

const about: NextPage = () => {
  return (
    <div>
      <Meta title='About' />
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
};

export default about;