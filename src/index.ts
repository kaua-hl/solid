import ShareButtonTwitter from "./ShareButtonTwitter.js";
import ShareButtonFacebook from "./ShareButtonFacebook.js";
import ShareButtonLinkedin from "./ShareButtonLinkedin.js";
import ShareButtonPrint from "./ShareButtonPrint.js";
import AbstractShareButton from "./protocols/AbstractShareButton.js";

import DOMEventHandler from "./DOMEventHandler.js";
import MockEventHandler from "./MockEventHandler.js";

const eventHandler = new DOMEventHandler();
const share = "htpps://www.youtube.com";

const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  share
);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  share
);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  share
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(
  eventHandler,
  ".btn-print"
);
print.bind();
