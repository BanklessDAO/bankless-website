import type { NextPage } from "next";
import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import TodoForm from "components/TodoForm";

const Home: NextPage = () => {
  return (
    <Box>
      <Flex height="40px" backgroundColor="dark-1" color="gray.200">
        <Text
          as="span"
          fontSize="sm"
          display="block"
          m="8px 10px"
          fontWeight="500"
        >
          nextjs-frontend-template
        </Text>
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" minHeight="calc(100vh - 40px)">
        <Flex gridColumn="1/4" backgroundColor="dark-2">
          <Box m="4rem 0px auto auto" mr="4rem">
            <Text
              as="span"
              textTransform="uppercase"
              color="gray.500"
              fontSize="sm"
              display="block"
              mb="1rem"
              fontWeight="500"
            >
              Components
            </Text>
            <Box as="ul" color="gray.400" fontSize="lg" listStyleType="none">
              <Text as="li" color="gray.50" fontWeight="500">
                Form
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex gridColumn="4/13" backgroundColor="dark-3">
          <TodoForm />
        </Flex>
      </Grid>
    </Box>
  );
};

export default Home;
