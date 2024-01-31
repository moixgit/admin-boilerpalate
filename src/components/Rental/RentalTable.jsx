import {
  Avatar,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from 'chakra-paginator';
// Custom components
import React from 'react';
import Card from '../Dashboard/card/Card';
import { data } from './RentalData';

export default function RentalTable() {
  const textColor = useColorModeValue('#006AFF', 'white');
  const itemsPerPage = 10;
  const { isDisabled, pagesQuantity, currentPage, setCurrentPage, pageSize } =
    usePaginator({
      total: data.length,
      initialState: {
        pageSize: itemsPerPage,
        currentPage: 1,
        isDisabled: false,
      },
    });

  const headerstyle = {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '15px',
    color: '#313132',
    fontWeight: '400',
  };
  const style = {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '18px',
    color: '#656575',
  };

  const baseStyles = {
    w: 7,
    fontSize: '15px',
    borderRadius: '2px',
    fontWeight: 'regular',
    px: '0px',
  };

  const normalStyles = {
    ...baseStyles,
    _hover: {
      bg: '#0169FC',
      color: 'white',
    },
    bg: '#E7F0FC',
  };

  const activeStyles = {
    ...baseStyles,
    _hover: {
      bg: '#0169FC',
    },
    bg: '#0169FC',
    color: 'white',
  };

  // Slice the data array to get the items for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const currentData = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = nextPage => {
    setCurrentPage(nextPage);
  };
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"

      //   overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      {/* <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="20px"
          fontWeight="600"
          lineHeight="100%"
          textTransform="uppercase"
        >
          Trip List
        </Text>
      </Flex> */}
      <TableContainer w="full">
        <Table size="md">
          <Thead>
            <Tr>
              <Th style={headerstyle}>No</Th>
              <Th style={headerstyle}>Customers</Th>
              <Th style={headerstyle}>Rental Duration</Th>
              <Th style={headerstyle}>Rental Vehicle</Th>
              <Th style={headerstyle}>A</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentData.map(item => (
              <Tr key={item.id}>
                <Td style={style}>{item.id}</Td>
                <Td style={style}>
                  <Flex alignItems="center" justifyContent="center" gap={2}>
                    <Avatar w="22px" h="22px" />

                    {item.customer}
                  </Flex>
                </Td>
                <Td style={style}>{item.duration}</Td>
                <Td style={style}>{item.vehicle}</Td>
                <Td>
                  <Flex direction="row" gap="4px" justifyContent="center">
                    <Button
                      fontSize="18px"
                      variant="custom"
                      fontWeight="400"
                      type="submit"
                      size="sm"
                      px="40px"
                      py="0px"
                      w="20%"
                    >
                      Edit
                    </Button>
                    <Button
                      fontSize="18px"
                      variant="custom"
                      fontWeight="400"
                      type="submit"
                      size="sm"
                      px="40px"
                      py="0px"
                      w="20%"
                      backgroundColor="#FF0000"
                      _hover={{ backgroundColor: '#FF6D6D' }}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Paginator
        isDisabled={isDisabled}
        currentPage={currentPage}
        activeStyles={activeStyles}
        baseStyles={baseStyles}
        normalStyles={normalStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Flex align="center" w="full" p={4} gap={2}>
          <Previous variant="pagination">Previous</Previous>
          <PageGroup variant="pagination" fontSize="12px" />
          <Next variant="pagination">Next</Next>
        </Flex>
      </Paginator>
    </Card>
  );
}
