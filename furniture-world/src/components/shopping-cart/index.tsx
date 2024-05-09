import React from 'react';
import { Image, Button, Flex, Row, Col, Typography, Input, Table, theme } from 'antd';
import { customColors } from '../../theme';
import image from '../../assets/images/Image1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css';

type Props = {};
const { Text } = Typography;

export const ShoppingCart = (props: Props) => {
    const { token } = theme.useToken();
    return (
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                right: '0',
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <Text style={{ fontSize: '26px', fontWeight: '600' }}>Shopping Cart</Text>
            <Flex
                style={{
                    flexDirection: 'column',
                    gap: '30px',
                    marginTop: '30px',
                    maxHeight: '400px',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                }}
                className="item-list"
            >
                <Row style={{ justifyContent: 'center', alignItems: 'center', gap: '30px', marginRight: '10px' }}>
                    <Image
                        src={image}
                        alt=""
                        preview={{ mask: null }}
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                    ></Image>
                    <Flex style={{ flexDirection: 'column', gap: '5px' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '500' }}>Asgaard sofa</Text>
                        <Row
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                }}
                            >
                                1
                            </Text>
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                            />
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: token.colorPrimary,
                                }}
                            >
                                Rs. 250,000.00
                            </Text>
                        </Row>
                    </Flex>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ fontSize: '20px', color: customColors.colorQuaternaryText, cursor: 'pointer' }}
                        className="close-btn"
                    />
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center', gap: '30px', marginRight: '10px' }}>
                    <Image
                        src={image}
                        alt=""
                        preview={{ mask: null }}
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                    ></Image>
                    <Flex style={{ flexDirection: 'column', gap: '5px' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '500' }}>Asgaard sofa</Text>
                        <Row
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                }}
                            >
                                1
                            </Text>
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                            />
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: token.colorPrimary,
                                }}
                            >
                                Rs. 250,000.00
                            </Text>
                        </Row>
                    </Flex>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ fontSize: '20px', color: customColors.colorQuaternaryText, cursor: 'pointer' }}
                        className="close-btn"
                    />
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center', gap: '30px', marginRight: '10px' }}>
                    <Image
                        src={image}
                        alt=""
                        preview={{ mask: null }}
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                    ></Image>
                    <Flex style={{ flexDirection: 'column', gap: '5px' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '500' }}>Asgaard sofa</Text>
                        <Row
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                }}
                            >
                                1
                            </Text>
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                            />
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: token.colorPrimary,
                                }}
                            >
                                Rs. 250,000.00
                            </Text>
                        </Row>
                    </Flex>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ fontSize: '20px', color: customColors.colorQuaternaryText, cursor: 'pointer' }}
                        className="close-btn"
                    />
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center', gap: '30px', marginRight: '10px' }}>
                    <Image
                        src={image}
                        alt=""
                        preview={{ mask: null }}
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                    ></Image>
                    <Flex style={{ flexDirection: 'column', gap: '5px' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '500' }}>Asgaard sofa</Text>
                        <Row
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                }}
                            >
                                1
                            </Text>
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                            />
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: token.colorPrimary,
                                }}
                            >
                                Rs. 250,000.00
                            </Text>
                        </Row>
                    </Flex>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ fontSize: '20px', color: customColors.colorQuaternaryText, cursor: 'pointer' }}
                        className="close-btn"
                    />
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center', gap: '30px', marginRight: '10px' }}>
                    <Image
                        src={image}
                        alt=""
                        preview={{ mask: null }}
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                    ></Image>
                    <Flex style={{ flexDirection: 'column', gap: '5px' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '500' }}>Asgaard sofa</Text>
                        <Row
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                }}
                            >
                                1
                            </Text>
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                            />
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: token.colorPrimary,
                                }}
                            >
                                Rs. 250,000.00
                            </Text>
                        </Row>
                    </Flex>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ fontSize: '20px', color: customColors.colorQuaternaryText, cursor: 'pointer' }}
                        className="close-btn"
                    />
                </Row>
            </Flex>
            <Row style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <Text style={{ fontSize: '18px', fontWeight: '500' }}>Subtotal</Text>
                <Text style={{ fontSize: '20px', fontWeight: '500', color: token.colorPrimary }}>Rs. 520,000.00</Text>
            </Row>
            <Row style={{ width: '100%', border: `1px solid ${customColors.colorQuaternaryText}`, margin: '20px 0' }} />
            <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
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
            </Row>
        </Flex>
    );
};
