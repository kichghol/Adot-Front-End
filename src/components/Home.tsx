import DestinationList  from "./DestinationList";
import useFetch from "./useFetch";
import Form from "./Form"
import { useDisclosure,Button,ButtonGroup,Flex,Spacer,Heading,Box,Stack } from '@chakra-ui/react'
import { useState, createContext, useEffect } from "react";
import useLocalStorage from "./useLocalstorage";


export const PaysContext = createContext<any | null>(null); 

const Home = () => {
  const [pays, setPays] = useState <any[]> ([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {data:destinations, isLoading, error} = useFetch('http://localhost:8000/destinations');

  const [save] = useLocalStorage() as any[];

  useEffect (()=>{
    const tmpDestination = destinations || [];
 
    const allPays = [...tmpDestination ,...save]
    setPays(allPays)
    // console.log('tesst',destinations);
  },[destinations,save])

    return ( 
        <PaysContext.Provider value= {{pays, setPays}}>
        <Stack spacing={5}>
          {isLoading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
              <Heading size='md'>Destination</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
            <Button onClick = {onOpen} colorScheme='whatsapp'> + Ajouter</Button> 
            </ButtonGroup>
          </Flex>
          <Spacer />
          {pays &&<DestinationList destinations = {pays}  />}
          <Form isOpen = {isOpen} onClose = {onClose}/>
        </Stack>
      </PaysContext.Provider>
     );
}
 
export default Home;