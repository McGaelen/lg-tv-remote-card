import {html} from "lit";

export const getTemplate = (self) => html`
  <ha-card>
    <div class="grid">
      <button id="HOME"   @click="${self.pressButton}" style="grid-area: home;">
        <ha-icon icon="mdi:home"></ha-icon>
      </button>
      <button id="UP"     @click="${self.pressButton}" style="grid-area: up;">
        <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
      </button>
      <button id="MENU"   @click="${self.pressButton}" style="grid-area: menu;">
        <ha-icon icon="mdi:cog"></ha-icon>
      </button>
      <button id="LEFT"   @click="${self.pressButton}" style="grid-area: left;">
        <ha-icon icon="mdi:arrow-left-circle-outline"></ha-icon>
      </button>
      <button id="ENTER"  @click="${self.pressButton}" style="grid-area: enter;">
        <ha-icon icon="mdi:circle-double"></ha-icon>
      </button>
      <button id="RIGHT"  @click="${self.pressButton}" style="grid-area: right;">
        <ha-icon icon="mdi:arrow-right-circle-outline"></ha-icon>
      </button>
      <button id="BACK"   @click="${self.pressButton}" style="grid-area: back;">
        <ha-icon icon="mdi:arrow-left-top"></ha-icon>
      </button>
      <button id="DOWN"   @click="${self.pressButton}" style="grid-area: down;">
        <ha-icon icon="mdi:arrow-down-circle-outline"></ha-icon>
      </button>
      <button id="INFO"   @click="${self.pressButton}" style="grid-area: info;">
        <ha-icon icon="mdi:information-outline"></ha-icon>
      </button>
      <button id="PLAY"   @click="${self.pressButton}" style="grid-area: play;">
        <ha-icon icon="mdi:play"></ha-icon>
      </button>
      <div class="blank"></div>
      <button id="PAUSE"  @click="${self.pressButton}" style="grid-area: pause;">
        <ha-icon icon="mdi:pause"></ha-icon>
      </button>
    </div>
    
    <ha-icon icon=""></ha-icon>
  </ha-card>
`;
