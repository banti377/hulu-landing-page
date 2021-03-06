import { useRouter } from 'next/router';
import { FC, SVGProps } from 'react';

interface Props {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const HeaderItem: FC<Props> = ({ title, Icon }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/')}
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 uppercase tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
