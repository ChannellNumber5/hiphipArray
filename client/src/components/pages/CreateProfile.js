import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const styles = {
  textareaStyle: {
    border: "2px solid purple",
  },
};

export default function CreateProfile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "description") {
      setDescription(inputValue);
    }
  };

  return (
    <div>
      <Heading color="#652CB3">Let's Create Your Profile!</Heading>
      <br></br>
      <Heading color="#EDDCFF" as="h3" size="lg">
        Account Info
      </Heading>
      <br></br>
      <FormControl>
        <FormLabel> Name: </FormLabel>
        <input
          value={name}
          style={styles.textareaStyle}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          id="userform"
        />
      </FormControl>
      <FormControl>
        <FormLabel> Description: </FormLabel>
        <textarea
          name="comment"
          style={styles.textareaStyle}
          rows="5"
          cols="40"
          form="usrform"
        >
          Enter text here...
        </textarea>
      </FormControl>
      <p>
        <Link to="/chooseskills">
          <Button
            bg="#A465FF"
            color="white"
            variant="solid"
            border="3px solid #652CB3"
          >
            Choose my skills
          </Button>
        </Link>
      </p>
    </div>
  );
}
