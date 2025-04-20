import React from 'react'
import '../assets/styles/PrivacyPolicyPage.css'

function PrivacyPolicyPage() {
  return (
    <div className="policy-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Privacy Policy</h2>
        <ul className="sidebar-list">
          <li>
            <a href="#summary"><strong>Summary of Key Points</strong></a>
          </li>
        </ul>
        <ol className="sidebar-list">
          {items.map((item, index) => (
            <li key={index}><a href={item.href}><strong>{item.text}</strong></a></li>
          ))}
        </ol>
      </div>

      {/* Terms Content Section */}
      <div className="content">
        <h1>Terms & Conditions Overview</h1>
        <p>
          <strong>Effective April 4, 2025</strong>
        </p>

        <p className='table-content-text'>
          This Privacy Notice for <strong>Bin There, Done That</strong>              ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
          <br/>Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
        </p>

        {/* ------------------------------- SUMMARY OF KEY POINTS SECTION ------------------------------- */}
        <h2 id="summary" className="table-content-title">SUMMARY OF KEY POINTS</h2>
        <p className="table-content-text">
          This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
          <br/><br/>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
          <br/><br/>Do we process any sensitive personal information? Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
          <br/><br/>Do we collect any information from third parties? We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.
          <br/><br/>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
          <br/><br/>In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
          <br/><br/>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
          <br/><br/>How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          <br/><br/>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.
        </p>
        
        <ol className="policy-list">
          {/* ------------------------------- WHAT INFORMATION DO WE COLLECT? SECTION ------------------------------- */}
          <li id="collect-information" className="table-content-title"><strong>WHAT INFORMATION DO WE COLLECT?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
            <br/><br/>In Short: We collect personal information that you provide to us.
            <br/><br/>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            <br/><br/>Sensitive Information. We do not process sensitive information.
            <br/><br/>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information. Information automatically collected
            <br/><br/>In Short: Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics - is collected automatically when you visit our Services. We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
            <br/><br/>Like many businesses, we also collect information through cookies and similar technologies.
          </p>

          {/* ------------------------------- HOW DO WE PROCESS YOUR INFORMATION? SECTION ------------------------------- */}
          <li id="process-information" className="table-content-title"><strong>HOW DO WE PROCESS YOUR INFORMATION?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? SECTION ------------------------------- */}
          <li id="share-personal-information" className="table-content-title"><strong>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? SECTION ------------------------------- */}
          <li id="cookies" className="table-content-title"><strong>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- HOW DO WE HANDLE YOUR SOCIAL LOGINS? SECTION ------------------------------- */}
          <li id="social-logins" className="table-content-title"><strong>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY? SECTION ------------------------------- */}
          <li id="information-internationally" className="table-content-title"><strong>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- HOW LONG DO WE KEEP YOUR INFORMATION? SECTION ------------------------------- */}
          <li id="keep-information" className="table-content-title"><strong>HOW LONG DO WE KEEP YOUR INFORMATION?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- DO WE COLLECT INFORMATION FROM MINORS? SECTION ------------------------------- */}
          <li id="minors-information" className="table-content-title"><strong>DO WE COLLECT INFORMATION FROM MINORS?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- WHAT ARE YOUR PRIVACY RIGHTS? SECTION ------------------------------- */}
          <li id="privacy-rights" className="table-content-title"><strong>WHAT ARE YOUR PRIVACY RIGHTS?</strong></li>
          <p className="table-content-text">
            Personal information you disclose to us
          </p>

          {/* ------------------------------- CONTROLS FOR DO-NOT-TRACK FEATURES SECTION ------------------------------- */}
          <li id="do-not-track" className="table-content-title"><strong>CONTROLS FOR DO-NOT-TRACK FEATURES</strong></li>
          <p className="table-content-text">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
          </p>

          {/* ------------------------------- DO WE MAKE UPDATES TO THIS NOTICE? SECTION ------------------------------- */}
          <li id="updates-notice" className="table-content-title"><strong>DO WE MAKE UPDATES TO THIS NOTICE?</strong></li>
          <p className="table-content-text">
            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
            <br/><br/>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
          </p>


          {/* ------------------------------- HOW CAN YOU CONTACT US ABOUT THIS NOTICE? SECTION ------------------------------- */}
          <li id="contact-us" className="table-content-title"><strong>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong></li>
          <p className="table-content-text">
            If you have questions or comments about this notice, you may contact us by post at:
            <br/><br/>Phone: 09456577929
            Email: beachrizeldeguzman@gmail.com
          </p>


          {/* ------------------------------- HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? SECTION ------------------------------- */}
          <li id="rud-information" className="table-content-title"><strong>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong></li>
          <p className="table-content-text">
            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
          </p>

        </ol>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage;

const items = [
  { href: "#collect-information", text: "What information we collect?" },
  { href: "#process-information", text: "How do we process your information?" },
  { href: "#share-personal-information", text: "When and with whome do we share your personal information?" },
  { href: "#cookies", text: "Do we use cookies and other tracking technologies?" },
  { href: "#social-logins", text: "Do we handle your social logins?" },
  { href: "#information-internationally", text: "Is your information transferred internationally?" },
  { href: "#keep-information", text: "How long do we keep your information?" },
  { href: "#minors-information", text: "Do we collect information from minors?" },
  { href: "#privacy-rights", text: "What are your privacy rights?" },
  { href: "#do-not-track", text: "Controls for Do-Not-Track features" },
  { href: "#updates-notice", text: "Do we make updates to this notice?" },
  { href: "#contact-us", text: "How can you contact us about this notice?" },
  { href: "#rud-information", text: "How can you review, update, or delete the data we collect from you?" },
]