/* eslint-disable tailwindcss/no-custom-classname */
import { Layout } from 'antd';

import { FileDrop } from '@/components/FileDrop';

const { Content } = Layout;

function HomePage() {
  console.log('first');
  return (
    <Layout className=" flex h-screen w-full flex-col items-stretch  justify-around overflow-auto bg-slate-100">
      <Content className="site-layout mt-16 flex flex-col items-center justify-start px-1 sm:px-3 md:px-12">
        <FileDrop />
      </Content>
    </Layout>
  );
}

export default HomePage;
