// Chakra imports
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import React from 'react';
// import RentalTable from '../../components/Rental/RentalTable';
import Card from '../../components/Dashboard/card/Card';
import InventoryTable from '../../components/sharedComponents/Table/Table';
import { data } from './InventoryData';

export default function Settings() {
  // Chakra Color Mode
  const tableHead = [
    'No',
    'Number of vehicle',
    'Vehicle type',
    'Rented',
    'Available',
    'Maintenance',
    'Location',
  ];
  const tableData = data;

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
              Inventory List
            </Text>
          </Flex>

          <InventoryTable tableHeader={tableHead} tableData={tableData} />
        </Card>
      </SimpleGrid>
    </Box>
  );
}
