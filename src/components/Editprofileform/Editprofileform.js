import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

function Editprofileform() {

    const [name,setName] =useState("");
    const [skills,setSkills]=useState("");
    const [experience,setExperience]=useState([]);
    const [project,setProject]=useState([]);
    const [description,setDescription]=useState("");


    const handleSubmit=()=>{}
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Name *"
            name="name"
            value={name}
           onChange = { (e) => setName(e.target.value)}
            required
        />
    </Form.Group>
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Email *"
            name="skills"
           value={skills}
           onChange = { (e) => setSkills(e.target.value)}
            required
        />
    </Form.Group>
    
   
    <Form.Group>
        <Form.Control
            as="textarea"
            placeholder="Address"
            rows={3}
            name="address"
          //  value={address}
         //   onChange = { (e) => onInputChange(e)}
        />
    </Form.Group>
    <Form.Group>
        <Form.Control
            as="textarea"
            type="text"
            rows={3}
            placeholder="Phone"
            name="Experience"
           value={experience}
            onChange = { (e) => setExperience(e.target.value)}
        />
    </Form.Group>
    <Form.Group>
    <Form.Control
        type="text"
        placeholder="Email *"
        name="projects"
        value={project}
        onChange = { (e) => setProject(e.target.value)}
        required
    />
</Form.Group>
<Form.Group>
<Form.Control
    type="text"
    placeholder="Email *"
    name="Description"
    value={description}
    onChange = { (e) => setDescription(e.target.value)}
    required
/>
</Form.Group>

    <Button variant="success" type="submit" block>
        Save Changes
    </Button>
</Form>

  );
}

export default Editprofileform;