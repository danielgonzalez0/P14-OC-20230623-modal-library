<p align="center">
<img src="https://img.shields.io/badge/NPM-Published-crimson?style=for-the-badge&logo=npm">
<img src="https://img.shields.io/badge/Create%20with-React-blue?style=for-the-badge&logo=react">
</p>


# modal-library

NPM package made with create-react-app

## Description

react component for displaying a modal in full screen mode. 
The modal contains: 
- a close button
- a title
- content (which can be text or a component)

style can be customised using props

## Install

```bash
npm install --save react-modal-library
```

## Documentation

After installing the package on your dependencies, import the library in your parent component.

### importation

```jsx
import { Modal } from 'react-modal-library';
```

### Setup the state to open / close the modal in your parent component

- import useState from react
- create the state with useState => it will be a boolean with false by default

```jsx
 const [isOpen, setIsOpen] = useState(false);
 ```

### modal implementation

```jsx
<Modal
  close={() => setIsOpen(false)}
  show={isOpen}
  title={'Selected employee:'}
  content={<Content/>}
  }}
/>
```

### Props Description

- Close (required): handle the modal closing. the props is must receive a function where you pass the setter to false 
- show (required) : handle the modal opening. the props must receive the state value of the getter (isOpen)
- title(required): contain the modal title 
- content(required): contain the modal content. It could be a string or an object


- customClassName: 
There is a default style for the modal but you can customize it. Create your own css style and add the class names to the prop "customClassName". 
"customClassName" is an object where you can pass class names for following parts of the modal: 
- the modal container
-  the closing button
- the title
- the content

```jsx
customClassName={{
  closeBtn: 'custom-btn',
  modal: 'custom-modal',
  title: 'custom-title',
  content: 'custom-modal-content',
}}
```


#### Simple Example

```jsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-library';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <p>click to show Modal</p>
        <button onClick={() => setIsOpen(true)} className="btn">
          Show modal
        </button>
        <Modal
          close={() => setIsOpen(false)}
          show={isOpen}
          title={'Selected employee:'}
          content={'John McLane'}
          }}
        />
      </div>
    </>
  );
};

export default App;
```

#### Example with object for content and a custom style


```jsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-library';
import Content from './Content';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <p>click to show Modal</p>
        <button onClick={() => setIsOpen(true)} className="btn">
          Show modal
        </button>
        <Modal
          close={() => setIsOpen(false)}
          show={isOpen}
          title={'Selected employee:'}
          content={<Content/>}
          customClassName={{
            closeBtn: 'custom-btn',
            modal: 'custom-modal',
            title: 'custom-title',
            content: 'custom-modal-content',
          }}
        />
      </div>
    </>
  );
};

export default App;
```

## License

© [Daniel Gonzalez](https://github.com/danielgonzalez0)
