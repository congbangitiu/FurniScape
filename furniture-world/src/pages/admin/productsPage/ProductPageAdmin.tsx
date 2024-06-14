import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    Input,
    InputRef,
    Modal,
    Space,
    Table,
    TableColumnsType,
    Upload,
    message,
    type GetProp,
    type TableProps,
} from 'antd';
import qs from 'qs';
import axios from 'axios';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import { IAppDispatch, IRootState } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IProduct, fetchProducts, updateProductImage } from 'src/redux/products/productsSlice';
import { sortedDate } from 'src/components/sortDate/sortDate';
import { UploadOutlined } from '@ant-design/icons';

interface IProductsTableType extends IProduct {
    key: number;
}

export const ProductPageAdmin = () => {
    const dispatch = useDispatch<IAppDispatch>();
    const productsList = useSelector((state: IRootState) => state.products.items) || [];

    const [loading, setLoading] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentKey, setCurrentKey] = useState<React.Key | null>(null);
    const [currentId, setCurrentId] = useState('');
    const [uploadImage, setUpLoadImage] = useState<any>();
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    const handleOpenModal = (key: React.Key, id: string) => {
        setCurrentKey(key);
        setCurrentId(id);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setCurrentKey(null);
    };

    // const handleUpload = (image: any) => {
    //     setUpLoadImage(image);
    // };

    const handleUpload = (image: File) => {
        // Perform any necessary validations here
        const isJpgOrPng = image.type === 'image/jpeg' || image.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            return false;
        }
        // Allow upload
        setUpLoadImage(image);

        return true;
    };

    const handleCustomUpload = (file: File | Blob | string) => {
        // Simulate upload (replace with actual upload logic)
        if (file instanceof File) {
            setTimeout(() => {
                const reader = new FileReader();
                reader.onload = () => {
                    setImageUrl(reader.result as string);
                };
                reader.readAsDataURL(file);
            }, 1000); // Simulate upload delay
        }
    };

    const handleSaveButtonClick = () => {
        if (uploadImage !== undefined) {
            dispatch(updateProductImage({ image_dir: uploadImage, id: currentId }));
        }
        setImageUrl(undefined);
        handleCloseModal();
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const columns: TableColumnsType<IProductsTableType> = [
        {
            title: 'Product Image',
            dataIndex: 'image_dir',
            key: 'image_dir',
            width: '150',
        },
        {
            title: 'Product Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filters: [
                {
                    text: 'Dining Room',
                    value: 'Dining Room',
                },
                {
                    text: 'Kitchen',
                    value: 'Kitchen',
                },
                {
                    text: 'Bedroom',
                    value: 'Bedroom',
                },
                {
                    text: 'Office',
                    value: 'Office',
                },
                {
                    text: 'Living Room',
                    value: 'Living Room',
                },
            ],
            onFilter: (value, record) => record.category.indexOf(value as string) === 0,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => `$${text}`,
            sorter: (a, b) => Number(a.price) - Number(b.price),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [
                {
                    text: 'New',
                    value: 'New',
                },
                {
                    text: 'Discount',
                    value: 'Discount',
                },
            ],
            onFilter: (value, record) => record.category.indexOf(value as string) === 0,
        },
        {
            title: 'Create At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            sorter: (a, b) => sortedDate(a.createdAt, b.createdAt),
        },
        {
            title: 'Update At',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            sorter: (a, b) => sortedDate(a.updatedAt, b.updatedAt),
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (_, record) => <a onClick={() => handleOpenModal(record.key, record.id)}>Update Product Image</a>,
        },
    ];

    const data: IProductsTableType[] = [];

    productsList.map((product, index) => {
        data.push({
            key: index,
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image_dir: null,
            description: product.description,
            discount: undefined,
            status: product.status,
            quantity: product.quantity,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        });
    });

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                expandable={{
                    expandedRowRender: (record) => <p style={{ margin: '0 0 0 48px' }}>{record.description}</p>,
                }}
                scroll={{ x: 400 }}
            />
            <Modal
                title="Upload Image"
                visible={isModalVisible}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="back" onClick={handleCloseModal}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSaveButtonClick}>
                        Save
                    </Button>,
                ]}
            >
                {imageUrl !== undefined ? (
                    <img alt="Uploaded" style={{ width: '100%' }} src={imageUrl} />
                ) : (
                    <Upload
                        beforeUpload={handleUpload}
                        customRequest={({ file }) => handleCustomUpload(file)}
                        showUploadList={false}
                    >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                )}
            </Modal>
        </>
    );
};
