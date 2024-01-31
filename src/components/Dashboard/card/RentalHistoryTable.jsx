// Chakra imports
// Chakra imports
import {
  Flex,
  // useColorModeValue,
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  // eslint-disable-next-line import/no-duplicates
} from '@chakra-ui/react';

// Custom components
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Card from './Card';
// Custom icons

export default function Default() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6; // Change this as needed
  const data = [
    {
      id: 1,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO,  RISCIO MAX,  MOUNTAIN BIKE',
      printTime: '01:07 pm',
    },
    {
      id: 2,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO',
      printTime: '01:07 pm',
    },
    {
      id: 3,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO,  RISCIO MAX,  MOUNTAIN BIKE',
      printTime: '01:07 pm',
    },

    {
      id: 4,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO',
      printTime: '01:07 pm',
    },
    {
      id: 5,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO,  RISCIO MAX,  MOUNTAIN BIKE',
      printTime: '01:07 pm',
    },
    {
      id: 6,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO',
      printTime: '01:07 pm',
    },
    {
      id: 7,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO',
      printTime: '01:07 pm',
    },
    {
      id: 8,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO',
      printTime: '01:07 pm',
    },
    {
      id: 9,
      customer: 'Jhony Lee',
      vehicleType: 'BCCI,  RISCIO,  RISCIO MAX,  MOUNTAIN BIKE',
      printTime: '01:07 pm',
    },
  ];
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToPage = page => {
    setCurrentPage(page);
  };

  const style = {
    border: '1px solid #CBCBCB',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'black',
  };
  const styleExceptLeft = {
    borderRight: '1px solid #CBCBCB',
    borderBottom: '1px solid #CBCBCB',
    borderTop: '1px solid #CBCBCB',
    textAlign: 'center',
    color: 'black',
    verticalAlign: 'middle',
  };
  const styleExceptRight = {
    borderLeft: '1px solid #CBCBCB',
    borderBottom: '1px solid #CBCBCB',
    borderTop: '1px solid #CBCBCB',
    textAlign: 'center',
    color: 'black',
    verticalAlign: 'middle',
  };

  return (
    <Card py="10px" p="0px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: 'start', xl: 'start' }}
        justify={{ base: 'flex-start', xl: 'flex-start' }}
        flexDirection="column"
      >
        <Flex align="center" py="20px" px="20px">
          <Text fontSize="21px" fontWeight="semibold" textTransform="uppercase">
            Rientrati
          </Text>
        </Flex>
        <Divider />

        <TableContainer w="full">
          <Table size="md">
            <Thead>
              <Tr>
                <Th
                  style={styleExceptLeft}
                  fontSize="17px"
                  fontWeight="semibold"
                >
                  No
                </Th>
                <Th style={style} fontSize="17px" fontWeight="semibold">
                  NOME CLIENT
                </Th>
                <Th style={style} fontSize="17px" fontWeight="semibold">
                  Vehicle Type
                </Th>
                <Th style={style} fontSize="17px" fontWeight="semibold">
                  R
                </Th>
                <Th style={style} fontSize="17px" fontWeight="semibold">
                  TIME OF PRINT
                </Th>
                <Th
                  style={styleExceptRight}
                  fontSize="17px"
                  fontWeight="semibold"
                >
                  TIME OF LEAVING
                </Th>
              </Tr>
            </Thead>
            <Tbody fontSize="18px">
              {currentData.map(item => (
                <Tr key={item.id}>
                  <Td style={styleExceptLeft}>{item.id}</Td>
                  <Td style={style}>{item.customer}</Td>
                  <Td style={style}>{item.vehicleType}</Td>
                  <Td style={style} />
                  <Td style={style}>{item.printTime}</Td>
                  <Td style={styleExceptRight}>{item.printTime}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Flex justifyContent="flex-end" m="2">
        <IconButton
          aria-label="Previous Page"
          icon={<ChevronLeftIcon />}
          size="xs"
          mr="10px"
          backgroundColor="#006AFF"
          color="white"
          _hover={{ backgroundColor: '#63A4FF' }}
          border="none"
          onClick={() => goToPage(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        />
        <IconButton
          aria-label="Next Page"
          icon={<ChevronRightIcon />}
          size="xs"
          backgroundColor="#006AFF"
          color="white"
          _hover={{ backgroundColor: '#63A4FF' }}
          border="none"
          onClick={() =>
            goToPage(currentPage < totalPages ? currentPage + 1 : totalPages)
          }
          disabled={currentPage === totalPages}
        />
      </Flex>
    </Card>
  );
}
