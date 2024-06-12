import { Badge, Table, TableColumnsType } from 'antd';
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
            { title: 'Quantity', dataIndex: 'quantity', key: 'quantity', sorter: (a, b) => a.quantity - b.quantity },
            {
                title: 'Unit Price',
                dataIndex: 'unitPrice',
                key: 'unitPrice',
                sorter: (a, b) => Number(a.unitPrice.replace('$', '')) - Number(b.unitPrice.replace('$', '')),
            },
        ];

        const data: IProductOrder[] = orderData[row.key].products;

        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns: TableColumnsType<IOrderTableAttribute> = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'date',
            sorter: (a, b) => {
                const convertToDate = (y: string) => {
                    const [time, date] = y.split(' - ');
                    const [hour, minute] = time.split(':').map(Number);
                    const [day, month, year] = date.split('/').map(Number);
                    return new Date(year, month - 1, day, hour, minute).getTime();
                };

                return convertToDate(a.createdAt) - convertToDate(b.createdAt);
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (record) => {
                let statusText = '';
                let statusColor: 'success' | 'warning' | 'default' | 'processing' | 'error' | undefined = undefined;

                switch (record) {
                    case 'Success':
                        statusText = 'Success';
                        statusColor = 'success';
                        break;
                    case 'pending':
                        statusText = 'Pending';
                        statusColor = 'warning';
                        break;
                }
                return <Badge status={statusColor} text={statusText} />;
            },
            filters: [
                { text: 'Pending', value: 'pending' },
                { text: 'Success', value: 'success' },
            ],
            onFilter: (value, record) => record.status.indexOf(value as string) === 0,
        },
        {
            title: 'Total price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            sorter: (a, b) => Number(a.totalPrice.replace('$', '')) - Number(b.totalPrice.replace('$', '')),
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
            filters: [
                { text: 'cash', value: 'cash' },
                { text: 'banking', value: 'banking' },
            ],
            onFilter: (value, record) => record.payment.indexOf(value as string) === 0,
        },
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

    return <Table bordered columns={columns} expandable={{ expandedRowRender }} dataSource={data} />;
};
