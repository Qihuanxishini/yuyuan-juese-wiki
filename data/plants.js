// data/plants.js — 花仙子植物数据（从 prefabs 扫描生成）
var PLANTS_DATA = [
  {
    id: "wanyuan_orange_tree",
    name: "圆圆橘子树",
    icon: "wanyuan_orange_tree.png",
    category: "植物",
    desc: "圆圆橘子树，五阶段生长（萌芽→树苗→成长→开花→结果），全程约53分钟。成熟后采摘可获得7个圆圆橘子，采摘后会回到成长阶段继续循环生长。萌芽期不可砍伐，树苗期起可砍伐获得木头。不可挖掘移植。",
    obtain: "种植圆圆橘子树种",
    usage: "成熟后采摘橘子（x7）；采摘后循环回到成长阶段；砍伐可获得木头 x1-3",
    recipe: "",
    skins: [
      { name: "花间梦", icon: "wanyuan_orange_tree_yun.png", desc: "Elegant 品质皮肤", paid: true }
    ],
    grow_time: "约53分钟（萌芽20m→树苗10m→成长5m→开花8m→结果10m）",
    drop: "圆圆橘子 x7（采摘）；木头 x1-3（砍伐）"
  },
  {
    id: "wanyuan_orange_tree_seed",
    name: "圆圆橘子树种",
    icon: "wanyuan_orange_tree_seed.png",
    category: "植物",
    desc: "圆圆橘子树种，放置后生长为圆圆橘子树。",
    obtain: "合成：圆圆橘子 x15，腐烂食物 x2，粪便 x2",
    usage: "放置后生长为橘子树",
    recipe: "圆圆橘子 x15，腐烂食物 x2，粪便 x2",
    skins: [],
    grow_time: "",
    drop: ""
  },
  {
    id: "wanyuan_strawberry_bush",
    name: "纷纷草莓丛",
    icon: "wanyuan_strawberry_bush.png",
    category: "植物",
    desc: "纷纷草莓丛，永续生长，不会贫瘠枯萎。采摘后约15~20分钟再生，每次可采摘5个草莓。冬季停止生长。可用铲子挖掘移植，挖掘时若有草莓会一并掉落。",
    obtain: "先合成可部署草莓丛，再部署种下",
    usage: "采摘获得草莓（x5）；可挖掘移植；冬季停止生长",
    recipe: "纷纷草莓 x15，腐烂食物 x2，硝石 x2，精神 -5",
    skins: [
      { name: "粉粉色", icon: "wanyuan_strawberry_bush_fen.png", desc: "Elegant 品质皮肤", paid: true }
    ],
    grow_time: "采摘后约15~20分钟再生；冬季停止",
    drop: "纷纷草莓 x5"
  },
  {
    id: "wanyuan_yangmei_tree",
    name: "溜溜杨梅树",
    icon: "wanyuan_yangmei_tree.png",
    category: "植物",
    desc: "溜溜杨梅树，五阶段生长（小芽→成长→繁茂→花期→结果），全程约51分钟。结果后采摘5个杨梅，采摘后回退至繁茂阶段循环生长，无需重新种植。可砍伐获得木头 x1-3。",
    obtain: "种植溜溜杨梅树种子",
    usage: "成熟后采摘杨梅（x5）；采摘后循环至繁茂阶段；砍伐掉落木头 x1-3",
    recipe: "",
    skins: [],
    grow_time: "约51分钟（小芽15m→成长12m→繁茂9m→花期10m→结果5m）；采摘后从繁茂阶段循环",
    drop: "溜溜杨梅 x5"
  },
  {
    id: "wanyuan_yangmei_tree_seed",
    name: "溜溜杨梅树种子",
    icon: "wanyuan_yangmei_tree_seed.png",
    category: "植物",
    desc: "溜溜杨梅树种子，放置后生长为溜溜杨梅树。",
    obtain: "合成：溜溜杨梅 x5，腐烂食物 x2，粪便 x2",
    usage: "放置后生长为杨梅树",
    recipe: "溜溜杨梅 x5，腐烂食物 x2，粪便 x2",
    skins: [],
    grow_time: "",
    drop: ""
  },
  {
    id: "wanyuan_dream_mushroom",
    name: "幻梦蘑菇",
    icon: "wanyuan_dream_mushroom.png",
    category: "植物",
    desc: "幻梦蘑菇，四阶段生长（萌芽→幼生→成长→成熟），每阶段需等待15分钟计时完成后，还需等待下雨才能进入下一阶段。仅成熟阶段可采集，获得1个幻梦孢子；采集后回到萌芽阶段重新生长。",
    obtain: "合成：幻梦孢子 x10",
    usage: "成熟后采摘获得幻梦孢子 x1；采摘后回到萌芽阶段",
    recipe: "幻梦孢子 x10",
    skins: [],
    grow_time: "每阶段15分钟计时+等待下雨方可进阶（共4阶段）",
    drop: "幻梦孢子 x1"
  }
];
