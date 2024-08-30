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

export const InviteWorkspace = () => (
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
    <Preview>[Name] invited you to [Workspace/Project Name]</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Row>
            <Column align="center">
              <Img src={UMBRELLA_MAIL} height={230} alt="Umbrella" />
            </Column>
          </Row>
          <Text style={paragraph}>Hi [User's Name],</Text>
          <Text style={paragraph}>
            Looks like you’ve been invited by [Name] to join [Workspace/Project
            Name]
          </Text>
          <Text style={paragraph}>
            Click the button below to accept the invitation and explore your new
            [workspace/project].
          </Text>
          <Row>
            <Column align="center">
              <Button style={button} href="/">
                Accept Invite
              </Button>
            </Column>
          </Row>
          <Text style={paragraph}>
            Thank you for choosing Umbrella Product.
          </Text>
          <Text style={paragraphWithoutMarginBottom}>Best regards,</Text>
          <Text style={paragraphWithoutMargin}>The Umbrella Team</Text>
        </Section>
        <Footer />
      </Container>
    </Body>
  </Html>
);

export default InviteWorkspace;
