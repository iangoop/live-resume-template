import './print.scss'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faPhoneAlt, faEnvelope, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faCheck);
library.add(faEnvelope, faPhoneAlt, faLinkedinIn, faGithub, faMapMarkerAlt, faUser);
dom.watch();
