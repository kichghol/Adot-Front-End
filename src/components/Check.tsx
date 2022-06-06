import { useState } from "react";
import { Switch,Stack } from '@chakra-ui/react'

const Check = () => {
    const [checked, setChecked] = useState(false);
    return (
      <Stack direction='row'>
        <Switch colorScheme='green' size='md'
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Stack>
        
    );
}
 
export default Check;

