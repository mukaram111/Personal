import React from "react";

import DocsNavbar from "components/navBars/docsNavbar";
import HomeFooter from "../homeFooter";
import MainFooterPages from "./MainFooterPages";

import "./style.css";
import { Link } from "react-router-dom";

const TermofUse = () => {
  return (
    <>
      <DocsNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MainFooterPages />
          </div>
          <div className="col-md-9">
            <p className="FooterMainHeading">Terms of Use</p>
            <p className="FooterSubHeading">1. Acceptance of Terms</p>
            <p className="footerText">
              The Decentraland Foundation (the "Foundation"), acting for the
              benefit of the Decentraland community as a whole, holds the
              intellectual property rights over, and makes available, (a) the
              DCL Client, the Desktop Client, the SDK 5.0, the Marketplace (
              <Link className="footerTextLinks">
                https://dao.decentraland.org
              </Link>
              ), the Builder, the Blog, Events, Agora, Forum, the Land Manager,
              the Command Line Interface, DAO, the Developers’ Hub, the Rewards
              tool which, with any other features, tools and/or materials made
              available from time to time by the Foundation, are referred to
              herein as the "Tools" and (b) the website &nbsp;
              <Link className="footerTextLinks">
                https://dao.decentraland.org
              </Link>{" "}
              (the "Site"). Please read these Terms of Use (the "Terms" or
              "Terms of Use") carefully before using the Tools and the Site. By
              using or otherwise accessing the Tools and the Site, you: (1)
              accept and agree to be bound by these Terms; (2) accept that the
              Tools are still in testing phase and that you use at your own
              risk, as further explained in Section 2 below; (3) represent that
              you are old enough to use the Tools and the Site pursuant to
              Sections 3 and 9 below; (4) consent to the collection, use,
              disclosure and other handling of information as described in the
              Privacy Policy, available here &nbsp;
              <Link className="footerTextLinks">
                https://dao.decentraland.org
              </Link>{" "}
              ; (5) accept and agree (5.1.) the Content Policy approved by the
              DAO, available here &nbsp;
              <Link className="footerTextLinks">
                https://dao.decentraland.org
              </Link>
              , and (5.2.) any additional terms and conditions of participation
              issued by the Foundation from time to time. If you do not agree to
              the Terms, then you must not access or use the Tools or the Site.
            </p>
            <p className="footerText">
              As per the endowment received, the Foundation makes available the
              Tools and the Site free of charge in order to allow different
              interactions with the Decentraland platform ("Decentraland"), a
              decentralized virtual world. The Foundation does not own or
              control Decentraland, as ownership and governance is decentralized
              in the community through the DAO.
            </p>
            <p className="footerText">
              Decentraland is governed by a decentralized autonomous
              organization (the "DAO"). For further information please see
              &nbsp;
              <Link className="footerTextLinks">
                https://dao.decentraland.org
              </Link>
              .
            </p>
            <p className="footerText">
              The Foundation has no continuing obligation to operate the Tools
              and the Site and may cease to operate one or more of the Tools in
              the future, at its exclusive discretion, with no liability
              whatsoever in connection thereto.
            </p>
            <p className="footerText">
              With respect to the source code of the software of the Tools that
              has been released under an open source license, such software code
              must be used in accordance with the applicable open source license
              terms and conditions as described in Section 13 below. Other
              similar tools might be developed in the future by the community or
              third parties.
            </p>
            <p className="FooterSubHeading">
              2. Disclaimer and Modification of Terms of Use
            </p>
            <p className="footerText">
              The Tools are provided on an "as is" and "as available" basis and
              may contain defects and software bugs. You are advised to
              safeguard important data, property and content, to use caution,
              and not to rely in any way on the correct or secure functionality
              or performance of the Tools.
            </p>
            <p className="footerText">
              Except for Section 17, providing for binding arbitration and
              waiver of class action rights, as detailed in Section 7, the
              Foundation reserves the right, at the sole discretion of the DAO,
              to modify or replace the Terms of Use at any time. The most
              current version of these Terms will be posted on the Site. You
              shall be responsible for reviewing and becoming familiar with any
              such modifications. Use of the Tools by you after any modification
              to the Terms constitutes your acceptance of the Terms of Use as
              modified.
            </p>
            <p className="FooterSubHeading">3. Eligibility</p>
            <p className="footerText">
              You hereby represent and warrant that you are fully able and
              competent to enter into the terms, conditions, obligations,
              affirmations, representations and warranties set forth in these
              Terms and to abide by and comply with these Terms. Decentraland is
              a global platform and by accessing the Content, the Site or Tools,
              you are representing and warranting that you are of the legal age
              of majority in your jurisdiction as is required to access such
              Tools and Content and enter into arrangements as provided by the
              Tools. You further represent that you are otherwise legally
              permitted to use the Tools in your jurisdiction including owning
              cryptographic tokens, and interacting with the Site, Tools or
              Content in any way. You further represent that you are responsible
              for ensuring compliance with the laws of your jurisdiction and
              acknowledge that the Foundation is not liable for your compliance
              or failure to comply with such laws. You further represent and
              warrant that all funds or assets used by you have been lawfully
              obtained by you in compliance with all applicable laws.
            </p>
            <p className="FooterSubHeading">4. Account Access and Security</p>
            <p className="footerText">
              {" "}
              Access to the Tools is provided via a third party private key
              manager selected by you (e.g., a Web3 Provider, Metamask, a USB
              interface for Ledger Wallet, the Mist browser, or other). Security
              and secure access to each account in the Tools is provided solely
              by the third party private key manager you select to administer
              your private key. You and the third party private key manager you
              select are entirely responsible for security related to access of
              the Tools and all information provided by you to such third party
              provider (including without limitation, email or phone number).
              The DAO and/or the Foundation bear no responsibility for any
              breach of security or unauthorized access to your account (the
              "Account"). You are advised to: (a) avoid any use of the same
              password with your selected third party private key manager that
              you have ever used outside of the third party private key manager;
              and (b) keep your password and any related secret information
              secure and confidential and do not share them with anyone else.
            </p>
            <p className="footerText">
              You are solely responsible for all activities conducted through
              your Account whether or not you authorize the activity. In the
              event that fraud, illegality or other conduct that violates this
              Agreement is discovered or reported (whether by you or someone
              else) that is connected with your Account, the DAO may suspend or
              block your Account (or Accounts) as described in Section 15.
            </p>
            <p className="footerText">
              You are solely responsible for maintaining the confidentiality of
              your password and for restricting access to your devices. You are
              solely responsible for any harm resulting from your disclosure, or
              authorization of the disclosure, of your password or from any
              person's use of your password to gain access to your Account. You
              acknowledge that in the event of any unauthorized use of or access
              to your Account, password or other breach of security, you accept
              that due to the nature of the Tools and the platform itself, the
              DAO and/or the Foundation will be unable to remedy any issues that
              arise.
            </p>
            <p className="footerText">
              The DAO and/or the Foundation will not be liable for any loss or
              damage (of any kind and under any legal theory) to you or any
              third party arising from your inability or failure for any reason
              to comply with any of the foregoing obligations, or for any reason
              whatsoever, except fraud on our part.
            </p>
            <p className="footerText">
              The DAO and/or the Foundation cannot and will not be liable for
              any loss or damage arising from your sharing or other loss of your
              private key or related information, or any other damage or loss
              arising from unauthorized access to your Account.
            </p>
            <p className="footerText">
              Transactions that take place using the Tools are confirmed and
              managed via the Ethereum blockchain. You understand that your
              Ethereum public address will be made publicly visible whenever you
              engage in a transaction using the Tools.
            </p>
            <p className="footerText">
              If you reside in a jurisdiction where online gambling is banned
              (such as the United States of America, China and South Korea) you
              must refrain from accessing Content which includes online
              gambling.
            </p>
            <p className="FooterSubHeading">5. Representations and Risks</p>
            <p className="FooterTextSubHeading">5.1 Disclaimer</p>
            <p className="footerText">
              You acknowledge and agree that your use of the Tools and the Site
              is at your sole risk. The Tools and the Site are provided on an
              "AS IS" and "AS AVAILABLE" basis, without warranties of any kind,
              either express or implied, including, without limitation, implied
              warranties of merchantability, fitness for a particular purpose or
              non-infringement. You acknowledge and agree that the DAO and/or
              the Foundation has no obligation to take any action regarding:
              which users gain access to or use the Tools; what effects the
              Tools may have on you; the LAND you own; how you may interpret or
              use the Tools; or what actions you may take or fail to take as a
              result of having been exposed to the Tools. You release the DAO
              and/or the Foundation from all liability for your inability to
              access to the Site, Tools or any Content therein. The DAO and/or
              the Foundation is not and cannot be responsible for and makes no
              representations, warranties or covenants concerning any Content
              contained in or accessed through the Site, Tools, and the DAO
              and/or the Foundation will not be responsible or liable for the
              accuracy, copyright compliance, legality or decency of material
              contained in or accessed through the Tools. The Content Policy
              over Decentraland is established and enforced exclusively by the
              Decentraland community through the DAO.
            </p>
            <p className="FooterTextSubHeading">
              5.2 Sophistication and Risk of Cryptographic Systems
            </p>
            <p className="footerText">
              By utilizing the Tools, the Site or interacting with the Tools or
              platform or anything contained or provided therein in any way, you
              represent that you understand the inherent risks associated with
              cryptographic systems; and warrant that you have an understanding
              of the usage, risks, potential bugs based on novel technology
              (where applicable), and intricacies of native cryptographic
              tokens, like Ether (ETH) and Bitcoin (BTC), smart contract based
              tokens such as those that follow the Ethereum Token Standard (
              <Link className="footerTextLinks">
                https://github.com/ethereum/EIPs/issues/20
              </Link>
              ), MANA (the ERC-20 token that allows users to claim parcels of
              LAND and trade with each other within Decentraland), LAND (the
              ERC-721 token, associating each LAND parcel's x and y coordinates
              with a definition of a parcel's 3D scene that makes up the larger
              metaverse) and blockchain-based software systems.
            </p>
            <p className="FooterTextSubHeading">
              5.3 Risk of Regulatory Actions in One or More Jurisdictions
            </p>
            <p className="footerText">
              {" "}
              The Foundation, MANA, LAND and ETH could be impacted by one or
              more regulatory inquiries or regulatory action, which could impede
              or limit your ability to access or use the Tools or Ethereum
              blockchain.
            </p>
            <p className="FooterTextSubHeading">
              {" "}
              5.4 Risk of Weaknesses or Exploits in the Field of Cryptography
            </p>
            <p className="footerText">
              {" "}
              You acknowledge and agree that cryptography is a progressing
              field. Advances in code cracking or technical advances such as the
              development of quantum computers may present risks to smart
              contracts, cryptocurrencies and the Tools, which could result in
              the theft or loss of your cryptographic tokens or property, among
              other potential consequences. By using the Tools you acknowledge
              and agree to undertake these risks.
            </p>{" "}
            <p className="FooterTextSubHeading"> 5.5 Use of Crypto Assets</p>
            <p className="footerText">
              {" "}
              Some Tools allow the use of MANA, ETH or other similar blockchain
              technologies. You acknowledge and agree that MANA, Ether and
              blockchain technologies and associated assets, and other assets
              are highly volatile due to many factors including but not limited
              to popularity, adoption, speculation, regulation, technology and
              security risks. You also acknowledge and agree that the cost of
              transacting on such technologies is variable and may increase at
              any time causing impact to any activities taking place on the
              Ethereum blockchain. The Foundation does not invite or make any
              offer to acquire, purchase, sell, transfer or otherwise deal in
              any crypto asset. Third parties may provide services involving the
              acquisition, purchase, sale, transfer or exchange of
              crypto-assets; the Foundation does not provide any such service
              and does not undertake any liability in connection thereto. You
              acknowledge and agree these risks and represent that the
              Foundation cannot be held liable for changes and fluctuations in
              value or increased costs.
            </p>
            <p className="footerText">
              There are risks associated with using an Internet-based currency,
              including, but not limited to, the risk of hardware, software and
              Internet connections failure or problems, the risk of malicious
              software introduction, and the risk that third parties may obtain
              unauthorized access to information stored within your wallet. You
              accept and acknowledge that the Foundation will not be responsible
              for any communication failures, disruptions, errors, distortions
              or delays you may experience when using the Ethereum network or
              any sidechain or similar device for processing transactions,
              however caused.
            </p>
            <p className="FooterTextSubHeading"> 5.6 Application Security</p>
            <p className="footerText">
              You acknowledge and agree that the Site, the Tools and related
              applications are software code and are subject to flaws and
              acknowledge that you are solely responsible for evaluating any
              smart contract, code provided by the Site, Tools or Content and
              the trustworthiness of any third-party websites, products,
              smart-contracts, or Content you access or use through the Tools.
              You further expressly acknowledge and agree that Ethereum
              applications can be written maliciously or negligently, that the
              Foundation cannot be held liable for your interaction with such
              applications and that such applications may cause the loss of
              property or even identity. This warning and others later provided
              by the Foundation in no way evidence or represent an on-going duty
              to alert you to all of the potential risks of utilizing the Tools
              or the Site.
            </p>
            <p className="FooterTextSubHeading">5.7 Third Party Providers</p>
            <p className="footerText">
              The Foundation and/or the DAO, neither own nor control MetaMask,
              Ledger Wallet, the Mist browser, Google Chrome, the Ethereum
              network, any Web3 Provider or any other third party site, product,
              or service that you might access, visit, or use for the purpose of
              enabling you to use the various features of the Tools. The
              Foundation and/or the DAO shall not be liable for the acts or
              omissions of any such third parties, nor shall the Foundation
              and/or the DAO be liable for any damage that you may suffer as a
              result of your transactions or any other interaction with any such
              third parties.
            </p>
            <p className="FooterTextSubHeading">5.8 Taxes</p>
            <p className="footerText">
              You are solely responsible for determining what, if any, Taxes
              apply to your LAND parcel related transactions, and any other
              transaction conducted by you. The Foundation does not, and will
              not, have any insight into or control over any transactions
              conducted by you in Decentraland, and thus is not responsible for
              determining the Taxes that apply to your transactions entered
              through the Tools or otherwise involving any LAND parcel, or any
              other related transaction, and is not to act as a withholding Tax
              agent in any circumstances whatsoever.
            </p>
            <p className="FooterTextSubHeading">5.9 Uses of the Tools</p>
            <p className="footerText">
              You acknowledge and agree that the Tools do not store, send, or
              receive LAND parcels. This is because LAND parcels exist only by
              virtue of the ownership record maintained on the Tools' supporting
              blockchain in the Ethereum network. Any transfer of a LAND parcel
              occurs within the supporting blockchain in the Ethereum network,
              and not within the Tools.
            </p>
            <p className="FooterTextSubHeading">
              5.10 Risks of Changes to Ethereum Platform
            </p>
            <p className="footerText">
              Upgrades by Ethereum to the Ethereum platform, a hard fork in the
              Ethereum platform, or a change in how transactions are confirmed
              on the Ethereum platform may have unintended, adverse effects on
              all blockchains using the ERC-20 standard, ERC-721 standard, or
              any other future Ethereum standard.
            </p>
            <p className="FooterTextSubHeading">
              5.11 Wearables Curation Committee
            </p>
            <p className="footerText">
              You acknowledge that the Wearables Curation Committee or any other
              committee may restrict or ban certain contents, polls or
              decisions. You acknowledge you will be exclusively liable for any
              content you make available on the platform. Neither the DAO
              Committee nor the Wearables Curation Committee has any obligation
              with respect to the content.
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default TermofUse;
