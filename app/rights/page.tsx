"use client";
import { useAtom } from "jotai";
import { Statistic, Card, Pagination, Tabs, Table } from "antd";
import { WalletAddress, TDCount } from "@/atoms/userInfo";
import CountUp from "react-countup";
import { useEffect, useMemo, useState } from "react";
import { defaultRightsData, defaultGiftsData } from "./mock";
import { IRightsTableItem, IGiftsTableItem } from "./type";
import { tabsItem, tableRightsColumns, getTableGiftsColumns } from "./config";
import ExchangeModal from "./components/exchangeModal";
import NotLoggedInModal from "./components/notLoggedInModal";

const STATISTIC_FORMATTER = (value: number) => (
  <CountUp className="text-4xl" end={value} separator="," />
);

export default function Home() {
  const [walletAddress] = useAtom(WalletAddress);
  const [showTDCount] = useAtom(TDCount);

  // 选中的tab项
  const [activeTab, setActiveTab] = useState("rights");

  // 权益明细列表
  const [rightsList, setRightsList] = useState<IRightsTableItem[]>([]);
  // 权益明细当前页
  const [rightsCurrentPage, setRightsCurrentPage] = useState(0);
  // 权益明细总项数
  const [rightsFullCount, setRightsFullCount] = useState(100);

  // 礼品明细列表
  const [gitsList, setGiftsList] = useState<IGiftsTableItem[]>([]);
  // 礼品明细当前页
  const [giftsCurrentPage, setGiftsCurrentPage] = useState(0);
  // 权益明细总项数
  const [giftsFullCount, setGiftsFullCount] = useState(100);

  // 兑换项
  const [exchangeItem, setExchangeItem] = useState<IGiftsTableItem | null>(
    null
  );

  useEffect(() => {
    // TODO: 请求，记得加防抖
    setRightsList(defaultRightsData);
    setGiftsList(defaultGiftsData);
  }, [rightsCurrentPage, giftsCurrentPage]);

  // 切换 权益明细/礼品明细 tab
  const handleTabsChange = (key: string) => {
    setActiveTab(key);
  };

  // 切换页数
  const handlePagesChange = (page: number) => {
    console.log(page);

    if (activeTab === "rights") {
      setRightsCurrentPage(page);
    } else {
      setGiftsCurrentPage(page);
    }
  };

  // 点击兑换按钮
  const handleClickGiftExchange = (record: IGiftsTableItem) => {
    setExchangeItem(record);
  };

  // 关闭兑换modal
  const handleCloseExchangeModal = () => {
    setExchangeItem(null);
  };

  // 兑换成功后
  const handleExchange = () => {};

  const tableGiftsColumns = useMemo(() => {
    return getTableGiftsColumns(handleClickGiftExchange);
  }, []);

  return (
    <main className="pb-16">
      <div className="pt-5 mx-5">
        <Card>
          <div className="w-full flex flex-col items-center justify-center ">
            <p className="text-base font-bold mb-2">TD 总数</p>
            <Statistic value={showTDCount} formatter={STATISTIC_FORMATTER} />
          </div>
        </Card>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={handleTabsChange}
        centered
        items={tabsItem}
      />

      {/* 先就这样写吧，后面再看要不要优化 */}
      {activeTab === "rights" ? (
        <Table
          className="px-5"
          pagination={false}
          columns={tableRightsColumns}
          rowKey={(record) => record.name}
          dataSource={rightsList}
        />
      ) : (
        <Table
          className="px-5"
          pagination={false}
          columns={tableGiftsColumns}
          rowKey={(record) => record.name}
          dataSource={gitsList}
        />
      )}

      <Pagination
        className="text-center py-5"
        simple
        pageSize={8}
        current={activeTab === "rights" ? rightsCurrentPage : giftsCurrentPage}
        onChange={handlePagesChange}
        total={activeTab === "rights" ? rightsFullCount : giftsFullCount}
      />

      {walletAddress ? (
        <ExchangeModal
          visible={Boolean(exchangeItem)}
          info={exchangeItem}
          onAfterExchange={handleExchange}
          onCancel={handleCloseExchangeModal}
        />
      ) : (
        <NotLoggedInModal
          visible={Boolean(exchangeItem)}
          onCancel={handleCloseExchangeModal}
        />
      )}
    </main>
  );
}
