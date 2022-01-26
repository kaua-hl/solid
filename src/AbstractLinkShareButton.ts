import AbstractShareButton from "./AbstractShareButton.js";
import EventHandler from "./EventHandler.js";

export default abstract class AbstractLinkShareShareButton extends AbstractShareButton {
  url: string;

  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz);
    this.url = url;
  }

  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);
  }
}
