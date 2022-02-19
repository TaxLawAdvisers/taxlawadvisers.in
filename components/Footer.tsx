import * as React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto px-3 mb-8 ">
      <div className="border-t w-full flex flex-col border-tla-green-500 py-4 px-5">
          {/* <h3 className="text-tla-green-500 font-semibold underline">Links</h3> */}
        <div className="flex justify-around items-center">
          <div className="flex flex-col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.incometaxindia.gov.in/Pages/default.aspx">
              Income Tax
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.gst.gov.in/">
              GST
            </a>
          </div>
          <div className="flex flex-col">
            <a target="_blank" rel="noopener noreferrer" href="https://m.rbi.org.in//home.aspx">
              RBI
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.sebi.gov.in/">
              SEBI
            </a>
          </div>
          <div className="flex flex-col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.mca.gov.in/content/mca/global/en/home.html">
              MCA
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cbic.gov.in/htdocs-cbec/customs" >
              CBIC
            </a>
          </div>
          <div className="flex flex-col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.icai.org/">
              ICAI
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.icsi.edu/home/">
              ICSI
            </a>
          </div>
          <div className="flex flex-col">
            Contact US
          </div>
        </div>
        {/* <div>Others</div> */}
      </div>
    </div>
  );
};

export default Footer;
