import './style.scss'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faPhoneAlt, faEnvelope, faUser, faUserCircle, faBriefcase, faCubes, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faCheck);
library.add(faEnvelope, faPhoneAlt, faLinkedinIn, faGithub, faUser, faUserCircle, faBriefcase, faCubes, faPrint);
dom.watch();
