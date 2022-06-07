## Getting started with Outreach apps

The [examples directory](/examples/dist) contains a sample Outreach app consisting of a
[shell extension](extension-types.md#shell-extension) and a
[prospect extension](extension-types.md#prospect-tab-extension). Let's bring this sample app to your Outreach
organisation. Do not worry, you can't break anything, and you won't disrupt your users as you follow this tutorial.

### Step 1 - create your app

1. Host the contents of [examples](/examples/dist) on a URL of your choice.
2. Go to Settings > Integrations and open Your Apps tab. If you do not see the tab please reach out to your Outreach
   support representative.
3. Click on "Create App" button.
4. In the "App name" field enter your app name. The App identifier will be prepopulated for you based on that name.
   However, it needs to be longer than 6 characters, so edit if necessary and then click "Create app".

Now that your app is created there is a lot of boring metadata to fill out. Let's not bother, you can always do that
part later. Instead, let's focus on setting up the shell extension.

### Step 2 - set up the shell extension

1. Click on "Shell extension" section in the left menu and turn on the Shell extension.
2. In "Hosting URL" specify the URL which hosts the
   [`my-first-outreach-extension.html`](/examples/dist/my-first-outreach-extension.html) file.
3. Upload an icon for your shell extension.
4. Select a couple of data scopes, for example `usr.email` and `usr.name`. This will allow your app to receive the email
   and name of the currently logged-in user.

Save your changes to continue.

### Step 3 - set up the Prospect tab extension

1. Click on the "Prospect tab extension" and turn on the Prospect tab extension.
2. In "Hosting URL" specify the same URL as in previous step
   ([`my-first-outreach-extension.html`](/examples/dist/my-first-outreach-extension.html)).
3. Select a couple of scopes for example `pro.accnme` and `pro.accdmn`. This will allow your app to receive the Account
   name and Account domain.

Save your changes to continue.

### Step 4 - install and test your app

You are now ready to give your app a first test run. To do so you can install it for your user account only. To install
the development version of the app head to "Your apps" list and select "Install" from the dropdown menu next to your
app.

The icon you have configured for the shell extension will appear in the bottom of the Outreach's main toolbar on the
left. Click on that icon to see your app come up! To access your Prospect tab extension navigate to "Prospects" and
select any prospect. Your extension is accessible from the top tab list.

### That's it!

You have now successfully created your first Outreach application. Now, work from the [example app source](/examples) to
create a set of useful extensions. Once that work is done go
[publish your app](developer-portal.md#creating-and-publishing-apps).

By the way, while you are developing your application you'll definitely want to know what features the
[Outreach Extensibility SDK](sdk.md) offers, so check that out too.
