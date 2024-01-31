import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "../../../components/icons/Icons";
import { HSeparator } from "../../../components/separator/Separator";
import brand from "../../../assets/logo/brand.svg"

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <img src={brand}></img>
     
    </Flex>
  );
}

export default SidebarBrand;
