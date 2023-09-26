/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import { useState } from 'react';
import { Resend } from 'resend';
import Section from '@/components/Section';
import takeResultsWithYouImage from '@/assets/results/take-results-with-you.svg';
import Typography from '@/components/Typography';
import ButtonSubmit from '@/components/ButtonSubmit';
import Email from '@/emails/level1';

const EmailResultsForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [validEmailAddress, setValidEmailAddress] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setValidEmailAddress(emailRegex.test(String(value).toLowerCase()));
    return emailRegex.test(String(value).toLowerCase());
  };

  const handleChange = (e) => {
    setEmailAddress(String(e.target.value).toLowerCase());
    isValidEmail(emailAddress);
  };

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const sendEmail = async (emailAddressValue) => {
    try {
      const emailResponse = await resend.emails.send({
        from: 'randy@fourkitchens.com',
        to: emailAddressValue,
        subject: 'FOO • The Content Strategy Quiz',
        react: <Email />,
      });

      return emailResponse;
    } catch (sendError) {
      throw new Error(`Failed to send email: ${sendError.message}`);
    }
  };

  const onSubmit = async (e, res) => {
    e.preventDefault();

    try {
      const sendResult = await sendEmail(emailAddress);

      // Send a success response to the client
      res.status(200).json(sendResult);
      setEmailSent(true);
    } catch (error) {
      // Send an error response to the client
      res.status(400).json({ error: error.message });
      console.error(error);
    } finally {
      setEmailSent(true);
    }
  };

  return (
    <div>
      {emailSent ? (
        <div className="bg-gold-500 border border-solid border-gold p-4 rounded-sm flex flex-row">
          Email sent!
          <button
            type="button"
            onClick={() => {
              setEmailSent(false);
            }}
            className="ml-auto text-sm uppercase font-bold text-gray-600 opacity-70"
          >
            Dismiss
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
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
                  value={emailAddress}
                  onChange={handleChange}
                  className={classNames(
                    'text-[0.9375rem] text-gray-900 font-normal leading-6',
                    'px-4 py-[0.81rem]',
                    'w-full relative',
                    'border border-green-400 border-solid bg-white rounded-lg'
                  )}
                />
              </div>
            </div>
            <ButtonSubmit disabled={!validEmailAddress}>
              Send me the results
            </ButtonSubmit>
          </div>
        </form>
      )}
    </div>
  );
};

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
            "relative whitespace-nowrap after:content-[''] after:bg-content-underline-yellow after:bg-no-repeat after:bg-contain after:absolute after:block after:-bottom-[25px] after:-left-0 after:right-0 after:-z-[1] after:h-full",
            'sm:after:-bottom-[34px] lg:after:-bottom-[33px]'
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
