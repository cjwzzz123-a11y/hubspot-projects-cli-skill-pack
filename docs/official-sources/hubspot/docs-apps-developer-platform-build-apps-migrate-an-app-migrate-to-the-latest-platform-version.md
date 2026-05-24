> ## Documentation Index
> Fetch the complete documentation index at: https://developers.hubspot.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

---
id: 0d4ce789-b77b-426e-aa02-e12868467537
---

# Migrate an existing app to the latest version of the developer platform (2026.03)

> Learn how to migrate an existing app to the latest version of the developer platform.

The latest version of the developer platform, `2026.03`, provides serverless function support for apps with static auth, as well as all of the previous functionality released on version `2025.2`. This includes apps managed via projects, which use a file-based build-and-deploy framework. This framework contains an app's configuration, assets, and other source code.

This guide walks you through how to migrate an existing app to `2026.03`.

<Info>
  Migrating a legacy non-project-based [private app](/apps/legacy-apps/private-apps/overview) to `2026.03` is not currently supported.
</Info>

## Prerequisites

* Before proceeding with the steps below, confirm that you're on the latest version of the [HubSpot CLI](/developer-tooling/local-development/hubspot-cli/install-the-cli#install-the-latest-version-of-the-hubspot-cli). Version `8.4.0` or above is recommended.
* Review the migration overview for more details on previous app versions, legacy apps, and other important context.

## Determine your migration path

After you've installed the latest version of the CLI and reviewed the migration overview to check your existing app's [version](/apps/developer-platform/build-apps/migrate-an-app/overview#check-your-app-type-and-project-version) follow <u>one</u> of the sections below based on the existing app you want to migrate:

* If you're on version `2025.2` of the developer platform, follow the steps in the [first section](#migrate-from-2025-2) below.
* If you're on version `2023.1`, `2023.2`, or `2025.1`, follow the steps in the [second section below](#migrate-from-an-older-project). This section also covers project-based apps that predate platform versioning.
* If you're migrating a legacy public app that's <u>not</u> managed via an existing project, follow the steps in the [third section below](#migrate-a-legacy-public-app-non-project-based).

## Migrate from 2025.2

If your app is already on version 2025.2 of the developer platform, you'll first need to update the `platformVersion` property in the top-level `hsproject.json` file of your project from `2025.2` to `2026.03`:

```json highlight={4} theme={null}
{
  "name": "my_project",
  "srcDir": "src",
  "platformVersion": "2025.2"
}
```

Once you've updated the `platformVersion` to `2026.03`, run the following command to re-upload the project to your HubSpot account:

```shell theme={null}
hs project upload
```

## Migrate from an older project version

If your app is on version `2023.1`, `2023.2`, `2025.1`, you can automatically migrate to the latest version of the developer platform by running the following command in the working directory of your project:

```shell theme={null}
hs project migrate
```

Follow the prompts to confirm the features that will be migrated from your existing app. After confirming, all components of your project should automatically be migrated to `2026.03`.

<Warning>
  If your previous legacy app included serverless functions, and defined environment variables via the `environment` property in your project's `serverless.json` file, these variables will <u>not</u> be automatically migrated over to your new project.

  You'll need to redefine the variables as secrets using the `hs secret add` [command](/apps/developer-platform/add-features/serverless-functions/reference#managing-and-referencing-secrets).
</Warning>

## Migrate a legacy public app (non-project-based)

If you have an existing [legacy public app](/apps/legacy-apps/public-apps/overview) that's not managed via a project, you can migrate it automatically by following the instructions below. This process will preserve the original authentication credentials, app features, and installs for the app. No changes are required in your app's backend.

To get started, open a terminal, navigate to the directory where you plan on managing your HubSpot projects, then run the following command:

```shell theme={null}
hs app migrate
```

* You'll be prompted to choose the app you want to migrate. This will create a new project in your local filesystem containing an app, along with its features that represent its currently configured state.
* After selecting the app, you'll be prompted for confirmation of the components that will be migrated. Make sure you fully understand the migration process before confirming to the next step.
* Next, you'll be prompted to provide a project name, a local path to the new project, and any required UIDs.

<Warning>
  UIDs should be used as a unique identifier for all of your app’s features. Once a UID is defined for a specific feature, changing or modifying it in subsequent builds will force the platform to recognize it as “new” or different from previous builds, which might not be intended.
</Warning>

<Frame>
  <img src="https://www.hubspot.com/hubfs/Knowledge_Base_2023-24-25/app-objects-migration-final-prompt-screen.png" alt="Prompts to migrate an existing app" />
</Frame>

* Once you confirm the details for your project, the migration process will automatically perform the following actions as a single operation:
  * Create a project for your app in your account's *Projects* page, which includes an app component and any compatible features.
  * Convert any existing features of the app to source code files, which you can update to revise their configuration in the future.
  * Build and deploy the new project (which will be labeled as *Build #1*), which completes the association between the app and its project. This will preserve the original auth credentials, app features, and installs.
  * Download the new project source files to the local directory you specified earlier when prompted in the terminal.
  * If an existing project was migrated, move the files from the original `src/` directory to `archive/` and populate `/src/` with the new project source code.

<Frame>
  <img src="https://www.hubspot.com/hubfs/Knowledge_Base_2023-24-25/app-objects-successful-migration-in-app.png" alt="Details page for migrated app in projects view" />
</Frame>

<Info>
  *Build #1* of the new project captures the app's configuration state for all supported features as baseline you can return to. If needed, you can safely revert any future changes to this project (e.g., adding React-based app cards) by redeploying **build #1**.
</Info>

<Warning>
  After migration, features defined in the project source code will no longer be editable through the app management UI within HubSpot, nor using the previous developer APIs. Other features, (e.g., custom workflow actions) will continue to be maintained using their respective APIs.
</Warning>

## Next steps

After you've successfully migrated your app, check out the resources below to start building on version `2026.03`:

* Review the [supported features](/apps/developer-platform/overview#features) on the developer platform.
* Learn about using [serverless functions](/apps/developer-platform/add-features/serverless-functions/overview).
* Review the [app configuration](/apps/developer-platform/build-apps/app-configuration) reference.
* Create an [app card](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/overview), [settings page](/apps/developer-platform/add-features/ui-extensions/extension-points/create-a-settings-page), or [app page](/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/create-app-pages) using UI extensions.
