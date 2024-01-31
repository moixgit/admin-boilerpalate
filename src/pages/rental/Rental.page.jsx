// Chakra imports
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import React from 'react';
// import RentalTable from '../../components/Rental/RentalTable';
import Card from '../../components/Dashboard/card/Card';
import RentalTable from '../../components/sharedComponents/Table/Table';
import { data } from './RentalData';

export default function Settings() {
  // Chakra Color Mode
  const tableHead = [
    'No',
    'Customers',
    'Rental Duration',
    'Rental Vehicle',
    '',
  ];
  const tableData = data;
  const EditButton = (
    <Button
      fontSize="18px"
      variant="custom"
      fontWeight="400"
      type="submit"
      size="sm"
      px="40px"
      py="0px"
      w="100%"
    >
      Edit
    </Button>
  );

  // Define cancel button component
  const CancelButton = (
    <Button
      fontSize="18px"
      variant="custom"
      fontWeight="400"
      type="submit"
      size="sm"
      px="40px"
      py="0px"
      w="100%"
      backgroundColor="#FF0000"
      _hover={{ backgroundColor: '#FF6D6D' }}
    >
      Cancel
    </Button>
  );

  const buttons = [
    {
      label: 'Edit',
      backgroundColor: undefined,
      hoverColor: '#0169FC',
    },
    {
      label: 'Cancel',
      backgroundColor: '#FF0000',
      hoverColor: '#FF6D6D',
    },
  ];
  return (
    <Box pt={{ base: '130px', md: '30px', xl: '30px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        <Card direction="column" w="100%" px="0px">
          <Flex px="25px" justify="space-between" mb="20px" align="center">
            <Text
              color="#006AFF"
              fontSize="20px"
              fontWeight="600"
              lineHeight="100%"
              textTransform="uppercase"
            >
              Trip List
            </Text>
          </Flex>

          <RentalTable
            tableHeader={tableHead}
            tableData={tableData}
            buttons={buttons}
          />
        </Card>
      </SimpleGrid>
    </Box>
  );
}
