import Reader from './Reader/Reader';
import publications from '../publication.json';

export const App = () => {
  return (
    <div>
      <Reader items={publications} />
    </div>
  );
};
