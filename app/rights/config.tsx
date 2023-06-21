import type { ColumnsType } from "antd/es/table";
import { IRightsTableItem, IGiftsTableItem } from "./type";
import { Button } from "antd";

export const tabsItem = [
  {
    key: "rights",
    label: "权益明细",
  },
  {
    key: "gifts",
    label: "礼品兑换",
  },
];

export const tableRightsColumns: ColumnsType<IRightsTableItem> = [
  {
    title: "权益项",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "所需 TD",
    dataIndex: "price",
    key: "price",
    align: "right",
    width: 90,
  },
];

export const getTableGiftsColumns = (
  onClick: (record: IGiftsTableItem) => void
): ColumnsType<IGiftsTableItem> => {
  return [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "数量",
      dataIndex: "count",
      key: "count",
      align: "center",
      render: (value, record) => {
        return `${value}/${record.fullCount}`;
      },
    },
    {
      title: "消费",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: 70,
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      align: "center",
      width: 90,
      render: (_, record) => (
        <Button onClick={() => onClick(record)}>兑换</Button>
      ),
    },
  ];
};
