import React from 'react';
import logo01d from "../assets/images/jour/01d.svg"
import logo02d from "../assets/images/jour/02d.svg"
import logo03d from "../assets/images/jour/03d.svg"
import logo04d from "../assets/images/jour/04d.svg"
import logo09d from "../assets/images/jour/09d.svg"
import logo10d from "../assets/images/jour/10d.svg"
import logo11d from "../assets/images/jour/11d.svg"
import logo13d from "../assets/images/jour/13d.svg"
import logo50d from "../assets/images/jour/50d.svg"
import logo01n from "../assets/images/nuit/01n.svg"
import logo02n from "../assets/images/nuit/02n.svg"
import logo03n from "../assets/images/nuit/03n.svg"
import logo04n from "../assets/images/nuit/04n.svg"
import logo09n from "../assets/images/nuit/09n.svg"
import logo10n from "../assets/images/nuit/10n.svg"
import logo11n from "../assets/images/nuit/11n.svg"
import logo13n from "../assets/images/nuit/13n.svg"
import logo50n from "../assets/images/nuit/50n.svg"


const LogoTemp = ({logo})=>{

    // console.log(logo.logoTemp);
    return(
        <div>
            {logo.logoTemp==="01d"?(<img src={logo01d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="02d"?(<img src={logo02d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="03d"?(<img src={logo03d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="04d"?(<img src={logo04d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="09d"?(<img src={logo09d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="10d"?(<img src={logo10d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="11d"?(<img src={logo11d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="13d"?(<img src={logo13d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="50d"?(<img src={logo50d} alt="Logo temperature"/>):null}
            {logo.logoTemp==="01n"?(<img src={logo01n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="02n"?(<img src={logo02n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="03n"?(<img src={logo03n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="04n"?(<img src={logo04n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="09n"?(<img src={logo09n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="10n"?(<img src={logo10n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="11n"?(<img src={logo11n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="13n"?(<img src={logo13n} alt="Logo temperature"/>):null}
            {logo.logoTemp==="50n"?(<img src={logo50n} alt="Logo temperature"/>):null}
        </div>
    )
}

export default LogoTemp;