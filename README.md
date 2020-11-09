# 55+ UI Kit

This repository contains the shared components between the 55+ project Landing Page + Backoffice

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)🚀 and uses [Styled Components](https://styled-components.com/docs)🌟

In the project directory, you can run:

# Starting the project
## `yarn start`
> Note: you need to change your project's package.json's "peerDependencies" to "dependencies"

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


> Note: you need to change your project's package.json's "dependencies" to "peerDependencies" for the first time you run `yarn install`

## **IMPORTANT**
### 👉  Before committing, make sure `react`, `react-dom` and `styled-components` are set as peerDependencies 👈
---
# Adding Components
## Component implementation guidelines

Keep in mind that this is supposed to be a library with the generic components with shared properties. So try to abstract as much as possible and use props to render different UI accross website/backoffice.
Here are some simple guidelines to follow when implementing components for this library
- Place the component inside the Components directory and import it to the *index.js* file.
- Components should be as dynamic as possible, everything that assumes that we have 55+ data, should be converted into props.
- Try to refactor as much as possible in order to use our own **Layout** and **Text** components.
- Don't worry about nesting CSS properties, that's what styled-components are for.
- Convert any traces of polyglot into a translate function that shall be passed via props.
## Playground

If you run `yarn start` you will be able to see some components which have already been tweaked and are ready for cross-project use.

The playground is simply ReactRouter's `<Switch>` rendering the different components. In order to add your component(s), simply go to the `router.js` file and add items to the `components` variable, which is the first declared variable in that file, after imports.

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
In order to *deploy*, one simply needs to push the repo to master branch and do `yarn upgrade ui-55` in the projects this repo is being used.

When pushing to master, a pre-push hook will comnpile your changes and update the `dist` directory.

This pre-push hook also attempts to create and push a commit automatically with the compiled changes. **Make sure they are also pushed by running `git status`**

## Form
### Schema Rules ⭐️

- All dependencies and nested items need keys to be rendered.
- Options of dropdowns or radio button sets should be always be arrays {label: String, value: String | Number}
- Labels should be set as translation keys.
- If labels are not meant to be shown, they should be sent as  an empty string, otherwise, label will fallback to the provided key.
- "groupBy: Number" is now supported, and will group child fields accordingly. By default, child groups are grouped in two
- **Children should be an array of dependent fields**👇

### `dependencyValue`  & `dependencyType`

Dependent values should always be nested underneath children. dependencyType and dependencyValue properties are now supported for children.

*If dependencyType is not provided to children, they will always render.*

- `dependecyType` = `value` 👉 will look for its parent value and will only render if `dependecyValue` matches it
- `dependecyType` = `value-count` 👉 renders as many fields as the value of its parent.
- `dependencyType` = `value-includes` 👉 only renders the field if its parent value includes

### Nested Fields

In order to  achieve several layout types,  there are other properties that are effectively children, but use a different API and can cause unexpected behavior

- type: 'object' 👉 will render a form, so it expects its fields to be  passed as questions.
- widget: 'add-field' 👉 will render a row of fields based on the  of rows based on its value count,  differs from 'value-count' dependencyType because it has a counter to increase and remove its count. It expects its fields to be passed as fields
- widget: 'district' will render two questions based on the object in `DISTRICT_PARISHES.js`. (Ideally, the parishes object would be passed to `<Form>` Component props)
**Custom widgets should be specified as widget field**

### Form PropTypes
```jsx

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  translate: PropTypes.func,
  submitLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  backgroundColor: PropTypes.string,
  fieldsWidgets: PropTypes.object,
  questions: PropTypes.arrayOf(
    // * Fields
    PropTypes.shape({
      type: PropTypes.oneOf(
        'dropdown',
        'form',
        'text',
        'date',
        'radio',
        'footnote',
        'array',
        'text-area',
        'tabs'
      ).isRequired,
      key: PropTypes.string.isRequired,
      // ! To be replaced with label/translate on key 👇
      question: PropTypes.string,
      widget: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
        })
      ),
      children: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          widget: PropTypes.string,
          dependencyType: PropTypes.oneOf('value', 'value-count', 'value-includes'),
          dependencyValue: PropTypes.string,
          key: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string,
              value: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
            })
          )
        })
      )
    })
  )
};

## WIP / TODOs
- Write documentation for all widgets available
- Write documentation for Layout components usage
- Move playground logic from router.js
- Create playground pages for other components
```
