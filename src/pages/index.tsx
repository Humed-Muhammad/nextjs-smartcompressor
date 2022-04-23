import { Layout } from 'antd';

import { FileDrop } from '@/components/FileDrop';

const { Content } = Layout;

export default function HomePage() {
  return (
    <Layout className=" flex h-screen w-full flex-col items-stretch  justify-around overflow-auto bg-slate-100">
      <Content
        className="site-layout flex flex-col items-center justify-start"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <FileDrop />
      </Content>
    </Layout>
  );
}
