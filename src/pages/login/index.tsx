/**
 *
 * Login
 *
 */
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/outline';
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Image from 'next/image';
import Link from 'next/link';
import cloud_pro from 'public/cloud_pro.png';
import logo from 'public/Conex.png';
import React from 'react';

import { Container } from '@/components/base';

interface Props {}

export function LoginForm() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value ? null : "Password can't be emplty!"),
    },
  });
  return (
    <Container className="flex-col">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor<'a'>
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            <Link href="/signup">Create account</Link>
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            icon={<AtSymbolIcon className="w-6" />}
            placeholder="you@mantine.dev"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            icon={<LockClosedIcon className="w-6" />}
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor
              onClick={(event: any) => event.preventDefault()}
              href="#"
              size="sm"
            >
              <Link href="/forgetpassword">Forgot password?</Link>
            </Anchor>
          </Group>
          <Button type="submit" className="bg-blue-500" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}

// eslint-disable-next-line unused-imports/no-unused-vars
const Login = (props: Props) => {
  return (
    <Container className="h-screen w-full bg-gray-200 p-2 md:p-5 lg:p-10 ">
      <Container className="hidden h-full w-1/3 flex-col bg-white shadow lg:flex">
        <Image
          src={logo}
          width="128px"
          height="128px"
          className="w-32"
          alt="logo"
        />
        <Text className="inline-block font-mono text-2xl text-gray-400">
          Welcom to
          <Text className="ml-4 inline-block divide-x-2 divide-x-reverse rounded-sm bg-indigo-400 p-1 font-mono text-2xl text-white">
            ImageCare
          </Text>
        </Text>
        <Image className="w-2/3" src={cloud_pro} alt="left side image" />
      </Container>
      <Container className="h-full w-full bg-white shadow md:w-2/3 lg:w-1/2">
        <LoginForm />
      </Container>
    </Container>
  );
};

export default Login;
