/* eslint-disable no-nested-ternary */
/* eslint-disable unused-imports/no-unused-vars */
/**
 *
 * Signup
 *
 */
import { useMutation } from '@apollo/client';
import {
  AtSymbolIcon,
  LockClosedIcon,
  PencilIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import React from 'react';

import { Container } from '@/components/base';
import { REGISTER } from '@/utils/gqlQueries/mutations';

interface Props {}
interface FormValuesTypes {
  fullName: string;
  email: string;
  phoneNumber: string;
  phoneCode?: string;
  password: string;
}

const Signup = (_props: Props) => {
  const [register] = useMutation(REGISTER);

  const form = useForm<FormValuesTypes>({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      // phoneCode: '',
      password: '',
    },

    validate: {
      email: (value) => {
        if (value) {
          if (/^\S+@\S+$/.test(value)) {
            return null;
          }
          return 'Invalid email!';
        }
        return "Email can't be empty!!";
      },
      fullName: (value) => (value ? null : "Full name can't be empty!"),
      phoneNumber: (value) =>
        value
          ? value.length < 10
            ? 'Phone number must be at least 10 chars!'
            : null
          : 'Phone number is required!',
      // phoneCode: value => (value ? null : 'Required!'),
      password: (value) =>
        value
          ? value.length < 6
            ? "Password length should not be less than 6 char's!"
            : null
          : "Password can't be emplty!",
    },
  });

  return (
    <Container className="h-screen flex-col bg-gray-100">
      <form
        autoComplete="on"
        className="flex h-full w-11/12 flex-col justify-center sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/4"
        onSubmit={form.onSubmit((values) => {
          register({ variables: values })
            .then(({ data }) => data)
            .catch(({ message }) =>
              showNotification({
                title: 'Error',
                message: `${message}! 🤥`,
                color: 'red',
              })
            );
        })}
      >
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Create an{' '}
          <Text className="inline-block divide-x-2 divide-x-reverse  rounded-sm bg-indigo-400 p-1 font-mono text-3xl text-white">
            Account
          </Text>
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={10}>
          Have an account?{' '}
          <Anchor<'a'>
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            <Link href="/login">Login</Link>
          </Anchor>
        </Text>

        <Paper
          className="flex h-2/3 flex-col justify-around"
          withBorder
          shadow="md"
          p={30}
          mt={30}
          radius="md"
        >
          <TextInput
            className="font-sans"
            label="Full Name"
            icon={<PencilIcon className="w-6" />}
            placeholder="Full name"
            {...form.getInputProps('fullName')}
          />
          <TextInput
            type="email"
            className="font-sans"
            icon={<AtSymbolIcon className="w-6" />}
            label="Email"
            placeholder="you@mantine.dev"
            {...form.getInputProps('email')}
          />
          <Container className="">
            {/* <Select
              className="w-1/3 mr-1 m-0"
              searchable
              data={countryPhoneCode}
              label="Phone code"
              {...form.getInputProps('phoneCode')}
            /> */}
            <TextInput
              className="grow font-sans"
              label="Phone number"
              icon={<PhoneIcon className="w-6" />}
              placeholder="Phone number"
              {...form.getInputProps('phoneNumber')}
            />
          </Container>
          <PasswordInput
            label="Password"
            icon={<LockClosedIcon className="w-6" />}
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
          />
          <Group position="apart" mt="md">
            <Anchor<'a'>
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" className="bg-blue-500" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default Signup;
