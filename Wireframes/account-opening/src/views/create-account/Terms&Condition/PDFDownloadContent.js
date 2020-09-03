import React from 'react'
import { Page, Text, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 28,
    color: '#f5821f',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: '#f5821f',
    textAlign: 'center',
    margin: 20
  },
  text: {
    margin: 10,
    fontSize: 11,
    textAlign: 'justify',
    color: '#666666'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  orangeText: {
    color: '#f5821f'
  }
});

const PDFDownloadContent = () => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>
              <Text style={ styles.title }>TERMS AND CONDITIONS</Text>
              <Text style={ styles.subtitle }>TERMS AND CONDITIONS FOR THE USE OF WWW.ORIENTALBANK.COM (“PAGE”)</Text>
              <Text style={ styles.text }>
                The following terms and conditions ("Terms and Conditions") govern the use by any user 
                ("User", "you", "yours") of the Oriental Bank Internet page located at <Link to={'http://www.orientalbank.com/'} style={ styles.orangeText }>www.orientalbank.com</Link> or substitute 
                page ("Page").
              </Text>
              <Text style={ styles.text }>
                PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. BY ENTERING TO THE PAGE AND TO ANY AREA THEREOF YOU AGREE 
                TO COMPLY WITH THESE TERMS AND CONDITIONS AND, AS APPLICABLE, THOSE ESTABLISHED FOR EACH AREA OF THE PAGE. 
                ORIENTAL BANK RESERVES THE RIGHT TO AMEND, TEMPORARILY SUSPEND OR TERMINATE THESE TERMS AND CONDITIONS AT 
                ANY TIME AT OUR ABSOLUTE DISCRETION. YOU ARE RESPONSIBLE FOR KEEPING UP TO DATE WITH THE TERMS IN EFFECT 
                FROM TIME TO TIME EACH TIME YOU ACCESS THE PAGE. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS OR WITH 
                ANY OTHER APPLICABLE TO THE PAGE OR ANY AREA THEREOF DO NOT ACCESS THE PAGE. In addition, accounts, products 
                or other services that you have with Oriental Bank or with any of its affiliates (individually and together, 
                "Oriental") are governed by their respective agreements and, therefore, when using the Page you must keep 
                those agreements in mind.
              </Text>
              <Text style={ styles.text }>
                The Page is only available for users of legal age. By using the Page you represent and warrant to Oriental 
                that you are 21 years of age or legally emancipated with capacity to contract (in any event 16 years of age 
                or older). In using the Page you do it at your own risk and you are the only responsible for your use and 
                for the use thereof by any other person on your behalf and for any results from such use.
              </Text>
              <Text style={ styles.text }>
                It is the policy of Oriental to respect the privacy of its users. In using the Page you recognize and accept 
                that we may disclose and transfer any information that you may provide us or that may be generated in your 
                using the Page: (1) to comply with legal requirements or procedures or if we have a legal right to disclose 
                it; (2) to protect and defend the rights or property of Oriental or of any of its entities; (3) to comply 
                with these Terms and Conditions; (4) to any person or entity as you may authorize us to do so; or (5) as 
                permitted by the Oriental Privacy Policy and, as applicable, of any of its entities. For more information, 
                please refer to the Oriental Privacy Policy available through the link "Privacy Policy" below. Even so, 
                you recognize, accept and agree that Internet transmissions are not completely private and secure and that 
                any information or message that you may send may be read or intercepted by others.
              </Text>
              <Text style={ styles.text }>
                Oriental Bank prohibits the use of the Page and of its systems for illicit or unauthorized purposes 
                including, without limitation, unauthorized use or misuse of the Page, of the Oriental systems and of 
                passwords. As a condition to the use of the Page, you agree that you will only use it for licit purposes 
                and as authorized by these Terms and Conditions, by the terms and conditions applicable to any area of the 
                Page accessed by you, and that you will not use it for illicit or prohibited purposes. You agree to comply 
                with applicable, local and federal, laws and regulations and recognize that you are the only responsible 
                for all transactions, actions and omissions relating to your account(s) or password(s) including, without 
                limitation, everything related to the contents of your e-mail transmissions to Oriental Bank, to any of its 
                affiliates, or to any person or entity. In the event of any unauthorized or suspected unauthorized use of 
                your account or password, or security breach, you must immediately notify Oriental accordingly by calling 
                787.620.0000 or free of charge 1-800-981-5554. You may be responsible for losses incurred by Oriental or by 
                any other user or visitor of the Page if any other person uses your username, password, or account(s). 
                Oriental, including each of its entities, reserves the right to, at any time monitor, review, keep and/or 
                disclose any information as needed to comply with any applicable law or regulation, legal procedure, or 
                administrative requirement.
              </Text>
              <Text style={ styles.text }>
                INVESTMENT PRODUCTS THAT ARE MARKETED, OFFERED, OR IN ANY MANNER MENTIONED IN THE PAGE, IN ANY AREA OF THE 
                PAGE, OR IN PAGES THAT MAY BE LINKED THROUGH THE PAGE: ARE NOT DEPOSITS OR OTHER OBLIGATION OF AND ARE NOT
                 GUARANTEED BY ORIENTAL BANK; ARE NOT INSURED BY THE FEDERAL DEPOSIT INSURANCE CORPORATION ("FDIC"); AND 
                 ARE SUBJECT TO INVESTMENT RISKS, INCLUDING THE POSSIBLE LOSS OF VALUE OR OF THE PRINCIPAL INVESTED.
              </Text>
              <Text style={ styles.text }>
                INSURANCE PRODUCTS THAT ARE MARKETED, OFFERED, OR OTHERWISE MENTIONED IN THE PAGE, IN ANY AREA OF THE PAGE, 
                OR IN PAGES THAT MAY BE LINKED THROUGH THE PAGE: ARE NOT DEPOSITS OR OTHER OBLIGATION OF ORIENTAL BANK OR OF 
                ANY AFFILIATE OF ORIENTAL BANK; ARE NOT GUARANTEED OR INSURED BY ORIENTAL BANK OR BY ANY AFFILIATE OF ORIENTAL 
                BANK; ARE NOT INSURED BY THE FEDERAL DEPOSIT INSURANCE CORPORATION OR BY ANY OTHER AGENCY OF THE FEDERAL 
                GOVERNMENT OF THE UNITED STATES; AND MAY LOSE VALUE.
              </Text>
              <Text style={ styles.text }>
                Some financial or investment products mentioned in the Page may not be suitable for everyone. 
                In publishing the Page and the information in it, the needs of a particular person or group of persons are 
                not taken into consideration. You are responsible for consulting your own legal and tax advisors, among 
                others, with respect to the convenience of any products or services that you may be interested in.
              </Text>
              <Text style={ styles.text }>
                Oriental makes an effort to include in or make available through the Page current and accurate information. 
                Nonetheless, such information may contain faults or errors or may be inaccurate at a particular moment. 
                You recognize, accept and agree that the information in the Page and the Terms and Conditions of the Page or of 
                any area thereof will be changed periodically and that at any time, Oriental, its respective service providers 
                or both may make enhancements and/or changes to the Page or to any area thereof.
              </Text>
              <Text style={ styles.text }>
                Oriental does not represent or warrant that: the Page, including of any area thereof, will be uninterrupted 
                or free of errors, that any defects will be corrected, or that they will be free of viruses or other damaging 
                components; that the use of or the results obtained from the use of the Page or of any area thereof, or of 
                the information made available to you through any of them will be correct, accurate, timely or otherwise 
                reliable.
              </Text>
              <Text style={ styles.text }>
                You expressly recognize, accept and agree that the use of the Page by any person may be monitored, tracked, 
                and registered. By using the Page you agree to that monitoring, tracking, and registration and to the 
                transmission, processing or transfer of information to or through other countries as Oriental may deem 
                necessary or convenient. If you have account(s) with Oriental, Oriental will not be responsible for the 
                access to them by unauthorized individuals or for any material or data sent to or received by Oriental via 
                e-mail. Except as otherwise required by applicable law, any communication or material that you may transmit 
                to Oriental or to any of its entities through the Page including, without limitation, any area thereof or 
                via e-mail will be deemed non-confidential. In addition, you authorize Oriental its agents and representatives 
                to record and/or copy any information including, without limitation, e-mails sent to Oriental or to its 
                agents in relation to the Page.
              </Text>
              <Text style={ styles.text }>
                THE LINKS INCLUDED IN THE PAGE MAY ALLOW YOU TO EXIT IT AND TAKE YOU TO ANY ORIENTAL ENTITY OR TO THIRD 
                PARTIES ("LINKED SITES") THIRD PARTY LINKED SITES ARE NOT CONTROLLED BY ORIENTAL AND, THEREFORE, ORIENTAL 
                IS NOT RESPONSIBLE FOR THE CONTENTS OF ANY OF THOSE THIRD PARTY LINKED SITES INCLUDING, WITHOUT LIMITATION, 
                ANY LINK IN TURN CONTAINED IN A LINKED SITE, OR FOR ANY CHANGES TO OR UPDATES OF A LINKED SITE. ORIENTAL IS 
                NOT RESPONSIBLE FOR ANY TRANSMISSION RECEIVED FROM ANY THIRD PARTY LINKED SITE. ORIENTAL MAKES THESE LINKS 
                AVAILABLE TO YOU FOR YOUR CONVENIENCE OR INFORMATION AND THE INCLUSION OF ANY LINK DOES NOT CONSTITUTE THE 
                APPROVAL OR ENDORSEMENT THEREOF BY ORIENTAL OR THE EXISTENCE OF ANY RELATIONSHIP BETWEEN ORIENTAL AND THE 
                OPERATOR OF THIRD PARTY LINKED SITES.
              </Text>
              <Text style={ styles.text }>
                NEITHER ORIENTAL, NOR ITS SERVICE PROVIDERS WARRANT THE FITNESS, RELIABILITY, AVAILABILITY, AND ACCURACY OF 
                THE PAGE INCLUDING, WITHOUT LIMITATION, OF ANY AREA OF THE PAGE. THE PAGE IS MADE AVAILABLE "AS IS", WITHOUT 
                ANY WARRANTY. BY THESE TERMS AND CONDITIONS YOU WAIVE ANY WARRANTY OR CONDITION WITH RESPECT TO THE PAGE, 
                INCLUDING ANY IMPLIED WARRANTY AND MERCHANTABILITY CONDITIONS, FITNESS FOR A PARTICULAR PURPOSE AND OWNERSHIP. 
                IN ADDITION, WE DO NOT WARRANT THE CONTINUED OR INTERRUPTED SERVICE OF THE PAGE OR OF ANY AREA THEREOF. 
                ORIENTAL WILL UNDERTAKE ITS BEST EFFORTS TO INCLUDE ACCURATE AND UPDATED INFORMATION BUT MAKES NO WARRANTIES 
                OR REPRESENTATIONS REGARDING THE ACCURACY OF SAID INFORMATION. BY USING THE PAGE YOU ASSUME ALL THE RISKS 
                RELATED TO SUCH USE AND TO THE USE OF ANY AND ALL ACCESSES AND CONTENTS. BY USING THE PAGE, YOU RELEASE AND 
                SPECIFICALLY ACCEPTS THAT ORIENTAL IS RELEASED FROM LIABILITY (WHETHER BASEDON CONTRACTS, DAMAGES, STRICT 
                LIABILITY OR OTHERS) FROM ANHY DAMAGES, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL RESULTING 
                FROM OR IN ANY MANNER RELATED TO THE ACCESS TO OR USE OF THE PAGE AND TO ANY AREA THEREOF, INCLUDING 
                LIABIITY BASED ON ANY VIRUS THAT MAY INVADE YOUR COMPUTER SYSTEM.
              </Text>
              <Text style={ styles.text }>
                IN NO CASE WILL ORIENTAL OR ITS SERVICE PROVIDERS BE LIABLE FOR DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL OR OF ANY OTHER TYPE INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA OR 
                BENEFITS DERIVED FROM OR THAT MAY BE RELATED TO: THE USE OF THE PAGE, OF ANY AREA THEREOF OR OF LINKED 
                SITES; THE DELAY OR INABILITY TO USE THE PAGE, ANY AREA THEREOF, OR ANY LINKED SITE; THE DELIVERY OR 
                INABILITY TO DELIVER THE SERVICES THROUGH THE PAGE OR ANY AREA THEREOF; THOSE CAUSED BY VIRUSES AND BY 
                SYSTEM ATTACKS; OR FROM ANY INFORMATION, DATA, PRODUCTS AND GRAPHICS RELATED TO OR OBTAINED FROM THE PAGE, 
                OR ACCESSED IN ANY MANNER RELATED TO THE USE OF THE PAGE REGARDLESS OF WHETHER THE CLAIM IS CONTRACTUAL, 
                IN TORT, BASED ON NEGLIGENCE, WILLFUL ACTS OR OF ANY OTHER TYPE AND REGARDLESS OF WHETHER ORIENTAL OR ANY 
                OF ITS SERVICE PROVDERS HAVE BEEN ADVISED OF THE POSSIBILITY OF THOSE DAMAGES. IF YOU ARE NOT SATISFIED WITH 
                THE CONTENTS OF THE PAGE OR OF ANY AREA THEREOF, OR WITH ANY OF THE CONDITIONS FOR ITS USE, YOUR ONLY AND 
                EXCLUSIVE REMEDY WILL BE TO CEASE USING THEM AND THEIR LINKED SITES.
              </Text>
              <Text style={ styles.text }>
                You recognize and accept that the contents of the Page including, among others, text, software, music, 
                sounds, pictures, videos, graphics or other materials whether in advertisements of Oriental, of sponsors, 
                or in electronically distributed commercial information that is presented to you through the Page, or of 
                the advertisers of Oriental, or of other content providers, is protected by copyrights, trademarks, patents 
                or other property rights as well as by applicable legislation. You may make a copy of said contents 
                exclusively for your personal, non commercial, use as long as you keep intact all notices regarding 
                copyrights or other types of property. You shall not modify copy, reproduce, publish, disclose, transmit, 
                decompile, reverse the engineering, or distribute any type of contents available through the Page and its 
                related sites.
              </Text>
              <Text style={ styles.text }>
                Oriental reserves the right to at any time modify the Terms and Conditions for the use of the Page or 
                of any part thereof and to notify you those changes from time to time by publication of an updated 
                version of these Terms and Conditions in this Page without need of additional notice or in any other 
                manner permitted by applicable law and regulation. You are responsible for periodically reviewing the 
                Terms and Conditions. The use of the Page constitutes your consent to any changes to these Terms and 
                Conditions. In addition, Oriental reserves the right to update, modify, or withdraw the information 
                contained in the Page, and to limit or restrict the Access to said information all without prior notice. 
                Likewise, Oriental reserves the right to, at any time and at its absolute discretion, to discontinue 
                the Page, and to restrict, limit, or block the access to the Page including, without limitation, in the 
                event of technical difficulties that, to its judgment, may decrease or impair the security standard 
                levels adopted for the proper functioning of the Page or of any area thereof.
              </Text>
              <Text style={ styles.text }>
                Except as otherwise provided, all Oriental information, images, logos, texts, screens, menus, charts, 
                and designs, data, databases, HTML codes, JavaScripts, VBScripts, and any other literary or graphic 
                content in the Page ("Intellectual Property") are owned by Oriental and/or any of its subsidiaries. 
                Oriental and each of its subsidiaries reserve all rights of ownership of all Intellectual Property, 
                and no part of it may be downloaded, except for the use of client-server transactions such as the use 
                of the Page, reproduced, recorded on a computer hard disk (including portable disks, CDs, Zip and other 
                portable storage devices), modified, published, displayed, sold, used to create a derivative work or 
                transmitted or distributed in any form or by any means, electronic or otherwise, without Oriental’s 
                express written consent. OrientalBank, OrientalBank.com, Oriental, Oriental Financial Group, 
                OFG Bancorp, Oriental Bank, Oriental Financial Services, Oriental Mortgage, Oriental Auto, 
                Financial Insurance Services Agency, Diversified Growth IRA, Investors IRA, CD IRA, IRA Exenta Garantizada, 
                Annuity IRA, "El Banco desde su computadora" ("The Bank from your computer"), "Oriental te Orienta", 
                and all of their respective logos are trademarks and/or service marks owned by Oriental and/or any 
                of its subsidiaries and may not be used or displayed in any manner by others without Oriental’s prior 
                written permission. All other trademarks, service marks, or trade names related to the aforementioned 
                brands or to any content of the Page, are owned by Oriental or any of its subsidiaries and may not be 
                used or displayed in any manner by others without Oriental’s written permission.
              </Text>
              <Text style={ styles.text }>
                Any communication related to these Terms and Conditions or to the use of the Page shall be in writing 
                and sent to <Link to={'mailto::service@OrientalBank.com'} style={ styles.orangeText }>service@OrientalBank.com</Link>, its message center at the Page, or the following page: Oriental 
                Bank - Internet Department, PO Box 195115 San Juan, PR 00919-5115. Please remember to include your name 
                and account number. Any e-mail sent to the above address shall be deemed received by Oriental at the 
                time that you receive a reply email from Oriental confirming receipt of the e-mail, all other notices 
                or communications will not become effective until Oriental receives them.
              </Text>
              <Text style={ styles.text }>
                These Terms and Conditions are governed by the laws of the Commonwealth of Puerto Rico. 
                You recognize, accept and agree that the courts of the Commonwealth of Puerto Rico will 
                have exclusive and personal jurisdiction to resolve any matter or dispute that may arise 
                concerning the validity, effectiveness, interpretation, or performance of, or the legal 
                relationships established by these Terms and Conditions or otherwise arising in relation 
                to the use of the Page, and for those purposes irrevocably submit to the jurisdiction of 
                the courts of the Commonwealth of Puerto Rico. The use of the Page is prohibited in all 
                those jurisdictions in which the effectiveness of these Terms and Conditions is not 
                recognized. This Page is not intended for distribution to, or use by, any person or entity 
                in any jurisdiction or country where such distribution or use would be contrary to local law 
                or regulation. Performance of these Terms and Conditions by Oriental is subject to the laws 
                in effect and to applicable legal procedures; provided that, nothing herein limits the right 
                of Oriental to comply with any administrative, court or legal procedures regarding your use 
                of the Page or of the information provided or compiled by Oriental or by its service providers 
                in relation to said use. If any of these Terms and Conditions were declared void or unenforceable 
                according to applicable law, including, without limitation, the disclaimers of warranty or 
                limitation of liability provisions established above, said provisions will be deemed replaced, 
                to the extent possible, with that other valid and enforceable provision that most resembles 
                the purpose of the original provision, and the remaining provisions will continue in effect. 
                A print version of these Terms and Conditions and of any communication given electronically 
                will be admissible in judicial and administrative procedures based on or related to them.
              </Text>
              <Text style={styles.pageNumber} render={({ pageNumber }) => (
                `${pageNumber}`
              )} fixed />
            </Page>
        </Document>
    )
}

export default PDFDownloadContent


