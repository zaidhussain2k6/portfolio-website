import React from 'react';
import FigmaLogo from '../images/figma-logo.png'
import CssLogo from '../images/css-logo.png'
import HtmlLogo from '../images/html-logo.png'
import JsLogo from '../images/js-logo.png'
import JsxLogo from '../images/jsx-logo.png'
import PSLogo from '../images/ps-logo.png'
import TcssLogo from '../images/tcss-logo.png'
import VSLogo from '../images/vs-logo.png'
import XDLogo from '../images/xd-logo.png'
import GitHubLogo from '../images/github-logo.png'

function SkillsSection() {
  return (

    <div className="items-center justify-center flex xs:px-4">
      <div className="inline-flex flex-wrap items-center justify-center bg-liteblue gap-6 px-6 py-6 rounded-lg border-liteblue border-2 border-opacity-30 bg-opacity-10">
        <img src={FigmaLogo} alt="Figma" />
        <img src={CssLogo} alt="Adobe XD" />
        <img src={HtmlLogo} alt="Adobe Photoshop" />
        <img src={JsLogo} alt="HTML" />
        <img src={JsxLogo} alt="CSS" />
        <img src={PSLogo} alt="JavaScript" />
        <img src={TcssLogo} alt="Tailwind CSS" />
        <img src={VSLogo} alt="JSX" />
        <img src={XDLogo} alt="Visual Studio Code"/>
        <img src={GitHubLogo} alt="Visual Studio Code"/>

      </div>
    </div>

  );
}

export default SkillsSection;
