import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme, Text, Button, UnorderedList, Heading, ListItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './reducers/countReducer';
import { fetchUsers } from './asyncActions/users';
import { v4 } from 'uuid'

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);
  const inc = () => dispatch(increment(5));
  const dec = () => dispatch(decrement(5));
  const usersArr = useSelector(state => state.users.users);
  console.log(usersArr);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Grid minH='100vh' p={3}>
          <ColorModeSwitcher justifySelf='flex-end' />
          <VStack spacing={8}>
            <Text>{count}</Text>
            <Button colorScheme='teal' onClick={inc}>+</Button>
            <Button colorScheme='blue' onClick={dec}>-</Button>
            <UnorderedList>
              {usersArr.map(({ name, email }) => (
                <ListItem key={v4()}>
                  <Box borderWidth="1px" borderRadius="lg">
                    <Heading>{name}</Heading>
                    <Text>{email}</Text>
                  </Box>
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
