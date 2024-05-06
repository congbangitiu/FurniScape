import { Image, Menu, Col, Row, Button, Flex, ConfigProvider } from 'antd';
import React, { Component } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { assets } from '../../assets';
import { icons } from 'antd/es/image/PreviewGroup';
import { LoginOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type Props = {};

export const Navbar = (props: Props) => {
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
        },
        {
            label: 'search',
            icons: <SearchOutlined style={{ fontSize: '18px' }} />,
        },
        {
            label: 'cart',
            icons: <ShoppingCartOutlined style={{ fontSize: '18px' }} />,
        },
        {
            label: 'logout',
            icons: <LoginOutlined style={{ fontSize: '18px' }} />,
        },
    ];

    const navigate = useNavigate();

    const handleOnclickMenu = (key: any) => {
        console.log(key.key);
        if (key) {
            navigate(key.key);
        }
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
                        style={{ fontSize: '16px', fontWeight: '600' }}
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['/']}
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
                            {ButtonMenu.map((button, index) => (
                                <Button key={index} type="text" icon={button.icons} size="large" />
                            ))}
                        </ConfigProvider>
                    </Flex>

                    {/* <UserOutlined style={{ fontSize: '18px' }} /> */}
                </Col>
            </Row>
            <Outlet />
        </>
    );
};
