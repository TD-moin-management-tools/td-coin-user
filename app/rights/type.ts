export interface IRightsTableItem {
    id: string; // 权益id
    name: string;
    price: number;
}

export interface IGiftsTableItem {
    id: string; // 礼品id
    name: string; // 礼品名
    desc: string; // 礼品描述
    redeemer: string; // 礼品兑换人
    count: number; // 礼品剩余数量
    fullCount: number; // 礼品总数
    price: number; // 价格
}