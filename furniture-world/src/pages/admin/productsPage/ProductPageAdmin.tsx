import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, InputRef, Space, Table, TableColumnType, type GetProp, type TableProps } from 'antd';
import qs from 'qs';
import axios from 'axios';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';

type ColumnsType<T> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface IProductTableType {
    id: string;
    billingName: string;
    orderDate: Date;
    price: number;
    paymentMethod: string;
}

type IProductIndex = keyof IProductTableType;

interface IProductsTableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}

const columns: ColumnsType<IProductTableType> = [
    {
        title: 'ID',
        dataIndex: 'id',
        sorter: true,
        width: '15%',
    },
    {
        title: 'Billing Name',
        dataIndex: 'billingName',
        width: '20%',
    },
    { title: 'Date', dataIndex: 'date', width: '20%', sorter: true },
    { title: 'Price', dataIndex: 'price', sorter: true },
    { title: 'Payment Method', dataIndex: 'paymentMethod', width: '15%' },
    { title: 'Action', dataIndex: 'action' },
];

const getRandomUserParams = (params: IProductsTableParams) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

export const ProductPageAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tableParams, setTableParams] = useState<IProductsTableParams>({
        pagination: {
            pageSize: 10,
            current: 1,
        },
    });
    // Search Column
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: IProductIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    // temporary data
    const [data, setData] = useState<IProductTableType[]>();

    const callAPI = async () => {
        setIsLoading(true);
        const queryString = qs.stringify(getRandomUserParams(tableParams));

        await axios
            .get(`http://randomuser.me/api/?${queryString}`)
            .then((response) => {
                const { data } = response;
                setData(data.results);
                setIsLoading(false);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: 200, // 200 là dữ liệu mẫu, bạn nên lấy từ phản hồi của server
                    },
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        callAPI();
    }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

    const handleTableChange: TableProps['onChange'] = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };

    // Search drop down
    const getColumnSearchProps = (dataIndex: IProductIndex): TableColumnType<IProductTableType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex
                ? // <Highlighter
                  //     highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                  //     searchWords={[searchText]}
                  //     autoEscape
                  //     textToHighlight={text ? text.toString() : ''}
                  // />
                  text
                : // text
                  null,
    });
    return (
        <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={isLoading}
            onChange={handleTableChange}
        />
    );
};

// column action
// search product name
// Fixed Header
// id BillingName OrderDate Price PaymentMethod Action
