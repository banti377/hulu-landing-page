import { FC } from 'react';
import FlipMove from 'react-flip-move';

import { Result } from '../interfaces';
import Thumbnail from './Thumbnail';

interface Props {
  results: Result[];
}

const Results: FC<Props> = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result: Result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
