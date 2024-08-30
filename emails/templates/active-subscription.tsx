import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { FONT, UMBRELLA_MAIL, box, button, container, main, paragraph, paragraphWithoutMargin, paragraphWithoutMarginBottom } from "../constant";
import { Footer } from "../shared-components";


export const ActiveSubscription = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Sora"
        fallbackFontFamily='sans-serif'
        webFont={{
          url: FONT,
          format: "woff",
        }}
        fontWeight={400}
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
              <Img src={UMBRELLA_MAIL} height={230} alt="Stripe" />
            </Column>
          </Row>
          <Text style={paragraph}>Dear [User],</Text>
          <Text style={paragraphWithoutMarginBottom}>
            Congrats on upgrading your subscription!
          </Text>
          <Text style={paragraphWithoutMargin}>
            We’re thrilled to have you.
          </Text>
          <Text style={paragraph}>
            Click the button below to start exploring your premium benefits.
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

export default ActiveSubscription;