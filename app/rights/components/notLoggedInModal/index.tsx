import { Modal } from "antd";

interface INotLoggedInModalProps {
  visible: boolean;
  onCancel: () => void;
}

const NotLoggedInModal = (props: INotLoggedInModalProps) => {
  const { visible, onCancel } = props;

  return (
    <Modal centered open={visible} footer={null} onCancel={onCancel}>
      <div className="text-center text-5xl my-16">尚未登录</div>
      <div className="text-center text-3xl mb-16">请前往个人中心登录</div>
    </Modal>
  );
};

export default NotLoggedInModal;
