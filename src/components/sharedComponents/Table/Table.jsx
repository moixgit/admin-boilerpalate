import React from 'react';
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
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from 'chakra-paginator';
// import Card from '../Dashboard/card/Card';

export default function RentalTable({ tableHeader, tableData, buttons }) {
  const textColor = useColorModeValue('#006AFF', 'white');
  const itemsPerPage = 10;
  const { isDisabled, pagesQuantity, currentPage, setCurrentPage, pageSize } =
    usePaginator({
      total: tableData.length,
      initialState: {
        pageSize: itemsPerPage,
        currentPage: 1,
        isDisabled: false,
      },
    });

  const headerStyle = {
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

  // Function to handle page change
  const handlePageChange = nextPage => {
    setCurrentPage(nextPage);
  };

  return (
    <>
      <TableContainer w="full">
        <Table size="md">
          <Thead>
            <Tr>
              {tableHeader.map((header, index) => (
                <Th key={index} style={headerStyle}>
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tableData
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((item, index) => (
                <Tr key={index}>
                  {Object.values(item).map((value, index) => (
                    <Td key={index} style={style}>
                      {value}
                    </Td>
                  ))}
                  {buttons && (
                    <Td>
                      <Flex direction="row" gap="4px" justifyContent="center">
                        {buttons.map((button, index) => (
                          <Button
                            key={index}
                            fontSize="18px"
                            variant="custom"
                            fontWeight="400"
                            type="submit"
                            size="sm"
                            px="40px"
                            py="0px"
                            w="20%"
                            backgroundColor={button.backgroundColor}
                            _hover={{ backgroundColor: button.hoverColor }}
                          >
                            {button.label}
                          </Button>
                        ))}
                      </Flex>
                    </Td>
                  )}
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
    </>
  );
}
