import { LitElement, html } from "lit";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/Breadcrumbs";
import "@ui5/webcomponents/dist/BreadcrumbsItem";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/BusyIndicator";
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents-icons/dist/accept";
import "@ui5/webcomponents-icons/dist/decline";
import "@ui5/webcomponents-icons/dist/open-folder";
import "./repo-ext";

export default class RepoTabs extends LitElement {
  static get properties() {
    return {
      repoList: { type: Array },
      busy: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.repoList = [
      {
        code: "a",
        name: "abc",
        url: "https://github1.com/a-beans.git",
        branch: "main",
        login: "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",
        validated: true,
        location: "/opt/temp/_extensions/a",
        extensions: [
          {
            name: "demo",
            version: "0.0.1",
            path: "/opt/temp/_extensions/a/demo",
            init: null,
            groovyMainPath: "lib/src/main/groovy",
            groovyTestPath: "lib/src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/a/demo/lib/src/main/groovy"
          },
          {
            name: "rest",
            version: "0.0.1",
            path: "/opt/temp/_extensions/a/rest",
            init: "",
            groovyMainPath: null,
            groovyTestPath: null,
            groovySrcExtensionPath: "/opt/temp/_extensions/a/rest"
          },
          {
            name: "flexiblesearch",
            version: "0.0.1",
            path: "/opt/temp/_extensions/a/flexiblesearch",
            init: "",
            groovyMainPath: null,
            groovyTestPath: null,
            groovySrcExtensionPath: "/opt/temp/_extensions/a/flexiblesearch"
          },
          {
            name: "helloworld",
            version: "0.0.1",
            path: "/opt/temp/_extensions/a/helloworld",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/a/helloworld/src/main/groovy"
          }
        ]
      },
      {
        code: "b",
        name: "gitlab-one",
        url: "https://gitlab.com/pwolanski./_extensions_demo.git",
        branch: "main",
        login: "pwolanski.",
        validated: true,
        location: "/opt/temp/_extensions/b",
        extensions: [
          {
            name: "demo",
            version: "0.0.1",
            path: "/opt/temp/_extensions/b/demo",
            init: null,
            groovyMainPath: "lib/src/main/groovy",
            groovyTestPath: "lib/src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/b/demo/lib/src/main/groovy"
          },
          {
            name: "rest",
            version: "0.0.1",
            path: "/opt/temp/_extensions/b/rest",
            init: "",
            groovyMainPath: null,
            groovyTestPath: null,
            groovySrcExtensionPath: "/opt/temp/_extensions/b/rest"
          },
          {
            name: "flexiblesearch",
            version: "0.0.1",
            path: "/opt/temp/_extensions/b/flexiblesearch",
            init: "",
            groovyMainPath: null,
            groovyTestPath: null,
            groovySrcExtensionPath: "/opt/temp/_extensions/b/flexiblesearch"
          }
        ]
      },
      {
        code: "c",
        name: "gitlab-blank-one",
        url: "https://gitlab.com/pwolanski/my-blank-repo.git",
        branch: "main",
        login: "pwolanski",
        validated: true,
        location: "/opt/temp/_extensions/c",
        extensions: []
      },
      {
        code: "df",
        name: "yannicks-repo",
        url: "https://github.com/_extensions_demo.git",
        branch: "main",
        login: null,
        validated: true,
        location: "/opt/temp/_extensions/df",
        extensions: [
          {
            name: "Coin Exchange Rate",
            version: "0.0.1",
            path: "/opt/temp/_extensions/df/coin-exchange-rate",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/df/coin-exchange-rate/src/main/groovy"
          },
          {
            name: "Demo",
            version: "0.0.1",
            path: "/opt/temp/_extensions/df/demo",
            init: null,
            groovyMainPath: "lib/src/main/groovy",
            groovyTestPath: "lib/src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/df/demo/lib/src/main/groovy"
          },
          {
            name: " REST",
            version: "0.0.1",
            path: "/opt/temp/_extensions/df/rest",
            init: null,
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/df/rest/src/main/groovy"
          },
          {
            name: "Hello World",
            version: "0.0.1",
            path: "/opt/temp/_extensions/df/helloworld",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/df/helloworld/src/main/groovy"
          },
          {
            name: "Recently Viewed Products",
            version: "0.0.1",
            path: "/opt/temp/_extensions/df/recently-viewed-products",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/df/recently-viewed-products/src/main/groovy"
          }
        ]
      },
      {
        code: "ss",
        name: "dfsdf",
        url: "https://github.com/YannickRobin/_extensions_demo.git",
        branch: "main",
        login: null,
        validated: true,
        location: "/opt/temp/_extensions/ss",
        extensions: [
          {
            name: "Coin Exchange Rate",
            version: "0.0.1",
            path: "/opt/temp/_extensions/ss/coin-exchange-rate",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/ss/coin-exchange-rate/src/main/groovy"
          },
          {
            name: "Demo",
            version: "0.0.1",
            path: "/opt/temp/_extensions/ss/demo",
            init: null,
            groovyMainPath: "lib/src/main/groovy",
            groovyTestPath: "lib/src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/ss/demo/lib/src/main/groovy"
          },
          {
            name: " REST",
            version: "0.0.1",
            path: "/opt/temp/_extensions/ss/rest",
            init: null,
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/ss/rest/src/main/groovy"
          },
          {
            name: "Hello World",
            version: "0.0.1",
            path: "/opt/temp/_extensions/ss/helloworld",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/ss/helloworld/src/main/groovy"
          },
          {
            name: "Recently Viewed Products",
            version: "0.0.1",
            path: "/opt/temp/_extensions/ss/recently-viewed-products",
            init: "Init.groovy",
            groovyMainPath: "src/main/groovy",
            groovyTestPath: "src/test/groovy",
            groovySrcExtensionPath:
              "/opt/temp/_extensions/ss/recently-viewed-products/src/main/groovy"
          }
        ]
      }
    ];
    this.busy = false;
  }

  createRenderRoot() {
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <ui5-tabcontainer fixed="true" class="full-width" id="repo-tabc">
        ${this.repoList.map(
          (repo) => html`<ui5-tab text="${repo.name}">
            <ui5-breadcrumbs>
              <ui5-breadcrumbs-item .href=${repo.url} target="_blank"
                >${repo.url}</ui5-breadcrumbs-item
              >
              <ui5-breadcrumbs-item>${repo.branch}</ui5-breadcrumbs-item>
              <ui5-breadcrumbs-item>(${repo.code})</ui5-breadcrumbs-item>
            </ui5-breadcrumbs>

            <div>
              <span>Status:&nbsp;</span>

              ${
                repo.validated
                  ? html`<ui5-badge color-scheme="7">
                      <ui5-icon name="accept" slot="icon"></ui5-icon>Validated
                    </ui5-badge>`
                  : html`<ui5-badge color-scheme="2">
                      <ui5-icon name="decline" slot="icon"></ui5-icon
                      >Not-Validated
                    </ui5-badge>`
              }
              <div>
                <ui5-icon
                  accessibleName="extension location"
                  name="open-folder"
                ></ui5-icon>
                ${repo.location}
              </div>
            </div>

            <repo-ext
              .repoCode=${repo.code}
              .extensions=${repo.extensions}
            ></repo-ext>

            </div>
          </ui5-tab>`
        )}
      </ui5-tabcontainer>
    `;
  }
}

customElements.define("repo-tabs", RepoTabs);
