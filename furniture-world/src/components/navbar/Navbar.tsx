import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Menu, Col, Row, Button, Flex, ConfigProvider } from 'antd';
import { LoginOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../../assets';

type Props = {};

export const Navbar = (props: Props) => {
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const navigationMenu = [
        {
            label: 'Home',
            key: '/',
        },
        {
            label: 'Shop',
            key: '/shop',
        },
        {
            label: 'About',
            key: '/about',
        },
        {
            label: 'Contact',
            key: '/contact',
        },
    ];

    const ButtonMenu = [
        {
            label: 'user',
            icons: <UserOutlined style={{ fontSize: '18px' }} />,
            key: '/profile',
        },
        {
            label: 'search',
            icons: <SearchOutlined style={{ fontSize: '18px' }} />,
            key: '/search',
        },
        {
            label: 'cart',
            icons: <ShoppingCartOutlined style={{ fontSize: '18px' }} />,
            key: '/cart',
        },
        {
            label: 'logout',
            icons: <LoginOutlined style={{ fontSize: '18px' }} />,
            key: '/logout',
        },
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnclickMenu = (key: any) => {
        setSelectedKey(key.key); 
        navigate(key.key);
    };

    const handleOnClickButton = (key: string) => {
        setSelectedKey(null); 
        navigate(key);
    };

    return (
        <>
            <Row gutter={16} style={{ paddingTop: '4px' }}>
                <Col className="navbar_logo" span={4}>
                    <Link to="/">
                        <img src={assets.logo} alt="logo" width={180} style={{ marginLeft: '20px' }} />
                    </Link>
                </Col>

                <Col className="navbar_navigation" span={14} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Menu
                        style={{ fontSize: '16px', fontWeight: '600', backgroundColor: '#fff' }}
                        theme="light"
                        mode="horizontal"
                        selectedKeys={selectedKey ? [selectedKey] : [location.pathname]} 
                        items={navigationMenu}
                        onClick={handleOnclickMenu}
                    />
                </Col>

                <Col
                    className="navbar_button"
                    span={6}
                    style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}
                >
                    <Flex gap="large" wrap="wrap" style={{ paddingTop: '4px' }}>
                        <ConfigProvider theme={{ components: { Button: { textHoverBg: '#ffffff' } } }}>
                            {ButtonMenu.map((button) => (
                                <Button
                                    key={button.label}
                                    type="text"
                                    icon={button.icons}
                                    size="large"
                                    onClick={() => handleOnClickButton(button.key)}
                                    style={location.pathname === button.key ? { color: '#B88E2F' } : undefined}
                                />
                            ))}
                        </ConfigProvider>
                    </Flex>
                </Col>
            </Row>
            <Outlet />
        </>
    );
};

export default Navbar;
