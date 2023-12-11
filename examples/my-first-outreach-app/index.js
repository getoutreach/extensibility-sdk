import extensibilitySdk from '../../src';
import { displayEmailInfo, displayProspectInfo, displayUserInfo } from './helpers';

document.addEventListener(
  'DOMContentLoaded',
  async () => {
    console.log('Initializing SDK');

    // initialize SDK and get the data available for this extension

    const { user, prospect, organization, email } = await extensibilitySdk.init();
    console.log(organization);
    console.log('EMAIL', email);

    // Now render data that came from Outreach.
    // Replace with what you usually use for rendering in your framework. For example React components.

    console.log('SDK initialized');
    displayUserInfo(user);
    displayProspectInfo(prospect);
    displayEmailInfo(email);
  },
  { once: true }
);
