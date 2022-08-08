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

const styles = {
  buttonlist: {
    background: "#e8eaf6",
    display: "flex",
    padding: "5px",
  },
};

export default function ChooseSkills() {
  const [userskills, addSkill] = useState([]);

  const handleChange = (event) => {
    addSkill((oldarray) => [...oldarray, event.target.value]);
  };

  return (
    <div>
      <Tag>Sample Tag</Tag>
      <h1>Let's Create Your Profile!</h1>
      <h1>What are your skills?</h1>
      <p>{userskills.join(", ")}</p>
      <ButtonGroup>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="HTML"
          >
            HTML
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="CSS"
          >
            CSS
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="JavaScript"
          >
            JavaScript
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="React"
          >
            React
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="Python"
          >
            Python
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            n
            onClick={handleChange}
            value="Node"
          >
            Node
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="SQL"
          >
            SQL
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="Angular"
          >
            Angular
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="MongoDB"
          >
            MongoDB
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="PHP"
          >
            PHP
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="Jira"
          >
            Jira
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="Java"
          >
            Java
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="C++"
          >
            C++
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="C#"
          >
            C#
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="Swift"
          >
            Swift
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="G0"
          >
            G0
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="Ruby"
          >
            Ruby
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleChange}
            value="TypeScript"
          >
            TypeScript
          </Button>
      </ButtonGroup>
      <p>
        <Link to="/myprofile">
          <button>Finish Profile</button>
        </Link>
      </p>
    </div>
  );
}
