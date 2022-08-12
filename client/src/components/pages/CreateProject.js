import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  flexbox,
} from "@chakra-ui/react";

const styles = {
  textareaStyle: {
    border: "2px solid #652CB3",
  },
  buttonList: {
    marginBottom: ".9em",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: ".9em",
    marginBottom: ".9em",
  },
  container: { display: "flex", flexDirection: "column" },
};

export default function CreateProject() {
  const navigate = useNavigate();

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
      <Container maxW="1000px">
        <Heading color="#652CB3" marginBottom=".5em">
          Let's Create Your Project!
        </Heading>
        <Heading color="#EDDCFF" as="h3" size="lg" marginBottom=".5em">
          Project Info
        </Heading>
        <FormControl>
          <FormLabel> Project Name: </FormLabel>
          <input
            value={name}
            style={styles.textareaStyle}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </FormControl>
        <FormControl marginBottom=".9em">
          <FormLabel> Project Description: </FormLabel>
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
      </Container>
      <div>
        <Container maxW="1000px">
          <Heading color="#EDDCFF" as="h3" size="lg" marginBottom=".5em">
            What Skills Are You Looking For?
          </Heading>
          <p>
            <Button
              bg="#A465FF"
              color="white"
              variant="solid"
              border="3px solid #652CB3"
            >
              <Heading as="h5" size="lg">
                Create Project
              </Heading>
            </Button>
          </p>
        </Container>
      </div>
    </div>
  );
}
