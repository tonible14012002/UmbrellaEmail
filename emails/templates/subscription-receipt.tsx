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
import {
  FONT,
  UMBRELLA_MAIL,
  box,
  button,
  container,
  main,
  paragraph,
  paragraphWithoutMargin,
  paragraphWithoutMarginBottom,
} from "../constant";
import { Footer } from "../shared-components";

export const SubscriptionReceipt = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Sora"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: FONT,
          format: "woff",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Your receipt from Umbrella Product</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Row>
            <Column align="center">
              <Img src={UMBRELLA_MAIL} height={230} alt="Stripe" />
            </Column>
          </Row>
          <Text style={paragraph}>[Username],</Text>
          <Text style={paragraphWithoutMarginBottom}>
            Here is the receipt for your latest payment.
          </Text>
          <Text style={paragraphWithoutMargin}>
            Thank you for choosing Umbrella Product, we’re glad to have you
            here.
          </Text>
          <Text style={paragraphWithoutMargin}>
            We’re thrilled to have you.
          </Text>
          <Text style={paragraph}>
            If you have any questions about this payment, your subscription, or would like to chat, contact us at any time. We’d love to hear from you.
          </Text>
          <Text style={paragraphWithoutMarginBottom}>Best regards,</Text>
          <Text style={paragraphWithoutMargin}>The Umbrella Team</Text>
        </Section>
        <Footer />
      </Container>
    </Body>
  </Html>
);

export default SubscriptionReceipt;
