import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { errorCheck } from "../../services/validate";
import "./AddMeal.css";

const AddMeal = () => {
  const [form] = Form.useForm();

  const [newMeal, setNewMeal] = useState({
    strMeal: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strMealThumb: "",
  });

  const [formError, setFormError] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const inputHandler = (e) => {
    setNewMeal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (e) => {
    let error = errorCheck(e.target.value);
    setFormError(error);
  };

  const createNewMeal = () => {
    if (formError === "ok") {
      JSON.stringify(newMeal);
      setFeedbackMessage("Your meal has been created");
    } else setFeedbackMessage(formError);
  };

  return (
    <div className="mealsForm">
      <Form form={form} layout="vertical" requiredMark="optional">
        <Form.Item label="Name" required tooltip="Please write the meal's name">
          <Input
            type="text"
            name="strMeal"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item
          label="Category"
          required
          tooltip="Please write the meal's category"
        >
          <Input
            type="text"
            name="strCategory"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item
          label="Area"
          required
          tooltip="Please write where this meal is from"
        >
          <Input
            type="text"
            name="strArea"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item
          label="Instructions"
          required
          tooltip="Please write the meal's cook instructions "
        >
          <Input
            type="text"
            name="strInstructions"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item
          label="Image"
          required
          tooltip="Please write the meal's Image url"
        >
          <Input
            type="text"
            name="strMealThumb"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={() => createNewMeal()} type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span
        className={
          feedbackMessage === "Your meal has been created"
            ? "feedbackMessageSuccess"
            : "feedbackMessageError"
        }
      >
        {" "}
        {feedbackMessage ? feedbackMessage : null}
      </span>
    </div>
  );
};

export default AddMeal;
