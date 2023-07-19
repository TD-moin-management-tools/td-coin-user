export const fillInType = [
  {
    key: 'activity',
    value: '主办活动'
  },
  {
    key: 'officialAccounts',
    value: '公众号'
  },
  {
    key: 'business',
    value: '市场'
  },
  {
    key: 'design',
    value: '设计'
  },
  {
    key: 'community',
    value: '社区'
  },
  {
    key: 'investmentAndResearch',
    value: '投研'
  },
  {
    key: 'welfare',
    value: '社区福利'
  },
  {
    key: 'other',
    value: '其他'
  },
  {
    key: 'extra',
    value: '条目外内容'
  },
];

export const fillInItemMap = {
  activity: [
    { name: '邀请新嘉宾参与TokenDance主办的活动', value: 50, writable: false },
    { name: '邀请旧嘉宾参与TokenDance主办的活动', value: 20, writable: false },
    { name: '与TokenDance主办活动嘉宾沟通', value: 30, writable: false },
    { name: 'TokenDance参与举办的小型活动流程策划及把控', value: 50, writable: false },
    { name: 'TokenDance参与举办的大型活动流程策划及把控', value: 150, writable: false },
    { name: 'TokenDance参与举办活动嘉宾内容审核', value: 30, writable: false },
    { name: 'TokenDance参与举办活动文案撰写', value: 10, writable: false },
    { name: '修改活动海报', value: 10, writable: false },
    { name: 'TokenDance主办线上活动的主持', value: 50, writable: false },
    { name: 'TokenDance社区内进行分享', value: 200, writable: false },
    { name: '转播视频号', value: 50, writable: false },
    { name: '视频号剪辑', value: 50, writable: false }
  ],
  officialAccounts: [
    { name: '排版模板', value: 50, writable: false },
    { name: '修改排版刷新内容', value: 10, writable: false },
    { name: '翻译', value: 80, writable: false },
    { name: '提供翻译原文', value: 20, writable: false },
    { name: '编辑整理', value: 80, writable: false },
    { name: '原创文章', value: 200, writable: false },
    { name: '寻找招聘和活动线索/条', value: 20, writable: false }
  ],
  business: [
    { name: 'TokenDance相关内容转发朋友圈/次', value: 5, writable: false },
    { name: 'TokenDance官号推特三连/次', value: 10, writable: false },
    { name: 'TokenDance相关内容转发社群/次', value: 1, writable: false },
    { name: '发官宣推文/次', value: 20, writable: false },
    { name: '主办小型线下活动', value: 500, writable: false },
    { name: '拉赞助', value: 0, desc: '4U = 1TD', writable: true },
    { name: '发掘优质BD合作项目，初步沟通对接', value: 0, desc: '30～100', writable: true },
    {
      name: '推进BD合作权益谈判、收益评估、为TD社区BD福利、宣发素材和节点沟通等',
      value: 40,
      writable: false
    },
    { name: '宣发执行及效果复盘', value: 30, writable: false },
    { name: '公众号招聘专栏 - 沟通到1份通过TD审核的招聘信息', value: 30, writable: false },
    { name: '公众号招聘专栏 - 与1家公司建立长期有效的招聘合作关系等', value: 100, writable: false },
    { name: '品牌活动(需经过BP) - 宣发', value: 20, writable: false },
    { name: '品牌活动(需经过BP) - 协办', value: 40, writable: false },
    { name: '品牌活动(需经过BP) - 联合主办', value: 80, writable: false },
    { name: '品牌活动(需经过BP) - 代表TD作为线上speaker或host', value: 80, writable: false },
    { name: '品牌活动(需经过BP) - 代表TD作为线下speaker或host', value: 160, writable: false }
  ],
  design: [
    { name: '海报设计/个', value: 100, writable: false },
    { name: '周边设计/个', value: 100, writable: false },
    { name: '产品UI设计/页', value: 100, writable: false }
  ],
  community:
  [
    { name: 'TokenDance微信builder群/飞书千人社区发起有价值话题讨论', value: 20, writable: false },
    { name: '引入新builder', value: 50, writable: false },
    { name: '引入优秀builder', value: 100, writable: false },
    { name: '参与讨论会/周会', value: 25, writable: false },
    { name: '周会主持', value: 25, writable: false },
    { name: '周报刷新/周会内容同步', value: 25, writable: false }
  ],
  investmentAndResearch: [
    { name: '完成一次调研，产出调研报告', value: 200, writable: false },
    { name: '为华人之声或其他TokenDance主办活动内容提出优化建议被采纳', value: 30, writable: false },
    { name: '拟定活动报名/活动反馈问卷', value: 60, writable: false },
    { name: '搜集活动报名/活动反馈问卷并分析', value: 50, writable: false },
    { name: '拟定深度用户调研问卷', value: 0, desc: '120-200', writable: true },
    { name: '搜集深度用户调研问卷并分析', value: 0, desc: '100-180', writable: true }
  ],
  welfare: [
    { name: '通过白名单等形式为社区或社区成员带来利润', value: 0, desc: '1U = 1TD', writable: true },
  ],
  other: [
    { name: '发起的活动为社区带来现金或等价物收益', value: 0, desc: '因为一些特定原因而不能让项目贡献者瓜分这些收益的，按照 1U = 1TD 的方式折算', writable: true },
    { name: '为社区grant资金用于公共品、公共活动等消耗的', value: 0, desc: '1U = 3TD', writable: true },
  ],
  extra: [
    { name: '条目之外的内容', value: 0, desc: '该项目填报之前请咨询 luca、小岛', writable: true },
  ]
};

export interface IFillInItemDetail {
  name: string;
  value: number;
  desc?: string;
  writable: boolean;
}

export type TFillInItemMap = keyof typeof fillInItemMap;
