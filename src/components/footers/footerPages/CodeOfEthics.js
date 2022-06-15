import React from "react";

import DocsNavbar from "../../../components/navBars/docsNavbar";
import MainFooterPages from "./MainFooterPages";
import { Link } from "react-router-dom";
import HomeFooter from "../homeFooter";

const CodeOfEthics = () => {
  return (
    <>
      <DocsNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MainFooterPages />
          </div>
          <div className="col-md-9">
            <p className="FooterMainHeading">Code of Ethics</p>
            <p className="FooterSubHeading">1. INDEX</p>
            <p className="footerText">
              <ul>
                <li>
                  <Link className="EthicsLink">1. INDEX</Link>
                </li>
                <li>
                  <Link className="EthicsLink">2. Game’S CODE OF ETHICS</Link>
                </li>
                <li>
                  <Link className="EthicsLink">3. POLICIES AND PRINCIPLES</Link>
                  <ul>
                    <li>
                      <Link className="EthicsLink">
                        3.1 Standard of Conduct
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        3.2 Compliance with Law
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        3.3 Financial Recordkeeping/Management
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">3.4 Reporting</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        3.5 Monitoring and controlling
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">3.6 Employees</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        3.7 Equal Opportunity Employment
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        3.8 Health and Safety in the Workplace
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">3.9 No Violence</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">3.10 Drugs and Alcohol</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">3.11 The Environment</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        3.12 Records and Reports
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">3.13 Confidentiality</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="EthicsLink">4. THE COMPLIANCE TEAM</Link>
                </li>
                <li>
                  <Link className="EthicsLink">
                    5. IMPLEMENTATION – TRAINING PROCEDURES
                  </Link>
                </li>
                <li>
                  <Link className="EthicsLink">
                    6. TREATMENT OF BUSINESS PARTNERS AND THIRD
                    PARTIES/CONFLICTS OF INTEREST
                  </Link>
                  <ul>
                    <li>
                      <Link className="EthicsLink">6.1 Shareholders</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">6.2 Competition</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        6.3 Business Integrity – Gifts
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">
                        6.4 Conflicts of Interests
                      </Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">6.5 Public Activities</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">6.6 Contracts</Link>
                    </li>
                    <li>
                      <Link className="EthicsLink">6.7 Know your client</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="EthicsLink">
                    7. BASIC RULES OF CONDUCTS ON RISK MATTERS
                  </Link>
                </li>
                <li>
                  <Link className="EthicsLink">8. BREACHES TO THE CODE</Link>
                </li>
              </ul>
            </p>
            <p className="FooterSubHeading">2. Game’S CODE OF ETHICS</p>
            <p className="footerText">
              This Code of Ethics applies to Game and all of its affiliates or
              subsidiaries (the “Game Group”). Our Values of integrity,
              responsibility, respect and pioneering are the simplest statement
              of who we are. They govern everything we do. Our reputation as a
              company that the users can trust is our most valuable asset, and
              it is up to all of us to make sure that we continually earn that
              trust. All of our communications and other interactions with our
              users should increase their trust in us, that’s why we publish
              this externally and expect all others who work with us to set
              themselves equally high principles.
            </p>
            <p className="FooterSubHeading"> 3. POLICIES AND PRINCIPLES</p>
            <p className="footerText">
              These Policies and Principles we are talking about the ethical
              behaviors and guides that we all need to follow when working for
              Game. They are mandatory for us, but we also publish them
              externally on our website in support of transparency. Compliance
              with these principles is an essential part of the way we conduct
              business. The Game Compliance Team is responsible for guarantying
              the application of these Policies and Principles throughout the
              company. Keeping in mind the following Policies and Principles
              will help us to achieve the highest standards of compliance.
            </p>
            <p className="footerText">
              {" "}
              3.1 Standard of Conduct We conduct all our operations and
              transactions with honesty, integrity and openness, and with
              respect for the human rights and interests of our employees and of
              all of those with whom we interact.
            </p>
            <p className="footerText">
              {" "}
              3.2 Compliance with Law Game Group and its employees are required
              to know, respect and comply the laws and regulations of the
              countries in which we operate. Every employee shall act ethically
              and in compliance with applicable laws and regulations while
              carrying out the Game's business. Game has a zero tolerance policy
              for violations of applicable laws.
            </p>
            <p className="footerText">
              {" "}
              3.3 Financial Recordkeeping/Management All relevant transactions
              must be approved by the Compliance Team before being implemented.
              The accounting and cash handling procedures must be followed in
              order to avoid operational and legal risks.
            </p>
            <p className="footerText">
              {" "}
              3.4 Reporting Any breaches of this Code must be reported to the
              Compliance Team, to the email account compliance@Game.org.
              Provision has been made for employees to be able to report in
              confidence and no employee will suffer as a consequence of doing
              so no matter who he/she is reporting (even a superior). Game aims
              to encourage employees to report potential breaches of the Codes
              of Ethics, not only once the act is committed.
            </p>
            <p className="footerText">
              {" "}
              3.5 Monitoring and controlling Although we respect your privacy
              please be aware that for personal business you should use your
              personal devices. Game will monitor and control the use of Game’s
              property, which includes, but is not limited to, computer, tablet,
              cell phone and email accounts provided to you. All devices
              provided by Game have a monitoring software to prevent the
              commission of illegal acts. Random checks will be made on all
              Game’s devices
            </p>
            <p className="footerText">
              {" "}
              3.6 Employees Game is committed to a working environment that
              promotes diversity and equal opportunity and where there is mutual
              trust, respect for human rights and no discrimination. We are
              committed to working with employees to develop and enhance each
              individual’s skills and capabilities, respect them, and maintain
              good communication with them. This Code of Ethics will be annexed
              to all employments agreements.
            </p>
            <p className="footerText">
              {" "}
              3.7 Equal Opportunity Employment Employment here is based
              exclusively upon individual merit and qualifications directly
              related to professional competence in the area where each employee
              is specialized. We strictly prohibit unlawful discrimination,
              harassment, bullying in any form – verbal, physical, or visual or
              any other characteristics protected by law (such as race, sex,
              marital status, medical condition, etc.). We also make all
              reasonable accommodations to meet our obligations under laws
              protecting the rights of the disabled.
            </p>
            <p className="footerText">
              {" "}
              3.8 Health and Safety in the Workplace We are committed to a safe
              work environment, and we strongly procure full compliance with
              health and safety regulation. All employees will be receive
              training concerning safety procedures and fire drills.
              Furthermore, we encourage a healthy diet for our employees and we
              make available fruit and vegetables for snacking in the workplace.
            </p>
            <p className="footerText">
              {" "}
              3.9 No Violence We are committed to a violence-free work
              environment, and we have zero tolerance for any level of violence,
              harassment or any other inappropriate behavior in the workplace.{" "}
            </p>
            <p className="footerText">
              3.10 Drugs and Alcohol Substance abuse is incompatible with the
              health and safety of our employees, and we don’t permit it.
              Consumption of alcohol is banned at our offices, except for
              special events, where all employees should use a good judgment and
              never drink in a way that leads to impaired performance or
              inappropriate behavior, endangers the safety of others, or
              violates the law. Illegal drugs in our offices are strictly
              prohibited.
            </p>
            <p className="footerText">
              {" "}
              3.11 The Environment Game is committed to promote environmental
              care, increase understanding of environmental issues and
              disseminate good practice inside the company with recycling
              procedures.
            </p>
            <p className="footerText">
              {" "}
              3.12 Records and Reports Open and effective cooperation requires
              correct and truthful reporting. This applies equally to the
              relationship with shareholders, employees, customers and the Game
              Group as well as with the public and any governmental offices such
              as, for instance, supervisory authorities.
            </p>
            <p className="footerText">
              {" "}
              3.13 Confidentiality Confidentiality must be maintained with
              regard to internal corporate matters which have not been made
              known to the public. We respect and protect the data privacy and
              security of the information that we received from any third party.
            </p>{" "}
            <p className="FooterSubHeading"> 4. THE COMPLIANCE TEAM</p>
            <p className="footerText">
              {" "}
              The Compliance Team has a duty of supervision. The members of the
              Compliance Team must be diligent, proactive and ethical
              individuals whose role is to make sure that the Company is
              conducting its business in full compliance with this Code of
              Ethics and the applicable law.
            </p>
            <p className="FooterSubHeading">
              {" "}
              5. IMPLEMENTATION – TRAINING PROCEDURES
            </p>
            <p className="footerText">
              {" "}
              Game shall conduct regular training procedures to make sure that
              everyone knows and understands the Code of Ethics. Our employees
              are the face of our Company and we train them to respect the
              Company’s principles and standards not only while working but also
              in their own life.
            </p>
            <p className="FooterSubHeading">
              {" "}
              6. TREATMENT OF BUSINESS PARTNERS AND THIRD PARTIES/CONFLICTS OF
              INTEREST
            </p>{" "}
            <p className="footerText">
              {" "}
              6.1 Shareholders Game will conduct its operations in accordance
              with internationally accepted principles of good corporate
              governance. We will provide timely, regular and reliable
              information on our activities, structure, financial situation and
              performance to all shareholders anytime they need it and also be
              in accordance between all the companies in the Game Group.
            </p>
            <p className="footerText">
              {" "}
              6.2 Competition Game companies and employees will conduct their
              operations in accordance with the principles of fair competition
              and all applicable regulations. Every employee must comply with
              the laws of fair competition. Employees shall seek guidance from
              the legal department of their particular company within the Game
              Group when in doubt.
            </p>
            <p className="footerText">
              {" "}
              6.3 Business Integrity – Gifts Game does not give or receive,
              whether directly or indirectly, bribes or other improper payments
              or advantages for business or financial gain. One of our
              principles is to avoid corruption, that’s why no employee may
              offer, give or receive any gift or payment which is, or may be
              construed as being, a bribe. Any demand for, or offer of, a bribe
              must be rejected immediately and reported to the Compliance Team.
              In cases of doubt, the recipient should be asked to obtain prior
              permission from the Compliance Team.{" "}
            </p>
            <p className="footerText">
              6.4 Conflicts of Interests All employees and service providers
              working for Game are expected to avoid personal activities and
              financial interests which could conflict with their
              responsibilities to the Company. No employee may directly or
              indirectly, neither in his/her country nor abroad, offer or grant
              unlawful benefits in connection with his/her business dealings.
            </p>
            <p className="footerText">
              {" "}
              6.5 Public Activities Game will co-operate with governments and
              other organizations, both directly and through bodies such as
              trade associations, in the development of proposed legislation and
              other regulations which may affect legitimate business interests.
            </p>
            <p className="footerText">
              {" "}
              6.6 Contracts Inclusion of the Code of Ethics as an annex to all
              contracts of the company will be mandatory. All new contractors
              and partners will need to sign statement acknowledging and
              accepting the contents of the Code of Ethics to be sure that they
              know and respect our standards.
            </p>
            <p className="footerText">
              {" "}
              6.7 Know your client Before entering into any contract a Know Your
              Client form should be completed by the relevant party. This should
              provide for the identification of directors, shareholders and
              final economic beneficiaries and this allows the company to have a
              real record of who are we dealing with.
            </p>
            <p className="FooterSubHeading">
              7. BASIC RULES OF CONDUCTS ON RISK MATTERS
            </p>
            <p className="footerText">
              Game and its employees will ensure that Game does not receive the
              proceeds of criminal activities. All employees must be alert to
              the suspicious transactions such as when third parties (i) make or
              ask for payments in a form outside the ordinary course of
              business; (ii) split payments from several companies to our
              company; (iii) make or ask for payments in cash when they are
              usually made by check or wire transfer; or (iv) make or ask for
              payments in advance when are not customary or required by
              contract.
            </p>
            <p className="footerText">
              Employees involved in engaging or contracting with third parties
              such as new clients or investors must:
            </p>
            <p className="footerText">
              <ul>
                <li>
                  Ensure that the third parties in question are subject to
                  screening to assess their identity and legitimacy before
                  contracts are signed or transactions occur;
                </li>
                <li>
                  Carefully consider if it is necessary to consult with the
                  Company’s Compliance Team before deciding whether to do
                  business with the third party.
                </li>
                <li>
                  Certain decisions that could involve risks pursuant to the
                  risk matters mentioned should be backed by legal opinions
                  issued by attorneys of the relevant jurisdiction.
                </li>
              </ul>
            </p>
            <p className="FooterSubHeading">8. BREACHES TO THE CODE</p>
            <p className="footerText">
              Breaching the Code of Ethics could have very serious consequences
              for Game and for individuals involved. Where illegal conduct is
              involved, these could include significant fines for Game,
              imprisonment for individuals and significant damage to our
              reputation.
            </p>
            <p className="footerText">
              Regardless of the sanctions imposed by the law, any employee
              guilty of a violation of the law or of this Code of Ethics while
              carrying out the Game Group’s business will be subject to
              disciplinary measures up to and including termination when
              applicable.
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default CodeOfEthics;
