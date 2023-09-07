/* eslint import/no-unresolved: [2, { ignore: ['\\@'] }] */
import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@/components/Typography';
import airplaneImage from '@/assets/results/airplane.svg';
import crossesImage from '@/assets/results/crosses.svg';
import bubbleImage from '@/assets/results/bubble.svg';
import heartImage from '@/assets/results/heart.svg';
import books from '@/assets/results/books.svg';
import laptop from '@/assets/results/laptop.svg';

const Section = ({ children, className }) => (
  <section className={classNames('max-w-[960px] mx-auto', className)}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

const ResultsLevel1 = () => (
  <article className={classNames('mb-10 mt-14 px-8 space-y-8')}>
    <section
      className={classNames('space-y-6 max-w-[650px] mx-auto lg:max-w-[750px]')}
    >
      <Typography tag="h1" className="text-center">
        <span
          className={classNames(
            "relative after:content-[''] after:bg-burst-top after:bg-no-repeat after:bg-contain after:absolute",
            'after:h-[30px] after:left-0 after:right-0 after:top-[-35px] after:block ',
            'sm:after:h-[35px] sm:after:left-8 sm:after:top-[-45px]'
          )}
        >
          Next steps
        </span>
      </Typography>
      <p>
        There’s no time like the present to begin your content strategy journey!
        Start by establishing key foundational practices rather than diving into
        the deep end. Each organization is different, so consider your resources
        and remember that cultural shifts take time, care, and nurturing.
      </p>
    </section>

    <Section className="md:grid md:grid-cols-2">
      <Image src={airplaneImage} alt="" />
      <div>
        <Typography tag="h3" className="mb-4">
          Formalize your strategy.
        </Typography>
        <p>
          Create a core content strategy statement or a set of strategic content
          priorities to describe what content needs to achieve, who it is for,
          and the value it provides to your users and the business.
        </p>
      </div>
    </Section>

    <Section>
      <Image src={crossesImage} alt="" />
      <div>
        <Typography tag="h3">Define success.</Typography>
        <p>
          Each piece of content you create should be in service of accomplishing
          something. Plan for your success metrics and measurement approach to
          evolve alongside your strategy.
        </p>
      </div>
      <Image src={crossesImage} alt="" />
    </Section>

    <Section className="md:grid md:grid-cols-2">
      <Image src={bubbleImage} alt="" />
      <div>
        <Typography tag="h3">Interview stakeholders.</Typography>
        <p>
          Connect with your internal teams to determine their individual
          business and content needs, objectives, capabilities, and challenges.
        </p>
      </div>
    </Section>

    <Section className="md:grid md:grid-cols-2">
      <Image src={heartImage} alt="" />
      <div>
        <Typography tag="h3">Understand your audience.</Typography>
        <p>
          What types of communications work best? How can your organization meet
          your users’ needs while achieving your objectives?
        </p>
      </div>
    </Section>

    <Section className="md:grid md:grid-cols-2">
      <Image src={books} alt="" />
      <div>
        <Typography tag="h3">Set your standards.</Typography>
        <p>
          Establish what quality content looks like for your organization and
          provide guidelines for your community of creators.
        </p>
      </div>
    </Section>

    <Section className="md:grid md:grid-cols-2">
      <Image src={laptop} alt="" />
      <div>
        <Typography tag="h3">Educate and advocate.</Typography>
        <p>
          Explain what you’re doing, why you’re doing it, and what you hope to
          achieve. Make it easy for your community to contribute to your
          efforts.
        </p>
      </div>
    </Section>
  </article>
);

export default ResultsLevel1;
