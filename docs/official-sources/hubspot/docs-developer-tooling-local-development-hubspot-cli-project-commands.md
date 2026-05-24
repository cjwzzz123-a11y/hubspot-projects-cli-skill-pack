> ## Documentation Index
> Fetch the complete documentation index at: https://developers.hubspot.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

---
id: 2c3f7399-e9c3-4e2b-ae0f-280b0e398313
---

# Projects and sandboxes CLI reference

> Learn about project-specific CLI commands, including how to manage sandbox accounts.

export const MinimumCliVersion = () => <Warning>

    The latest version of the HubSpot CLI, which is recommended, is <code>8.6.0</code>. You can check which version of the CLI you have installed by running <code>hs --version</code>.

    </Warning>;

export const ChromeLocalhostWarning = () => <Warning>
As of <a href="https://developer.chrome.com/release-notes/142#local_network_access_restrictions">Google Chrome version 142</a>, you will receive a one time time popup asking for <i>app.hubspot.com</i> to access devices on your local network. Select <b>Accept</b> to enable local development for your apps. <br /> <br /> 

You can also manage this setting in your Chrome settings by navigating to <b>Settings</b> &gt; <b>Privacy & Security</b> &gt; <b>app.hubspot.com</b> &gt; <b>Permissions</b> &gt; <b>Local network access</b>.
</Warning>;

The HubSpot command line interface (CLI) connects your local development tools to HubSpot, allowing you to develop on HubSpot with version control, your favorite text editor, and various web development technologies.

Below, learn about the CLI commands available while you're developing with HubSpot projects. You can also refer to the [standard CLI commands](/developer-tooling/local-development/hubspot-cli/reference) reference for general commands such as `hs auth`.

<MinimumCliVersion />

<Tip>
  You can run `hs project --help` at any time in your terminal to learn more about project-specific commands.
</Tip>

## View all commands

List all project-specific CLI commands.

```shell theme={null}
hs project help
```

<Tip>
  To learn more about a specific command, enter the command followed by `--help`.
</Tip>

## Create a new project

Create a project in a specified directory. You'll be prompted to give the project a name, confirm the local location on your computer, and specify additional configuration details.

A new folder will be created in the specified directory containing an `hsproject.json` file and an `src` folder where you'll build out your [project components](/apps/developer-platform/overview#features).

Once you've created a project, you can run other project commands inside your project directory and HubSpot will automatically recognize your project.

```shell theme={null}
hs project create [flags]
```

The available flags are provided in the table below, but aren't required to run the command. If no flags are provided, you'll be prompted to enter your choices for the project's name, destination, project base, [distribution](/apps/developer-platform/build-apps/app-configuration#distribution), [authentication type](/apps/developer-platform/build-apps/app-configuration#authentication), and [features](/apps/developer-platform/overview#features), if applicable.

**Flags**

| Flag                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--name`             | The name of the project (cannot be changed once created).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--dest`             | The full path for the directory where the project should be created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--platform-version` | The target platform [version](/developer-tooling/platform/versioning) for the new project. Defaults to `2026.03`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--project-base`     | The top level component to include in the project. Available options are `empty` or `app`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--distribution`     | How the app will be distributed. Available options are `private` or `marketplace`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--auth`             | Authentication model for the application. Available options are `oauth` or `static`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--features`         | Array of space-separated features to include in the project. Only valid if the project-base is `app`. Available options include: <ul><li>`card`: add support for [app cards](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/create-an-app-card).</li><li>`settings`: add support for an [app settings page](/apps/developer-platform/add-features/ui-extensions/extension-points/create-a-settings-page)</li><li>`webhooks`: set up [webhook subscriptions](/apps/developer-platform/add-features/configure-webhooks).</li><li>`workflow`: create a [workflow action](/apps/developer-platform/add-features/custom-workflow-actions)</li><li>`scim`: Configure [SCIM](/apps/developer-platform/add-features/scim)</li></ul> |
| `--debug`            | Set log level to debug (defaults to `false`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--account`          | HubSpot account ID or name from config.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--config`           | Path to a config file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--use-env`          | Whether to use environment variable config (defaults to false).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--template`         | The starting template. This option is only available for when the [targeted platform version](/developer-tooling/platform/versioning) is less than 2025.2, but isn't required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--template-source`  | Path to custom GitHub repository from which to create project template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Add a feature to a project

To add a new [feature](/apps/developer-platform/overview#features) to an existing app, run the following command:

```shell theme={null}
hs project add [flags]
```

If no flags are provided, you'll be prompted to specify which features to add, using the keyboard to navigate and make your choices:

* Press **spacebar** to select a feature.
* Press the **a** key to toggle all features.
* Press the **i** key to invert your current selection.
* Press the **enter** key to confirm your choices and proceed.

| Flag         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--features` | Array of space-separated features to include in the project. Available options include: <ul><li>`card`: add support for [app cards](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/create-an-app-card).</li><li>`settings`: add support for an [app settings page](/apps/developer-platform/add-features/ui-extensions/extension-points/create-a-settings-page)</li><li>`webhooks`: set up [webhook subscriptions](/apps/developer-platform/add-features/configure-webhooks).</li><li>`workflow`: create a [workflow action](/apps/developer-platform/add-features/custom-workflow-actions)</li><li>`scim`: Configure [SCIM](/apps/developer-platform/add-features/scim)</li></ul> |

## Upload to HubSpot

Upload the project to your HubSpot account and create a build. If the project hasn't been created in the account yet, you'll be asked whether you want to create it.

If the project is configured to auto-deploy, this command will automatically deploy after the build is successful. By default, new projects are set to auto-deploy.

```shell theme={null}
hs project upload
```

You can upload a project to a specific account in your `~/.hscli/config.yml` file by adding `--account=accountName` to the command. For example, `hs project upload --account=main`. This can be useful when switching between uploading to a sandbox account and then uploading to the main account. For example, your workflow might look like:

* When developing your project in a sandbox, you upload changes with `hs project upload --account=sandbox`.
* Then when uploading the project to a main account, you upload the project with `hs project upload --account=main`.

You can use the same configuration when using the [watch](#watch-for-changes) command.

## Download from HubSpot

Download the last uploaded version of a project to your local computer.

```shell theme={null}
hs project download
```

## Deploy to HubSpot

Manually deploy the most recent build if the project is not set to auto-deploy.

```shell theme={null}
hs project deploy
```

## List builds

List build history for a project.

```shell theme={null}
hs project list-builds [flags]
```

**Flags**

| Flag        | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `--account` | Filter projects by a specific account ID or a name from the current config. |
| `--config`  | Path to a config file.                                                      |
| `--use-env` | Whether to use environment variable config.                                 |
| `--project` | Name of the project.                                                        |
| `--limit`   | Limit the number of builds to output.                                       |

## List projects

Display existing projects that have already been uploaded to your account.

```shell theme={null}
hs project list [flags]
```

**Flags**

| Flag        | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `--account` | Filter projects by a specific account ID or a name from the current config. |
| `--config`  | Path to a config file.                                                      |

## Install dependencies

Install dependencies (either from HubSpot or a third-party library) for your project, or add a dependency to a project subcomponent.

```shell theme={null}
hs project install-deps [packages..]
```

You can explicitly install specific packages by adding them as arguments (e.g., `hs project install-deps dependency1 dependency2`).

## Update dependencies

Update dependencies (either from HubSpot or a third-party library) for your project, or update the specific dependencies for a project subcomponent.

```shell theme={null}
hs project update-deps [packages..]
```

You can explicitly update specific packages by adding them as arguments (e.g., `hs project update-deps dependency1 dependency2`).

## Migrate a public app

Migrate an existing public app to the latest version of the developer platform (`v2026.03`). Learn more in the [migration overview](/apps/developer-platform/build-apps/migrate-an-app/overview).

```shell theme={null}
hs app migrate
```

## Start a local development server

Start a local development server to view extension changes in the browser without needing to refresh. With the server running, saving changes to any JSX files when you're developing an [app card](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/create-an-app-card) or [settings page](/apps/developer-platform/add-features/ui-extensions/extension-points/create-a-settings-page) using UI components will cause the page to automatically refresh. This does not include changes made to the `.json` config files, which need to be manually uploaded using the `hs project upload` command instead.

```shell theme={null}
hs project dev
```

<ChromeLocalhostWarning />

## Open project in HubSpot

Opens the project in HubSpot where you can view the project's settings, build history, and more. By default, will attempt to open the project in the default account set in `~/.hscli/config.yml`. Specify an account by adding the `--account=accountName` flag.

```shell theme={null}
hs project open
```

## Get project information

Display project and app metadata, including details for any components you've configured such as [app cards](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/overview) or [serverless functions](/apps/developer-platform/add-features/serverless-functions/overview).

```shell theme={null}
hs project info [flags]
```

**Flags**

| Flag     | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| `--json` | Output project information in JSON format, which can be useful for scripting or providing to AI agents. |

## Watch for changes

<Warning>
  **Please note:** this command has been deprecated in favor of [hs project dev](#start-a-local-development-server).
</Warning>

Watches the project directory and uploads to HubSpot upon saving, including deleting files. Each upload will result in a new build with a new build ID. A successful build will deploy automatically if the project’s [auto-deploy setting](/apps/developer-platform/build-apps/manage-apps-in-hubspot) is turned on.

```shell theme={null}
hs project watch
```

You can further configure watch to send changes to a specific account with `---account=accountName`. For example, `hs project watch --account=main`.

## View logs

Get logs for a specific function within a project.

```shell theme={null}
hs project logs
```

Running this command will guide you through selecting the project and app to get logs for. However, you can also manually specify this information by including the following flags in the command:

**Flags**

| Flag                    | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| `--project=projectName` | The name of the project as set in the `hsproject.json` file. |
| `--app=appName`         | The name of the app as set in the `app.json` file.           |

## Analyze and validate code

To validate the configuration of your project components like your app cards and settings pages, you can statically analyze your project using [ESLint v9](https://eslint.org/).

```shell theme={null}
hs project lint
```

This command will check for and configure the required `devDependencies` for each project component, and define each dependency and its minimum version.

This will create an ESLint configuration file for each project component, and warn about existing ESLint files that are deprecated (non-flat files created before ESLint v9).

<Tip>
  Note that any existing v9 ESLint configuration files that you've already created will <u>not</u> be overwritten and your existing configuration will be used instead.
</Tip>

## Validate project

Verify that your project's `app-hsmeta.json` [configuration file](/apps/developer-platform/build-apps/app-configuration#app-schema) is valid and your project is ready to upload to your HubSpot account.

```shell theme={null}
hs project validate
```

**Flags**

| Flag        | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `--account` | Filter projects by a specific account ID or a name from the current config. |
| `--config`  | Path to a config file.                                                      |
| `--use-env` | Whether to use environment variable config (defaults to false).             |

## Delete a project

Delete a project from your HubSpot account. You will be prompted to confirm the deletion before proceeding. You can use the `--force` flag to bypass this confirmation.

```shell theme={null}
hs project delete [flags]
```

| Flag        | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `--project` | Name of the project to delete.                                                                  |
| `--force`   | Bypass the confirmation prompt and immediately delete the project once the command is executed. |

## Add project profile

Add a new project profile, which allows you to reference variables in your component configuration files. Learn more about using [config profiles](/developer-tooling/local-development/build-with-config-profiles).

```shell theme={null}
hs project profile add
```

**Flags**

| Flag               | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `--target-account` | The account ID or name to associate with this profile. |

## Delete project profile

Delete an existing [project profile](/developer-tooling/local-development/build-with-config-profiles).

```shell theme={null}
hs project profile delete [name]
```

**Arguments**

| Argument | Description                                          |
| -------- | ---------------------------------------------------- |
| `name`   | The name of the existing profile you want to delete. |

## Check app install status

Check whether a [static auth app](/apps/developer-platform/build-apps/authentication/overview#static-auth) in the current project is installed in the target account. This command must be run from within a HubSpot project directory.

```shell theme={null}
hs project app-install-status [flags]
```

**Flags**

| Argument    | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `accountId` | The ID of the HubSpot account where you're attempting to install the app. |
