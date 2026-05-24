> ## Documentation Index
> Fetch the complete documentation index at: https://developers.hubspot.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

---
id: de170f39-55ff-4bd5-aca0-5be29c5c5c6a
---

# Determine your migration path to 2026.03

> Learn how to determine the right migration path for your legacy app to the latest version of the developer platform.

export const DeveloperWebsiteCTA = ({title, href}) => {
  return <div className="card-condensed-cta">
      <Card title={title} href={href} horizontal={true} cta="Learn more" icon="hubspot" />
    </div>;
};

Multiple migration options are available to upgrade an older version of an app to [version 2026.03](/apps/developer-platform/build-apps/create-an-app) of the developer platform, based on the type of your app, whether the app was already using the projects framework, as well as the existing functionality your app is leveraging.

<DeveloperWebsiteCTA title="Developer Platform Basics" href="https://developers.hubspot.com/developer-platform-basics?utm_campaign=eko_2026_dev_platform_lp&utm_source=docs&utm_medium=referral&utm_content=migration_overview" />

The sections below provide guidance on auditing your app's configuration, along with how to use that information to determine the best option available to migrate your app to the latest version of the developer platform.

## Audit your existing app configuration

Your potential migration path depends on several factors:

* Which version of the projects framework your app is on (if any)
* Whether your app is private or public
* Whether your app is using serverless functions
* The number of HubSpot accounts your app is installed in (if applicable)

### Check your app type and project version

If you're not sure whether your legacy app is public or private, you can check its type in your development settings:

* In your HubSpot account, navigate to **Development**.
* In the left sidebar menu, click **Legacy apps**.
* Locate your app in the list, using the search bar or the **Filter by app type** dropdown menu to filter apps in the list.
* Confirm your app's *Type* and whether it's already on the projects framework.

<Frame>
  <img src="https://www.hubspot.com/hubfs/Knowledge_Base_2023-24-25/developer/locate-legacy-apps-in-development-settings.png" alt="Confirm legacy app in your HubSpot account for migration purposes" />
</Frame>

If your app is using the projects framework, you can also identify the version of the framework your app is using by checking the `platformVersion` field in your project's `hsproject.json` file.

```shell highlight={2} theme={null}
my-project-folder/
└── hsproject.json
    ...
```

```json highlight={4} theme={null}
{
  "name": "my_project",
  "srcDir": "src",
  "platformVersion": "2026.03"
}
```

* If you're already on version `2026.03`, your app is on the current version and no migration is necessary.
* Apps on version `2025.2` are supported through March 2027, but migrating to `2026.03` allows you to use [serverless functions](/apps/developer-platform/add-features/serverless-functions/overview).
* If you're on version `2025.1`, you need to migrate your app by August 1, 2026.
* Versions `2023.1` and `2023.2` have both been sunset, but you can still migrate these older apps to `2026.03`.

<Info>
  If your app doesn't have a `hsproject.json` file, it's not on the projects framework and you can use the `hs app migrate` command, subject to a few considerations outlined in the [diagram below](#review-your-app-migration-options).
</Info>

Learn more about [platform versioning](/developer-tooling/platform/versioning).

### Confirm serverless function usage

If your app is on the projects framework and you're leveraging [serverless functions](/apps/legacy-apps/private-apps/build-with-projects/serverless-functions), some restrictions currently apply to the migration process.

To check whether your app is actively using serverless functions, confirm both of the following:

* The `src/app/app.functions/` directory exists within your project.
* At least one entry exists in the `appFunctions` property in your `hsproject.json` file.

The tabs below compare the structure of projects using serverless functions before `2026.03` to the latest structure in `2026.03`, along with the corresponding configuration changes:

<Tabs>
  <Tab title="Before 2026.03">
    <Tree>
      <Tree.Folder name="my-project-folder" defaultOpen>
        <Tree.File name="hsproject.json" />

        <Tree.Folder name="src" defaultOpen>
          <Tree.Folder name="app" defaultOpen>
            <Tree.File name="app.json" />

            <Tree.Folder name="app.functions" defaultOpen>
              <Tree.File name="example-function.js" />

              <Tree.File name="package.json" />

              <Tree.File name="serverless.json" />
            </Tree.Folder>
          </Tree.Folder>
        </Tree.Folder>
      </Tree.Folder>
    </Tree>

    <CodeGroup>
      ```json serverless.json theme={null}
          {
            "appFunctions": {
              "functionName": {
                "file": "example-function.js",
                "secrets": [],
                "endpoint": {
                  "path": "fetch-quote",
                  "method": ["GET"]
                }
              }
            }
          }
      ```
    </CodeGroup>
  </Tab>

  <Tab title="2026.03">
    <Tree>
      <Tree.Folder name="my-project-folder" defaultOpen>
        <Tree.File name="hsproject.json" />

        <Tree.Folder name="src" defaultOpen>
          <Tree.Folder name="app" defaultOpen>
            <Tree.Folder name="functions" defaultOpen>
              <Tree.File name="FunctionWithEndpoint.js" />

              <Tree.File name="function-with-endpoint-hsmeta.json" />

              <Tree.File name="package.json" />
            </Tree.Folder>
          </Tree.Folder>
        </Tree.Folder>
      </Tree.Folder>
    </Tree>

    <CodeGroup>
      ```json function-with-endpoint-hsmeta.json theme={null}
      {
        "uid": "app_function",
        "type": "app-function",
        "config": {
          "entrypoint": "/app/functions/FunctionWithEndpoint.js",
          "secretKeys": []
        }
      }
      ```
    </CodeGroup>
  </Tab>
</Tabs>

### Check public app installs

If your legacy app isn't on the projects framework, you can migrate using the `hs app migrate` command, subject to whether your app is public and the number of active installs.

To check your public app's number of active installs:

* In your HubSpot account, navigate to **Development**.
* In the left sidebar menu, click **App listings**.
* Locate your app, then check the *Installs* column for the number of installs.

<Frame>
  <img src="https://www.hubspot.com/hubfs/Knowledge_Base_2023-24-25/developer/confirm-installs-on-app-listings-page.png" alt="Confirm number of legacy public app installs for migration purposes" />
</Frame>

* If your public app is already listed on the marketplace, you can proceed with migration without any prerequisite actions required.
* If your public app isn't listed on the marketplace, but it's installed in <u>at least 10</u> different HubSpot accounts, you'll need to list your app on the marketplace first, then proceed with migration.

## Review your app migration options

After confirming your app configuration details from the sections above, consult the paths detailed in the tabs below based on whether your app is already on the projects framework:

<Tabs>
  <Tab title="App is using projects framework">
    ```mermaid actions={false} theme={null}
    flowchart TB
    A[Which version of the <br/>framework is your<br/> app using?] -- 2023.1, 2023.2, or 2025.1 --> B[Is your app <br/>using serverless functions?]
    A -- 2025.2 --> C[Update <code>platformVersion</code> in <code>hsproject.json</code> to <code>2026.03</code> then run <br/> <code>hs project upload</code>]
    B -- No --> E[Is your app using <br/><a href="/docs/api-reference/crm-public-app-crm-cards-v3/guide">legacy CRM cards</a>?]
    B -- Yes --> G
    E -- No --> G[Run <br/><code>hs project migrate</code>]
    E -- Yes --> H[Convert to app cards <br/>first]
    H --> G
    ```
  </Tab>

  <Tab title="App is not using projects framework">
    ```mermaid actions={false} theme={null}
    flowchart TB
    A[Is your app private<br/> or public?] -- Private --> B[Run <code>hs app migrate</code>]
    A -- Public --> C[Is your app listed<br/> on the marketplace?]
    C -- No --> D[How many accounts <br/>is your app installed in?]
    C -- Yes --> B
    D -- 10 or more --> E[List on marketplace first]
    D -- Less than 10 --> B
    E --> B
    ```
  </Tab>
</Tabs>

## Next steps

After you've reviewed your migration path options above, you can proceed to [migrate your app to 2026.03](/apps/developer-platform/build-apps/migrate-an-app/migrate-to-the-latest-platform-version).

If you have an unlisted legacy public app with fewer than 10 installs, [list your app on the HubSpot Marketplace](/apps/developer-platform/list-apps/listing-your-app/listing-your-app) first.

<Warning>
  The previous migration guides to 2025.2 for legacy [private apps](/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app) and [public apps](/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app) are still available, but it's highly recommended you [migrate to 2026.03](/apps/developer-platform/build-apps/migrate-an-app/migrate-to-the-latest-platform-version) to leverage the latest functionality, including support for serverless functions.
</Warning>
