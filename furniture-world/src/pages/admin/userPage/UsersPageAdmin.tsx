import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { GetProp, TableProps } from 'antd';
import qs from 'qs';
import { IUserData } from 'src/redux/api/authSlice';

type ColumnsType<T> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface IUserTableType extends IUserData {
    id: string;
    role: string;
    profileImg_dir: any;
    createdAt: string;
    updatedAt: string;
}

export const UsersPageAdmin = () => {
    
    const columns: ColumnsType<IUserTableType> = [
        {
            title: 'User ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Avatar',
            dataIndex: 'profileImg_dir',
            key: 'profileImg_dir',
        },
        {
            title: 'Name',
            dataIndex: 'fullname',
            key: 'fullname',
            width: '20%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Updated Date',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
    ];

    const data: IUserTableType[] = [];



    return (
        // <Table
        //     columns={columns}
        //     dataSource={data}
        //     pagination={tableParams.pagination}
        //     loading={loading}
        //     onChange={handleTableChange}
        // />
        <></>
    );
};

// userId name email phone address country createdAt
