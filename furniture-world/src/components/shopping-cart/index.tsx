import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Flex, Row,  Typography, theme } from 'antd';
import { customColors } from '../../theme';
import { assets } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css';

type Props = {};
const { Text } = Typography;

export const ShoppingCart = (props: Props) => {
    const { token } = theme.useToken();
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
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                right: '0',
                backgroundColor: '#fff',
                padding: '20px 30px 30px 30px',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                marginRight: '10px',
            }}
        >
            <Text style={{ fontSize: '22px', fontWeight: '600' }}>Shopping Cart</Text>
            <Flex
                style={{
                    flexDirection: 'column',
                    gap: '30px',
                    marginTop: '30px',
                    maxHeight: '250px',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    paddingRight: '10px',
                    boxSizing: 'border-box',
                }}
                className="item-list"
            >
                {PurchasedItems.map((item, index) => (
                    <Row
                        key={index}
                        style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '40px',
                        }}
                    >
                        <Row
                            style={{
                                alignItems: 'center',
                                gap: '20px',
                            }}
                        >
                            <Image
                                src={item.image}
                                alt=""
                                preview={{ mask: null }}
                                style={{ width: '60px', height: '60px', borderRadius: '10px' }}
                            ></Image>
                            <Flex style={{ flexDirection: 'column', gap: '5px' }}>
                                <Text style={{ fontSize: '18px', fontWeight: '500' }}>{item.name}</Text>
                                <Row
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {item.quantity}
                                    </Text>
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: token.colorPrimary,
                                        }}
                                    >
                                        {item.price}
                                    </Text>
                                </Row>
                            </Flex>
                        </Row>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{ fontSize: '18px', color: customColors.colorQuaternaryText, cursor: 'pointer' }}
                            className="close-btn"
                        />
                    </Row>
                ))}
            </Flex>
            <Row style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <Text style={{ fontSize: '16px', fontWeight: '500' }}>Subtotal</Text>
                <Text style={{ fontSize: '18px', fontWeight: '500', color: token.colorPrimary }}>Rs. 520,000.00</Text>
            </Row>
            <Row style={{ width: '100%', border: `1px solid ${customColors.colorQuaternaryText}`, margin: '20px 0' }} />
            <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/cart">
                    <Button
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '15px 20px',
                            backgroundColor: 'transparent',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '500',
                            border: `2px solid`,
                        }}
                    >
                        Cart
                    </Button>
                </Link>
                <Link to="/checkout">
                    <Button
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '15px 20px',
                            backgroundColor: 'transparent',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '500',
                            border: `2px solid`,
                        }}
                    >
                        Checkout
                    </Button>
                </Link>
            </Row>
        </Flex>
    );
};
