import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

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

export default function HelloEmail() {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                ...colors,
              },
            },
          },
        }}
      >
        <Body className="bg-bg">
          <Container className="pt-4">
            <Link href="https://fourkitchens.com">
              <Img src={`http://localhost:3001/static/email-logo.png`} alt="The Content Strategy Quiz. Better results through content." width="100%" /> 
            </Link>
            
            <Section className="bg-beige border border-solid border-gold-700 p-8 mt-8 mx-auto max-w-[464px]">
              <Img src={`http://localhost:3001/static/next-steps.png`} alt="Next Steps" width="151px" className="mx-auto" /> 
              <Text className="text-lg my-0">Organizations at the Ad Hoc level have started thinking about content strategy or experimenting with some practices, but lack the key indicators of maturity, leading to fragmented or duplicative efforts and inconsistent results. At times it may feel like everyone is doing their own thing and hoping for the best.</Text>
            </Section>
            
            <Section className="mt-16 max-w-[400px] mx-auto">
              <Img src={`http://localhost:3001/static/next-steps.png`} alt="Next Steps" width="151px" className="mx-auto" /> 
              <Heading className="text-2xl my-0">Formalize your strategy.</Heading>
              <Text className="text-lg my-0">Create a core content strategy statement or a set of strategic content priorities to describe what content needs to achieve, who it is for, and the value it provides to your users and the business.</Text>
            </Section>
            {/* <Button
              pX={20}
              pY={12}
              href="https://example.com"
              style={{ background: '#000', color: '#fff' }}
              >
              Hello
            </Button> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
