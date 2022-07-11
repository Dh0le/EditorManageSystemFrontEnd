import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user-context";
import ChapterVersionService from "../../utils/ChapterVersionService";

const CreateChapterVersionForm = ({ chapterId }) => {
  const defaultFormFields = {
    content: "",
    comment: "aaa",
  };

  const [formFields, setFormField] = useState(defaultFormFields);
  const { content, comment } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      ChapterVersionService.createChapterVersion(22, content);
    } catch (error) {
      alert(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <div>
      {comment !== "" && (
        <div>
          <h2> Comments from editor: </h2>
          <h4>{comment}</h4>
        </div>
      )}
      <h2> Please enter chapter content </h2>
      {/* Error! */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Label>Content: </Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleChange}
            name="content"
            value={content}
            style={{ height: 300 }}
          />
        </Form.Group>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateChapterVersionForm;
