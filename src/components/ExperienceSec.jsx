import React from "react";
import MyExp from "../images/MyExperience.svg";
import DOT from "../images/circle.svg";

function ExperienceSec() {
  return (
    <div className="flex-wrap xs:px-4 md:px-24 xs:gap-12 lg:gap-16 py-32 flex items-center justify-between md:gap-28">
      <div className="inline-flex items-center flex-wrap content-center xs:gap-24 md:gap-56">
        {/* Left Side */}

        <div>
          <img src={MyExp} alt="" />
        </div>

        {/* Right Side */}

        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-8">
              <div>
                <img src={DOT} alt="" />
              </div>
              <div className="">
                <p className="font-medium text-xl">
                  UI/UX Design Intern at Indus Technetronic Pvt Ltd
                </p>
                <p className="font-FontC font-medium text-sm text-gray">
                  1 July 2023 - 30 Aug 2023
                </p>
              </div>
            </div>

            <div className="bg-gray h-14 w-0.5 ml-2"></div>

            <div className="inline-flex items-center gap-8">
              <div>
                <img src={DOT} alt="" />
              </div>

              <div>
                <p className="font-medium text-xl">
                  UI/UX Designer & Frontend Developer on Fiverr
                </p>
                <p className="font-FontC font-medium text-sm text-gray">
                  1 Jan 2023 - Present
                </p>
              </div>
            </div>

            <div className="bg-gray h-14 w-0.5 ml-2"></div>

            <div className="inline-flex items-center gap-8">
              <div>
                <img src={DOT} alt="" />
              </div>
              <div>
                <p className="font-medium text-xl">
                  Remote UI Designer at CodSoft
                </p>
                <p className="font-FontC font-medium text-sm text-gray">
                  20 Sep 2023 - 20 Oct 2023
                </p>
              </div>
            </div>
          </div>

          <div className="w-96 h-[1.4px] opacity-30 bg-gray"></div>

          <div className="flex flex-start gap-20">
            <div>
              <p className="font-semibold text-lg">20 +</p>
              <p className="font-FontB text-sm text-semibold text-gray">
                Web Designs
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg">10 +</p>
              <p className="font-FontB text-sm text-semibold text-gray">
                App Designs
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg">5 +</p>
              <p className="font-FontB text-sm text-semibold text-gray">
                Website Coded
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSec;
