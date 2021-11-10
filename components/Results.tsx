import { FC } from 'react';
import { Result } from '../interfaces';
import Thumbnail from './Thumbnail';

interface Props {
  results: Result[];
}

const Results: FC<Props> = ({ results }) => {
  return (
    <div>
      {results.map((result: Result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
