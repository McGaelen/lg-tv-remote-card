import {LitElement} from "lit";
import {styles} from "./lg-tv-remote.styles";
import {getTemplate} from "./lg-tv-remote.template";

export class LGTVRemoteCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  pressButton(event) {
    console.log(event);
    this.hass.callService("webostv", "button", {
      entity_id: this.config.entity,
      button: event.currentTarget.id
    });
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to provide your TV's entity ID in the config editor.");
    }
    this.config = config;
    console.log(config.entity)
  }

  getCardSize() {
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    return 3;
  }

  render() { return getTemplate(this); }
  static get styles() { return styles; }
}
