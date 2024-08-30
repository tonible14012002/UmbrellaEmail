
export const UMBRELLA_MAIL =
  "https://storage.googleapis.com/umbrella_bucket/1724998497255_66682b1facb4bd3c3c563994_umbrella-mail.png";
export const UMBRELLA_FOOTER =
  "https://storage.googleapis.com/umbrella_bucket/1724998518950_66682b1facb4bd3c3c563994_umbrella-brand.png";
export const UMBRELLA_LINKEDIN =
  "https://storage.googleapis.com/umbrella_dev_bucket/1725000907842_66682b1facb4bd3c3c563994_Group_1928.png";

export const UMBRELLA_INSTA =
  "https://storage.googleapis.com/umbrella_dev_bucket/1725000918012_66682b1facb4bd3c3c563994_Group_1927_1.png";

export const FONT = "https://storage.googleapis.com/umbrella_bucket/1725002711095_66682b1facb4bd3c3c563994_Sora-VariableFont_wght.ttf" 


export const main = {
  // backgroundColor: "#141414",
};

export const container = {
  backgroundColor: "#141414",
  margin: "0 auto",
  padding: "20px 0px 0px",
  marginBottom: "64px",
};

export const box = {
  padding: "0 48px",
  paddingBottom: "48px",
};

export const paragraph = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  fontWeight: 'light',
};

export const paragraphWithoutMarginBottom = {
  ...paragraph,
  marginBottom: "0px",
}

export const footerParagraph = {
  ...paragraph,
  fontSize: "12px",
  lineHeight: "14px",
  marginBottom: "10px",
  marginTop: "10px",
};

export const paragraphWithoutMargin = {
  ...paragraph,
  marginTop: "0px",
};

export const footerParagraphWithoutMarginBottom = {
  ...footerParagraph,
  marginBottom: "0px",
};

export const footerParagraphWithoutMargin = {
  ...footerParagraph,
  marginBottom: '0px',
  marginTop: '0px'
};

export const button = {
  backgroundColor: "#52CDA8",
  borderRadius: "58px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "semibold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "40%",
  padding: "14px",
  marginTop: "10px",
  marginBottom: "10px",
};

export const footer = {
  padding: "32px 48px",
  fontSize: "12px",
  lineHeight: "16px",
  backgroundColor: "#52CDA8",
  color: "#ffffff",
};
