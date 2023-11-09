import extensibilitySdk from '../../src'

function iframeSource(opportunity) {
  /**
  * Here we'll compare opportunity stage and display correct URL based on that
  *
  * You can see all available fields in the SDK documentation:
  * https://developers.outreach.io/client-extensions/javascript-sdk/#the-outreachcontext-object
  *
  * To access opportunity data make sure to add it to the app manifest in the Outreach Developer Portal:
  * https://developers.outreach.io/client-extensions/javascript-sdk/#the-outreachcontext-object
  */

  if (opportunity && opportunity.stage === 'C - Negotiations') {
    return 'about:blank';
  }

  if (opportunity && opportunity.stage === 'Closed Won') {
    return 'about:blank';
  }

  /**
   * If there is no opportunity with that stage, we show default page instead
   */
  return 'https://example.com';
}

function displayIframe(opportunity) {
  if (!opportunity) return null

  const source = iframeSource(opportunity);

  const iframe = document.createElement('iframe');

  iframe.src = source;
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.allowFullscreen = true;
  iframe.style = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;';

  document.body.append(iframe);
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing SDK');
  /**
   * Initialize SDK and get the data available for this extension
   */
  const { opportunity } = await extensibilitySdk.init();

  console.log('SDK initialized');
  console.log('Opportunity data:', opportunity)
  displayIframe(opportunity);
});
