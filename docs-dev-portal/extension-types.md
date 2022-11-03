# What extensions can I make?

## Shell extension

![Shell extension](img/shell-extension.png 'Shell extension launches from main Outreach sidebar')

## Prospect tab extension

![Prospect extension](img/prospect-extension.png 'Prospect extension launches from a tab on Prospect detail page')

## Opportunity tab extension

## Account tab extension

## Text editor extension

The text editor extension allows you to enhance the content of any Rich Text editor by adding your custom html as part of the message.

### Configuration

The text editor extension allows you to open your extension from the Rich Text Editor.

In the configuration, you need to provide the URL of you application running `extensibility-sdk`, that will be displayed in the iframe.

You can also submit the icon, which will be displayed in the toolbar. If you don't provide an icon here, the Application icon will be used.

Feel free to update the width and height of the window as needed.

Select extra scope parameters, which will be forwarded to your application in a form of query params, and over the `extensibility-sdk`.

![Text editor extension](img/editor-extension-1.png 'Text editor extension configuration')

### Usage

After installing your custom app, head to any email compose window. You should now see your application as part of the toolbar.

![Text editor extension](img/editor-extension-2.png 'Text editor extension in toolbar')

Click on the toolbar option and see your app open in a popup window in over editor.

![Text editor extension](img/editor-extension-3.png 'Text editor extension in toolbar')

### Building the extension itself

In our example, we're merely displaying an example domain. What you want to do instead is host a website which uses
our `extensibility-sdk` to communicate with the parent Outreach application.

### Enhancing the editor content

After [initializing](sdk.md#initializing-the-sdk) the `extensibility-sdk` client in your application, you will be able
to call the `extensibilitySdk.enhanceTextEditor` method, with 2 parameters, `html` and `subject`.

After calling this method, the popup will be closed and the string provided as `html` parameter will be inserted at the
current cursor position in the active text editor.

If the text editor supports subject field, you can pass the second parameter `subject` to replace the subject of your message.
