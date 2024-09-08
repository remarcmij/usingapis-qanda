# GitHub Example App

This example application demonstrates how to access an API from a front-end application and how you might handle errors in a user-friendly way. It also implements a loading indicator that is shown while data is being fetched from the API.

## 1. Folder Structure

The folder structure as used in this repo is similar to the one used during the Browsers Project and is as follows:

```text
public\
src\
└── pages\
└── util\
└── views\
└── app.js
└── constants.js
index.html
```

## 2. The Page/View/State Model

Figure 1 below gives a high-level overview of the core application architecture used throughout this demo app. We will refer to it as the **Page/View/State Model**. In its simplest form, an application following this architecture is made up of a Page object, a View object and a state object. All three objects are regular JavaScript objects.

![page-view-state-model](../assets/page-view-state-model.png)<br>
Figure 1: **The Page / View / State Model**

### 2.1. Application State Object

In the application `state` object all data that our application uses is held. This includes data fetched from an API, error information, user input, etc. This `state` object is shuttled between pages and updated within pages with results from fetches, user input, etc.

### 2.2. Page Object

A `page` object is created by calling a Page Factory function. In this sample application there are two pages and two corresponding factory functions:

| File                     | Page Factory Function |
| ------------------------ | --------------------- |
| `src/pages/reposPage.js` | `createReposPage()`   |
| `src/pages/errorPage.js` | `createErrorPage()`   |

A `page` object returned by a Page Factory Function should include a `root` property that holds root element of an HTML subtree that constitutes the HTML structure for the page. When the page is loaded this root element is appended to the `<div>` element with `id="page-root"` in the `index.html` file.

The general structure of a Page Factory Function is as follows:

```js
export function createXXXPage(state) {
  const onXXX = (e) => {
    // Handle the event initiated from an element of the HTML subtree of this
    // page.
    ...
  };

  // Call the View Factory Function for this page, optionally passing event
  // handlers.
  const xxxView = createXXXView({ onXXX });

  // Add code to update the View as needed here

  // Return the object returned by the View Factory Function. This is assumed
  // to includethe required `.root` property.
  return xxxView;
}
```

#### 2.2.1 Loading a Page

Loading a page is done by calling the `loadPage()` function exported by the `src/util/loadPage.js` file, reproduced below:

```js
export function loadPage(pageFactoryFn, state) {
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = '';
  const page = pageFactoryFn(state);
  appRoot.appendChild(page.root);
}
```

As you can see, the `loadPage()` function takes two parameters, a Page Factory Function and a `state` object. This is what happens when `loadPage()` is called:

1. It gets a reference to the `<div>` with `id="app-root` hard-coded in the `index.html` file.
2. It clears out the previous `innerHTML` content from a previous page (if any).
3. It calls the Page Factory Function that was passed as its first parameter and passes the `state` object from the second parameter to the page factory function. The function is expected to return a JavaScript object that includes the `.root` property mentioned previously.
4. It appends the HTML subtree represented by the `.root` property to `<div id="app-root">`. This effectively "mounts" the page in the DOM.

### 2.3 View Object

A Page Factory Function is not responsible for creating the HTML subtree for the page. This task is handed off to a View Factory Function:

| File                     | View factory function |
| ------------------------ | --------------------- |
| `src/views/reposView.js` | `createReposView()`   |
| `src/views/errorView.js` | `createErrorView()`   |

The general structure of a View Factory Function would look like this:

```js
export function createXXXView(props) {
  // Create the root element for the HTML subtree
  const root = document.createElement('div');

  // If needed for styling, add a CSS class name to the root element
  root.className = '...';

  // Create the innerHTML content
  root.innerHTML = String.raw`
    ...
  `;

  // Get references to HTML elements in the HTML subtree that you want to
  // manipulate dynamically or to which you want to attach event listeners.
  const xxx = root.querySelector('...');


  // Example: adding an event handler that is passed as a parameter from
  // the page factory function
  xxx.addEventListener('some-event', props.someHandler);

  // Embedded update() function that has access to the HTML subtree and that
  // can update the subtree as required from the `state` object passed to it.
  const update = (state) => {
    ...
  };

  // Return the View object, with the root element of the HTML subtree
  // and the embedded `update()` function.
  return { root, update };
}
```

## 2.4 Updating the `state` object

It is customary to update the `state` object by creating a new `state` object derived from the current state object, rather than by mutating the properties of an existing state directly. You will see this technique a lot later during the React module. Here is an example:

```js
state = { ...state, loading: true };
```

A new object is created by spreading out the existing state into that object and then explicitly adding or overwriting properties. In this example the `loading` property will be overwritten if it exists already; otherwise it will be added to the new state object.

## 2.5 Error Handling and Load Indicator

The comments in the following code snippet taken from the `createReposPage()` function demonstrates how the `state` object can be used to "control" the behaviour of the application during network requests.

```js
try {
  // Update the View so that a loading indicator is shown while
  // data is being fetched.
  state = { ...state, error: null, loading: true, repos: null };
  reposView.update(state);

  const url = `${API_BASE_URL}/orgs/${state.organization}/repos?per_page=100`;
  const repos = await fetchData(url);
  repos.sort((a, b) => a.name.localeCompare(b.name));

  // Update the View to hide the loading indicator and update the View
  // with the fetched data.
  state = { ...state, repos, loading: false };
  reposView.update(state);
} catch (error) {
  // Update the state with the error information and load the Error Page
  state = { ...state, error, loading: false };
  loadPage(createErrorPage, state);
}
```
