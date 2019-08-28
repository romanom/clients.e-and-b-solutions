import React from "react";
import privacyPolicy from "../../content/privacy-policy";
import "./privacy-policy.scss";

const PrivacyPolicy = () => (
  <div className="privacy-policy">
    <div className="privacy-policy__title">
      Privacy Policy for {privacyPolicy.companyWebsite}
    </div>
    {privacyPolicy.policies.map((policyLine, index) => {
      if (policyLine.isBold) {
        return (
          <div className="privacy-policy__heading" key={index}>
            {policyLine.text}
          </div>
        );
      }
      return (
        <div className="privacy-policy__text" key={index}>
          {policyLine.text}
        </div>
      );
    })}
  </div>
);

export default PrivacyPolicy;
