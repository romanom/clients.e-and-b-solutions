import React from "react";
import { handlePageView } from "../../tools/analytics";
import { privacyPolicy } from "../../content/privacyPolicy";

export default class PrivacyPolicyPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="privacy_policy_page">
        <div className="privacy_policy_page__title">
          Privacy Policy for {privacyPolicy.companyWebsite}
        </div>
        {privacyPolicy.policy.map((policyLine, index) => {
          if (policyLine.isBold) {
            return (
              <div className="privacy_policy_page__heading" key={index}>
                {policyLine.text}
              </div>
            );
          }
          return (
            <div className="privacy_policy_page__content" key={index}>
              {policyLine.text}
            </div>
          );
        })}
      </div>
    );
  }
}
