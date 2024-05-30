import { Image, Menu, Col, Row, Button, Flex, ConfigProvider, theme, Badge, Dropdown, MenuProps, Popover } from 'antd';
import React, { Component, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { assets } from '../../assets';
import { icons } from 'antd/es/image/PreviewGroup';
import { LogoutOutlined, LoginOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '../shopping-cart';
import { Footer } from '../footer';
import './style.scss';
import MenuItem from 'antd/es/menu/MenuItem';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { setSelectedPath } from 'src/redux/navbar';

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

export const Navbar = () => {
    const ButtonMenu = [
        {
            label: 'user',
            icon: <UserOutlined style={{ fontSize: '18px' }} />,
            path: '/profile',
        },
        {
            label: 'search',
            icon: <SearchOutlined style={{ fontSize: '18px' }} />,
            path: '/search',
        },
        {
            label: 'cart',
            icon: <ShoppingCartOutlined style={{ fontSize: '18px' }} />,
            path: '/cart',
        },
        {
            label: 'signIn',
            icon: <LoginOutlined style={{ fontSize: '18px' }} onClick={() => navigate('/signIn')} />,
            path: '/signIn',
        },
        {
            label: 'signOut',
            icon: <LogoutOutlined style={{ fontSize: '18px' }} />,
            path: '/signUp',
        },
    ];

    const location = useLocation();
    const selectedPath = useSelector((state: IRootState) => state.navbarPath.path);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: IRootState) => state.auth.accessToken !== null);
    const navigate = useNavigate();
    // Initialize the selected key based on the current URL path
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                dispatch(setSelectedPath('home'));
                break;
            case '/shop':
                dispatch(setSelectedPath('shop'));
                break;
            case '/about':
                dispatch(setSelectedPath('about'));
                break;
            case '/contact':
                dispatch(setSelectedPath('contact'));
                break;
            default:
                dispatch(setSelectedPath(''));
        }
    }, [location.pathname, dispatch]);

    // Update the selected key when a menu item is clicked
    const handleOnClickButton = (e: any) => {
        dispatch(setSelectedPath(e.key));
    };

    return (
        <>
            <Row
                gutter={16}
                style={{
                    padding: '8px 0 0px 0',
                    position: 'fixed',
                    margin: '0',
                    zIndex: '50',
                    width: '100%',
                    backgroundColor: '#fff',
                    top: '0',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                }}
            >
                <Col className="navbar_logo" span={6}>
                    <Link to="/">
                        <img src={assets.logo} alt="logo" width={180} style={{ padding: '0 0 4px 20px' }} />
                    </Link>
                </Col>

                <Col className="navbar_navigation" span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Menu
                        style={{ fontSize: '16px', fontWeight: '600', backgroundColor: '#fff' }}
                        theme="light"
                        mode="horizontal"
                        selectedKeys={[selectedPath]}
                    >
                        <MenuItem key="home" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem key="shop" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                            <Link to="/shop">Shop</Link>
                        </MenuItem>
                        <MenuItem key="about" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                            <Link to="/about">About</Link>
                        </MenuItem>
                        <MenuItem key="contact" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                            <Link to="contact">Contact</Link>
                        </MenuItem>
                    </Menu>
                </Col>

                <Col
                    className="navbar_button"
                    span={6}
                    style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}
                >
                    <Flex gap="large" wrap="wrap" style={{ paddingTop: '4px' }}>
                        <ConfigProvider theme={{ components: { Button: { textHoverBg: '#ffffff' } } }}>
                            {isAuthenticated && (
                                <Badge>
                                    <Button
                                        icon={ButtonMenu[0].icon}
                                        style={{ background: 'transparent', border: 0 }}
                                        size="large"
                                        // onClick={() => handleOnClickButton(ButtonMenu[0].path)}
                                    />
                                </Badge>
                            )}

                            <Badge>
                                <Button
                                    icon={ButtonMenu[1].icon}
                                    style={{ background: 'transparent', border: 0 }}
                                    size="large"
                                    // onClick={() => handleOnClickButton(ButtonMenu[1].path)}
                                />
                            </Badge>

                            <Badge count={6} offset={[-8, 10]} size="small">
                                <Popover
                                    placement="bottomRight"
                                    arrow={{ pointAtCenter: true }}
                                    content={<ShoppingCart PurchasedItems={PurchasedItems} />}
                                >
                                    <Button
                                        icon={ButtonMenu[2].icon}
                                        size="large"
                                        style={{ background: 'transparent', border: 0 }}
                                    />
                                </Popover>
                            </Badge>

                            <Badge>
                                <Button
                                    icon={ButtonMenu[3].icon}
                                    style={{ background: 'transparent', border: 0 }}
                                    size="large"
                                    // onClick={() => handleOnClickButton(ButtonMenu[3].path)}
                                />
                            </Badge>

                            {isAuthenticated && (
                                <Badge>
                                    <Button
                                        icon={ButtonMenu[4].icon}
                                        style={{ background: 'transparent', border: 0 }}
                                        size="large"
                                        // onClick={() => handleOnClickButton(ButtonMenu[4].path)}
                                    />
                                </Badge>
                            )}
                        </ConfigProvider>
                    </Flex>
                </Col>
            </Row>

            <Outlet />

            <Footer />
        </>
    );
};

export default Navbar;
