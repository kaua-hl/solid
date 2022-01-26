import ShareButtonTwitter from "./ShareButtonTwitter.js";
import ShareButtonFacebook from "./ShareButtonFacebook.js";
import ShareButtonLinkedin from "./ShareButtonLinkedin.js";
import ShareButtonPrint from "./ShareButtonPrint.js";
import MockEventHandler from "./MockEventHandler.js";
var eventHandler = new MockEventHandler();
var share = "htpps://www.youtube.com";
var twitter = new ShareButtonTwitter(eventHandler, ".btn-twitter", share);
twitter.bind();
var facebook = new ShareButtonFacebook(eventHandler, ".btn-facebook", share);
facebook.bind();
var linkedin = new ShareButtonLinkedin(eventHandler, ".btn-linkedin", share);
linkedin.bind();
var print = new ShareButtonPrint(eventHandler, ".btn-print");
print.bind();
