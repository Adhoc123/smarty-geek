import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

function AllCollapseExample() {
  return (
    <Accordion className='accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='header'>How does Context API works?</Accordion.Header>
        <Accordion.Body>
        React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='header'>What is the purpose of react router?</Accordion.Header>
        <Accordion.Body>
        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='header'>What is useRef?</Accordion.Header>
        <Accordion.Body>
        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0). The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;