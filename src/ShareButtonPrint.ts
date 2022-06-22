import AbstractShareButton from "./protocols/AbstractShareButton.js";
import EventHandler from "./protocols/EventHandler.js";

export default class ShareButtonTwitter extends AbstractShareButton {
  constructor(eventHandler: EventHandler, clazz: string) {
    super(eventHandler, clazz);
  }

  createAction() {
    return () => window.print();
  }
}
