import {
  VStack,
  Fieldset,
  Field,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <Fieldset.Root>
        <Fieldset.Content>
          {/* Name */}
          <Field.Root>
            <Field.Label>
              Name <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name="name"
              placeholder="Enter Your Name"
              onChange={() => setName(e.target.value)}
              required
            />
          </Field.Root>
          {/* Email */}
          <Field.Root>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={() => setEmail(e.target.value)}
              required
            />
          </Field.Root>
          {/* password */}
          <Field.Root>
            <Field.Label>
              Password <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup>
              <Input
                name="passowrd"
                type={show ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={() => setPassword(e.target.value)}
                required
              />
            </InputGroup>
            <Button
              h="2rem"
              size="sm"
              onClick={() => setShow(!show)}
              //   variant="outline"
              colorScheme="blue"
              position="absolute"
              right={2}
              top={7}
              //   borderBlockColor="grey"
            >
              {show ? "Hide" : "Show"}
            </Button>
          </Field.Root>

          <Button
            bg="blue"
            color="white"
            _hover={{ bg: "blue.700" }}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Button
            bg="red.600"
            color="white"
            _hover={{ bg: "red.700" }}
            onClick={() => {
              setEmail("guest@example.com");
              setPassword("123456");
            }}
          >
            Get User Credentials
          </Button>
        </Fieldset.Content>
      </Fieldset.Root>
    </VStack>
  );
};

export default Login;

{
  /* */
}
