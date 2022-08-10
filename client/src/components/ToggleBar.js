import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// Components
import Card from "../components/Card";

export default function ToggleBar() {
  return (
    <div>
      <Tabs isFitted variant="unstyled" colorScheme="#EDDCFF" size="lg">
        <TabList mb="1em">
          <Tab
            _selected={{
              color: "652CB3", //"652CB3",
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
            {/* Make This An Array */}
            <Card></Card>
            <Card></Card>
            {/* Make This An Array */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
