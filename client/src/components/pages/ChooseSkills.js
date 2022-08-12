import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  flexbox,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

// Query
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_SKILLS, QUERY_ME, QUERY_SKILLS_AND_USER } from "../../utils/queries";

import { UPDATE_USER } from '../../utils/mutations'

export default function ChooseSkills() {
  const [userskills, addSkill] = useState([]);
  const [skillsToAdd, addUserSkill] = useState([]);
  const {data, loading, error } = useQuery(QUERY_SKILLS_AND_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const navigate = useNavigate();
 //resource for querying multiple queries: https://stackoverflow.com/questions/57568506/multiple-usequeries-in-a-single-component

    // const skillData = useQuery(QUERY_ALL_SKILLS);
    // const userData = useQuery(QUERY_ME);

    // const errors = skillData.error || userData.error;

    // const loading = skillData.loading && userData.loading;

  // const {data, loading} = useQuery(QUERY_ALL_SKILLS);

  const handleChange = (event) => {
    addSkill((oldarray) => [...oldarray, event.target.value]);
    addUserSkill((prevarray) => [...prevarray, event.target.id]);
  };


  const submitSkills = async (event) => {
    event.preventDefault();
    console.log(skillsToAdd);
  

    try {
      const mutationResponse = await updateUser({
        variables: {
          skills: skillsToAdd
        }
      });
      
      navigate('/myprofile');
    

    } catch (err) {
      console.log(err);
    }
  }


  // Styling
  const styles = {
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
  // Styling

  // if (userData.data?.me) {
  //   console.log("userData:", userData);
  //   console.log("skillData:", skillData);
  //   addSkill(userData.data.me.skills)
  // }

  return (
    <div>
      <Container maxW="100%">
        <Heading color="#652CB3" marginBottom=".5em">
          Let's Create Your Profile!
        </Heading>
        <Heading color="#EDDCFF" as="h3" size="lg" marginBottom=".5em">
          What are your skills?
        </Heading>

        {loading ? (<div> Loading...</div>) : 
          <div>
            <div style={styles.container}>
              <ButtonGroup style={styles.buttonList}>
                {data != " " && data?.skills.map((skill) => {
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
          </div>
          }
          <div style={styles.userList} className="userskills">
            {userskills.map((skill) => {
              return (
                <Tag
                  bg="#A465FF"
                  color="white"
                  border="3px solid #652CB3"
                  marginTop=".5em"
                  marginRight=".5em"
                  key ={skill._id}
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
      </Container>
    </div>
  );
}
