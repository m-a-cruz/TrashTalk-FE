import React from 'react'
import '../assets/styles/TermsConditionPage.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function TermsConditionPage() {
  return (
    <div className="terms-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Terms & Conditions</h2>
        <ul className="sidebar-list">
          <li>
            <a href="#agreement"><strong>Agreement to Our Legal Terms</strong></a>
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

        {/* ------------------------------- AGREEMENT TO OUR LEGAL TERMS SECTION ------------------------------- */}
        <h2 id="agreement" className="table-content-title">AGREEMENT TO OUR LEGAL TERMS</h2>
        <p className="table-content-text">
          We are <strong>Bin There, Done That</strong> ("Company," "we," "us," "our"), a company registered in the Philippines at M.T. Villanueva Avenue, Naga City, CAMARINES SUR 4400.
          <br/><br/>We operate the website https://bin-there-done-that-fe.vercel.app/ (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          <br/><br/>You can contact us by phone at 09456577929, email at beachrizeldeguzman@gmail.com, or by mail to M.T. Villanueva Avenue, Naga City, CAMARINES SUR 4400, Philippines.
          <br/><br/>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and <strong>Bin There, Done That</strong>, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          <br/><br/>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          <br/><br/>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          <br/><br/>We recommend that you print a copy of these Legal Terms for your records.
        </p>

        {/* ------------------------------- OUR SERVICES SECTION ------------------------------- */}
        <ol className="terms-list">
          <li id="services" className="table-content-title"><strong>Our Services</strong></li>
          <p className="table-content-text">
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>

          {/* ------------------------------- INTELLECTUAL PROPERTY RIGHTS SECTION ------------------------------- */}
          <li id="intellectual-property" className="table-content-title"><strong>Intellectual Property Rights</strong>
            <p  className="table-content-subtitle"><strong>2.1 Our intellectual property</strong></p>
            <p className="table-content-text">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
              <br/><br/>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
              <br/><br/>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
            </p>
            <p  className="table-content-subtitle"><strong>2.2 Your use of our Services</strong></p>
            <p className="table-content-text">
                Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
              <ul>
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access,
                    solely for your personal, non-commercial use or internal business purpose.
                </li>
              </ul>
                <br/>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                <br/><br/>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: beachrizeldeguzman@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                <br/><br/>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                <br/><br/>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
            </p>
            <p  className="table-content-subtitle"><strong>2.3 Your submissions</strong></p>
            <p className="table-content-text">
              Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
              <br/><br/>Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
              <br/><br/>You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:
              <ul>
                <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                <li>warrant and represent that your Submissions do not constitute confidential information.</li>
              </ul>
                <br/>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
            </p>
          </li>


          {/* -------------------------------  USER REPRESENTATIONS SECTION ------------------------------- */}
          <li id="user-representations" className="table-content-title"><strong>User Representations</strong>
            <p className="table-content-text">
              By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
              <br/><br/>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
            </p>
          </li>

          {/* ------------------------------- USER REGISTRATION SECTION ------------------------------- */}
          <li id="user-registration"  className="table-content-title"><strong>User Registration</strong>
            <p className="table-content-text">
              You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </p>
          </li>
          {/* ------------------------------- PROHIBITED ACTIVITIES SECTION ------------------------------- */}
          <li id="prohibited-activities" className="table-content-title"><strong>Prohibited Activities</strong>
            <p className="table-content-text">
            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              As a user of the Services, you agree not to:
              <ul>
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
                <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Use the Services to advertise or offer to sell goods and services.</li>
                <li>Sell or otherwise transfer your profile.</li>
              </ul>
            </p>
          </li>

          {/* ------------------------------- USER GENERATED CONTRIBUTIONS SECTION ------------------------------- */}
          <li id="user-generated-contributions" className="table-content-title"><strong>User Generated Contributions</strong>
            <p className="table-content-text">
              The Services does not offer users to submit or post content.
            </p>
          </li>

          {/* ------------------------------- CONTRIBUTION LICENSE SECTION ------------------------------- */}
          <li id="contribution-license" className="table-content-title"><strong>Contribution License</strong>
            <p className="table-content-text">
              You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
              <br/><br/>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
            </p>
          </li>

          {/* ------------------------------- SERVICES MANAGEMENT SECTION ------------------------------- */}
          <li id="services-management" className="table-content-title"><strong>Services Management</strong>
            <p className="table-content-text">
              We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
            </p>
          </li>

          {/* ------------------------------- PRIVACY POLICY SECTION ------------------------------- */}
          <li id="privacy-policy" className="table-content-title"><strong>Privacy Policy</strong>
            <p className="table-content-text">
              We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the Philippines. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the Philippines, then through your continued use of the Services, you are transferring your data to the Philippines, and you expressly consent to have your data transferred to and processed in the Philippines.
            </p>
          </li>

          {/* ------------------------------- TERM AND TERMINATION SECTION ------------------------------- */}
          <li id="term-termination" className="table-content-title"><strong>Term and Termination</strong>
            <p className="table-content-text">
              These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              <br/><br/>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </li>

          {/* ------------------------------- MODIFICATIONS AND INTERRUPTIONS SECTION ------------------------------- */}
          <li id="modifications-and-interruptions" className="table-content-title"><strong>Modifications and Interruptions</strong>
            <p className="table-content-text">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
              <br/><br/>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
            </p>
          </li>

          {/* ------------------------------- GOVERNING LAW SECTION ------------------------------- */}
          <li id="governing-law" className="table-content-title"><strong>Governing Law</strong>
            <p className="table-content-text">
              These Legal Terms shall be governed by and defined following the laws of the Philippines. <strong>Bin There, Done That</strong> and yourself irrevocably consent that the courts of the Philippines shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
            </p>
          </li>

          {/* ------------------------------- DISPUTE RESOLUTION SECTION ------------------------------- */}
          <li id="dispute-resolution" className="table-content-title"><strong>Dispute Resolution</strong>
            <p  className="table-content-subtitle"><strong>13.1 Informal Negotiations</strong></p>
            <p className="table-content-text">
              To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
            </p>
            
            <p  className="table-content-subtitle"><strong>13.2 Binding Arbitration</strong></p>
            <p className="table-content-text">
              Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, or arbitration shall be Camarines Sur, Philippines. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of the Philippines.
            </p>
            
            <p  className="table-content-subtitle"><strong>13.3 Restrictions</strong></p>
            <p className="table-content-text">
              The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </p>
            
            <p  className="table-content-subtitle"><strong>13.4 Exceptions to Informal Negotiations and Arbitration</strong></p>
            <p className="table-content-text">
              The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
            </p>
          </li>

          {/* ------------------------------- CORRECTIONS SECTION ------------------------------- */}
          <li id="corrections" className="table-content-title"><strong>Corrections</strong>
            <p className="table-content-text">
              There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
            </p>
          </li>

          {/* ------------------------------- DISCLAIMER SECTION ------------------------------- */}
          <li id="disclaimer" className="table-content-title"><strong>Disclaimer</strong>
            <p className="table-content-text">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
          </li>

          {/* ------------------------------- LIMITATIONS OF LIABILITY SECTION ------------------------------- */}
          <li id="limitations-of-liability" className="table-content-title"><strong>Limitations of Liability</strong>
            <p className="table-content-text">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE six (6) mONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
            </p>
          </li>

          {/* ------------------------------- INDEMNIFICATION SECTION ------------------------------- */}
          <li id="indemnification" className="table-content-title"><strong>Indemnification</strong>
            <p className="table-content-text">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
            </p>
          </li>

          {/* ------------------------------- USER DATA SECTION ------------------------------- */}
          <li id="user-data" className="table-content-title"><strong>User Data</strong>
            <p className="table-content-text">
              We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
            </p>
          </li>

          {/* ------------------------------- ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES SECTION ------------------------------- */}
          <li id="electronic-comms" className="table-content-title"><strong>Electronic Communications, Transactions, and Signitures</strong>
            <p className="table-content-text">
              Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
            </p>
          </li>

          {/* ------------------------------- SMS TEXT MESSAGING SECTION ------------------------------- */}
          <li id="sms-text-messaging" className="table-content-title"><strong>SMS Text Messaging</strong>
            <p  className="table-content-subtitle"><strong>20.1 Opting Out</strong></p>
            <p className="table-content-text">
              If at any time you wish to stop receiving SMS messages from us, simply reply to the text with "STOP.” You may receive an SMS message confirming your opt out.
            </p>
            
            <p  className="table-content-subtitle"><strong>20.2 Message and Data Rates</strong></p>
            <p className="table-content-text">
              Please be aware that message and data rates may apply to any SMS messages sent or received. The rates are determined by your carrier and the specifics of your mobile plan.
            </p>
            
            <p  className="table-content-subtitle"><strong>20.3 Support</strong></p>
            <p className="table-content-text">
              If you have any questions or need assistance regarding our SMS communications, please email us at beachrizeldeguzman@gmail.com or call at 09456577929.
            </p>
          </li>

          {/* ------------------------------- MISCELLANEOUS SECTION ------------------------------- */}
          <li id="miscellaneous" className="table-content-title"><strong>Miscellaneous</strong>
            <p className="table-content-text">
              These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
            </p>
          </li>

          {/* ------------------------------- CONTACT US SECTION ------------------------------- */}
          <li id="contact-us" className="table-content-title"><strong>Contact Us</strong>
            <p className="table-content-text">
              In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              <strong>
                <br/><br/>Bin There, Done That
                <br/>M.T. Villanueva Avenue
                <br/>Naga City, CAMARINES SUR 4400
                <br/>Philippines
                <br/>Phone: 09456577929
                <br/>beachrizeldeguzman@gmail.com
              </strong>
            </p>
          </li>
        </ol>

        {/* <ol>
        {items.map((item, index) => (
          <Section id={item.href.substring(1)} href={item.href} text={item.text} >
            
          </Section>
        ))}
        </ol> */}
      </div>
    </div>
  )
}

export default TermsConditionPage


const items = [
  { href: "#services", text: "Our Services" },
  { href: "#intellectual-property", text: "Intellectual Property Rights" },
  { href: "#user-representations", text: "User Representations" },
  { href: "#user-registration", text: "User Registration" },
  { href: "#prohibited-activities", text: "Prohibited Activities" },
  { href: "#user-generated-contributions", text: "User Generated Contributions" },
  { href: "#contribution-license", text: "Contribution License" },
  { href: "#services-management", text: "Services Management" },
  { href: "#privacy-policy", text: "Privacy Policy" },
  { href: "#term-termination", text: "Term and Termination" },
  { href: "#modifications-and-interruptions", text: "Modifications and Interruptions" },
  { href: "#governing-law", text: "Governing Law" },
  { href: "#dispute-resolution", text: "Dispute Resolution" },
  { href: "#corrections", text: "Corrections" },
  { href: "#disclaimer", text: "Disclaimer" },
  { href: "#limitations-of-liability", text: "Limitations of Liability" },
  { href: "#indemnification", text: "Indemnification" },
  { href: "#user-data", text: "User Data" },
  { href: "#electronic-comms", text: "Electronic Communications, Transactions, and Signitures" },
  { href: "#sms-text-messaging", text: "SMS Text Messaging" },
  { href: "#miscellaneous", text: "Miscellaneous" },
  { href: "#contact-us", text: "Contact Us" },
]
