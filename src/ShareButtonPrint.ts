import AbstractShareButton from "./AbstractShareButton.js";
import EventHandler from "./EventHandler.js";

export default class ShareButtonTwitter extends AbstractShareButton {
  constructor(eventHandler: EventHandler, clazz: string) {
    super(eventHandler, clazz);
  }

  createAction() {
    return () => window.print();
  }
}
