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

  const inputHandler = (e) => {
    setNewMeal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (e) => {
    let error = "";
    error = errorCheck(e.target.value);
    console.log("ERRROR", error)
    if (error !== "no error") {
      setFormError(error)
    }
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
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMeal;
