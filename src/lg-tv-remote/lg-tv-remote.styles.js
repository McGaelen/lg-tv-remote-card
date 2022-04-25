import {css} from "lit";

export const styles = css`
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "home up    menu"
      "left enter right"
      "back down  info"
      "play blank pause";

    max-width: 300px;
    margin: auto;
  }

  .grid button {
    height: 100px;
  }

  .grid ha-icon {
    color: blue;
  }

  .grid .blank {grid-area: blank;}
`;
