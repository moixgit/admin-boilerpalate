/* eslint-disable react/prop-types */
// Chakra imports
// Chakra imports
import {
  Flex,
  useColorModeValue,
  Text,
  Divider,
  HStack,
  VStack,
} from '@chakra-ui/react';
// Custom components
import React from 'react';
import Card from './Card';
// Custom icons

export default function Default(props) {
  // eslint-disable-next-line react/prop-types
  const { startContent, name, fields } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const timeColor = useColorModeValue('red.600', 'white');

  return (
    <Card py="10px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: 'start', xl: 'start' }}
        justify={{ base: 'flex-start', xl: 'center' }}
        flexDirection="column"
      >
        <Flex align="center" mb={2}>
          {startContent}
          <Text
            ml={10}
            fontSize="21px"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {name}
          </Text>
        </Flex>
        <Divider />

        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="space-between"
          pt="20px"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            gap="10px"
          >
            <HStack display="flex" justifyContent="space-between">
              <Text
                color="black"
                fontSize={{ base: '18px' }}
                fontWeight="semibold"
                mb={1}
              >
                Disponibili
              </Text>
              <Text color={textColor}>{fields[0].available}</Text>
            </HStack>
            <HStack display="flex" justifyContent="space-between">
              <Text
                color="black"
                fontSize={{ base: '15px' }}
                fontWeight="regular"
                mb={1}
              >
                In uso
              </Text>
              <Text color={textColor}>{fields[1].inUse}</Text>
            </HStack>

            <HStack display="flex" justifyContent="space-between">
              <Text
                color="black"
                fontSize={{ base: '15px' }}
                fontWeight="regular"
                mb={1}
              >
                Prenotati
              </Text>
              <Text color={textColor}>{fields[2].booked}</Text>
            </HStack>
          </Flex>
          <Divider my="14px" />
          <Flex direction="row" justifyContent="space-between">
            <Text
              color="black"
              fontSize={{ base: '15px' }}
              fontWeight="regular"
              mb={1}
            >
              Tempi Di Attesa :
            </Text>
            <VStack
              direction="column"
              display="flex"
              // justifyContent="space-between"
            >
              <Text
                color={timeColor}
                fontSize={{ base: '12px' }}
                fontWeight="semibold"
              >
                10 min
              </Text>
              <Text
                color={timeColor}
                fontSize={{ base: '12px' }}
                fontWeight="semibold"
              >
                10 min
              </Text>
              <Text
                color={timeColor}
                fontSize={{ base: '12px' }}
                fontWeight="semibold"
              >
                10 min
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
