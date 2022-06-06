import Check from "./Check";
import { Box,Image,Spacer,Grid,Flex,Heading } from '@chakra-ui/react';

const DestinationList = (props:any) => {
    
    return (
        <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,2fr)">
            {props.destinations.map(((destination:any, index:number) =>(
          <Box w="96%"  h={96} key= {index}  borderWidth='1px'  overflow='hidden' display="row" >
            <Image  w="100%" h="50%" src={destination?.image} alt="" />
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box p="3">
                <Heading size='md'>{destination?.nom}</Heading>
              </Box>
                <Spacer />
              <Box p="3">
                <Check/>
              </Box>
            </Flex>
            <Box p="3">
              {destination?.adresse} 
            </Box>
            <hr />
            <Box w="100%" p="3">
              <Grid templateColumns="repeat(4,1fr)" templateRows="repeat(2,1fr)">
                <Box>
                {destination?.nbHabitant} M
                </Box>
                <Box>
                {destination?.nbHotel}
                </Box>
                <Box>
                {destination?.revenuMpy} €
                </Box>
                <Box>
                {destination?.superficie} 
                </Box>
                <Box>
                  Habitants
                </Box>
                <Box>
                  Hôtels
                </Box>
                <Box>
                  Revenu Moy
                </Box>
                <Box>
                  Km²
                </Box>
              </Grid>
            </Box>
          </Box>

          )))}


          
        </Grid>
      
      );
}
 
export default DestinationList ;