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
    React is a JavaScript library for building user interfaces. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.React creates a Virtual DOM in the memory Which is basically a JavaScript Object that repreesent the browser DOM,Its much more faster Than the Browser Dom.It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. Reacts Diffing Algorithm is used to compare the Virtual Dom when something is changed, React goes to the actual DOM and updates the node that was updated in the virtual DOM.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Props VS State</Accordion.Header>
    <Accordion.Body className='fw-bold'>
    Props are JavaScript Object which also known as properties.Props are used to pass data from one component to another componenet.Props can not be modified,read only and immutable. And State is also JavaScript Object which data is passed within the component only.States are used to manage the internal environment of a component means the data changes inside the component.State is both read and write and can be modified.State is local to the component it can not be passed to other component.
    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
    <Accordion.Header>How UseState Works</Accordion.Header>
    <Accordion.Body className='fw-bold'>
    UseState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value.When use change something in browser and we want to reaction with this changes that use useState.The useState() hook can be used to keep track of strings, numbers, booleans, arrays, objects etc which give us freedom to make complex user interfaces easily.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Theory;