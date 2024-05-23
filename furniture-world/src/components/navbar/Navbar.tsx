import { Image, Menu, Col, Row, Button, Flex, ConfigProvider, theme } from 'antd';
import React, { Component, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { assets } from '../../assets';
import { icons } from 'antd/es/image/PreviewGroup';
import { LogoutOutlined, LoginOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '../shopping-cart';
import { Footer } from '../footer';
import './style.css';

type Props = {};

export const Navbar = (props: Props) => {
    const { token } = theme.useToken();
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

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
            label: 'login',
            icons: <LoginOutlined style={{ fontSize: '18px' }} onClick={() => navigate('/signIn')} />,
        },
        {
            label: 'logout',
            icons: <LogoutOutlined style={{ fontSize: '18px' }} />,
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

    const PurchasedItems = [
        {
            image: assets.image1,
            name: 'Asgaard sofa ',
            quantity: 1,
            price: '$250',
        },
        {
            image: assets.image1,
            name: 'Odin Coffee Table',
            quantity: 2,
            price: '$120',
        },
        {
            image: assets.image1,
            name: 'Thor Recliner Chair',
            quantity: 1,
            price: '$180',
        },
        {
            image: assets.image1,
            name: 'Loki Bookshelf',
            quantity: 3,
            price: '$75',
        },
        {
            image: assets.image1,
            name: 'Freya Dining Set',
            quantity: 1,
            price: '$500',
        },
        {
            image: assets.image1,
            name: 'Heimdall Wardrobe',
            quantity: 1,
            price: '$350',
        },
    ];

    return (
        <>
            <Row gutter={16} style={{ paddingTop: '4px' }}>
            {/* <Row
                gutter={16}
                style={{
                    paddingTop: '4px',
                    position: 'fixed',
                    zIndex: '50',
                    width: '100%',
                    backgroundColor: '#fff',
                    top: '0',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                }}
            > */}
                <Col className="navbar_logo" span={4}>
                    <Link to="/">
                        <img src={assets.logo} alt="logo" width={180} style={{ marginLeft: '20px' }} />
                    </Link>
                </Col>

                {/* <Col className="navbar_navigation" span={14} style={{ display: 'flex', justifyContent: 'center' }}>
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

                </Col>
            </Row>
            <Outlet /> */}

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

                {/* <Col
                    className="navbar_button"
                    span={6}
                    style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}
                >
                    <Flex gap="large" wrap="wrap" style={{ paddingTop: '4px' }}>
                        <ConfigProvider theme={{ components: { Button: { textHoverBg: '#ffffff' } } }}>
                            {ButtonMenu.map((button) => (
                                <>
                                    <Button
                                        className="icon-button"
                                        key={button.label}
                                        type="text"
                                        icon={button.icons}
                                        size="large"
                                        onClick={() => handleOnClickButton(button.key)}
                                        onMouseEnter={() => button.label === 'cart' && setShowShoppingCart(true)}
                                        onMouseLeave={() => button.label === 'cart' && setShowShoppingCart(false)}
                                        style={location.pathname === button.key ? { color: '#B88E2F' } : undefined}
                                    />
                                    {button.label === 'cart' && PurchasedItems.length > 0 && (
                                        <Flex
                                            style={{
                                                position: 'absolute',
                                                top: '8px',
                                                right: '88px',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '15px',
                                                height: '15px',
                                                backgroundColor: token.colorPrimary,
                                                color: '#fff',
                                                fontSize: '10px',
                                                fontWeight: '500',
                                                borderRadius: '50px',
                                            }}
                                        >
                                            {PurchasedItems.length}
                                        </Flex>
                                    )}
                                </>
                            ))}
                        </ConfigProvider>
                    </Flex>
                </Col>
                {showShoppingCart && (
                    <Flex
                        className="shopping-cart"
                        onMouseEnter={() => setShowShoppingCart(true)}
                        onMouseLeave={() => setShowShoppingCart(false)}
                    >
                        <ShoppingCart PurchasedItems={PurchasedItems} />
                    </Flex>
                )} */}
            </Row>

            <Outlet />

            <Footer />
        </>
    );
};

export default Navbar;
