"use client";
import { useAtom } from "jotai";
import { Button, Form, Input } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { UserAvatar, UserName } from "@/atoms/userInfo";
import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();
  const [userAvatar] = useAtom(UserAvatar);
  const [userName] = useAtom(UserName);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleBackUser = () => {
    router.back();
  };

  return (
    <main className="h-screen px-5">
      <div className="text-center flex flex-col items-center">
        <div
          className="absolute top-0 left-0 inline-block p-5"
          onClick={handleBackUser}
        >
          <RollbackOutlined style={{ fontSize: "2rem" }} />
        </div>
        <p className="text-2xl mb-10 mt-16 font-bold">信息修改</p>
        <Form
          className="pt-5 w-full"
          name="basic"
          initialValues={{ username: userName }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="昵称"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              className="bg-[#1677ff] w-40"
              type="primary"
              size="large"
              htmlType="submit"
            >
              更新
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}
