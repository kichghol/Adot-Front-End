import { useState, useContext} from "react";
import Check from "./Check";
import {Modal,Input,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,Stack,HStack,ButtonGroup} from '@chakra-ui/react';
import { PaysContext } from "./Home";
import useLocalStorage from "./useLocalstorage";


interface open {
  isOpen: boolean;
  onClose: ()=>void;
}
const Form = ({isOpen, onClose}:open) => {
 
  interface item  {
    nom: string,
    adresse:  string,
    image:string,
    nbHabitant:string,
    nbHotel?:string,
    revenuMpy?: string,
    superficie?: string,
  };

  const [inputs,setInputs] = useState<item>({nom:"",adresse:"",image:"",nbHabitant:"" ,nbHotel:"",revenuMpy:"",superficie:""});
  
  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({...values, [name]: value}))
  };

  const { setPays} = useContext(PaysContext)
  
  const [ save,setSave] = useLocalStorage();

  const handleSubmit = (event:any) => {
    setPays((values: any[]) => ([...values,inputs ]));
    setSave((values:any[]) => ([...values,inputs ]));
    onClose();
    event.preventDefault();
    
  };
  
  return ( 
    <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Ajouter une nouvelle destination</ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody >
              <Stack spacing={3}>
                <Input size='sm' type="text" value = {inputs.nom ||""} name="nom" onChange = {handleChange} placeholder="Nom de la destination "/>
                <Input size='sm' type="text" value = {inputs.adresse || ""}  name="adresse" onChange = {handleChange} placeholder="Adresse "/>
                <Input size='sm' type="text" value = {inputs.image || "" } name="image" onChange = {handleChange} placeholder="Lien de l'image " />
                <HStack spacing='10px' w= "auto">
                  <Input size='xs' type="text" value = {inputs.nbHabitant || ""} name= "nbHabitant" onChange = {handleChange} placeholder="Nb Habitants "/>
                  <Input size='xs' type="text" value = {inputs.nbHotel || ""} name="nbHotel" onChange = {handleChange} placeholder="Nb. Hôtels "/>
                  <Input size='xs' type="text" value = {inputs.revenuMpy || ""} name="revenuMpy" onChange = {handleChange} placeholder="Revenu Moy "/>
                  <Input size='xs' type="text" value = {inputs.superficie || ""} name= "superficie" onChange = {handleChange} placeholder="Superficie "/>
                </HStack>
                <Check/>
              </Stack>
            </ModalBody>
            <ModalFooter >
              <ButtonGroup gap='2'>
                <Button onClick = {onClose}>Cancel</Button>
                <Button type = "submit">Confirm</Button>   
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
    </Modal>
    
  );
}
 
export default Form;



     


        
        
          
   