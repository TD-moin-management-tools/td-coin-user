import { atom } from 'jotai';
const DefaultAvatar = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';


// 钱包地址
export const WalletAddress = atom<null | string>('null');
// 用户头像
export const UserAvatar = atom<string>(DefaultAvatar);
// 用户名
export const UserName = atom<string>('TokenDance Builder');

// td 数量
export const TDCount = atom(12300);

