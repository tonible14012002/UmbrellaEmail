


import { Column, Img, Link, Row, Section, Text } from "@react-email/components";
import React from "react";
import {
  footer,
  UMBRELLA_FOOTER,
  UMBRELLA_LINKEDIN,
  UMBRELLA_INSTA,
  footerParagraph,
  footerParagraphWithoutMargin,
  footerParagraphWithoutMarginBottom,
} from "./constant";

export const Footer = () => {
  return (
    <Section style={footer}>
      <Row>
        <Column align="left">
          <Img src={UMBRELLA_FOOTER} height={50} alt="Umbrella Brand" />
        </Column>
        <Column align="right">
          <Row>
            <Column align="right">
              <Link href="">
                <Img src={UMBRELLA_LINKEDIN} height={32} />
              </Link>
            </Column>
            <Column style={{ width: 8 }}></Column>
            <Column>
              <Link href="https://www.instagram.com/umbrellaproduct/">
                <Img src={UMBRELLA_INSTA} height={32} />
              </Link>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row
        style={{
          marginTop: 16,
        }}
      >
        <Column>
          <Text style={footerParagraph}>
            Any questions? Please email our team at 
            <Link
              href="hello@umbrellaconcierge.com"
              style={{
                color: "#ffffff",
                textDecoration: "underline",
              }}
            >
              hello@umbrellaconcierge.com
            </Link>
          </Text>
          <Text style={footerParagraphWithoutMarginBottom}>
            Want to change how you receive these emails?
          </Text>
          <Text style={footerParagraphWithoutMargin}>
            You can update your preferences or unsubscribe
          </Text>
        </Column>
      </Row>
    </Section>
  );
};
