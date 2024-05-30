import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Flex, Row, Typography, theme } from 'antd';
import { customColors } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

type Props = {};
const { Text } = Typography;
type ShoppingCartProps = {
    PurchasedItems: Array<{
        image: string;
        name: string;
        quantity: number;
        price: string;
    }>;
};

export const ShoppingCart = ({ PurchasedItems }: ShoppingCartProps) => {
    const { token } = theme.useToken();

    return (
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                right: '0',
                backgroundColor: '#fff',
                padding: '20px 30px 30px 30px',
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
