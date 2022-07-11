import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user-context";
import ChapterVersionService from "../../utils/ChapterVersionService";

const UpdateChapterVersionForm = () => {
  const defaultFormFields = {
    content: "",
    status: "",
  };

  const [formFields, setFormField] = useState(defaultFormFields);
  const { comment, status } = formFields;
  const { setCurrentUser } = useContext(UserContext);
  const chapterVersionData = {
    id: 1,
    content: "aaaaa",
  };
  const { id, content } = chapterVersionData;

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      ChapterVersionService.updateChapterVersion(id, comment, status);
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
      <h2> Please enter your comment </h2>
      <p>{content}</p>
      {/* Error! */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Label>Comments: </Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleChange}
            name="comment"
            value={comment}
            style={{ height: 300 }}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label>Status: </Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleChange}
            name="status"
            value={status}
          />
        </Form.Group>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateChapterVersionForm;
