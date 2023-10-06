import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import { ReactElement } from 'react';
import resultsLevelData from '../data/resultsLevelData.js';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL
  ? `https://${process.env.NEXT_PUBLIC_BASEURL}`
  : 'https://contentstrategyquiz.com';

const colors = {
  beige: '#FDF6E0',
  bg: '#FFFDF9',
  cream: '#FDF9ED',
  dark: '#0D2427',
  gold: { DEFAULT: '#BF993E', 500: '#F9E3B8', 700: '#DAC9A1' },
  gray: { DEFAULT: '#717171', 400: '#242424', 300: '#333' },
  green: {
    DEFAULT: '#24635C',
    100: '#64D2C5',
    200: '#3E9F94',
    300: '#0C7C6F',
    400: '#24635C',
  },
  orange: '#C97600',
  yellow: '#EFBF4D',
};

export default function Email(): ReactElement {
  const level: number = 1 - 1;
  const { title, description, nextSteps } = resultsLevelData[level];
  const { sections } = resultsLevelData[level];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    <Html>
      <Head>
        <title>{title} • The Content Strategy Quiz</title>
      </Head>
      <Preview>Your content strategy result is '{title}'</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                ...colors,
              },
              fontFamily: {
                sans: ['Georgia', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Body className="bg-bg font-sans">
          <Container className="pt-4">
            <Link href="https://contentstrategyquiz.com">
              <Img
                src={`${baseUrl}/static/email-logo.png`}
                alt="The Content Strategy Quiz. Better results through content."
                width="100%"
              />
            </Link>

            <Section className="bg-beige border border-solid border-gold-700 p-8 mt-8 mx-auto max-w-[464px] !space-y-4">
              <Img
                src={`${baseUrl}/static/your-results.png`}
                alt="Your Results"
                className="mx-auto max-w-[122px] mb-4"
              />
              <Img
                src={`${baseUrl}/static/level-1.png`}
                alt={title}
                className="mx-auto max-w-[280px] mb-4"
              />
              <Text className="text-lg my-0">{description}</Text>
            </Section>

            <Section className="mt-16 max-w-[400px] mx-auto">
              <Img
                src={`${baseUrl}/static/next-steps.png`}
                alt="Next Steps"
                width="151px"
                className="mx-auto mb-8"
              />
              <Text className="text-xl my-0">{nextSteps}</Text>

              <div className="mb-8 mt-8">
                <Heading className="text-2xl my-0">{sections[0].title}</Heading>
                <Text className="text-lg my-0">{sections[0].description}</Text>
              </div>

              <div className="mb-8">
                <Heading className="text-2xl my-0">{sections[1].title}</Heading>
                <Text className="text-lg my-0">{sections[1].description}</Text>
              </div>

              <div className="mb-8">
                <Heading className="text-2xl my-0">{sections[2].title}</Heading>
                <Text className="text-lg my-0">{sections[2].description}</Text>
              </div>

              <div className="mb-8">
                <Heading className="text-2xl my-0">{sections[3].title}</Heading>
                <Text className="text-lg my-0">{sections[3].description}</Text>
              </div>

              <div className="mb-8">
                <Heading className="text-2xl my-0">{sections[4].title}</Heading>
                <Text className="text-lg my-0">{sections[4].description}</Text>
              </div>
            </Section>

            <Section className="bg-beige p-8 mt-8">
              <div className="max-w-[464px] mx-auto">
                <Heading className="text-xl my-0">
                  Quiz by Four Kitchens. <br />
                  We make websites with love. For good.
                </Heading>
                <Text className="text-base my-0">
                  We’d love to partner together on your journey to content
                  maturity!
                </Text>

                <Button
                  href="https://fourkitchens.com"
                  className="bg-orange text-white text-lg px-4 py-2 mt-4"
                >
                  Let’s connect
                </Button>

                <Text className="text-sm text-slate-500 my-0 mt-8">
                  This is the only email you will receive. <br />
                  You HAVE NOT been added to any mailing lists.
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
