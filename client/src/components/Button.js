import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function Sbutton(props) {
  return (
    <Button colorScheme='purple'>{props.text}</Button>
  );
}