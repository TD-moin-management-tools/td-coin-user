"use client";
import { Select, InputNumber, Button } from "antd";
import { fillInType, fillInItemMap } from "./mock";
import type { TFillInItemMap, IFillInItemDetail } from "./mock";
import SubmitModal from "./submitModal";
import { useState } from "react";

export default function FirstPost() {
  // 选择的类别
  const [selectedType, setSelectedType] = useState<TFillInItemMap>();
  // 选择具体项目
  const [selectedItem, setSelectedItem] = useState<IFillInItemDetail>();
  // 具体项目的 index
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  // 自定义输入td数量
  const [selfInputTD, setSelfInputTD] = useState(0);

  const [submitModalShow, setSubmitModalShow] = useState(false);

  const handleTypeChange = (value: TFillInItemMap) => {
    setSelectedType(value);
    setSelectedItem(undefined);
    setSelectedIndex(null);
    setSelfInputTD(0);
  };

  const onContentChange = (index: number) => {
    if (selectedType) {
      setSelectedItem(fillInItemMap[selectedType][index]);
      setSelectedIndex(index);
      setSelfInputTD(0);
    }
  };

  const handleInputTDChange = (value: number | null) => {
    setSelfInputTD(value || 0);
  };

  const handleSubmit = () => {
    setSubmitModalShow(true);
  };

  const handleSubmitModalCancel = () => {
    setSubmitModalShow(false);
  };

  const handleSubmitModalOk = () => {
    console.log("提交");
  };

  const showTDDescElm = () => {
    if (!selectedItem) {
      return null;
    }
    if (selectedItem.desc) {
      return (
        <>
          <p className="font-bold mt-4 mb-1">注意</p>
          <p>{selectedItem.desc}</p>
        </>
      );
    }
    return null;
  };

  const showTDCountELm = () => {
    if (!selectedItem) {
      return null;
    }
    if (!selectedItem.writable) {
      return (
        <>
          <p className="font-bold mt-4 mb-1">可获得的TD奖励数量</p>
          <p>{selectedItem?.value} TD</p>
        </>
      );
    } else {
      return (
        <>
          <p className="font-bold mt-4 mb-1">手动输入TD奖励数量</p>
          <InputNumber
            className="w-full"
            min={0}
            onChange={handleInputTDChange}
          />
        </>
      );
    }
  };

  // 不可提交的情况：没有选择具体项目 或 需要手动填写 td 的项目没有写数
  const submitBtnDisable =
    !Boolean(selectedItem) || (selectedItem?.writable && selfInputTD === 0);

  return (
    <main className="h-screen px-5">
      <div className="text-center flex flex-col items-center">
        <p className="text-4xl mb-10 mt-16">自主填报</p>
        <p className="text-xl">自主填报会自动通过</p>
        <p className="text-xl">如发现虚假填报，将给予相应惩罚</p>
      </div>

      <div className="mt-20 text-xl">选择自主填报信息</div>
      <div>
        <p className="font-bold mt-3 mb-1">类别</p>
        <Select
          className="w-full"
          onChange={handleTypeChange}
          options={fillInType.map((type) => ({
            label: type.value,
            value: type.key,
          }))}
        />
        <p className="font-bold mt-4 mb-1">具体项目</p>
        <Select
          className="w-full"
          value={selectedIndex}
          onChange={onContentChange}
          options={
            selectedType
              ? fillInItemMap[selectedType].map((item, index) => ({
                  label: item.name,
                  value: index,
                }))
              : []
          }
        />
        {showTDDescElm()}
        {showTDCountELm()}
        <div className="text-center absolute bottom-40 left-0 w-full">
          <Button
            className="bg-[#1677ff]"
            disabled={submitBtnDisable}
            type="primary"
            size="large"
            onClick={handleSubmit}
          >
            提交申报
          </Button>
        </div>
        <SubmitModal
          visible={submitModalShow}
          info={selectedItem}
          selfInfo={selfInputTD}
          onCancel={handleSubmitModalCancel}
          onOk={handleSubmitModalOk}
        />
      </div>
    </main>
  );
}
