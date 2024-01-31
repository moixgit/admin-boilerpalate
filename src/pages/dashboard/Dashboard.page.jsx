/* eslint-disable react/jsx-wrap-multilines */
// Chakra imports
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
// Assets
import React from 'react';
import bike from '../../assets/icons/component-icons/bike.svg';
import rickshaw from '../../assets/icons/component-icons/rickshaw.svg';
import rickshawMax from '../../assets/icons/component-icons/rickshawMax.svg';
import mountainBike from '../../assets/icons/component-icons/mountainBike.svg';
// Custom components

import VehicleCard from '../../components/Dashboard/card/VehicleCard';
import ReturnCard from '../../components/Dashboard/card/ReturnedCard';
import RentalTable from '../../components/Dashboard/card/RentalHistoryTable';
import IconBox from '../../components/icons/IconBox';

export default function UserReports() {
  return (
    <Box pt={{ base: '130px', md: '30px', xl: '30px' }}>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
          '2xl': 5,
        }}
        gap="20px"
        mb="20px"
      >
        <VehicleCard
          startContent={
            <IconBox
              w="56px"
              h="56px"
              // bg={boxBg}
              icon={<Image src={bike} alt="Dashboard Icon" boxSize="40px" />}
            />
          }
          name="BICI"
          fields={[{ available: '12' }, { inUse: '12' }, { booked: '12' }]}
        />
        <VehicleCard
          startContent={
            <IconBox
              w="56px"
              h="56px"
              icon={
                <Image src={rickshaw} alt="Dashboard Icon" boxSize="40px" />
              }
            />
          }
          name="Risciò"
          fields={[{ available: '12' }, { inUse: '12' }, { booked: '12' }]}
        />
        <VehicleCard
          startContent={
            <IconBox
              w="56px"
              h="56px"
              icon={
                <Image src={rickshawMax} alt="Dashboard Icon" boxSize="40px" />
              }
            />
          }
          name="Risciò Max"
          fields={[{ available: '12' }, { inUse: '12' }, { booked: '12' }]}
        />
        <VehicleCard
          startContent={
            <IconBox
              w="56px"
              h="56px"
              icon={
                <Image src={mountainBike} alt="Dashboard Icon" boxSize="40px" />
              }
            />
          }
          name="Mountain bike"
          fields={[{ available: '12' }, { inUse: '12' }, { booked: '12' }]}
        />
        <ReturnCard />
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 1,
          md: 1,
          lg: 1,
          xl: 1,
          '2xl': 1,
        }}
        gap="20px"
        mb="20px"
      >
        <RentalTable />
      </SimpleGrid>
    </Box>
  );
}
