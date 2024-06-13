import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, InputRef, Space, Table, TableColumnsType, type GetProp, type TableProps } from 'antd';
import qs from 'qs';
import axios from 'axios';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import { IAppDispatch, IRootState } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IProduct, fetchProducts } from 'src/redux/products/productsSlice';
import { sortedDate } from 'src/components/sortDate/sortDate';

interface IProductsTableType extends IProduct {
    key: number;
}

export const ProductPageAdmin = () => {
    const dispatch = useDispatch<IAppDispatch>();
    const productsList = useSelector((state: IRootState) => state.products.items) || [];

    const [loading, setLoading] = useState(false);

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
        <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            expandable={{ expandedRowRender: (record) => <p style={{ margin: '0 0 0 48px' }}>{record.description}</p> }}
            scroll={{x: 400}}
        />
    );
};
