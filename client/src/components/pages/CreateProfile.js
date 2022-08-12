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
import { Container } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  flexbox,
} from "@chakra-ui/react";

// Query
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SKILLS } from "../../utils/queries";

const styles = {
  textareaStyle: {
    border: "2px solid #652CB3",
  },
  buttonList: {
    marginBottom: ".9em",
    flexDirection: "row",
    flexWrap: "wrap",

    // justifyContent: "space-evenly",
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

export default function CreateProfile() {
  const [userskills, addSkill] = useState([]);

  const handleChange = (event) => {
    addSkill((oldarray) => [...oldarray, event.target.value]);
  };

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
          Let's Create Your Profile!
        </Heading>
        <Heading color="#EDDCFF" as="h3" size="lg" marginBottom=".5em">
          Account Info
        </Heading>
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
        <FormControl marginBottom=".9em">
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
        {/* <p>
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
        </p> */}
      </Container>

      {/* choose skills */}
      <div>
        <Container maxW="1000px">
          {/* <Heading color="#652CB3" marginBottom=".5em">
            Let's Create Your Profile!
          </Heading> */}
          <Heading color="#EDDCFF" as="h3" size="lg" marginBottom=".5em">
            What are your skills?
          </Heading>
          <div>
            <div style={styles.container}>
              <ButtonGroup style={styles.buttonList} maxW="55%">
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="HTML"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                ></Button>
                {/* <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="HTML"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  HTML
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  onClick={handleChange}
                  value="CSS"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  CSS
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="JavaScript"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  JavaScript
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="React"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  React
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="Python"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Python
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  n
                  onClick={handleChange}
                  value="Node"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Node
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="SQL"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  SQL
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="Angular"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Angular
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="MongoDB"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  MongoDB
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="PHP"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  PHP
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="Jira"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Jira
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="Java"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Java
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="C++"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  C++
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="C#"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  C#
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="Swift"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Swift
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="G0"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  G0
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="Ruby"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  Ruby
                </Button>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  onClick={handleChange}
                  value="TypeScript"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                >
                  TypeScript
                </Button> */}
              </ButtonGroup>
            </div>

            <div style={styles.userList} className="userskills">
              {userskills.map((skill) => {
                return (
                  <Tag
                    bg="#A465FF"
                    color="white"
                    border="3px solid #652CB3"
                    marginTop=".5em"
                    marginRight=".5em"
                  >
                    <TagLabel>{skill}</TagLabel>
                    <TagCloseButton></TagCloseButton>
                  </Tag>
                );
              })}
            </div>
            <p>
              <Link to="/myprofile">
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  border="3px solid #652CB3"
                >
                  <Heading as="h5" size="lg">
                    Finish Profile
                  </Heading>
                </Button>
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
