import extensibilitySdk from '../src'
import { displayProspectInfo, displayUserInfo } from './helpers';

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing SDK');

  // initialize SDK and get the data available for this extension

  const { user, prospect, organization } = await extensibilitySdk.init();

  const data = await extensibilitySdk.getAppToken();

  await extensibilitySdk.callApi(data.token, data.installationId);

  console.log(organization);
  // Now render data that came from Outreach.
  // Replace with what you usually use for rendering in your framework. For example React components.

  console.log('SDK initialized');
  displayUserInfo(user);
  displayProspectInfo(prospect);
});
