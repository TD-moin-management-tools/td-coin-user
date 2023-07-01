"use client";
import { useAtom } from "jotai";
import { Avatar, Button } from "antd";
import { WalletAddress, UserAvatar, UserName } from "@/atoms/userInfo";
import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();

  const [walletAddress] = useAtom(WalletAddress);
  const [userAvatar] = useAtom(UserAvatar);
  const [userName] = useAtom(UserName);

  const handleChangeInfo = () => {
    router.push("/user/change");
  };

  const handleLinkWallet = () => {};

  const renderInfoElm = () => {
    return (
      <div className="text-center flex flex-col items-center">
        <p className="text-2xl mb-10 mt-16 font-bold">Hi~ TokenDance Builder</p>
        <div className="pt-5 w-full flex flex-col items-center justify-center">
          <Avatar
            size={80}
            style={{ backgroundColor: "#bfbfbf" }}
            src={<img src={userAvatar} alt="avatar" />}
          />
          <p className="my-3 text-xl">{userName}</p>
          <p className="text-sm">{walletAddress}</p>
        </div>
        <Button
          className="bg-[#1677ff] absolute bottom-1/4 w-40"
          type="primary"
          size="large"
          onClick={handleChangeInfo}
        >
          修改信息
        </Button>
      </div>
    );
  };

  const renderLoginElm = () => {
    return (
      <div className="text-center flex flex-col items-center">
        <Button
          className="bg-[#1677ff] mt-80 w-40"
          type="primary"
          size="large"
          onClick={handleLinkWallet}
        >
          链接钱包
        </Button>
        <p className="mt-5">连接钱包不会触发任何链上交易</p>
      </div>
    );
  };

  return (
    <main className="h-screen px-5">
      {walletAddress ? renderInfoElm() : renderLoginElm()}
    </main>
  );
}
