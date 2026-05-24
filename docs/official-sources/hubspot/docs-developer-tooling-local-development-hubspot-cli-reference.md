> ## Documentation Index
> Fetch the complete documentation index at: https://developers.hubspot.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

---
id: a0dd6b31-c6df-4b6e-9e39-5a95a75515ac
---

# HubSpot CLI commands overview

> A quick reference list of all HubSpot CLI commands

export const FilterTable = ({children, placeholder = "Search", className = "", ignoreColumns = []}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [originalTable, setOriginalTable] = useState(null);
  const [filteredRowsCount, setFilteredRowsCount] = useState(0);
  const tableRef = useRef(null);
  useEffect(() => {
    if (tableRef.current) {
      const table = tableRef.current.querySelector('table');
      if (table) {
        setOriginalTable(table.cloneNode(true));
      }
    }
  }, [children]);
  useEffect(() => {
    if (!originalTable || !tableRef.current) return;
    const table = tableRef.current.querySelector('table');
    if (!table) return;
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    const originalRows = Array.from(originalTable.querySelectorAll('tbody tr'));
    const headerRow = originalTable.querySelector('thead tr');
    const headers = Array.from(headerRow.querySelectorAll('th')).map(th => th.textContent.trim());
    const ignoreIndices = ignoreColumns.map(colName => headers.findIndex(header => header === colName)).filter(index => index !== -1);
    const filteredRows = searchTerm ? originalRows.filter(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      const searchableText = cells.filter((cell, index) => !ignoreIndices.includes(index)).map(cell => cell.textContent).join(' ').toLowerCase();
      return searchableText.includes(searchTerm.toLowerCase());
    }) : originalRows;
    setFilteredRowsCount(filteredRows.length);
    tbody.innerHTML = '';
    if (filteredRows.length === 0 && searchTerm) {
      const emptyRow = document.createElement('tr');
      const emptyCell = document.createElement('td');
      emptyCell.colSpan = headers.length;
      emptyCell.className = 'filter-table-empty-state';
      emptyCell.innerHTML = `No results found for <code>${searchTerm}</code>`;
      emptyRow.appendChild(emptyCell);
      tbody.appendChild(emptyRow);
    } else {
      filteredRows.forEach(row => {
        tbody.appendChild(row.cloneNode(true));
      });
    }
    const thead = table.querySelector('thead');
    if (thead) {
      const headerCells = thead.querySelectorAll('th');
      headerCells.forEach(th => {
        if (searchTerm && filteredRows.length === 0) {
          th.style.color = '#CCCCCC';
          th.style.display = 'none';
        } else {
          th.style.color = '';
          th.style.display = 'table-cell';
        }
      });
    }
  }, [searchTerm, originalTable, ignoreColumns]);
  return <div className={`filter-table ${className}`}>
      <div className="filter-table-search">
        <input type="text" placeholder={placeholder} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} maxLength={75} className="filter-table-input" />
        <span className="filter-table-input-icon"><Icon icon="magnifying-glass" size="16" /></span>
      </div>
      <div className="filter-table-container" ref={tableRef}>
        {children}
      </div>
    </div>;
};

export const MinimumCliVersion = () => <Warning>

    The latest version of the HubSpot CLI, which is recommended, is <code>8.6.0</code>. You can check which version of the CLI you have installed by running <code>hs --version</code>.

    </Warning>;

export const Tag = ({children, type = 'default', className = ''}) => {
  return <span className={`tag tag-${type} ${className}`.trim()}>
      {children}
    </span>;
};

The HubSpot <abbr title="Command Line Interface">CLI</abbr> connects your local development tools to HubSpot, allowing you to build and deploy [apps](/apps/developer-platform/overview) to HubSpot, develop on the HubSpot CMS with version control, integrate with your favorite text editor, and more.

If you haven't installed the CLI yet, check out the [CLI installation guide](/developer-tooling/local-development/hubspot-cli/install-the-cli). Once you install the CLI and you're ready to build your first app, check out the [quickstart guide](/getting-started/quickstart).

<MinimumCliVersion />

## All commands

<FilterTable placeholder="Search commands...">
  | **General**                                                                                                                                                                                                                            |                                                                      |
  | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
  | <span id="install-the-cli" />[`npm install -g @hubspot/cli`](/developer-tooling/local-development/hubspot-cli/commands/general-commands#install-the-cli)                                                                               | Install the CLI globally.                                            |
  | <span id="show-all-commands" />[`hs help`](/developer-tooling/local-development/hubspot-cli/commands/general-commands#show-all-commands)                                                                                               | Show all commands.                                                   |
  | <span id="upgrade-the-cli" />[`hs upgrade`](/developer-tooling/local-development/hubspot-cli/commands/general-commands#upgrade-the-cli)                                                                                                | Update the CLI to latest or specific version.                        |
  | <span id="provide-feedback" />[`hs feedback`](/developer-tooling/local-development/hubspot-cli/commands/general-commands#provide-feedback)                                                                                             | Navigate to HubSpot's developer feedback form.                       |
  | **Debugging & utilities**                                                                                                                                                                                                              |                                                                      |
  | <span id="view-local-hubspot-configuration" />[`hs doctor`](/developer-tooling/local-development/hubspot-cli/commands/debugging-commands#view-local-hubspot-configuration)                                                             | View diagnostic information about your local HubSpot configurations. |
  | <span id="open" />[`hs open`](/developer-tooling/local-development/hubspot-cli/commands/debugging-commands#open)                                                                                                                       | Open HubSpot tools in the browser.                                   |
  | <span id="command-completion" />[`hs completion`](/developer-tooling/local-development/hubspot-cli/commands/debugging-commands#command-completion)                                                                                     | Enable tab key command completion.                                   |
  | <span id="set-configuration-options" />[`hs config set`](/developer-tooling/local-development/hubspot-cli/commands/debugging-commands#set-configuration-options)                                                                       | Set configuration options.                                           |
  | <span id="migrate-or-merge-your-config-files" />[`hs config migrate`](/developer-tooling/local-development/hubspot-cli/commands/debugging-commands#migrate-or-merge-your-config-files)                                                 | Migrate config files.                                                |
  | **Account**                                                                                                                                                                                                                            |                                                                      |
  | <span id="authenticate-an-account" />[`hs account auth`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#authenticate-an-account)                                                                           | Authenticate an account.                                             |
  | <span id="list-authenticated-accounts" />[`hs account list`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#list-authenticated-accounts)                                                                   | List authenticated accounts.                                         |
  | <span id="set-default-account" />[`hs account use`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#set-default-account)                                                                                    | Set default account.                                                 |
  | <span id="remove-an-account" />[`hs account remove`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#remove-an-account)                                                                                     | Remove an account.                                                   |
  | <span id="remove-invalid-accounts" />[`hs account clean`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#remove-invalid-accounts)                                                                          | Remove invalid accounts.                                             |
  | <span id="override-the-default-account-in-your-global-config" />[`hs account create-override`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#override-the-default-account-in-your-global-config)          | Override default account.                                            |
  | <span id="hs-api" />[`hs api`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#make-api-requests)                                                                                                           | Make API requests via the CLI.                                       |
  | <span id="create-a-sandbox" />[`hs sandbox create`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#create-a-sandbox)                                                                                       | Create a sandbox.                                                    |
  | <span id="delete-a-sandbox" />[`hs sandbox delete`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#delete-a-sandbox)                                                                                       | Delete a sandbox.                                                    |
  | <span id="add-a-secret" />[`hs secrets add`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#add-a-secret)                                                                                                  | Add a secret.                                                        |
  | <span id="update-a-secret" />[`hs secrets update`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#update-a-secret)                                                                                         | Update a secret.                                                     |
  | <span id="remove-a-secret" />[`hs secrets delete`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#remove-a-secret)                                                                                         | Remove a secret.                                                     |
  | <span id="list-secrets" />[`hs secrets list`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#list-secrets)                                                                                                 | List all secrets.                                                    |
  | <span id="filemanager-upload" />[`hs filemanager upload`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#upload-files)                                                                                     | Upload files to your account's files tool.                           |
  | <span id="filemanager-fetch" />[`hs filemanager fetch`](/developer-tooling/local-development/hubspot-cli/commands/account-commands#fetch-files)                                                                                        | Fetch files from your account's files tool.                          |
  | **Projects**                                                                                                                                                                                                                           |                                                                      |
  | <span id="create-a-new-project" />[`hs project create`](/developer-tooling/local-development/hubspot-cli/project-commands#create-a-new-project)                                                                                        | Create a new project.                                                |
  | <span id="add-a-feature-to-a-project" />[`hs project add`](/developer-tooling/local-development/hubspot-cli/project-commands#add-a-feature-to-a-project)                                                                               | Add features to a project.                                           |
  | <span id="upload-to-hubspot" />[`hs project upload`](/developer-tooling/local-development/hubspot-cli/project-commands#upload-to-hubspot)                                                                                              | Upload project to HubSpot.                                           |
  | <span id="download-from-hubspot" />[`hs project download`](/developer-tooling/local-development/hubspot-cli/project-commands#download-from-hubspot)                                                                                    | Download project from HubSpot.                                       |
  | <span id="deploy-to-hubspot" />[`hs project deploy`](/developer-tooling/local-development/hubspot-cli/project-commands#deploy-to-hubspot)                                                                                              | Deploy project to HubSpot.                                           |
  | <span id="list-builds" />[`hs project list-builds`](/developer-tooling/local-development/hubspot-cli/project-commands#list-builds)                                                                                                     | List project builds.                                                 |
  | <span id="list-projects" />[`hs project list`](/developer-tooling/local-development/hubspot-cli/project-commands#list-projects)                                                                                                        | List all uploaded projects.                                          |
  | <span id="install-dependencies" />[`hs project install-deps`](/developer-tooling/local-development/hubspot-cli/project-commands#install-dependencies)                                                                                  | Install project dependencies.                                        |
  | <span id="update-dependencies" />[`hs project update-deps`](/developer-tooling/local-development/hubspot-cli/project-commands#update-dependencies)                                                                                     | Update project dependencies.                                         |
  | <span id="migrate-a-public-app" />[`hs app migrate`](/developer-tooling/local-development/hubspot-cli/project-commands#migrate-a-public-app)                                                                                           | Migrate a legacy public app.                                         |
  | <span id="start-a-local-development-server" />[`hs project dev`](/developer-tooling/local-development/hubspot-cli/project-commands#start-a-local-development-server)                                                                   | Start local development server.                                      |
  | <span id="watch-for-changes" />[`hs project watch`](/developer-tooling/local-development/hubspot-cli/project-commands#watch-for-changes)                                                                                               | Watch for changes and auto-upload.                                   |
  | <span id="open-project-in-hubspot" />[`hs project open`](/developer-tooling/local-development/hubspot-cli/project-commands#open-project-in-hubspot)                                                                                    | Open project in HubSpot.                                             |
  | <span id="get-project-information" />[`hs project info`](/developer-tooling/local-development/hubspot-cli/project-commands#get-project-information)                                                                                    | Get project information.                                             |
  | <span id="view-logs" />[`hs project logs`](/developer-tooling/local-development/hubspot-cli/project-commands#view-logs)                                                                                                                | View project logs.                                                   |
  | <span id="analyze-and-validate-code" />[`hs project lint`](/developer-tooling/local-development/hubspot-cli/project-commands#analyze-and-validate-code)                                                                                | Analyze and validate project code.                                   |
  | <span id="delete-a-project" />[`hs project delete`](/developer-tooling/local-development/hubspot-cli/project-commands#delete-a-project)                                                                                                | Delete a project.                                                    |
  | <span id="validate-project-configuration" />[`hs project validate`](/developer-tooling/local-development/hubspot-cli/project-commands#validate-project)                                                                                | Validate project configuration.                                      |
  | <span id="add-project-profile" />[`hs project profile add`](/developer-tooling/local-development/hubspot-cli/project-commands#add-project-profile)                                                                                     | Add a project config profile.                                        |
  | <span id="delete-project-profile" />[`hs project profile delete`](/developer-tooling/local-development/hubspot-cli/project-commands#delete-project-profile)                                                                            | Delete a project config profile.                                     |
  | **CMS**                                                                                                                                                                                                                                |                                                                      |
  | <span id="create-a-cms-app" />[`hs cms app create`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#create-a-cms-app)                                                                                           | Create a new CMS app.                                                |
  | <span id="create-a-serverless-function" />[`hs cms function create`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#create-a-cms-serverless-function)                                                          | Create a CMS serverless function.                                    |
  | <span id="list-serverless-function" />[`hs cms function list`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#list-cms-serverless-functions)                                                                   | List existing CMS serverless functions.                              |
  | <span id="view-serverless-function-logs" />[`hs cms function logs`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#view-cms-serverless-function-logs)                                                          | View logs for a CMS serverless function.                             |
  | <span id="list-files" />[`hs cms ls`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#list-files)                                                                                                               | List files in Design Manager.                                        |
  | <span id="fetch-files" />[`hs cms fetch`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#fetch-files)                                                                                                          | Fetch files from HubSpot.                                            |
  | <span id="upload-files" />[`hs cms upload`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#upload-files)                                                                                                       | Upload files to HubSpot.                                             |
  | <span id="set-a-watch-for-automatic-upload" />[`hs cms watch`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#set-a-watch-for-automatic-upload)                                                                | Watch and auto-upload changes.                                       |
  | <span id="move-files" />[`hs cms mv`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#move-files)                                                                                                               | Move files in Design Manager.                                        |
  | <span id="remove-files" />[`hs cms delete`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#delete-files)                                                                                                       | Delete files from HubSpot.                                           |
  | <span id="lint" />[`hs cms lint`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#lint-a-local-directory)                                                                                                       | Lint the contents of a directory.                                    |
  | <span id="create-a-module" />[`hs cms module create`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#create-a-module)                                                                                          | Create a new module.                                                 |
  | <span id="validate-module" />[`hs cms module marketplace-validate`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#validate-module)                                                                            | Validate a module for the Template Marketplace.                      |
  | <span id="create-a-theme" />[`hs cms theme create`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#create-a-theme)                                                                                             | Create a new theme.                                                  |
  | <span id="locally-preview-theme" />[`hs cms theme preview`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#locally-preview-theme)                                                                              | Preview a theme locally.                                             |
  | <span id="generate-theme-field-selectors-for-in-app-highlighting" />[`hs cms theme generate-selectors`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#generate-theme-field-selectors-for-in-app-highlighting) | Generate theme field selectors.                                      |
  | <span id="validate-theme" />[`hs cms theme marketplace-validate`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#validate-theme)                                                                               | Validate a theme for Template Marketplace.                           |
  | <span id="retrieve-an-existing-react-theme" />[`hs cms get-react-module`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#retrieve-an-existing-react-theme)                                                     | Retrieve a React module.                                             |
  | <span id="convert-fields" />[`hs cms convert-fields`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#convert-javascript-fields-to-json)                                                                        | Convert a JavaScript fields file for a module or theme to JSON.      |
  | <span id="evaluate-themes-and-templates-for-seo-and-accessibility" />[`hs cms lighthouse-score`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#evaluate-themes-and-templates-for-seo-and-accessibility)       | Score a theme with Lighthouse.                                       |
  | <span id="create-a-webpack-bundle" />[`hs cms webpack create`](/developer-tooling/local-development/hubspot-cli/commands/cms-commands#create-a-webpack-bundle)                                                                         | Create a new webpack bundle for CMS serverless functions.            |
  | **Custom objects**                                                                                                                                                                                                                     |                                                                      |
  | <span id="create-a-new-custom-object" />[`hs custom-object create`](/developer-tooling/local-development/hubspot-cli/commands/custom-object-commands#create-a-new-custom-object)                                                       | Create a custom object.                                              |
  | <span id="fetch-schema-for-a-single-custom-object" />[`hs custom-object fetch`](/developer-tooling/local-development/hubspot-cli/commands/custom-object-commands#fetch-schema-for-a-single-custom-object)                              | Fetch a custom object schema.                                        |
  | <span id="fetch-schema-for-all-custom-objects" />[`hs custom-object fetch-all`](/developer-tooling/local-development/hubspot-cli/commands/custom-object-commands#fetch-schema-for-all-custom-objects)                                  | Fetch all schemas.                                                   |
  | <span id="update-the-schema-for-a-custom-object" />[`hs custom-object update`](/developer-tooling/local-development/hubspot-cli/commands/custom-object-commands#update-the-schema-for-a-custom-object)                                 | Update a custom object schema.                                       |
  | <span id="delete-the-schema-for-a-custom-object" />[`hs custom-object delete`](/developer-tooling/local-development/hubspot-cli/commands/custom-object-commands#delete-the-schema-for-a-custom-object)                                 | Delete a custom object schema.                                       |
  | **HubDB**                                                                                                                                                                                                                              |                                                                      |
  | <span id="create-hubdb-table" />[`hs hubdb create`](/developer-tooling/local-development/hubspot-cli/commands/hubdb-commands#create-hubdb-table)                                                                                       | Create a HubDB table.                                                |
  | <span id="fetch-hubdb-table" />[`hs hubdb fetch`](/developer-tooling/local-development/hubspot-cli/commands/hubdb-commands#fetch-hubdb-table)                                                                                          | Fetch a HubDB table.                                                 |
  | <span id="clear-rows-in-a-hubdb-table" />[`hs hubdb clear`](/developer-tooling/local-development/hubspot-cli/commands/hubdb-commands#clear-rows-in-a-hubdb-table)                                                                      | Clear HubDB table rows.                                              |
  | <span id="delete-hubdb-table" />[`hs hubdb delete`](/developer-tooling/local-development/hubspot-cli/commands/hubdb-commands#delete-hubdb-table)                                                                                       | Delete a HubDB table.                                                |
</FilterTable>
