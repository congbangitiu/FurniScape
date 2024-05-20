import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Flex, Row, Col, Typography, theme } from 'antd';
import { assets } from '../assets';
import { customColors } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const { Text } = Typography;

export const HomePage = () => {
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

    const images = [
        assets.image1,
        assets.image2,
        assets.image3,
        assets.image4,
        assets.image5,
        assets.image6,
        assets.image7,
        assets.image8,
        assets.image9,
        assets.image10,
        assets.image11,
        assets.image12,
        assets.image13,
        assets.image14,
        assets.image15,
        assets.image16,
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
        <Flex style={{ flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
            <Flex style={{ position: 'relative' }}>
                <Image style={{ width: '100vw' }} preview={{ mask: null }} src={assets.banner} alt="Banner" />
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
                        "Transforming Spaces, Creating Comfort – Discover Your Perfect Furniture with Us!"
                    </Text>
                    <Link to="/shop">
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
                    </Link>
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
                        color: customColors.colorTertiaryText,
                        margin: '0',
                    }}
                >
                    Browse The Range
                </Text>
                <Text
                    style={{
                        fontSize: '20px',
                        fontWeight: '400',
                        color: customColors.colorQuaternaryText,
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
                            src={assets.dining}
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
                            src={assets.living}
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
                            src={assets.bedroom}
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
                        color: customColors.colorTertiaryText,
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
                                <Col
                                    style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '15px' }}
                                >
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
                <Link to="/shop">
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
                </Link>
            </Flex>
            <Flex style={{ flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                <Text
                    style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        margin: '0',
                        color: customColors.colorQuaternaryText,
                    }}
                >
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
