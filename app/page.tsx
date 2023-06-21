"use client";
import { useAtom } from "jotai";
import { Avatar, Statistic, Card, List, Pagination } from "antd";
import { WalletAddress, UserAvatar, UserName, TDCount } from "@/atoms/userInfo";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const formatter = (value: number) => <CountUp end={value} separator="," />;

const defaultData = [
  {
    title: "进行1次分享",
    time: 1686988242000,
    tdCound: 1,
    status: "add",
  },
  {
    title: "进行10次分享",
    time: 1686988242000,
    tdCound: 10,
    status: "add",
  },
  {
    title: "购买衣服",
    time: 1686988242000,
    tdCound: 10,
    status: "reduce",
  },
  {
    title: "进行1次分享",
    time: 1686988242000,
    tdCound: 1,
    status: "add",
  },
  {
    title: "进行1次分享",
    time: 1686988242000,
    tdCound: 1,
    status: "add",
  },
];

interface ITdListItem {
  title: string;
  time: number;
  tdCound: number;
  status: string;
}

export default function Home() {
  const [walletAddress] = useAtom(WalletAddress);
  const [userAvatar] = useAtom(UserAvatar);
  const [userName] = useAtom(UserName);
  const [showTDCount] = useAtom(TDCount);

  // TD 明细列表
  const [tdList, setTdList] = useState<ITdListItem[]>([]);
  // 当前页
  const [currentPage, setCurrentPage] = useState(0);
  // 总项数
  const [fullCount, setFullCount] = useState(0);

  useEffect(() => {
    if (!walletAddress) {
      return;
    }
    console.log(currentPage);
    // TODO: 请求，记得加防抖
    setTdList(defaultData);
  }, [walletAddress, currentPage]);

  if (walletAddress === null) {
    return (
      <main className="h-screen pb-16 flex flex-col items-center justify-center">
        <div className="text-5xl mb-10">尚未登录</div>
        <div className="text-4xl">请前往个人中心登录</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-5 pb-16">
      <div className="pt-5 w-full flex flex-col items-center justify-center">
        <Avatar
          size={64}
          style={{ backgroundColor: "#bfbfbf" }}
          src={<img src={userAvatar} alt="avatar" />}
        />
        <p className="my-3 text-2xl">{userName}</p>
        <Card className="w-full" title="持有 TD 总数" bordered={false}>
          <Statistic value={showTDCount} formatter={formatter} />
        </Card>
      </div>
      <div className="mt-5 w-full">
        <List
          header={<div className="font-bold px-[24px]">TD 明细</div>}
          className="bg-white rounded-[8px] common-shadow overflow-hidden"
          dataSource={tdList}
          renderItem={(item, index) => {
            return (
              <List.Item className={index % 2 === 0 ? "bg-slate-50" : ""}>
                <div className="w-full px-[24px] flex items-center justify-between">
                  <div>
                    <div className="font-bold mb-1">{item.title}</div>
                    <div>{dayjs(item.time).format("YYYY-MM-DD")}</div>
                  </div>
                  <div>
                    {item.status === "add" ? "+" : "-"}
                    {item.tdCound}
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
      </div>
      <Pagination
        className="text-center py-5"
        simple
        pageSize={5}
        defaultCurrent={1}
        onChange={(page) => setCurrentPage(page)}
        total={fullCount}
      />
    </main>
  );
}
