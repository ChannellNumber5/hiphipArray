import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// Components
import Card from "../components/Card";

// Card Stuff
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
import imageplaceholder from "../assets/imageplaceholder.png";

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

const ToggleBar = ({ users }) => {
  if (!users.length) {
    return <h3>No Arrayers Yet</h3>;
  }

  return (
    <div>
      <Tabs isFitted variant="unstyled" colorScheme="#EDDCFF" size="lg">
        <TabList mb="1em">
          <Tab
            _selected={{
              color: "652CB3",
              fontWeight: "bold",
              bg: "#EDDCFF",
              borderRight: "2px solid #652CB3",
              borderBottom: "2px solid #652CB3",
            }}
          >
            Find Projects
          </Tab>
          <Tab
            _selected={{
              color: "652CB3",
              fontWeight: "bold",
              bg: "#EDDCFF",
              borderLeft: "2px solid #652CB3",
              borderBottom: "2px solid #652CB3",
            }}
          >
            Find Arrayers
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Make This An Array */}
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            {/* Make This An Array */}
          </TabPanel>

          <TabPanel>
            {users &&
              users.map((user) => (
                <Container maxW="1000px" key={user._id}>
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
                      <Box display="flex" alignItems="baseline"></Box>

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
                          {user != "" &&
                            user.skills.map((skill) => {
                              return (
                                <Tag
                                  bg="#A465FF"
                                  color="white"
                                  border="3px solid #652CB3"
                                  marginRight=".5em"
                                  key={skill._id}
                                >
                                  <TagLabel>{skill.skillName}</TagLabel>
                                </Tag>
                              );
                            })}
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </Container>
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ToggleBar;
