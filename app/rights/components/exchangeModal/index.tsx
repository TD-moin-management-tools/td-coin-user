import { Modal, Button } from "antd";
import type { IGiftsTableItem } from "../../type";

interface IExchangeModalProps {
  visible: boolean;
  info: IGiftsTableItem | null;
  onAfterExchange: () => void;
  onCancel: () => void;
}

const ExchangeModal = (props: IExchangeModalProps) => {
  const { visible, onAfterExchange, onCancel, info } = props;

  const ListData = [
    {
      key: "兑换人",
      value: info?.redeemer,
    },
    {
      key: "价格",
      value: `${info?.price} TD`,
    },
    {
      key: "数量",
      value: info ? `${info.count} / ${info.fullCount}` : "",
    },
  ];

  const handleExchange = () => {
    console.log(info);
    // TODO: 请求，发起兑换
  };

  return (
    <Modal centered open={visible} footer={null} onCancel={onCancel}>
      <p className="text-xl font-bold mb-1">{info?.name}</p>
      <p className="pb-2 mb-6 border-solid border-b-2 border-slate-300">
        {info?.desc}
      </p>

      <div className="mb-16">
        {ListData.map((item) => {
          return (
            <p key={item.key} className="mb-1 text-base">
              <span className="w-20 inline-block font-bold">{item.key}</span>
              <span>{item.value}</span>
            </p>
          );
        })}
      </div>

      <div className="text-center text-orange-500 font-bold mb-5">
        点击兑换后请联系兑换人
      </div>
      <div className="text-center">
        <Button
          className="bg-[#1677ff]"
          type="primary"
          size="large"
          onClick={handleExchange}
        >
          确认兑换
        </Button>
      </div>
    </Modal>
  );
};

export default ExchangeModal;
