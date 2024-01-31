// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Footer from "../../components/footer/FooterAuth";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
// Custom components
import { NavLink } from "react-router-dom";
// Assets
import { FaChevronLeft } from "react-icons/fa";
import overlaybottom from "../../assets/overlay/overlayBottom.png";
import overlaytop from "../../assets/overlay/overlayTop.png";

function AuthIllustration(props) {
  const { children } = props;
  // Chakra color mode
  return (
    <Flex position="relative" h="max-content">
      <Flex
        h="100vh"
        w="100%"
         maxW={{ md: "66%", lg: "1313px" }}
        mx="auto"
        pt={{ sm: "50px", md: "0px" }}
        // px={{ lg: "30px", xl: "0px" }}
        // ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column"
      >
        {children}
        <img
          src={overlaytop}
          style={{
            display: { base: "none", md: "none", sm: "none" },
            position: "absolute",
            top: "-60px",
            right: "-100px",
            width: "25%",
            zIndex: "1",
          }}
          alt="Overlay Top"
        />
        <img
          src={overlaybottom}
          style={{
            display: { base: "block", md: "none", sm: "none" },

            position: "absolute",
            bottom: "0",
            left: "0",
            width: "20%",
            zIndex: "1",
          }}
          alt="Overlay Bottom"
        />
      </Flex>
    </Flex>
  );
}
// PROPS

AuthIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default AuthIllustration;
