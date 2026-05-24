> ## Documentation Index
> Fetch the complete documentation index at: https://developers.hubspot.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

---
id: 6968af72-c4f4-4d1a-81d6-aea36327433b
---

# Developer platform

> Learn how to create apps on the HubSpot developer platform.

export const FeatureMatrix = ({headers, data, checkmark = 'svg', xmark = 'svg', className = ''}) => {
  if (!headers || !data) {
    return null;
  }
  const styles = {
    container: {
      width: '100%',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '14px',
      display: 'table',
      whiteSpace: 'nowrap',
      minWidth: '100%',
      backgroundColor: 'var(--feature-matrix-bg, #F5F8FA)',
      lineHeight: '.8',
      borderRadius: '3px',
      overflow: 'hidden'
    },
    headerCell: {
      padding: '10px 8px',
      textAlign: 'center',
      border: '.5px solid var(--feature-matrix-border, #e1e5e9)',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      fontWeight: 600,
      backgroundColor: 'var(--feature-matrix-bg-secondary, #f8f9fa)'
    },
    firstHeaderCell: {
      border: '.5px solid var(--feature-matrix-border, #e1e5e9)',
      borderLeft: '0'
    },
    bodyCell: {
      padding: '8px 8px',
      textAlign: 'left',
      border: '.5px solid var(--feature-matrix-border, #e1e5e9)',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      fontWeight: 600
    },
    firstBodyCell: {
      fontWeight: 500,
      whiteSpace: 'normal',
      maxWidth: '200px',
      minWidth: '150px',
      border: '.5px solid var(--feature-matrix-border, #e1e5e9)',
      borderLeft: '0',
      backgroundColor: 'var(--feature-matrix-bg, #F5F8FA)',
      color: 'var(--feature-matrix-text)',
      padding: '8px 15px'
    },
    dataCell: {
      textAlign: 'center',
      fontWeight: 600
    },
    evenRow: {
      backgroundColor: 'var(--feature-matrix-bg-secondary, #f8f9fa)'
    },
    svgContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    topLeftCorner: {
      borderTopLeftRadius: '3px'
    },
    topRightCorner: {
      borderTopRightRadius: '3px'
    },
    bottomLeftCorner: {
      borderBottomLeftRadius: '3px'
    },
    bottomRightCorner: {
      borderBottomRightRadius: '3px'
    }
  };
  const responsiveStyles = {
    table: {
      ...styles.table,
      fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '12px' : '14px'
    },
    headerCell: {
      ...styles.headerCell,
      padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '8px 6px' : '12px 8px'
    },
    bodyCell: {
      ...styles.bodyCell,
      padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '8px 6px' : '12px 8px'
    },
    firstBodyCell: {
      ...styles.firstBodyCell,
      maxWidth: typeof window !== 'undefined' && window.innerWidth <= 768 ? '120px' : '200px',
      minWidth: typeof window !== 'undefined' && window.innerWidth <= 768 ? '100px' : '150px'
    }
  };
  const getCellStyle = (rowIndex, colIndex) => {
    const isEvenRow = rowIndex % 2 === 1;
    const isFirstCol = colIndex === 0;
    const isStaticTokenCol = colIndex === 1;
    const isOauthCol = colIndex === 2 || colIndex === 3;
    const isLastRow = rowIndex === data.length - 1;
    const isLastCol = colIndex === data[0].length - 1;
    if (isFirstCol) {
      let cellStyle = isEvenRow ? {
        ...styles.firstBodyCell,
        ...styles.evenRow
      } : styles.firstBodyCell;
      if (isLastRow) {
        cellStyle = {
          ...cellStyle,
          borderBottom: 'none',
          ...styles.bottomLeftCorner
        };
      }
      return cellStyle;
    }
    let cellStyle = isEvenRow ? {
      ...styles.bodyCell,
      ...styles.dataCell,
      ...styles.evenRow
    } : {
      ...styles.bodyCell,
      ...styles.dataCell
    };
    if (isLastCol) {
      cellStyle = {
        ...cellStyle,
        borderRight: 'none'
      };
    }
    if (isLastRow) {
      cellStyle = {
        ...cellStyle,
        borderBottom: 'none'
      };
    }
    if (isStaticTokenCol) {
      cellStyle = isEvenRow ? {
        ...cellStyle,
        ...styles.evenRowStaticToken
      } : {
        ...cellStyle,
        ...styles.staticTokenCell
      };
    } else if (isOauthCol) {
      cellStyle = isEvenRow ? {
        ...cellStyle,
        ...styles.evenRowOauth
      } : {
        ...cellStyle,
        ...styles.oauthCell
      };
    }
    if (isLastRow && isLastCol) {
      cellStyle = {
        ...cellStyle,
        ...styles.bottomRightCorner
      };
    }
    return cellStyle;
  };
  const getHeaderStyle = (rowIndex, colIndex) => {
    let headerStyle = {
      ...styles.headerCell
    };
    if (rowIndex === 0) {
      headerStyle = {
        ...headerStyle,
        borderTop: 'none'
      };
    }
    if (colIndex === 0) {}
    if (colIndex === headers[0].length - 1) {
      headerStyle = {
        ...headerStyle,
        borderRight: 'none'
      };
    }
    if (rowIndex === 0) {
      if (colIndex === 0) {
        headerStyle = {
          ...headerStyle,
          ...styles.firstHeaderCell,
          ...styles.topLeftCorner
        };
      } else if (colIndex === headers[0].length - 1) {
        headerStyle = {
          ...headerStyle,
          ...styles.oauthHeader,
          ...styles.topRightCorner
        };
      } else {
        headerStyle = {
          ...headerStyle,
          ...styles.staticTokenHeader
        };
      }
    } else {
      if (colIndex === 0) {
        headerStyle = {
          ...headerStyle,
          ...styles.staticTokenHeader
        };
      } else {
        headerStyle = {
          ...headerStyle,
          ...styles.oauthHeader
        };
      }
    }
    return headerStyle;
  };
  return <div style={styles.container} className={className}>
      <table style={responsiveStyles.table}>
        <thead>
          {headers.map((headerRow, rowIndex) => <tr key={rowIndex}>
              {headerRow.map((header, colIndex) => <th key={colIndex} style={getHeaderStyle(rowIndex, colIndex)} rowSpan={header.rowSpan} colSpan={header.colSpan}>
                  {header.text}
                </th>)}
            </tr>)}
        </thead>
        <tbody>
          {data.map((row, rowIndex) => <tr key={rowIndex}>
              {row.map((cell, colIndex) => <td key={colIndex} style={getCellStyle(rowIndex, colIndex)}>
                  {cell === true ? checkmark === 'svg' ? <div style={styles.svgContainer} dangerouslySetInnerHTML={{
    __html: `<svg width="15" height="15" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0295 0.463025L7.30618 11.1864L1.97047 5.85066C1.76165 5.64184 1.47323 5.51263 1.15425 5.51263C0.516844 5.51263 0 6.02948 0 6.66688C0 6.98587 0.129211 7.27429 0.338025 7.4831L6.49285 13.6322C6.70166 13.841 6.99008 13.9708 7.30907 13.9708C7.62806 13.9708 7.91648 13.8415 8.12529 13.6322L19.662 2.09547C19.8708 1.88665 20 1.59824 20 1.27925C20 0.641844 19.4832 0.125 18.8458 0.125C18.5268 0.125 18.2383 0.254211 18.0295 0.463025V0.463025Z" fill="#0CBC9F"/>
</svg>
`
  }} /> : checkmark === 'emoji' ? '✅' : checkmark : cell === false ? xmark === 'svg' ? <div style={styles.svgContainer} dangerouslySetInnerHTML={{
    __html: `<svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.405699 19.6325C0.631328 19.8597 0.943014 20 1.28797 20C1.63292 20 1.94461 19.8597 2.17023 19.6332L10.0166 11.784L17.8703 19.6332C18.0959 19.8589 18.4083 19.9986 18.7525 19.9986C19.4417 19.9986 20 19.4401 20 18.7506C20 18.4063 19.8604 18.0938 19.6348 17.868L11.7812 10.0188L19.6276 2.16234C19.8293 1.94169 19.953 1.64653 19.953 1.32316C19.953 0.635897 19.3962 0.0788541 18.7091 0.0788541C18.3852 0.0788541 18.0901 0.202561 17.8688 0.405845L17.8695 0.405122L10.0159 8.25436L2.16228 0.405122C1.93376 0.156261 1.60761 0 1.24385 0C0.556841 0 0 0.557043 0 1.2443C0 1.60747 0.155482 1.93446 0.403529 2.16161L0.404252 2.16234L8.25065 10.0188L0.404252 17.8753C0.179346 18.1003 0.0404975 18.4113 0.0404975 18.7542C0.0404975 19.0972 0.179346 19.4082 0.404252 19.6332L0.405699 19.6325Z" fill="#F2545B"/>
</svg>
`
  }} /> : xmark === 'emoji' ? '❌' : xmark : typeof cell === 'object' && cell.url ? <a href={cell.url}>
                      {cell.text}
                    </a> : cell}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>;
};

HubSpot's new developer platform, built and managed via projects, provides multiple advantages over legacy private and public apps, including a new file-based build-and-deploy framework. This framework contains an app's configuration, assets, and other source code.

## Continued support for legacy apps

Although building apps on the developer platform is recommended to take advantage of the latest app features, legacy [private apps](/apps/legacy-apps/private-apps/overview) and [public apps](/apps/legacy-apps/public-apps/overview) are still fully supported and actively maintained by HubSpot.

* All [REST APIs](/api-reference/latest/overview) are available to query via a private app access token or public app OAuth token.
* Unless otherwise noted, any previous extensions you've built using legacy apps are also still supported.

<Note>
  Developer platform apps (v2025.2 and v2026.03) are created and deployed via the [HubSpot CLI](/developer-tooling/local-development/hubspot-cli/install-the-cli). If you're less familiar with using the CLI and you only need an access token for a few HubSpot APIs, you may want to create a [legacy private app](/apps/legacy-apps/private-apps/overview).
</Note>

<Accordion title="Access legacy apps in your account">
  To review any previously created private or public apps in your HubSpot account, navigate to **Development**, then click **Legacy Apps**.

  <Frame>
    <img src="https://www.hubspot.com/hubfs/Knowledge_Base_2023-24-25/developer-overview/navigate-to-legacy-apps-in-new-developer-overview.png" alt="legacy-apps-in-new-development-navigation" />
  </Frame>
</Accordion>

You can also [migrate](#migration-guides) an existing legacy app to the latest version of the developer platform.

## Create an app

The [app creation guide](/apps/developer-platform/build-apps/create-an-app) walks you through how to get up and running with a proof-of-concept app that uses a boilerplate example project and schema definition. You can then upload the associated configuration files to a project in your developer account, and test out an install using a developer test account.

<Tip>
  The app creation article linked above provides a full setup guide to customize and deploy a new app using the `hs project create` command.

  If you're new to building apps on HubSpot, check out the [quickstart guide](/getting-started/quickstart) that will get you up and running with a demo app using the streamlined `hs get-started` command.
</Tip>

## Migration guides

If you have an existing app built using a project on the old version of the developer platform, you can migrate the app to the new version of the platform by consulting the resources below:

* [Migration overview](/apps/developer-platform/build-apps/migrate-an-app/overview)
* [Migrate an app to 2026.03](/apps/developer-platform/build-apps/migrate-an-app/migrate-to-the-latest-platform-version)

## App configuration

Whether you're starting from scratch with the [quickstart guide](/getting-started/quickstart), creating an app using the [full setup guide](/apps/developer-platform/build-apps/create-an-app), or migrating an existing legacy app, you can consult the [app configuration](/apps/developer-platform/build-apps/app-configuration) reference article for details on all available fields in your app's top-level `app-hsmeta.json` schema file.

## Features

Once you've got your new app up and running, you can add features such as app cards and webhooks. The features available to an app depend on the app's [distribution](/apps/developer-platform/build-apps/app-configuration#distribution) and [authentication](/apps/developer-platform/build-apps/app-configuration#authentication) configuration, as shown in the table below.

<FeatureMatrix
  headers={[
[
  { text: 'Feature', rowSpan: 2 },
  { text: 'Static token', colSpan: 1 },
  { text: 'OAuth', colSpan: 2 }
],
[
  { text: 'Private' },
  { text: 'Private' },
  { text: 'Marketplace' }
]
]}
  data={[
[{ text: 'API calls', url: '/api-reference/latest/overview' }, true, true, true],
[{ text: 'Agent tools', url: '/apps/developer-platform/add-features/agent-tools/overview'}, true, true, true ],
[{ text: 'App cards', url: '/apps/developer-platform/add-features/ui-extensions/extension-points/app-cards/overview' }, true, true, true],
[{ text: 'App pages', url: '/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/create-app-pages' }, true, true, true],
[{ text: 'App events', url: '/apps/developer-platform/add-features/app-events/overview'}, false, false, true],
[{ text: 'App objects', url: '/apps/developer-platform/add-features/app-objects/overview'}, false, false, true],
[{ text: 'App settings', url: '/apps/developer-platform/add-features/ui-extensions/extension-points/create-a-settings-page' }, true, true, true],
[{ text: 'Custom workflow actions', url: '/apps/developer-platform/add-features/custom-workflow-actions' }, true, true, true],
[{ text: 'Public functions for CMS', url: '/cms/start-building/features/serverless-functions/getting-started-with-serverless-functions' }, true, true, false],
[{ text: 'Serverless functions', url: '/apps/developer-platform/add-features/serverless-functions/overview'}, true, false, false],
[{ text: 'SCIM', url: '/apps/developer-platform/add-features/scim' }, true, false, false],
[{ text: 'Telemetry', url: '/apps/developer-platform/add-features/add-telemetry' }, true, true, true],
[{ text: 'Webhooks v3', url: '/api-reference/webhooks-webhooks-v3/guide' }, true, true, true],
[{ text: 'Webhooks v4', url: '/api-reference/webhooks-webhooks-v4/webhooks-journal'}, false, true, true],
]}
  checkmark="svg"
  xmark="svg"
/>
