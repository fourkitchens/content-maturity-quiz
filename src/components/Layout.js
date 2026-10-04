/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import PropTypes from 'prop-types';
import { useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const PencilIcon = ({ className }) => (
  <svg
    width="61"
    height="35"
    viewBox="0 0 61 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.6544 5.92699C11.5264 5.1131 12.6891 4.64803 13.8518 4.64803H13.9099C16.4679 4.64803 18.6188 6.79901 18.6188 9.35694C18.6188 10.5778 18.0956 11.7986 17.2236 12.6706L5.18973 24.7045C4.84092 25.0533 4.66652 25.5184 4.66652 26.0416C4.66652 27.088 5.4804 27.9019 6.52683 27.9019C7.05004 27.9019 7.51512 27.7275 7.86393 27.3787L21.7581 13.4845C22.6301 12.6125 23.851 12.0893 25.0718 12.0893C27.6879 12.0893 29.7807 14.2403 29.7807 16.7982C29.7807 18.019 29.2575 19.2398 28.3855 20.1119L22.3395 26.1579C21.7 26.7973 21.4093 27.6112 21.4093 28.4251C21.4093 30.2273 22.8045 31.6225 24.6067 31.6225H24.8393C25.1881 31.6225 25.4787 31.6225 25.8276 31.5063L27.9204 30.8086C28.6762 30.518 29.4319 30.9249 29.6644 31.6807C29.9551 32.3783 29.5482 33.1922 28.7924 33.4247L26.6996 34.1223C26.1182 34.3549 25.4787 34.4711 24.8393 34.4711H24.6067C21.293 34.4711 18.6188 31.7388 18.6188 28.4251C18.6188 26.8555 19.2002 25.344 20.3629 24.1813L26.4089 18.1353C26.7577 17.7865 26.9902 17.3214 26.9902 16.7982C26.9902 15.7518 26.1182 14.8797 25.0718 14.8797C24.5486 14.8797 24.0835 15.1123 23.7347 15.4611L9.84051 29.3553C8.96849 30.2273 7.74766 30.6924 6.52683 30.6924C3.9689 30.6924 1.87605 28.5995 1.87605 26.0416C1.87605 24.7626 2.34113 23.5999 3.21315 22.7279L15.247 10.694C15.5958 10.3452 15.8284 9.88015 15.8284 9.35694C15.8284 8.31051 14.9564 7.43849 13.9099 7.43849H13.8518C13.3867 7.43849 12.8635 7.67103 12.5147 7.9617L2.34113 17.3214C1.75978 17.8446 0.887763 17.7865 0.364551 17.2633C-0.158662 16.6819 -0.100527 15.8099 0.422685 15.2867L10.6544 5.92699Z"
      fill="#C97600"
    />
    <path
      d="M31.3621 27.4772L32.6411 21.1405L47.7561 5.96734L48.6863 6.89749L54.2672 12.4784L55.1973 13.4086L40.0823 28.5817L33.7456 29.8607L30.7808 30.442L31.3621 27.4772ZM49.0932 4.68837L51.1279 2.65366L53.1045 0.677078L55.0229 2.65366L58.5692 6.14174L60.5457 8.11832L58.5692 10.0949L56.5344 12.1296L55.6043 11.1995L50.0233 5.61853L49.0932 4.68837ZM36.5361 21.1405L35.199 22.5357L34.327 26.8958L38.6871 26.0238L40.0823 24.6286V23.931H37.2918V21.1405H36.5361ZM49.7327 10.9088L48.4537 9.57169L47.7561 10.2693L39.3847 18.6407L38.7452 19.2802L40.0823 20.6173L40.7218 19.9197L49.0932 11.5483L49.7327 10.9088Z"
      fill="#24635C"
    />
  </svg>
);

PencilIcon.propTypes = {
  className: PropTypes.string,
};

export default function Layout({ children }) {
  const wrapper = useRef(null);

  return (
    <div className="flex flex-col flex-nowrap">
      <div
        className={classNames('wrapper relative space-y-8 md:space-y-24 mt-8')}
        ref={wrapper}
      >
        <Link href="/" className="text-center block">
          <p className="uppercase font-bold text-xs mb-1 sm:mb-2 tracking-widest !cursor-hand">
            Better results throught content
          </p>
          <h1 className="flex flex-row gap-1 sm:gap-2 max-w-max mx-auto items-center text-2xl sm:text-3xl md:text-4xl text-green font-medium !cursor-hand">
            The Content
            <PencilIcon className="mx-auto max-w-[40px] sm:max-w-full" />
            Strategy Quiz
          </h1>
        </Link>

        {children}

        <footer className="p-10">
          <p className="text-center sm:text-right font-bold text-gray text-lg">
            Cooked up by <a href="https://fourkitchens.com">Four Kitchens</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
