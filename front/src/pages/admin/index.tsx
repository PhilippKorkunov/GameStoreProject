import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./admin.module.scss"
import {Checkbox, Table} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import axios from "axios";

const AdminPage: React.FC = () => {

  const [dataSource, setDataSource] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/Store/SelectLog")
      .then((response) => setDataSource(response.data))
      .catch((reject) => console.log(reject))
  }, [])
  const onChange = (e: CheckboxChangeEvent) => {
    return;
  }
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id_product_log',
      key: 'id_product_log'
    },
    {
      title: 'Дата',
      dataIndex: 'datetime',
      key: 'datetime',
    },
    {
      title: 'Электронная почта',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Заказ',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Подтвердить',
      key: 'action',
      render: (_: any, row: any) => (
        <Checkbox className={styles.row} onChange={onChange}>Выполнен</Checkbox>
      )
    }
  ];
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Table dataSource={dataSource}
               columns={columns}
               rowClassName={styles.row}
               bordered
        />
      </div>
    </MainLayout>
  );
}

export default AdminPage;