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
// eslint-disable-next-line import/no-duplicates
import { Avatar } from '@chakra-ui/react';
import Card from './Card';
// Custom icons

export default function Default() {
  // const { startContent, endContent, name, growth, fields, value } = props;

  // const textColor = useColorModeValue('secondaryGray.900', 'white');
  // const timeColor = useColorModeValue('red.600', 'white');
  // const textColorSecondary = 'secondaryGray.600';
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4; // Change this as needed
  const data = [
    { id: 1, customer: 'Jhony Lee', vehicleType: 'Maxi' },
    { id: 2, customer: 'Jhony Lee', vehicleType: 'Rickshaw' },
    { id: 3, customer: 'Jhony Lee', vehicleType: 'Bicycles' },
    { id: 4, customer: 'Jhony Lee', vehicleType: 'Maxi' },
    { id: 5, customer: 'Jhony Lee', vehicleType: 'Maxi' },
    { id: 6, customer: 'Jhony Lee', vehicleType: 'Maxi' },
    { id: 7, customer: 'Jhony Lee', vehicleType: 'Maxi' },
    { id: 8, customer: 'Jhony Lee', vehicleType: 'Maxi' },
    { id: 9, customer: 'Jhony Lee', vehicleType: 'Maxi' },
  ];
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToPage = page => {
    setCurrentPage(page);
  };
  return (
    <Card py="10px" p="10px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: 'start', xl: 'start' }}
        justify={{ base: 'flex-start', xl: 'flex-start' }}
        flexDirection="column"
      >
        <Flex align="center" pt="10px" px="10px">
          <Text fontSize="21px" fontWeight="semibold" textTransform="uppercase">
            Rientrati
          </Text>
        </Flex>
        <Divider mt="32px" />

        <TableContainer w="full">
          <Table
            size="sm"
            style={{
              borderCollapse: 'separate',
              borderSpacing: '0 4px',
            }}
          >
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th textAlign="center" verticalAlign="middle">
                  Customers
                </Th>
                <Th textAlign="center" verticalAlign="middle">
                  Vehicle Type
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentData.map(item => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td textAlign="center" verticalAlign="middle">
                    <Flex alignItems="center" justifyContent="center" gap={2}>
                      <Avatar w="22px" h="22px" />

                      {item.customer}
                    </Flex>
                  </Td>
                  <Td textAlign="center" verticalAlign="middle">
                    {item.vehicleType}
                  </Td>
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
