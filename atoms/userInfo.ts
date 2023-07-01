import { atom } from 'jotai';
const DefaultAvatar = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';


// 钱包地址
export const WalletAddress = atom<null | string>(null);
// export const WalletAddress = atom<null | string>('0x13123123123123123123123');
// 用户头像
export const UserAvatar = atom<string>(DefaultAvatar);
// 用户名
export const UserName = atom<string>('TokenDance Builder1');

// td 数量
export const TDCount = atom(12300);

