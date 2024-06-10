import { useState, ChangeEvent } from 'react';
import { Image, Button, Flex, Row, Col, Typography, Input, Table, theme } from 'antd';
import type { ThHTMLAttributes, TdHTMLAttributes } from 'react';
import type { TableColumnsType } from 'antd';
import { customColors, navBarHeight } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets';
import { ChangeInformation } from '../../components/userComponents/change-info';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/redux/store';
import { IUserData } from 'src/redux/api/authSlice';

const { Text } = Typography;

export const ProfilePage = () => {
    const { token } = theme.useToken();
    const [query, setQuery] = useState('');
    const [isChangeInfo, setIsChangeInfo] = useState(false);
    const userData: IUserData = useSelector((state: IRootState) => state.auth.userData);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleClearSearch = () => {
        setQuery('');
    };

    const dataSource = [
        {
            key: '1',
            image: (
                <Image
                    preview={{ mask: null }}
                    src={assets.image1}
                    style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                />
            ),
            name: 'Product 1',
            category: 'Category A',
            quantity: 2,
            price: '$50.00',
        },
        {
            key: '2',
            image: (
                <Image
                    preview={{ mask: null }}
                    src={assets.image1}
                    style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                />
            ),
            name: 'Product 2',
            category: 'Category B',
            quantity: 3,
            price: '$70.00',
        },
        {
            key: '3',
            image: (
                <Image
                    preview={{ mask: null }}
                    src={assets.image1}
                    style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                />
            ),
            name: 'Product 3',
            category: 'Category C',
            quantity: 1,
            price: '$40.00',
        },
        {
            key: '4',
            image: (
                <Image
                    preview={{ mask: null }}
                    src={assets.image1}
                    style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                />
            ),
            name: 'Product 4',
            category: 'Category D',
            quantity: 4,
            price: '$90.00',
        },
    ];

    interface DataType {
        key: string;
        name: string;
        category: string;
        quantity: number;
        price: string;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            align: 'center',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            align: 'center',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'center',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
        },
    ];

    return (
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                position: 'relative',
                paddingTop: `${navBarHeight}`,
            }}
        >
            <Flex style={{ width: '70%', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
                <Flex style={{ gap: '20px', alignItems: 'center' }}>
                    <Image
                        src={assets.avatar}
                        preview={{ mask: null }}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '100px',
                            border: `5px solid ${token.colorPrimary}`,
                        }}
                    />
                    <Flex style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: '30px', fontWeight: '600' }}>{userData.fullname}</Text>
                        <Text style={{ fontSize: '20px', fontWeight: '500', color: customColors.colorQuaternaryText }}>
                            {userData.email}
                        </Text>
                    </Flex>
                </Flex>
                <Button
                    size="large"
                    style={{
                        fontWeight: '600',
                    }}
                    onClick={() => setIsChangeInfo(true)}
                >
                    Change Information
                </Button>
            </Flex>
            <Flex style={{ width: '70%', marginTop: '50px', flexDirection: 'column' }}>
                <Flex justify="space-between">
                    <Text style={{ fontSize: '30px', fontWeight: '500' }}>Purchase History</Text>
                    <Input.Search
                        size="large"
                        placeholder="input search text"
                        allowClear
                        // onSearch={onSearch}
                        style={{ width: '25%' }}
                    />
                </Flex>
                <Flex
                    style={{
                        width: '100%',
                        marginTop: '30px',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFF3E3',
                        borderRadius: '10px',
                        gap: '30px',
                    }}
                >
                    <Col style={{ width: '70%' }}>
                        <Table
                            pagination={false}
                            dataSource={dataSource}
                            columns={columns}
                            components={{
                                header: {
                                    cell: (props: ThHTMLAttributes<HTMLTableCellElement>) => (
                                        <th
                                            {...props}
                                            style={{
                                                ...props.style,
                                                backgroundColor: '#FFF3E3',
                                                textAlign: 'center',
                                                fontSize: '18px',
                                            }}
                                        />
                                    ),
                                },
                                body: {
                                    cell: (props: TdHTMLAttributes<HTMLTableCellElement>) => (
                                        <td
                                            {...props}
                                            style={{
                                                ...props.style,
                                                backgroundColor: '#FFF3E3',
                                                textAlign: 'center',
                                                fontSize: '16px',
                                            }}
                                        />
                                    ),
                                },
                            }}
                        />
                    </Col>
                    <Col style={{ width: '30%', margin: '20px 20px 0 0' }}>
                        <Flex
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                padding: '20px 30px',
                                borderRadius: '10px',
                            }}
                        >
                            <Text style={{ fontSize: '28px', fontWeight: '500' }}>Order</Text>
                            <Flex
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'auto auto',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    alignItems: 'center',
                                    marginTop: '15px',
                                    width: '100%',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    Status
                                </Text>
                                <Row
                                    style={{
                                        backgroundColor: token.colorBgContainer,
                                        borderRadius: '5px',
                                        justifyContent: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: token.colorPrimary,
                                            padding: '5px',
                                        }}
                                    >
                                        Done
                                    </Text>
                                </Row>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    Order date
                                </Text>
                                <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>
                                    dd/mm/yyyy
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    Payment
                                </Text>
                                <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>
                                    Credit card
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    Amount
                                </Text>
                                <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>3 items</Text>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    Subtotal
                                </Text>
                                <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>
                                    369.000vnd
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    Shipping
                                </Text>
                                <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>Free</Text>
                            </Flex>
                            <Row
                                style={{
                                    border: `1px solid ${customColors.colorQuaternaryText}`,
                                    width: '100%',
                                    marginTop: '10px',
                                }}
                            ></Row>
                            <Flex style={{ width: '100%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Text style={{ fontSize: '22px', fontWeight: '500' }}>Total</Text>
                                <Text
                                    style={{
                                        fontSize: '25px',
                                        fontWeight: '500',
                                        color: token.colorPrimary,
                                        textAlign: 'right',
                                    }}
                                >
                                    369.000vnd
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex style={{ justifyContent: 'center', gap: '20px' }}>
                            <Button
                                size="large"
                                style={{
                                    margin: '30px',
                                    fontWeight: '600',
                                }}
                            >
                                Rating
                            </Button>
                            <Button
                                size="large"
                                style={{
                                    margin: '30px',
                                    fontWeight: '600',
                                }}
                            >
                                Reorder
                            </Button>
                        </Flex>
                    </Col>
                </Flex>
            </Flex>

            {isChangeInfo && (
                <Flex
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        overflow: 'hidden',
                        animation: 'fadeIn 0.3s ease-in',
                    }}
                    onClick={() => setIsChangeInfo(false)}
                >
                    <Flex
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: '50%',
                            animation: 'slideUp 0.3s ease-out',
                        }}
                    >
                        <ChangeInformation setIsChangeInfo={setIsChangeInfo} />
                    </Flex>
                    <style>
                        {`  
                            @keyframes fadeIn {
                                from {
                                    background-color: rgba(0, 0, 0, 0);
                                }
                                to {
                                    background-color: rgba(0, 0, 0, 0.7);
                                }
                            }
                            @keyframes slideUp {
                                from {
                                    transform: translate(-50%, 100%);
                                }
                                to {
                                    transform: translate(-50%, -50%);
                                }
                            }
                        `}
                    </style>
                </Flex>
            )}
        </Flex>
    );
};
