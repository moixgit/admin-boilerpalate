import React from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "../../../components/separator/Separator";
import DefaultAuth from "../../../layouts/auth/Default";
// Assets
import illustration from "../../../assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import logo from "../../../assets/logo/logo.svg";
import overlaybottom from "../../../assets/overlay/overlayBottom.png";
import useBoundStore from "../../../store/Store";
// Validation
import * as Yup from "yup";

function SignIn() {
  const { loginService, authLoading, user } = useBoundStore((state) => state);
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const [email, setEmail]= React.useState('');
  const [password, setPassword]= React.useState('');
  const [passwordError, setPasswordError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const handleClick = () => setShow(!show);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async () => {
    debugger
  console.log(email,password)
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      loginService(email, password);
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((err) => {
          if (err.path === "email") {
            setEmailError(err.message);
          } else if (err.path === "password") {
            setPasswordError(err.message);
          }
        });
      }
    }
  };
  
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        bg="white"
        maxW={{ base: "100%", lg: "500px", md: "500px", sm: "420px" }}
        w="100%"
        mx={{ base: "auto", lg: "auto" }}
         me="auto"
        borderRadius="20px"
        alignItems="center"
        justifyContent="center"
        // mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "40px" }}
        py={{ md: "40px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
        position="relative"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "auto" }}
          me="auto"
          mb={{ base: "auto", md: "auto" }}
          py={{ md: "10px", sm: "20px" }}
        >
          <img src={logo} width="173px" height="90px"></img>

          <Heading color={textColor} fontSize="30px" mb="10px" mt="20px">
            Login
          </Heading>

          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="custom"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="xaheen@1234.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              isInvalid={!!emailError}
              errorBorderColor="red.300" 
              onFocus={() => setEmailError(null)}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="********"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="custom"
                isInvalid={!!passwordError}
                errorBorderColor="red.300" 
                onFocus={() => setPasswordError(null)}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent="flex-end" align="center" mb="24px">
              <NavLink to="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </NavLink>
            </Flex>
            <Button
              fontSize="18px"
              variant="custom"
              fontWeight="500"
              w="100%"
              h="50"
              mb="20px"
              mt="20px"
              type="submit"
              onClick={() => handleLogin()}

            >
              Login
            </Button>
          </FormControl>
        </Flex>
      </Flex>

      {/* </div> */}
    </DefaultAuth>
  );
}

export default SignIn;
