import { Table, TableColumnsType } from 'antd';
import React from 'react';
import { IOrder, IProductOrder } from 'src/redux/order/orderSlice';

type Props = {};

interface IOrderTableAttribute {
    key: number;
    id: string;
    status: string;
    totalPrice: string;
    payment: string;
    createdAt: string;
}

export const OrderDataTable = ({ orderData }: { orderData: IOrder[] }) => {
    const expandedRowRender = (row: IOrderTableAttribute) => {
        const columns: TableColumnsType<IProductOrder> = [
            { title: 'Image', dataIndex: 'img', key: 'image' },
            { title: 'Product', dataIndex: 'product', key: 'product' },
            { title: 'Category', dataIndex: 'category', key: 'category' },
            { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
            { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
        ];

        const data: IProductOrder[] = orderData[row.key].products;
        console.log(data);

        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns: TableColumnsType<IOrderTableAttribute> = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Date', dataIndex: 'createdAt', key: 'date' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        { title: 'Total price', dataIndex: 'totalPrice', key: 'totalPrice' },
        { title: 'Payment', dataIndex: 'payment', key: 'payment' },
    ];

    const data: IOrderTableAttribute[] = [];

    orderData.map((order, index) => {
        data.push({
            key: index,
            id: order.id,
            status: order.status,
            totalPrice: String(order.total),
            payment: order.payment,
            createdAt: order.createdAt,
        });
    });

    return <Table columns={columns} expandable={{ expandedRowRender }} dataSource={data} />;
};
