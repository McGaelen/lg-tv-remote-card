import {LGTVRemoteCard} from "./lg-tv-remote/lg-tv-remote";

// This puts your card into the UI card picker dialog
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'lg-tv-remote',
  name: 'LG TV Remote',
  description: 'Controls an LG TV.',
});

customElements.define('lg-tv-remote', LGTVRemoteCard);
