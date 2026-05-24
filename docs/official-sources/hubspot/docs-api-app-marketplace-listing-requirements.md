> ## Documentation Index
> Fetch the complete documentation index at: https://developers.hubspot.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

---
id: e80ba8fa-c42f-401e-a818-94e5b626994b
---

# App listing requirements in the HubSpot Marketplace

> Technology Partners can now see HubSpot's guidelines and requirements for getting an app listed on the HubSpot Marketplace in one place.

App listing submissions are manually reviewed by the HubSpot Ecosystem Quality team and will be rejected if they do not meet the criteria outlined below. Once your app meets these requirements, you can [build your app listing](/apps/developer-platform/list-apps/listing-your-app/listing-your-app) from within your app developer account.

## Minimum requirements

* **Access:** the listing must not redirect to a different public or private app or require another public or private app to function.
* **Uniqueness:** your listed public app must be unique. If you have already listed an app and you want to replace it, update the existing app instead of listing a new one.
* **Use case:** each app you create should address a separate use case. Apps with similar functionality and use the same APIs should be consolidated into a single app.
* **Single HubSpot app ID:** your app must authorize API requests with the public HubSpot app ID (and [OAuth client ID](/apps/developer-platform/build-apps/authentication/oauth/working-with-oauth)) associated with your app listing.
* **OAuth:** your app must use OAuth as its sole authorization method. Learn more about [working with OAuth](/apps/developer-platform/build-apps/authentication/oauth/working-with-oauth).
* **Installs:** your app must have at least three active, unique installs.
  * App activity is defined by OAuth-authenticated requests to HubSpot's [APIs](/api-reference/latest/overview) and [signed requests](/apps/developer-platform/build-apps/authentication/request-validation) from HubSpot [webhook subscriptions](/api-reference/latest/webhooks) and extensions (e.g. [app card](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/overview) data fetch requests).
  * Active installs are the number of unique HubSpot production accounts, unaffiliated with your organization, showing successful app activity within the past 30 days.
* **Scopes:** only request [scopes](/apps/developer-platform/build-apps/authentication/scopes) your app needs.
* **Terms:** you must review and agree to the terms in [HubSpot's Technology Partner Program Agreement](https://legal.hubspot.com/technology-program-agreement).
* **Restricted industries:** your app must not fit or deliver functionality that would exclusively serve customers within any of HubSpot's [restricted industries](https://legal.hubspot.com/acceptable-use#Restricted-Industries).
* **Restricted functionality:** your app cannot use [classic CRM cards](/api-reference/latest/crm/extensions/crm-cards/guide), as they are no longer supported as of June 16, 2025. Learn more about this announcement on the [HubSpot Developer Changelog](https://community.hubspot.com/t5/Developer-Announcements/Deprecating-Support-for-Classic-Legacy-CRM-Cards/m-p/1153039#M1048).
* **Developer platform versions**: once a version of the developer platform has been announced as unsupported, apps using that version cannot be listed in the HubSpot Marketplace. Learn more about [developer platform versioning](/developer-tooling/platform/versioning).
* **AI connectors**: if your app is an AI connector - an app that primarily connects HubSpot to external generative AI tools - it must require user-level permissions and be built with [HubSpot's MCP Server](/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server).

### HubSpot brand requirements

* Your app and its associated assets (documentation, landing pages, etc.) must meet [HubSpot’s Branding Guidelines](https://www.hubspot.com/partners/technology/branding-guidelines). For example, capitalize the “S” in “HubSpot” any time you’re referring to HubSpot.
* Your app and its associated assets (documentation, landing pages, etc.) must not infringe on [HubSpot’s Trademark Usage Guidelines](https://legal.hubspot.com/tm-usage-guidelines). For example, do not combine HubSpot's name (including “Hub” and “HubSpot”) with your app name or logo.

### Listing requirements

Once you’ve met the minimum requirements, you can submit your app listing. When submitting your app listing, you must completely and accurately fill out all information. These fields are particularly important and failure to meet these requirements will cause your listing to be set to Draft mode only:

* The content of your listing should be specific to the integration as opposed to general product information. It should contain information about the value customers can expect specifically from downloading and using this integration. Good examples include: [Aircall](https://ecosystem.hubspot.com/marketplace/apps/aircall), [CloudFiles](https://ecosystem.hubspot.com/marketplace/apps/cloudfiles), [Trumpet](https://ecosystem.hubspot.com/marketplace/listing/trumpet-819430).
* All URLs in your HubSpot Marketplace listing must lead to live, publicly available, and functional pages.
  * This will be verified using [HubSpot's SEO tools](https://knowledge.hubspot.com/seo/understand-seo-crawling-errors) to crawl pages associated with the listing.
  * To prevent unnecessary delays in the review process, it is strongly recommended to work with your site administrator to add HubSpot's crawler's user agent, *HubSpot Crawler*, to the allow list as an exemption prior to submitting your app listing.
* A link to publicly available setup documentation specific to your HubSpot integration.
  * Review the [full requirements for setup documentation](/apps/developer-platform/list-apps/listing-your-app/create-an-app-listing-setup-guide). This guide also includes an example template that meets all requirements.
  * For a live example, check out the [Salesmsg setup guide](https://help.salesmessage.com/en/collections/2430749-hubspot).
* Include a relevant Install button URL that brings customers to a page where they can easily connect your app with HubSpot.
* URLs for your app’s support resources (support website, HubSpot community forum, case study) must be live, up-to-date, and publicly available.
* URLs for your app’s Terms of Service and Privacy Policy must be live and up-to-date.
* All URL fields have a limit of <u>250</u> characters.
* *Shared data*, which lets users know how information will flow between your app and HubSpot, must be accurate, up-to-date, and reflect the [scopes](/apps/developer-platform/build-apps/authentication/scopes) your app requests.
  * All objects selected in your OAuth scopes should be documented in the *Shared data* table.
  * If your app is requesting both read and write object scopes, the data sync should be advertised as bi-directional for these specific objects.
* Your HubSpot Marketplace listing must contain clear and accurate pricing information:
  * The pricing plan in the listing must match the pricing information published on your website.
  * The pricing plan in the listing must only include pricing plans that allow for the usage of your HubSpot integration.
    * If a pricing plan does not support the integration, it should not be included in your listing.
    * For example, if you have *Plan A* and *Plan B* for your app, but only *Plan B* can be used with the integration, only the pricing details for *Plan B* should be included in the listing.
  * Free pricing plans should only be used for Free forever or Freemium pricing models.
* You must include at least one support contact method.

### App card requirements

If your app includes [app cards](/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/overview) built using UI extensions, your app must adhere to the following additional criteria:

* **Naming:** per the [Technology Partner Program branding guidelines](https://www.hubspot.com/partners/technology/branding-guidelines):
  * Do not modify, imitate, or abbreviate any HubSpot brands or names (e.g., "HubSpot," "Hub," etc.) anywhere in the name of your app card.
  * Do not use a generic product name + any HubSpot brands or names (e.g., "App card for HubSpot").
  * Do not brand your app card using the word "inbound" in a way that would tie it to HubSpot's INBOUND event (e.g., "Inbound Sales app card").
* **Logos and icons:**
  * Per the [Technology Partner Program branding guidelines](https://www.hubspot.com/partners/technology/branding-guidelines), do not use the HubSpot company logo or sprocket without permission.
  * Do not use company or brand logos other than your own as icons.
* **Sensitive data:**
  * Your app must not access, request, or use [sensitive data scopes](/api-reference/latest/crm/properties/sensitive-data).
  * Your app card must not display sensitive information, as defined in [HubSpot's Terms of Service](https://legal.hubspot.com/terms-of-service).

#### Security and privacy

* Your app must use all of the [scopes](/apps/developer-platform/build-apps/authentication/scopes#app-scope-types) that it requests during installation. Scopes that are not used must be removed. If certain scopes only apply to a subset of your app's user base, they should be included as conditionally required or optional scopes.
* If your app requires a dedicated browser extension, the extension must be listed and approved in the browser's official extension marketplace. For example, apps in Google Chrome should be listed and approved in the Chrome Web Store.

#### Reliability and performance

For linked assets such as images and JavaScript, avoid using absolute links. Instead, use relative links and include the assets in your files. Exceptions may only be made if you use a reputable CDN.

#### Usability and accessibility

* **Buttons:**
  * [Forms](/apps/developer-platform/add-features/ui-extensions/ui-components/patterns/forms) must include submit [Buttons](/apps/developer-platform/add-features/ui-extensions/ui-components/standard-components/button).
  * Ensure destructive button styles denote a destructive behavior.
  * Include only one primary button per surface (app card, modal, or panel).
* **Text:**
  * It's recommended to not use underline formatting for text that's next to a hyperlink, as it will also appear clickable.
  * Do not use [Tags](/apps/developer-platform/add-features/ui-extensions/ui-components/standard-components/tag) in place of Buttons or [Links](/apps/developer-platform/add-features/ui-extensions/ui-components/standard-components/link).

## Review, feedback, and approval

Once you submit your listing, the HubSpot Ecosystem Quality team will complete an initial review within 10 business days. If any of the information provided is incorrect, misleading, or incomplete, we’ll contact you with that feedback. The entire app review and feedback process should take no more than 60 days from the time feedback is shared. As stated in the [HubSpot Marketplace Terms](https://legal.hubspot.com/technology-program-agreement), HubSpot reserves the right to unpublish or refuse publication of your app listing at any time.

<Warning>
  **Please note**: you can only submit one app at a time for approval. Any additional apps submitted while the initial app is being processed will automatically be rejected.
</Warning>

## Rewards for Listed Technology Partners

* Dedicated HubSpot Marketplace listing
* Priority access to developer support through a dedicated support alias
* Developer community resources, including webinars, forums, and more
* Curated marketing resources, including PR templates and launch guides
* Discounted INBOUND event sponsorship, booths, and tickets
* Discounted software through the HubSpot for Startups seed-stage program
* Monthly newsletter with marketing updates, product releases, and more

## Related resources

* [How to list your app](/apps/developer-platform/list-apps/listing-your-app/listing-your-app)
* [App certification requirements](/apps/developer-platform/list-apps/apply-for-certification/certification-requirements)
* [API reference documentation](/api-reference/latest/overview)
* [Developer community forum](https://community.hubspot.com/t5/APIs-Integrations/bd-p/integrations)
* [Contact the Technology Partner team](https://www.hubspot.com/partners/technology/join)
