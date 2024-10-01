import React from "react";
import usa from "../../assets/footer/usa-flag.svg";
import india from "../../assets/footer/india-flag.svg";
import uk from "../../assets/footer/uk-flag.svg";
import uae from "../../assets/footer/uae-flag.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import twitter from "../../assets/footer/twitter.svg";
import facebook from "../../assets/footer/facebook.svg";
import yt from "../../assets/footer/youtube.svg";
import instagram from "../../assets/footer/instagram.svg";

const Footer = () => {
  return (
    <section className="bg-[#323466] text-[#a4a5bb] py-10 sm:pt-[50px] lg:pt-[60px] lg:pb-[45px] 2xl:pt-[54px] ">
      <div className="container">
        {/* footer wrapper */}
        <div className="sm:flex sm:flex-wrap sm:justify-between">
          {/* 1st column  */}
          <div className="sm:w-[30%] lg:w-[11%] xl:w-[10%]">
            <h1 className="footer-heading">Who we are</h1>
            <ul className="footer-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Life At SparxIT</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
            <h1 className="footer-heading">Resources</h1>
            <ul className="footer-list">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
          </div>

          {/* 2nd column  */}
          <div className="sm:w-[30%] lg:w-[20%] xl:w-[18%]">
            <h1 className="footer-heading">Product Development</h1>
            <ul className="footer-list">
              <li>
                <a href="#">Discovery</a>
              </li>
              <li>
                <a href="#">POC</a>
              </li>
              <li>
                <a href="#">MVP</a>
              </li>
              <li>
                <a href="#">Full-Cycle Development</a>
              </li>
              <li>
                <a href="#">Continuous Development</a>
              </li>
            </ul>
            <h1 className="footer-heading">Digital Transformation</h1>
            <ul className="footer-list">
              <li>
                <a href="#">AI-powered Transformation</a>
              </li>
              <li>
                <a href="#">Blockchain-led Decentralization</a>
              </li>
              <li>
                <a href="#">Cloud Migration</a>
              </li>
              <li>
                <a href="#">AR/VR Integration</a>
              </li>
              <li>
                <a href="#">Enterprise-Grade Cybersecurity</a>
              </li>
              <li>
                <a href="#">Legacy Software Modernization</a>
              </li>
            </ul>
          </div>

          {/* 3rd col  */}
          <div className="sm:w-[30%] lg:w-[9%] xl:w-[8%] 2xl:w-[9%]">
            <h1 className="footer-heading">Industries</h1>
            <ul className="footer-list">
              <li>
                <a href="#">FinTech</a>
              </li>
              <li>
                <a href="#">EdTech</a>
              </li>
              <li>
                <a href="#">Healthcare</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">Logistics</a>
              </li>
              <li>
                <a href="#">eCommerce</a>
              </li>
              <li>
                <a href="#">SaaS</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Wellness</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Supply Chain</a>
              </li>
              <li>
                <a href="#">Manufacturing</a>
              </li>
            </ul>
          </div>

          {/* 4th col  */}
          <div className="sm:w-[100%] lg:w-[38%] lg:border-y-0 lg:pt-0 xl:w-[40%] 2xl:w-[43%] 2xl:pt-[10px] py-[34px] border-y border-[#494b77] ">
            <div className="mb-[30px] 2xl:mb-[26px]">
              <h1 className="footer-country">
                <img src={usa} alt="usa" /> USA Office:
              </h1>

              <div className="xs:flex justify-between 2xl:ml-10 2xl:max-w-[514px] 2xl:pt-[22px] 2xl:pr-[10px] 2xl:pb-[22px] 2xl:pl-[20px] bg-[#494b77] p-[15px]">
                <div className="mb-[25px] sm:mb-0 lg:w-[48%]">
                  <strong className="block text-white text-[14px] font-bold mb-[15px] 2xl:mb-[11px]">
                    Boston
                  </strong>
                  <address className="font-medium text-[14px] leading-[1.4] tracking-[.3px] not-italic">
                    1600 Boston Providence Hwy, Suite#209A,
                    <br /> Walpole, MA 02081, USA <br />
                    +1 (857) 242-9910
                  </address>
                </div>
                <div className="mb-[25px] sm:mb-0 lg:w-[48%]">
                  <strong className="block text-white mb-[15px] 2xl:mb-[11px]">
                    New York
                  </strong>
                  <address className="font-medium text-[14px] leading-[1.4] tracking-[.3px] not-italic">
                    PMB #6020, 477 Madison Ave 6th FL,
                    <br /> New York, NY 10022
                    <br /> +1 (857) 242-9910
                  </address>
                </div>
              </div>
            </div>
            <div className="mb-[30px] 2xl:mb-[26px]">
              <h1 className="footer-country">
                <img src={india} alt="india" /> India Office:
              </h1>

              <div className="xs:flex justify-between 2xl:ml-10 2xl:max-w-[514px] 2xl:pt-[22px] 2xl:pr-[10px] 2xl:pb-[22px] 2xl:pl-[20px] bg-[#494b77] p-[15px]">
                <div className=" mb-[25px] sm:mb-0 lg:w-[48%]">
                  <strong className="block text-white text-[14px] font-bold mb-[15px] 2xl:mb-[11px]">
                    Noida
                  </strong>
                  <address className="font-medium text-[14px] leading-[1.4] tracking-[.3px] not-italic">
                    H-21, First Floor, Sector-63, Noida,
                    <br /> Uttar Pradesh 201301 <br />
                    +91123456789
                  </address>
                </div>
                <div className="mb-[25px] sm:mb-0 lg:w-[48%]">
                  <strong className="block text-white mb-[15px] 2xl:mb-[11px]">
                    Jaipur
                  </strong>
                  <address className="font-medium text-[14px] leading-[1.4] tracking-[.3px] not-italic">
                    1st Floor, P.No.1-A, Gopalpura ByPass
                    <br /> Jaipur 303108
                    <br /> +91123456789
                  </address>
                </div>
              </div>
            </div>
            <div className="xs:flex justify-between  ">
              <div className="mb-[25px] sm:mb-0 lg:w-[48%]">
                <h1 className="footer-country">
                  <img src={uk} alt="uk" /> UK Office:
                </h1>
                <address className="font-medium text-[14px] leading-[1.4] tracking-[.3px] not-italic pl-[40px]">
                Kemp House, 152 - 160 City Road,
                  <br /> London EC1V 2NX UK<br />
                  +91123456789
                </address>
              </div>
              <div className="mb-[25px] sm:mb-0 lg:w-[48%]">
                <h1 className="footer-country">
                  <img src={uae} alt="uae" /> UAE Office:
                </h1>
                <address className="font-medium text-[14px] leading-[1.4] tracking-[.3px] not-italic pl-[39px]">
                Dubai Silicon Oasis, DDP, Building
                  <br /> A1,Dubai, United Arab Emirates
                  <br /> +91123456789
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* FooterBottom  */}
        <div className="sm:flex justify-between pt-[25px] 2xl:pl-[5px]">
            <ul className="mb-[18px] lg:mb-0 xl:w-[36%] flex items-center gap-5">
                <li>
                    <img src={linkedin} alt="linkedin" />
                </li>
                <li>
                    <img src={twitter} alt="twitter" />
                </li>
                <li>
                    <img src={facebook} alt="facebook" />
                </li>
                <li>
                    <img src={yt} alt="Youtube" />
                </li>
                <li>
                    <img src={instagram} alt="instagram" />
                </li>
            </ul>
            <ul className="mb-[18px] lg:mb-0 xl:w-[18%] flex items-center text-[#5f6188]">
                <li className="leading-normal mr-[15px] pr-[15px] border-r border-[#5f6188]">Term of Use</li>
                <li className="leading-normal">Privacy Policy</li>
            </ul>
            <p className="my-[14px] leading-[1.4] text-[14px] font-medium text-[#5f6188] sm:w-[210px] lg:w-auto xl:w-[40%]">©2007-2024 Sparx IT Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
