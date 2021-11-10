import { FC } from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

import { Result } from '../interfaces';
import { BASE_URL } from '../utils/constants';

interface Props {
  result: Result;
}

const Thumbnail: FC<Props> = ({
  result: {
    title,
    poster_path,
    backdrop_path,
    overview,
    original_title,
    media_type,
    release_date,
    first_air_date,
    vote_count,
  },
}) => {
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        alt={title}
        src={`${BASE_URL}${backdrop_path || poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {media_type} · {first_air_date || release_date} ·{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
