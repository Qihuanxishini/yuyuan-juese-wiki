// data/materials.js — 花仙子材料/衍生物数据
var MATERIALS_DATA = [
  {
    id: "wanyuan_taohua",
    name: "桃花",
    icon: "wanyuan_taohua.png",
    category: "材料",
    desc: "桃花，花仙子的核心材料。可用于合成大量专属道具与食物；用于修复花仙子专属武器；堆叠数量 > 30 后做祟可以复活花仙子。",
    obtain: "花仙子在采集、工作、钓鱼、击杀时有概率额外获得",
    usage: "合成专属道具/食物；修复专属武器；做祟复活花仙子；可直接食用：饥饿+3 / 生命+5 / 理智+5，并提供60秒降温效果",
    recipe: "",
    skins: [],
    hunger: 3,
    health: 5,
    sanity: 5
  },
  {
    id: "wanyuan_orange_fruit",
    name: "圆圆橘子",
    icon: "wanyuan_orange_fruit.png",
    category: "水果",
    desc: "圆圆橘子树采摘所得的新鲜橘子，可直接食用或用于合成食谱。",
    obtain: "采摘圆圆橘子树",
    usage: "直接食用；合成鲜榨橙汁、橙子果酱等",
    recipe: "",
    skins: [],
    hunger: 5,
    health: 2,
    sanity: 3
  },
  {
    id: "wanyuan_strawberry_fruit",
    name: "纷纷草莓",
    icon: "wanyuan_strawberry_fruit.png",
    category: "水果",
    desc: "纷纷草莓丛采摘所得的新鲜草莓，可直接食用或用于合成食谱。",
    obtain: "采摘纷纷草莓丛",
    usage: "直接食用；合成草莓酥酥塔、草莓切角蛋糕、草莓冰淇淋等",
    recipe: "",
    skins: [],
    hunger: 5,
    health: 5,
    sanity: 7
  },
  {
    id: "wanyuan_yangmei_fruit",
    name: "溜溜杨梅",
    icon: "wanyuan_yangmei_fruit.png",
    category: "水果",
    desc: "溜溜杨梅树采摘所得的新鲜杨梅，可直接食用或用于合成食谱。",
    obtain: "采摘溜溜杨梅树",
    usage: "直接食用；合成杨梅布丁等",
    recipe: "",
    skins: [],
    hunger: 2,
    health: 5,
    sanity: 5
  },
  {
    id: "wanyuan_dream_spore",
    name: "幻梦孢子",
    icon: "wanyuan_dream_spore.png",
    category: "材料",
    desc: "幻梦蘑菇的采集产物。每次食用均可令世界降雨，并永久增加5点最大生命值上限；首次食用可开启常驻生命回复效果（每秒回复1HP），仅对没有 oldager 组件的角色生效。",
    obtain: "采摘幻梦蘑菇",
    usage: "直接食用（特殊效果）；合成爱心法杖、幻梦蘑菇等专属内容",
    recipe: "",
    skins: [],
    hunger: 5,
    health: 3,
    sanity: 15
  }
  ,{
    id: "crystal_of_glaze",
    name: "琉璃结晶",
    icon: "crystal_of_glaze.png",
    category: "材料",
    desc: "用于强化花仙子专属武器（幻锋/幻柳）的特殊结晶，每次强化可提升武器等级，解锁更强的技能效果，也可作为部分高级配方材料。",
    obtain: "通过额外掉落获得",
    usage: "对幻锋/幻柳使用，提升武器等级与伤害；也可作为部分高级配方材料",
    recipe: "",
    skins: []
  }
];
