import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
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


export const ShareFileEmail = () => (
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
        [Name] shared a file with you
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Row>
            <Column align="center">
              <Img src={UMBRELLA_MAIL} height={230} alt="Stripe" />
            </Column>
          </Row>
          <Text style={paragraph}>Hi there [User's Name],</Text>
          <Text style={paragraph}>
            [Name] share a file with you.
          </Text>
          <Text style={paragraph}>
            Click the button below to view the file. 
          </Text>
          <Row>
            <Column align="center">
              <Button style={button} href="/">
                View File
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

export default ShareFileEmail;
