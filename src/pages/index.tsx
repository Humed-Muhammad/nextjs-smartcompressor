/* eslint-disable tailwindcss/no-custom-classname */
import { CheckOutlined } from '@ant-design/icons';
import { Text } from '@mantine/core';
import { Layout } from 'antd';
import Head from 'next/head';

import { FileDrop } from '@/components/FileDrop';

const { Content } = Layout;

function HomePage() {
  return (
    <Layout className=" flex h-auto w-full flex-col items-stretch  justify-around bg-slate-100">
      <Head>
        <meta
          name="description"
          content="Free image compressor with high performance and quality. The best free image compressor with out losing your image quality, compressor and keep your image quality"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="image-compressor" />
        <title>online Image compressor</title>
      </Head>
      <Content className="site-layout mt-16 flex flex-col items-center justify-start bg-slate-100 ">
          <h1 className="font-mono text-3xl font-semibold text-gray-600">
            Image compressor
          </h1>
        <FileDrop />
      </Content>
    </Layout>
  );
}

export default HomePage;
