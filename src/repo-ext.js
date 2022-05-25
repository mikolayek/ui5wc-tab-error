import { LitElement, html } from "lit";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";

export default class RepoExt extends LitElement {
  static get properties() {
    return {
      extensions: { type: Array },
      repoCode: { type: String }
    };
  }

  constructor() {
    super();
    this.extensions = [];
    this.repoCode = "";
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ui5-table class="ext-table" no-data-text="No Data">
        <ui5-table-column slot="columns" style="width: 12rem">
          <span style="line-height: 1.4rem">Name</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" min-width="600" popin-text="Version">
          <span style="line-height: 1.4rem">Version</span>
        </ui5-table-column>

        <ui5-table-column
          slot="columns"
          min-width="600"
          popin-text="Groovy"
          demand-popin
        >
          <span style="line-height: 1.4rem">Groovy</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" popin-text="Actions" demand-popin>
          <span style="line-height: 1.4rem">Actions</span>
        </ui5-table-column>

        ${this.extensions.map(
          (ext) => html`<ui5-table-row>
            <ui5-table-cell>${ext.name}</ui5-table-cell>
            <ui5-table-cell>${ext.version}</ui5-table-cell>
            <ui5-table-cell>${ext.groovy}</ui5-table-cell>
            <ui5-table-cell>...</ui5-table-cell>
          </ui5-table-row>`
        )}
      </ui5-table>
    `;
  }
}

customElements.define("repo-ext", RepoExt);
