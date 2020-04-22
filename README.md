### What is a Chrome Extension?
- According to the chrome extension docs:
  A small software that helps you customise your browsing experience.

### Manifest File Explained

#### What you definitely need
1. These are required
- You'll need a name
- Manifest version
- Version of your extension

2. These are recommended and important
- Icons
- A description for your extension
- default_locale

3. These are optional and in some cases important

- Author
- Permissions
- Commands
- Content Security Policy: This could be very important for your extension and would be best to define.

#### Permissions

- Depending on the actions you need your extension to take, you will need certain browser access permissions such as:
access to tabs, notifications, cookies
- These are also specified in the manifest file


### Background File Explained
- As per the docs
  ~Effective background scripts stay dormant until an event they are listening for fires, react with specified instructions, then unload.~
- You can have several of these depending on how you modularize your code.

### Content File Explained
- Contains the content and logic of your extension.
- Here you define rules for when your extension gets activated.


#### Publishing an Extension
- The guide for this is available in the docs [here](https://developer.chrome.com/webstore/publish)
