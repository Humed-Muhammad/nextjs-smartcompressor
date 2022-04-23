import { Avatar, Button, Menu, Divider, Badge } from 'antd';
import { Header } from 'antd/lib/layout/layout';

const Navbar = () => {
  return (
    <Header
      className="bg-white flex justify-between items-center shadow-sm"
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    >
      <Menu
        className="flex-1 flex items-center"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
      <div className="w-1/2 md:w-72 h-full flex justify-around items-center">
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg" />
        <Divider type="vertical" className="h-2/4 bg-gray-300" />
        <Badge size="default" count={5}>
          <Button type="dashed">Compressed</Button>
        </Badge>
        <Divider type="vertical" className="h-2/4 bg-white" />

        <Button type="primary" danger>
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
