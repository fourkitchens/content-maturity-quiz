/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import Section from '@/components/Section';
import takeResultsWithYouImage from '@/assets/results/take-results-with-you.svg';
import Typography from '@/components/Typography';
import ButtonSubmit from '@/components/ButtonSubmit';

const EmailResultsForm = () => (
  <form>
    <div className="lg:flex lg:flex-row lg:gap-6 md:items-end">
      <div className="lg:flex-1 mb-6 lg:mb-0">
        <label
          htmlFor="email"
          className="text-[0.9375rem] font-bold mb-[0.34rem]"
        >
          Email
        </label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your Email"
            className={classNames(
              'text-[0.9375rem] text-gray-900 font-normal leading-6',
              'px-4 py-[0.81rem]',
              'w-full relative hover:scale-[102%]',
              'border border-green-400 border-solid bg-white rounded-lg'
            )}
          />
        </div>
      </div>
      <ButtonSubmit>Send me the results</ButtonSubmit>
    </div>
  </form>
);

const EmailResults = () => (
  <Section
    className="!mt-20"
    wrapperClassName="lg:max-w-[960px] lg:flex lg:flex-row lg:gap-20 lg:items-start"
  >
    <Image
      src={takeResultsWithYouImage}
      alt=""
      className="mx-auto lg:float-left lg:w-[46%] lg:relative lg:top-0"
    />
    <div className="space-y-6">
      <Typography tag="h2">
        Take the results{' '}
        <span
          className={classNames(
            "relative whitespace-nowrap after:content-[''] after:bg-content-underline-yellow after:bg-no-repeat after:bg-contain after:absolute after:block after:-bottom-[23px] after:-left-0 after:right-0 after:-z-[1] after:h-full",
            'lg:after:-bottom-[33px]'
          )}
        >
          with you!
        </span>
      </Typography>
      <p>
        We believe in setting knowledge free, so we'll send you your results
        without spamming your inbox. Refer back when you're ready to take
        action, or use them to craft a roadmap to success!
      </p>
      <EmailResultsForm />
    </div>
  </Section>
);

export default EmailResults;
