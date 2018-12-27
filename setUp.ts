import {html, LitElement} from "@polymer/lit-element";

class SetUp extends LitElement {
  protected render() {
    return html`
    <h1>Hello World</h1>
    `
  }
}

window.customElements.define('set-up', SetUp);
