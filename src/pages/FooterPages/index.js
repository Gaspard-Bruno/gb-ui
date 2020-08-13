import React from "react";

import FAQsPage from "./FAQsPage";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const FooterPages = () => {
  return (
    <>
      <FAQsPage />
    </>
  );
};

const TermsAndConditions = () => {
  return (
    <>
      <TermsAndConditionsPage />
    </>
  );
};

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyPolicyPage />
    </>
  );
};

export default { FooterPages, TermsAndConditions, PrivacyPolicy };
