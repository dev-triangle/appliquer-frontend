import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Editprofileform() {
    const handleSubmit=()=>{}
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Name *"
            name="name"
            value={name}
            onChange = { (e) => onInputChange(e)}
            required
        />
    </Form.Group>
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Email *"
            name="skills"
            value={email}
            onChange = { (e) => onInputChange(e)}
            required
        />
    </Form.Group>
    
   
    <Form.Group>
        <Form.Control
            as="textarea"
            placeholder="Address"
            rows={3}
            name="address"
            value={address}
            onChange = { (e) => onInputChange(e)}
        />
    </Form.Group>
    <Form.Group>
        <Form.Control
            as="textarea"
            type="text"
            rows={3}
            placeholder="Phone"
            name="Experience"
            value={phone}
            onChange = { (e) => onInputChange(e)}
        />
    </Form.Group>
    <Form.Group>
    <Form.Control
        type="text"
        placeholder="Email *"
        name="projects"
        value={email}
        onChange = { (e) => onInputChange(e)}
        required
    />
</Form.Group>
<Form.Group>
<Form.Control
    type="text"
    placeholder="Email *"
    name="Description"
    value={email}
    onChange = { (e) => onInputChange(e)}
    required
/>
</Form.Group>

    <Button variant="success" type="submit" block>
        Add New Employee
    </Button>
</Form>

  );
}

export default Editprofileform;