import  React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  flexbox,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import imageplaceholder from "../../assets/imageplaceholder.png";

const styles = {
  container: {
    display: "flex",
    maxWidth: "750px",
  },
  imageHolder: {
    flex: ".25",
  },
  nameContainer: {
    flex: ".75",
    borderWidth: "2px",
    borderColor: "#652CB3",
  },
};

export default function Profile() {
  const [user, setUser] = useState("");
  const { data, loading } = useQuery(QUERY_ME);

  useEffect(() => {
    if (data) {
    setUser(data.me);
    }
  }, [!loading]);
    
  return (
    <div>
      {/* {user ? ( 
        <>
      <h1>{user.username}'s Profile</h1>
      <h2>Your Skills</h2>
      {user.skills.map((skill) => (
        <div key={skill._id}>
          <h3>{skill.skillName}</h3>
        </div>
      ))}
      </>
      ): 
      <div> Loading... </div>} */}
      <Container maxW="1000px">
        <Heading color="#652CB3">My Profile</Heading>
        <div style={styles.container}>
          <Box style={styles.imageHolder}>
            <img src={imageplaceholder} />
          </Box>
          <Box
            style={styles.nameContainer}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
          {loading ? (
            <Box display="flex" alignItems="baseline">
            <Box
              color="purple"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="m"
              ml="2"
              mb="4"
            >
              <Heading color="#652CB3">Loading...</Heading>
            </Box>
          </Box>
            ) : 
            <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Box
                color="purple"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="m"
                ml="2"
                mb="4"
              >
                <Heading color="#652CB3">{user.username}</Heading>
              </Box>
            </Box>

            <Box as="h3" size="lg" ml="2">
              <Heading color="#652CB3" as="h3" size="lg" mb="2">
                My Skills
              </Heading> 
              {user != '' && user.skills.map((skill) => {
                return(
                <Tag
                  bg="#A465FF"
                  color="white"
                  border="3px solid #652CB3"
                  marginRight=".5em"
                  key = {skill._id}
                >
                  <TagLabel>{skill.skillName}</TagLabel>
                </Tag>
              )
              })}
              {/* <Tag
                bg="#A465FF"
                color="white"
                border="3px solid #652CB3"
                marginRight=".5em"
              >
                <TagLabel>Sample Skill</TagLabel>
              </Tag> */}
            </Box>
          </Box>
          }
          </Box>
        </div>
      </Container>
    </div>
  );
}
