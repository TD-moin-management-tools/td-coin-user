import { Modal, Button } from "antd";
import type { IFillInItemDetail } from "./mock";

interface ISubmitModalProps {
  info?: IFillInItemDetail;
  selfInfo: number;
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const SubmitModal = (props: ISubmitModalProps) => {
  const { visible, selfInfo, onCancel, info, onOk } = props;

  return (
    <Modal centered open={visible} footer={null} onCancel={onCancel}>
      <div className="text-center text-2xl mt-1 mb-10">请确认内容准确</div>
      <div className="text-xl mb-2">申报项：&nbsp; {info?.name}</div>
      <div className="text-xl mb-10">TD 奖励：{info?.value || selfInfo}</div>
      <div className="text-center mb-10">
        <Button
          className="bg-[#1677ff]"
          type="primary"
          size="large"
          onClick={onOk}
        >
          确认提交
        </Button>
      </div>
    </Modal>
  );
};

export default SubmitModal;
