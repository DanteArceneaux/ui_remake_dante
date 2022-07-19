import Nav from 'react-bootstrap/Nav';

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default StackedExample;