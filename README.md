# GB UI

This repository contains the open source GB UI React components library

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)🚀 and uses [Styled Components](https://styled-components.com/docs)🌟

For more documentation go [here](https://app.gitbook.com/@dsmorais/s/gb-ui/)

# Starting the project

First install all the dependencies using `yarn install-all`
## `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---
# Adding Components
## Component implementation guidelines

Keep in mind that this is supposed to be a library with the generic components with shared properties. So try to abstract as much as possible and use props to render different UI accross website/backoffice.
Here are some simple guidelines to follow when implementing components for this library
- Place the component inside the Components directory and import it to the *index.js* file.
- Components should be as dynamic as possible, everything that assumes that we have external data, should be converted into props.
- Try to refactor as much as possible in order to use our own **Layout** and **Text** components.
- Don't worry about nesting CSS properties, that's what styled-components are for.
- Convert any traces of polyglot into a translate function that shall be passed via props.
## Showcase

If you run `yarn start` you will be able to see some components which have already been tweaked and are ready for cross-project use.

The playground is simply ReactRouter's `<Switch>` rendering the different components. In order to add your component(s), simply go to the `showcase.js` file and add items to the `components` variable, which is the first declared variable in that file, after imports.

### Preview Props
Preview props are set on the `components` variable.
```javascript
{
  label: String // Label for the component in the sidebar,
  disabled: Boolean // duh
  section: String // Sidebar Section to place this component in
  component: Func(props) // render the component and pass props as parameters
  props: Object | Array // if an object, will render a single filed with it. If array, will render 1 compoent per array item passing that array item as props.
  props.item.previewComponentTitle: String // Title for the component with `item` set of props
  props.item.previewComponentOpen: Boolean // Expand or collapse this item component
}
```

### Committing and deploying changes

When commiting in master, a pre-commit hook will comnpile your changes and update the `dist` directory.

**Make sure the dist folder is also pushed by running `git status`**
