import React from 'react';
import { Accordion } from 'react-bootstrap';

const Theory = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center fw-bold mb-3'>Theory Part</h1>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header className='fw-bold'>How React Works</Accordion.Header>
    <Accordion.Body className='fw-bold'>
    React is a JavaScript library for building user interfaces. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.React creates a Virtual DOM in the memory Which is basically a JavaScript Object that repreesent the browser DOM,Its much more faster Than the Browser Dom.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.Reacts Diffing Algorithm is used to compare the Virtual Dom when something is changed, React goes to the actual DOM and updates the node that was updated in the virtual DOM.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Props VS State</Accordion.Header>
    <Accordion.Body className='fw-bold'>
    Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.Props can be used with state and functional components.The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.State can be used only with the state components/class component
    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
    <Accordion.Header>How UseState Works</Accordion.Header>
    <Accordion.Body className='fw-bold'>
    useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.when user intareact with the browser and we want to show something then we use useState.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Theory;