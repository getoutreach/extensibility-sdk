import extensibilitySdk from '../src';

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing SDK');
  // initialize SDK and get the data available for this extension
  await extensibilitySdk.init();

  console.log('SDK initialized');

  // Append the page with button to call api
  const button = document.createElement('button');
  button.innerHTML = 'Call API';
  button.onclick = async () => {
    const response = await extensibilitySdk.callApi('https://api.outreach-staging.com/api/v2/accounts/154851');

    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(response, null, '\t');
    document.body.append(pre);
  };

  document.body.append(button);
});
