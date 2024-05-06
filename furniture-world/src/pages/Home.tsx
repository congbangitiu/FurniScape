import { useState } from 'react';
import { Image, Button, Flex, Row, Col, Typography, theme } from 'antd';
import Banner from '../assets/images/Banner.png';
import Dining from '../assets/images/Dining.png';
import Living from '../assets/images/Living.png';
import Bedroom from '../assets/images/Bedroom.png';
import Syltherine from '../assets/images/Syltherine.png';
import { customColors } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Image1 from '../assets/images/Image1.png';
import Image2 from '../assets/images/Image2.png';
import Image3 from '../assets/images/Image3.png';
import Image4 from '../assets/images/Image4.png';
import Image5 from '../assets/images/Image5.png';
import Image6 from '../assets/images/Image6.png';
import Image7 from '../assets/images/Image7.png';
import Image8 from '../assets/images/Image8.png';
import Image9 from '../assets/images/Image9.png';
import Image10 from '../assets/images/Image10.png';
import Image11 from '../assets/images/Image11.png';
import Image12 from '../assets/images/Image12.png';
import Image13 from '../assets/images/Image13.png';
import Image14 from '../assets/images/Image14.png';
import Image15 from '../assets/images/Image15.png';
import Image16 from '../assets/images/Image16.png';

const { Text } = Typography;

export const HomePage = () => {
    const products = [
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
    ];

    const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
    ];
    const { token } = theme.useToken();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hoveredImages, setHoveredImages] = useState<boolean[]>(Array(images.length).fill(false));

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const setHoveredImage = (index: number, isHovered: boolean) => {
        setHoveredImages((prev) => prev.map((hovered, i) => (i === index ? isHovered : hovered)));
    };

    return (
        <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Flex style={{ position: 'relative' }}>
                <Image style={{ width: '100vw' }} preview={{ mask: null }} src={Banner} alt="Banner" />
                <Flex
                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        backgroundColor: token.colorBgContainer,
                        width: '500px',
                        right: '100px',
                        top: '25%',
                        borderRadius: '10px',
                        padding: '30px 50px',
                    }}
                >
                    <Text style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '3px' }}>New Arrival</Text>
                    <Text
                        style={{
                            fontSize: '52px',
                            fontWeight: '700',
                            lineHeight: '65px',
                            color: token.colorPrimary,
                            marginTop: '10px',
                        }}
                    >
                        Discover Our New Collection
                    </Text>
                    <Text style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', marginTop: '10px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis.
                    </Text>
                    <Button
                        block
                        style={{
                            backgroundColor: token.colorPrimary,
                            color: '#FFF',
                            fontWeight: '700',
                            fontSize: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '25px 72px',
                            marginTop: '40px',
                            width: '50%',
                        }}
                    >
                        BUY NOW
                    </Button>
                </Flex>
            </Flex>
            <Flex
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '50px',
                    width: '80%',
                }}
            >
                <Text
                    style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: token.colorTertiaryText,
                        margin: '0',
                    }}
                >
                    Browse The Range
                </Text>
                <Text
                    style={{
                        fontSize: '20px',
                        fontWeight: '400',
                        color: token.colorQuaternaryText,
                        margin: '0',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Row style={{ justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={Dining}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600' }}>Dining</p>
                    </Col>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={Living}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600' }}>Living</p>
                    </Col>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={Bedroom}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600' }}>Bedroom</p>
                    </Col>
                </Row>

                <Text
                    style={{
                        fontSize: '40px',
                        fontWeight: '700',
                        color: token.colorTertiaryText,
                        marginTop: '20px',
                    }}
                >
                    Our Products
                </Text>

                <div
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
                                    src={Syltherine}
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
                                <Col
                                    style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '15px' }}
                                >
                                    <Text style={{ fontSize: '24px', fontWeight: '600' }}>Syltherine</Text>
                                    <Text
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: token.colorQuaternaryText,
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
                                                color: token.colorQuaternaryText,
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
                                            backgroundColor: '#fff',
                                            color: token.colorPrimary,
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            textAlign: 'center',
                                            width: '60%',
                                            height: '50px',
                                            marginTop: '10px',
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
                                </Flex>
                            )}
                        </Flex>
                    ))}
                </div>
                <Button
                    style={{
                        backgroundColor: '#fff',
                        color: token.colorPrimary,
                        fontWeight: '600',
                        fontSize: '16px',
                        textAlign: 'center',
                        width: '250px',
                        height: '50px',
                        marginTop: '50px',
                        border: `2px solid ${token.colorPrimary}`,
                    }}
                >
                    Show more
                </Button>
            </Flex>
            <Flex style={{ flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                <Text style={{ fontSize: '20px', fontWeight: '600', margin: '0', color: token.colorQuaternaryText }}>
                    Share your setup with
                </Text>
                <Text style={{ fontSize: '40px', fontWeight: '700', margin: '0px 0 20px 0' }}>
                    #FurniScapeFurniture
                </Text>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(8, 2fr)', margin: '20px' }}>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            style={{
                                objectFit: 'contain',
                                cursor: 'pointer',
                                transition: 'all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)',
                                transform: hoveredImages[index] ? 'scale(1.1)' : 'scale(1)',
                            }}
                            preview={{
                                mask: null,
                                style: {
                                    objectFit: 'contain',
                                    cursor: 'pointer',
                                    transition: 'all 0.1s cubic-bezier(0.15, 0.83, 0.66, 1)',
                                    transform: hoveredImages[index] ? 'scale(1.1)' : 'scale(1)',
                                },
                            }}
                            onMouseEnter={() => setHoveredImage(index, true)}
                            onMouseLeave={() => setHoveredImage(index, false)}
                        />
                    ))}
                </div>
            </Flex>
        </Flex>
    );
};
