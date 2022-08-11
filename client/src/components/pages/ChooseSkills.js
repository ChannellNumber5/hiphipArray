import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SKILLS } from "../../utils/queries";

export default function ChooseSkills() {
  const [userskills, addSkill] = useState([]);
  const {data, loading} = useQuery(QUERY_ALL_SKILLS);

  const handleChange = (event) => {
    addSkill((oldarray) => [...oldarray, event.target.value]);
  };

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

  return (
    <div>
      <Container maxW="100%">
        <Heading color="#652CB3" marginBottom=".5em">
          Let's Create Your Profile!
        </Heading>
        <Heading color="#EDDCFF" as="h3" size="lg" marginBottom=".5em">
          What are your skills?
        </Heading>

        {loading ? (<div>Loading...</div>) : 
          <div>
            {console.log(data)}
            <div style={styles.container}>
              <ButtonGroup style={styles.buttonList}>
                {data != " " && data.skills.map((skill) => {
                  return (
                    <Button
                    bg="#A465FF"
                    color="white"
                    variant="solid"
                    onClick={handleChange}
                    key={skill._id}
                    value={skill.skillName}
                    border="3px solid #652CB3"
                    marginTop=".5em"
                  >{skill.skillName}</Button>
                  )
                })}
            </ButtonGroup>
          </div>
          </div>
          }
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
      </Container>
    </div>
  );
}
