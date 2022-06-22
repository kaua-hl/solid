import AbstractLinkShareButton from "./protocols/AbstractLinkShareButton.js";
import EventHandler from "./protocols/EventHandler.js";

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }

  createLink(): string {
    return `https://www.facebook.com/sharer.php?u=${this.url}`;
  }
}
