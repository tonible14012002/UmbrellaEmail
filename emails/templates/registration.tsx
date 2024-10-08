import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { main, container, box, paragraph, paragraphWithoutMargin, footerParagraph, footerParagraphWithoutMargin, button, footer, FONT, UMBRELLA_FOOTER, UMBRELLA_INSTA, UMBRELLA_LINKEDIN, UMBRELLA_MAIL } from "../constant";
import { Footer } from "../shared-components";


export const EmailTemplate = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Sora"
        fallbackFontFamily='sans-serif'
        webFont={{
          url: FONT,
          format: "woff",
        }}
        fontWeight={300}
        fontStyle="normal"
      />
    </Head>
    <Preview>
      Welcome to Umbrella Product! Clicking on button: Opens app
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Row>
            <Column align="center">
              <Img src={UMBRELLA_MAIL} height={230} alt="Umbrella" />
            </Column>
          </Row>
          <Text style={paragraph}>Dear [User],</Text>
          <Text style={paragraph}>
            Welcome to Umbrella Product! We’re delighted to inform you that your
            subscription is now active.
          </Text>
          <Text style={paragraph}>
            Click the button below to start exploring.
          </Text>
          <Row>
            <Column align="center">
              <Button style={button} href="/">
                Sign in
              </Button>
            </Column>
          </Row>
          <Text style={paragraph}>
            Thank you for choosing Umbrella Product.
          </Text>
          <Text style={paragraphWithoutMargin}>Best regards,</Text>
          <Text style={paragraphWithoutMargin}>The Umbrella Team</Text>
        </Section>
        <Footer/>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
