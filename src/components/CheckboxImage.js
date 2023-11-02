import classNames from 'classnames';

const CheckboxImage = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="min-w-[30px]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8871 0.185247C17.7697 0.286676 14.1151 0.619998 9.76601 0.92476C5.41694 1.23 1.43512 1.69 0.918095 1.94714C-0.184177 2.49476 -0.329849 3.33333 0.67702 3.33333C1.6326 3.33333 2.02908 6.42334 2.02908 13.8762V20L5.49131 19.9781C7.39528 19.9662 11.8233 19.5595 15.3312 19.0743C18.8391 18.5895 22.0126 18.3005 22.3839 18.4329C23.2231 18.7319 23.2251 18.8443 22.2659 12.0481C21.0806 3.64666 20.0922 0 19.0002 0C18.5052 0 18.0046 0.0833425 17.8871 0.185247ZM19.629 5.59524C20.7718 11.2124 21.6504 16.7048 21.4376 16.9C21.0406 17.2638 4.75526 18.731 4.02024 18.4691C3.36216 18.2343 3.16008 16.8476 2.88567 10.6748C2.70204 6.54428 2.66922 3.0562 2.81283 2.92334C3.02211 2.72906 12.8128 1.78953 17.7143 1.49286C18.6601 1.43572 18.8771 1.90143 19.629 5.59524Z"
      fill="black"
    />
    <path
      d="M9 8L11 13.5L24.5 3"
      stroke="black"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
      className={classNames('animate-checkbox-checked checkbox-checked hidden')}
    />
  </svg>
);

export default CheckboxImage;
