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

// Query
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_SKILLS, QUERY_SKILLS_AND_USER } from "../../utils/queries";
import { UPDATE_USER } from '../../utils/mutations'

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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skillsToAdd, addUserSkill] = useState([]);
  const {data, loading, error } = useQuery(QUERY_SKILLS_AND_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const navigate = useNavigate();

  const handleChange = (event) => {
    addSkill((oldarray) => [...oldarray, event.target.value]);
    addUserSkill((prevarray) => [...prevarray, event.target.id]);
  };



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
  console.log (data)

  const submitSkills = async (event) => {
    event.preventDefault();
    console.log(skillsToAdd);
  
    try {
      const mutationResponse = await updateUser({
        variables: {
          skills: skillsToAdd,
          username: name,
          description: description
        }
      });
      
      navigate('/myprofile');
    

    } catch (err) {
      console.log(err);
    }
  }

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
          <textarea
            // value={name}
            style={styles.textareaStyle}
            name="name"
            onChange={handleInputChange}
            type="text"
            // placeholder="name"
            id="userform"
          >{data !== " " && data?.me.username}</textarea>
        </FormControl>
        <FormControl marginBottom=".9em">
          <FormLabel> Description: </FormLabel>
          <textarea
          // value={description}
            name="description"
            style={styles.textareaStyle}
            onChange={handleInputChange}
            rows="5"
            cols="40"
            form="usrform"
            // placeholder="enter description"
          >
            {data !== " " && data?.me.description}
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
              <ButtonGroup style={styles.buttonList} maxW="100%">
                {data !== " " && data?.skills.map((skill) => {
                  return (
                    <Button
                    bg="#A465FF"
                    color="white"
                    variant="solid"
                    onClick={handleChange}
                    key={skill._id}
                    id={skill._id}
                    value={skill.skillName}
                    border="3px solid #652CB3"
                    marginTop=".5em"
                  >{skill.skillName}</Button>
                  )
                })}
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
                    key={skill._id}
                  >
                    <TagLabel key={skill._id}>{skill}</TagLabel>
                    <TagCloseButton></TagCloseButton>
                  </Tag>
                );
              })}
            </div>
            <p>
                <Button
                  bg="#A465FF"
                  color="white"
                  variant="solid"
                  border="3px solid #652CB3"
                  onClick={submitSkills}
                >
                  <Heading as="h5" size="lg">
                    Finish Profile
                  </Heading>
                </Button>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
