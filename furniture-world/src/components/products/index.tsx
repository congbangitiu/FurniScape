import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router';
import { Image, Button, Flex, Row, Col, Typography, theme, Card, Tooltip, Badge } from 'antd';
import { assets } from '../../assets';
import { customColors } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IProduct, addItem } from 'src/redux/cart/cartSlice';
import { PlusOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { IProductInStock } from 'src/redux/products/productsSlice';

const { Text } = Typography;

export interface IProductList {
    productsDetailList: IProductInStock[]
}

export const Products: React.FC<IProductList> = ({ productsDetailList }) => {
    const { token } = theme.useToken();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddProduct = (product: IProduct) => {
        dispatch(addItem(product));
    };

    return (
        <Flex
            style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto',
                gap: '30px',
                marginTop: '20px',
            }}
        >
            {productsDetailList.map((productDetail, index) => (
                <Badge.Ribbon
                    text={productDetail.product.status}
                    color={productDetail.product.status !== 'New' ? 'red' : 'green'}
                    style={{ fontSize: '15px' }}
                >
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<Image alt="img" src={productDetail.product.image} />}
                        actions={[
                            <Tooltip placement="bottom" title="Share">
                                <ShareAltOutlined
                                    key="setting"
                                    //  style={{ margin: '5px' }}
                                />
                            </Tooltip>,
                            <Tooltip placement="bottom" title="Add">
                                <PlusOutlined
                                    key="addProduct"
                                    // style={{ margin: '5px' }}
                                    onClick={() => handleAddProduct(productDetail.product)}
                                />
                                ,
                            </Tooltip>,
                        ]}
                    >
                        <div onClick={() => navigate(`/products/${productDetail.product.id}`)}>
                            <Card.Meta title={productDetail.product.name} description={productDetail.product.description} />
                            <Typography.Title level={5} style={{ margin: '8px 0 0 0' }}>
                                {productDetail.product.price}$
                            </Typography.Title>
                        </div>
                    </Card>
                </Badge.Ribbon>
            ))}
            <Outlet />
        </Flex>
    );
};
