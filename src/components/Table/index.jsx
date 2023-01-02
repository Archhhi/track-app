import style from './style.module.css'
import { Table } from 'antd'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/selectors/tableSelectors'
import { changeRoute } from '../../redux/actions/map'

const columns = [
  {
    title: 'Номер заявки',
    dataIndex: 'orderNumber'
  },
  {
    title: 'Координаты ОТ lat',
    dataIndex: 'fromLat'
  },
  {
    title: 'Координаты ОТ lng',
    dataIndex: 'fromLng'
  },
  {
    title: 'Координаты ДО lat',
    dataIndex: 'toLat'
  },
  {
    title: 'Координаты ДО lng',
    dataIndex: 'toLng'
  }
]

function TableOrders() {
  const dispatch = useDispatch()
  const orders = useSelector(getOrders)
  const [selectedRowKey, setSelectedRowKey] = useState('')

  const data = useMemo(
    () =>
      orders.map((order) => ({
        key: order.id,
        orderNumber: `№ ${order.orderNumber}`,
        fromLat: order.fromLat,
        fromLng: order.fromLng,
        toLat: order.toLat,
        toLng: order.toLng
      })),
    [orders]
  )

  function onSelectedRow(record) {
    setSelectedRowKey(record.key)
    dispatch(
      changeRoute(
        [record.fromLat, record.fromLng],
        [record.toLat, record.toLng]
      )
    )
  }

  return (
    <div className={style.tableWrapper}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={(record) =>
          record.key === selectedRowKey ? style.selectedRow : ''
        }
        onRow={(record) => {
          return {
            onClick: () => onSelectedRow(record)
          }
        }}
      />
    </div>
  )
}

export default TableOrders
