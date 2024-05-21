import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router';
import { Image, Button, Flex, Row, Col, Typography, theme } from 'antd';
import { assets } from '../../assets';
import { customColors } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const { Text } = Typography;

export const Products = () => {
    const products = [
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: assets.syltherin,
        },
    ];

    const { token } = theme.useToken();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <Flex
            style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto',
                gap: '20px',
                marginTop: '20px',
            }}
        >
            {products.map((product, index) => (
                <Flex
                    key={index}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Col
                        style={{
                            padding: '25px',
                            borderRadius: '10px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            position: 'relative',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={assets.syltherine}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <Col
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px',
                                height: '50px',
                                fontSize: '16px',
                                fontWeight: '500',
                                backgroundColor: customColors.colorRedBadge,
                                borderRadius: '100px',
                                color: '#fff',
                            }}
                        >
                            -30%
                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '15px' }}>
                            <Text style={{ fontSize: '24px', fontWeight: '600' }}>Syltherine</Text>
                            <Text
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: customColors.colorQuaternaryText,
                                    margin: '0',
                                }}
                            >
                                Stylish cafe chair
                            </Text>
                            <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: '20px', fontWeight: '600' }}>Rp 2.500.000</Text>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: customColors.colorQuaternaryText,
                                        textDecoration: 'line-through',
                                    }}
                                >
                                    Rp 3.500.000
                                </Text>
                            </Row>
                        </Col>
                    </Col>
                    {hoveredIndex === index && (
                        <Flex
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                zIndex: 2,
                                backgroundColor: customColors.colorOverlay,
                                borderRadius: '10px',
                                opacity: '0.9',
                            }}
                        >
                            <Button
                                style={{
                                    color: '#fff',
                                    backgroundColor: token.colorPrimary,
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    textAlign: 'center',
                                    width: '60%',
                                    height: '50px',
                                    marginTop: '10px',
                                    border: 'none',
                                }}
                            >
                                Add to cart
                            </Button>
                            <Row style={{ width: '90%', justifyContent: 'space-around', marginTop: '20px' }}>
                                <Row
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = token.colorPrimary)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                >
                                    <FontAwesomeIcon icon={faShareFromSquare} /> Share
                                </Row>
                                <Row
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = token.colorPrimary)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                >
                                    <FontAwesomeIcon icon={faCodeCompare} /> Compare
                                </Row>
                                <Row
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = token.colorPrimary)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                >
                                    <FontAwesomeIcon icon={faHeart} /> Like
                                </Row>
                            </Row>

                            <Button
                                style={{
                                    backgroundColor: '#fff',
                                    color: token.colorPrimary,
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    width: '50%',
                                    height: '40px',
                                    marginTop: '50px',
                                }}
                                onClick={() => navigate('/shop/products/:id')}
                            >
                                More information
                            </Button>
                        </Flex>
                    )}
                </Flex>
            ))}
            <Outlet />
        </Flex>
    );
};
