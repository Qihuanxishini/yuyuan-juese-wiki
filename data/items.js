// data/items.js — 花仙子道具数据（从 wanyuan_repices.lua 及 prefabs 扫描生成）
var ITEMS_DATA = [
  {
    id: "wanyuan_tools_tianhai",
    name: "西陵叉[巧]",
    icon: "wanyuan_tools_tianhai.png",
    category: "道具",
    desc: "西陵叉，花仙子专属多功能工具。默认【巧】模式：砍伐+挖矿+挖掘；切换【工】模式：锤击+捕网+钓鱼+叉鱼；切换【移】模式：弹出地皮选择界面进行地皮铺设。无论何种模式均可一次耕出 3×3 范围农田（配置后可达 4×4）。",
    obtain: "花仙子专属合成",
    usage: "右键切换模式：[巧]砍/挖/掘；[工]锤/网/钓/叉鱼；[移]铺地皮",
    recipe: "桃花 x30，黄金草叉 x1，黄金园艺锄 x1，黄金斧头 x1，黄金铲子 x1，黄金鹤嘴锄 x1，捕虫网 x5",
    skins: [
      { name: "甜品叉", icon: "wanyuan_tools_tianhai_sweet.png", desc: "粉嫩可爱的甜品风格皮肤" }
    ]
  },
  {
    id: "wanyuan_backpack",
    name: "幻仙绫",
    icon: "wanyuan_backpack.png",
    category: "道具",
    desc: "幻仙绫，花仙子专属多功能背包。装备后提供80%护甲吸收（不可破坏）、平面防御+20、隔热360、移速+35%；背包为3页×18格共54格，背包内食物腐烂速度降至10%；同时赋予踏水能力，可在水面行走不会落水（传送/复活后自动恢复）。",
    obtain: "花仙子专属合成",
    usage: "背包槽装备；3页×18格（共54格）；护甲80%（不可破坏）；平面防御+20；隔热360；移速+35%；食物保鲜90%；踏水行走",
    recipe: "桃花 x35，精神消耗 x35，生命消耗 x35，彩虹宝石 x1",
    skins: []
  },
  {
    id: "wanyuan_denglong",
    name: "玉暖安",
    icon: "wanyuan_denglong.png",
    category: "道具",
    desc: "玉暖安，以桃花与金块制成的精巧灯笼，照明取暖。作为燃料灯笼使用，携带时会根据角色当前体温动态调温。",
    obtain: "花仙子专属合成",
    usage: "可手持提供照明；需消耗可燃物；携带时按当前体温动态调温",
    recipe: "桃花 x5，树枝 x5，金块 x2",
    skins: []
  },
  {
    id: "wanyuan_xiaodeng",
    name: "枕月吟",
    icon: "wanyuan_xiaodeng.png",
    category: "道具",
    desc: "枕月吟，小巧发光灯，可以照亮生活。黄昏与夜晚会自动亮起，并带有随机变色效果。",
    obtain: "花仙子专属合成",
    usage: "放置后在黄昏/夜晚自动开灯，提供约3.5半径的小范围光照",
    recipe: "桃花 x10，金块 x5，萤火虫 x5",
    skins: [
      { name: "花月夜", icon: "wanyuan_xiaodeng_skin1.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_base_light",
    name: "玫瑰灯",
    icon: "wanyuan_base_light.png",
    category: "道具",
    desc: "以光晶与萤火虫制成的华丽玫瑰灯，光照范围大。",
    obtain: "花仙子专属合成",
    usage: "放置后提供大范围光照",
    recipe: "光之晶石 x3，红宝石 x1，金块 x20，萤火虫 x10",
    skins: []
  },
  {
    id: "wanyuan_xingxingguan",
    name: "星星许愿罐",
    icon: "wanyuan_xingxingguan.png",
    category: "道具",
    desc: "星星许愿罐，存放着数不尽的幻想和愿望，充满梦幻色彩。共3页×9格=27格，食物永不腐烂。第一页第5格可放入宝石激活特效：放蓝宝石每35秒在罐内生成冰块；放红宝石每100秒自动烹饪/晾干罐内食材；放彩虹宝石每360秒随机生成一个花仙子专属食物。无论放何种宝石，均每60秒修复罐内所有物品5%耐久。",
    obtain: "花仙子专属合成",
    usage: "放置后作为3页×9格储物容器；第一页第5格放蓝宝石→生成冰块；放红宝石→自动烹饪/晾干；放彩虹宝石→随机生成花仙子食物；始终每60秒修复容器内物品耐久",
    recipe: "桃花 x99，萤火虫 x9，金块 x20，彩虹宝石 x3",
    skins: [
      { name: "永恒", icon: "wanyuan_xingxingguan_skin_1.png", desc: "Elegant 品质皮肤" },
      { name: "观星", icon: "wanyuan_xingxingguan_skin_2.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_pack",
    name: "呆呆熊",
    icon: "wanyuan_pack.png",
    category: "道具",
    desc: "呆呆熊，可爱的小熊打包盒，有不一样的皮肤提供不同呈现。可对目标执行打包，生成礼物包后再部署解包。",
    obtain: "花仙子专属合成",
    usage: "对目标执行打包，生成礼物包后再部署解包",
    recipe: "桃花 x25，金块 x12，莎草纸 x6",
    skins: [
      { name: "史莱姆", icon: "wanyuan_pack_slime.png", desc: "Elegant 品质皮肤，制作出的打包熊有多种颜色变体" }
    ]
  },
  {
    id: "wanyuan_cat_box",
    name: "猫箱",
    icon: "wanyuan_cat_box.png",
    category: "道具",
    desc: "猫咪造型的可爱储物箱，放置于世界中使用。共3页×36格=108格，支持无限堆叠，并带有一键放入物品按钮。",
    obtain: "花仙子专属合成",
    usage: "放置后作为3页×36格储物箱使用；支持无限堆叠；内置一键放入物品按钮",
    recipe: "桃花 x60，金块 x20，木板 x10",
    skins: [
      { name: "迷", icon: "wanyuan_cat_box_skin.png", desc: "Elegant 品质皮肤" },
      { name: "蓝", icon: "wanyuan_cat_box_skin1.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_cookpot_item",
    name: "桃花韵",
    icon: "wanyuan_cookpot_item.png",
    category: "道具",
    desc: "桃花韵，花仙子专属烹饪锅，节约时间并且获取更多。",
    obtain: "花仙子专属合成",
    usage: "放置后作为烹饪锅使用，兼容所有食谱,支持多倍烹饪",
    recipe: "桃花 x20，金块 x15，石砖 x10，木炭 x15",
    skins: []
  },
  {
    id: "wanyuan_yunmeng_box",
    name: "云梦",
    icon: "wanyuan_yunmeng_box.png",
    category: "道具",
    desc: "云梦，花仙子专属4阶段超大储物科技站，共5页×36格=180格存储空间，支持无限堆叠。升级时会继承箱内物品与皮肤，并逐阶段解锁更多原版科技。",
    obtain: "花仙子专属合成",
    usage: "放置后作为储物箱（5页共180格，无限堆叠），并兼作科技站；支持一键存入。阶段科技：云梦=科学2、钓鱼1；云梦·贰=科学2、魔法2、航海1、钓鱼1；云梦·叁=科学2、魔法3、远古2、天体1、航海2、钓鱼1、月锻1、影锻1；云梦·极=科学2、魔法3、远古4、天体3、航海2、钓鱼1、月锻2、影锻2",
    recipe: "初始：木板 x10、石砖 x5、红宝石 x3、蓝宝石 x3；升贰：齿轮 x3、金块 x10、龙鳞 x2；升叁：铥矿 x6、噩梦燃料 x12、月岩 x8、亮茄外壳 x6；升极：铥矿 x10、月岩 x12、纯粹辉煌 x4、恐怖燃料 x4",
    skins: [
      { name: "心云球", icon: "wanyuan_yunmeng_box_skin_rod.png", desc: "Elegant 品质皮肤" },
      { name: "福福", icon: "wanyuan_yunmeng_box_skin_fufu.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_ice_box",
    name: "方形冰箱",
    icon: "wanyuan_ice_box.png",
    category: "道具",
    desc: "方形冰箱，4×4共16格专用食物储存箱（仅限食物，不含小生物），食物腐烂速度极慢（保鲜倍率-9），支持无限堆叠。带有冰箱标签可为暖暖石降温。内置一键存入按钮。",
    obtain: "花仙子专属合成",
    usage: "放置后存放食物（16格，无限堆叠）；极大延缓腐烂（保鲜-9）；可为暖暖石降温；一键存入",
    recipe: "彩虹宝石 x1，蓝宝石 x5，石砖 x7，齿轮 x3，冰块 x10",
    skins: []
  },
  {
    id: "wanyuan_table",
    name: "小餐桌",
    icon: "wanyuan_table.png",
    category: "道具",
    desc: "精巧的小餐桌，提供2格食物摆放空间，食物永不腐烂（保鲜倍率-1）。有食物时自动发出暖黄色灯光（半径2）。",
    obtain: "花仙子专属合成",
    usage: "放置后摆放食物（2格）；食物永不腐烂；有食物时自动亮暖黄灯",
    recipe: "桃花 x5，金块 x2，木板 x1，莎草纸 x1",
    skins: [
      { name: "紫色桌子", icon: "wanyuan_table_purple.png", desc: "雅致紫色风格", paid: true },
      { name: "粉色桌子", icon: "wanyuan_table_pink.png", desc: "浪漫粉色风格", paid: true },
      { name: "黄色桌子", icon: "wanyuan_table_yellow.png", desc: "明媚黄色风格", paid: true }
    ]
  },
  {
    id: "wanyuan_love_staff",
    name: "爱心法杖",
    icon: "wanyuan_love_staff.png",
    category: "道具",
    desc: "爱心法杖，点击地面后自动扫描16格范围内最多20个可操作目标（大树砍伐/矿石挖掘/巨大化作物锤击/可采集植物），为每个目标生成一个爱心分身自动完成操作。消耗5点精神，施法后进入充能；当前实现为直接消耗10秒充能，并支持对海面点施法。",
    obtain: "花仙子专属合成",
    usage: "点击地面或海面施法；扫描16格内大树/矿石/作物/植物，生成分身自动采集；消耗5精神，施法后进入充能",
    recipe: "幻梦孢子 x15，红宝石 x3，活木 x2",
    skins: [
      // { name: "心愿无暇", icon: "wanyuan_love_staff_skin_xin.png", desc: "Elegant 品质皮肤", paid: true }
    ]
  },
  {
    id: "wanyuan_rabbit_wand",
    name: "兔子法杖",
    icon: "wanyuan_rabbit_wand.png",
    category: "道具",
    desc: "兔子法杖，对有合成配方的目标使用，按当前耐久/燃料/护甲比例返还配方材料（普通宝石不返还）；同时自动掉出容器内容物、收获作物/陷阱/炖锅等内容。花仙子角色使用冷却仅2秒/消耗精神10点，其他角色8秒/25点精神。",
    obtain: "花仙子专属合成",
    usage: "对目标使用：按耐久比例返还配方材料；自动清空容器/收获作物；花仙子冷却2秒，其他角色8秒",
    recipe: "桃花 x35，金块 x15，兔子 x2",
    skins: []
  },
  {
    id: "wanyuan_fan_tao",
    name: "桃花扇",
    icon: "wanyuan_fan_tao.png",
    category: "道具",
    desc: "桃花扇，远程武器，基础伤害50，射程10/16。对战斗目标右键施法召唤龙卷风：花仙子角色一次召唤3个龙卷风，冷却仅8秒；其他角色仅召唤1个，冷却18秒并额外扣除30精神和10生命。非花仙子角色使用普通攻击时还会额外消耗0.5精神和1点饥饿。无耐久消耗。",
    obtain: "花仙子专属合成",
    usage: "远程攻击（伤害50，射程10/16）；对敌施法召唤龙卷风（花仙子×3/冷却8秒；其他×1/冷却18秒/-30精神/-10生命）",
    recipe: "桃花 x75，金块 x35，信天翁羽毛 x5，鹅毛 x3，信天翁喙 x1，触手皮 x2",
    skins: [
      { name: "桂", icon: "wanyuan_fan_tao_skin.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_zhezhi",
    name: "折枝",
    icon: "wanyuan_zhezhi.png",
    category: "道具",
    desc: "折枝，可升级强化的头部装备，基础护甲35%，装备时持续回复精神。支持四条独立升级路径：①消耗沙之石（一次性）解锁沙尘暴免疫；②消耗绿宝石（一次性）解锁承伤回复（受击回复1HP）；③继续消耗彩虹宝石（最多5颗）强化承伤回复（每颗+1HP，上限6HP/次）；④消耗铥矿（最多12颗）强化护甲（每颗+5%，上限95%）。同时提供月龄保护，天体月灵不会主动攻击。",
    obtain: "花仙子专属合成",
    usage: "头部装备（基础护甲35%）；消耗沙之石→沙尘暴免疫；消耗绿宝石→受击回复生命；消耗彩虹宝石（×5）→强化回复至6HP/次；消耗铥矿（×12）→护甲强化至95%；提供月龄保护",
    recipe: "花瓣 x12，精神消耗 x20，生命消耗 x20，红宝石 x5，紫宝石 x5",
    skins: [
      { name: "折枝-靛青", icon: "wanyuan_zhezhi_none.png", desc: "Elegant 品质皮肤" },
      { name: "折枝-纷", icon: "wanyuan_zhezhi_sk.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_beebox",
    name: "花仙醉",
    icon: "wanyuan_beebox.png",
    category: "道具",
    desc: "花仙子专属蜂箱，共四阶段外观（0/10/25/40蜂蜜），满40个蜂蜜时可采收；采收时若蜂蜜≥30个，额外随机获得1~3个蜂王浆。需附近30格内有花朵才能生产，冬季停止，春季加速。被锤击拆除时也会掉落蜂蜜。",
    obtain: "花仙子专属合成",
    usage: "放置后自动生产蜂蜜（需附近有花朵，非冬季）；蜂蜜满40个时采收；蜂蜜≥30时额外获得1~3蜂王浆",
    recipe: "桃花 x35，精神消耗 x20，蜜蜂 x12，蜂巢 x4，蜂王浆 x5",
    skins: [
      { name: "咕噜球", icon: "wanyuan_beebox_skin_guluqiu.png", desc: "Elegant 品质免费皮肤" }
    ]
  },
  {
    id: "wy_simplehotspring",
    name: "天星池",
    icon: "wy_simplehotspring.png",
    category: "道具",
    desc: "天星池，花仙子专属温泉，进入水域范围即可享受泡温泉效果：每秒持续回复生命、精神与2点饥饿，同时每秒减少1%生命惩罚上限，湿度最高维持在50%。冬/秋/春提供+60°保暖，夏季切换为制冷-10°。有玩家浸泡时水面发出暖橙色光芒。",
    obtain: "花仙子专属合成",
    usage: "放置后进入水域范围即触发效果：持续回复生命/精神/饥饿；减少生命惩罚；夏天制冷，冬天保暖",
    recipe: "桃花 x50，金块 x30，彩虹宝石 x5，木头 x35",
    skins: []
  },
  {
    id: "wanyuan_tanghulu",
    name: "胡桃的糖葫芦",
    icon: "wanyuan_tanghulu.png",
    category: "道具",
    desc: "胡桃的糖葫芦，甜甜的糖葫芦，可以当武器使用。攻击伤害75，移速提升20%，无耐久消耗，是前期非常实用的武器。",
    obtain: "花仙子角色可直接制作（无需科技台）",
    usage: "装备作为近战武器（伤害75，移速+20%）；无耐久消耗",
    recipe: "树枝 x3，浆果 x5",
    skins: []
  },
  {
    id: "wanyuan_gulu_ball",
    name: "咕噜球",
    icon: "wanyuan_gulu_ball.png",
    category: "道具",
    desc: "咕噜球，抛向海面后会在落点周围搜索海洋鱼类与龙虾，把命中的目标直接转成对应掉落物并打包成礼物交给投掷者。",
    obtain: "花仙子专属合成",
    usage: "投向海面；自动捕捉落点周围的海鱼和龙虾，并把收获打包成礼物放入背包",
    recipe: "金块 x5",
    skins: []
  },
  {
    id: "wanyuan_large_loaf_bread",
    name: "汗水面包",
    icon: "wanyuan_large_loaf_bread.png",
    category: "道具",
    desc: "汗水面包，基础回复生命3/饥饿3/精神1。低状态时额外加强：生命低于40%时额外回复8生命；饥饿低于50%时额外回复10饥饿；精神低于50%时额外回复5精神。可堆叠20个，所有玩家均可合成。",
    obtain: "直接合成（无需科技台，所有玩家可用）；一次产出10个",
    usage: "食用回复生命3/饥饿3/精神1；低状态触发额外回复（生命+8/饥饿+10/精神+5）",
    recipe: "木头 x3，石头 x2，肉 x1（一次产出 x10）",
    skins: []
  },
  {
    id: "sword_laser_yuan",
    name: "超越2674",
    icon: "sword_laser_yuan.png",
    category: "道具",
    desc: "终极激光剑，伤害随连击数递增：基础35伤害+连击数×5（10秒无攻击则重置）。附加平面伤害25，对暗影阵营造成2.5倍伤害，自带闪电属性。装备时发出温暖黄光。无耐久消耗。",
    obtain: "花仙子专属合成",
    usage: "近战武器（35+连击×5伤害）；平面伤害+25；暗影阵营×2.5；闪电属性；无耐久",
    recipe: "光之晶石 x9，黑魔法棒 x5，金块 x30，硝石 x15，长矛 x9",
    skins: []
  },
  {
    id: "wanyuan_decay_weapon",
    name: "天生牙",
    icon: "wanyuan_decay_weapon.png",
    category: "武器",
    desc: "特殊近战治疗武器。命中时不会造成正常伤害，而是让目标短暂回春；回复量最高为目标最大生命值的 50%，随后这部分生命会在 10 秒内线性衰减退回。手持时可通过左键、F、Ctrl+F 对友方玩家、队友随从和常规目标发起这套专属回春攻击。",
    obtain: "花仙子专属合成",
    usage: "近战挥砍武器（基础伤害 0，攻击距离 1.5/2）；左键、F、Ctrl+F 都会触发【破釜沉舟】回春攻击；适合抢救友方或临时抬高目标血线，但回复生命会在 10 秒内逐步衰减",
    recipe: "长矛 x2，犬牙 x3，金块 x1",
    skins: []
  },
  {
    id: "wanyuan_yuelideng",
    name: "月黎灯",
    icon: "wanyuan_yuelideng.png",
    category: "道具",
    desc: "月黎灯，需要消耗可燃物作为燃料的照明灯。开启后光照半径15（大范围），并携带夜间植物生长标签，使周围植物在夜间也能正常生长。锤击拆除后掉落萤火虫。",
    obtain: "花仙子专属合成",
    usage: "放置后加入可燃物开启；光照半径15；夜间植物仍可生长；锤击拆除掉落萤火虫",
    recipe: "木板 x4，金块 x2，萤火虫 x4，黄宝石 x2，绿宝石 x2",
    skins: [
      { name: "岩石皮肤", icon: "wanyuan_yuelideng_skin_rocks.png", desc: "坚硬岩石风格皮肤" }
    ]
  },
  {
    id: "wanyuan_fickle_sword",
    name: "幻锋",
    icon: "wanyuan_fickle_sword.png",
    category: "道具",
    desc: "花仙子专属的幻化之剑，装备后可与幻柳相互切换形态。基础攻击 95 伤害；右键技能【流星坠击】：跃向落点对半径 6 范围内造成 AOE 伤害（150 + 等级×2.55），落地产生地面冲击波，5 秒冷却。达到 100 级后解锁强化攻击，冷却随等级缩短，500 级时固定 5 秒。",
    obtain: "角色出生自带",
    usage: "近战武器（基础伤害 95）；右键【流星坠击】AOE 跳击；装备时可切换为幻柳形态",
    recipe: "",
    skins: [
      { name: "少阳剑", icon: "wanyuan_fickle_sword_skin.png", desc: "Elegant 品质皮肤" }
    ]
  },
  {
    id: "wanyuan_fickle_whip",
    name: "幻柳",
    icon: "wanyuan_fickle_whip.png",
    category: "道具",
    desc: "幻锋的另一形态，鞭状武器，攻击范围更广。右键技能【蓄力鞭挞】：对直线路径上的敌人造成伤害（95 + 目标最大生命值×(5%+等级×0.01%)），同时治疗路径上的友方玩家（3+等级×0.065 点），命中后回复自身 8 点生命，随从固定回复 20 点。",
    obtain: "装备幻锋后切换形态获得",
    usage: "近战鞭形武器；右键【蓄力鞭挞】直线路径 AOE 伤害+治疗；装备时可切换回幻锋形态",
    recipe: "",
    skins: []
  },
  {
    id: "wanyuan_huahui",
    name: "迷你盆栽",
    icon: "wanyuan_huahui.png",
    category: "道具",
    desc: "迷你盆栽，容器中花瓣或恶魔花瓣占用格数超过3格后，每300秒在周围5格范围内随机生成若干朵花。夜间自动发出暖粉色小灯光（半径2）。锤击拆除后归还容器内所有物品。",
    obtain: "花仙子专属合成",
    usage: "放置后放入花瓣或恶魔花瓣（占用格数超过3格）；每300秒刷新周围花朵；夜间自动亮灯",
    recipe: "木头 x1，花瓣 x4，石头 x3",
    skins: [
      { name: "多肉", icon: "wanyuan_huahui_skin1.png", desc: "Elegant 品质免费皮肤" },
      { name: "百合", icon: "wanyuan_huahui_skin2.png", desc: "Elegant 品质免费皮肤" },
      { name: "墨玉", icon: "wanyuan_huahui_skin3.png", desc: "Elegant 品质免费皮肤" },
      { name: "秋菊", icon: "wanyuan_huahui_skin4.png", desc: "Elegant 品质免费皮肤" },
      { name: "香荷", icon: "wanyuan_huahui_skin5.png", desc: "Elegant 品质免费皮肤" }
    ]
  },
  {
    id: "wanyuan_bayinghe",
    name: "八音盒",
    icon: "wanyuan_bayinghe.png",
    category: "道具",
    desc: "花仙子专属八音盒，可以播放精选的音乐（支持哈基三百首兼容）。音乐播放期间，会给附近5格内所有玩家周期性提供「悠扬乐曲」增益 Buff：移动速度增加 15%、生命值持续恢复（5/分钟）、理智值持续恢复（10/分钟），持续 10 秒。停止播放时增益会在持续时间结束后消失。",
    obtain: "花仙子专属合成",
    usage: "右键打开播放器后播放音乐，提供光照，并为附近5格内玩家施加「悠扬乐曲」Buff（+15%移速，生命/理智恢复）。",
    recipe: "桃花 x10，金块 x5，齿轮 x5",
    skins: []
  },
  {
    id: "wanyuan_tent",
    name: "旅行帐篷",
    icon: "wanyuan_tent.png",
    category: "道具",
    desc: "旅行帐篷。基础状态下提供原版帐篷级别的睡眠恢复。放置后还可继续投入材料升级为强化版，升级后黄昏与夜晚会自动亮起暖光，且休息时生命与理智回复效率翻倍。",
    obtain: "花仙子专属合成",
    usage: "放置后可睡觉恢复状态；可继续消耗木板 x5、萤火虫 x5 升级为强化版旅行帐篷；升级后黄昏/夜晚自动亮灯",
    recipe: "蜘蛛丝 x6，树枝 x4，绳子 x3",
    skins: []
  },
  {
    id: "wanyuan_beike",
    name: "贝壳",
    icon: "wanyuan_beike.png",
    category: "道具",
    desc: "贝壳，花仙子专属祈愿摆件。放置后自带微弱理智光环；可对其投入任意宝石进行【祈雨】，初始成功率 35%，每次失败后下次成功率提高 15%，成功后立刻令世界开始下雨。",
    obtain: "花仙子专属合成（装饰分类）",
    usage: "放置后提供小范围理智光环；对其使用宝石可祈雨，失败会累计下次成功率；可用锤子拆除",
    recipe: "金块 x3，木头 x5",
    skins: []
  },
  {
    id: "wanyuan_fenbaoshu",
    name: "纷宝树",
    icon: "wanyuan_fenbaoshu.png",
    category: "道具",
    desc: "纷宝树，花仙子专属祈愿摆件。放置后自带微弱理智光环；可对其使用金块、纷纷草莓、圆圆橘子或溜溜杨梅进行【祈运】，每次消耗 1 个材料并为角色增加 5 点幸运值，可重复累积。",
    obtain: "花仙子专属合成（装饰分类）",
    usage: "放置后提供小范围理智光环；对其使用金块/纷纷草莓/圆圆橘子/溜溜杨梅可祈运，每次+5幸运；可用锤子拆除",
    recipe: "金块 x3，木头 x5",
    skins: []
  },
  {
    id: "wanyuan_qiqiututu",
    name: "气球兔兔",
    icon: "wanyuan_qiqiututu.png",
    category: "道具",
    desc: "气球兔兔，花仙子专属祈愿摆件。放置后自带微弱理智光环；可对其使用任意熟食进行【祈顺】，消耗 1 份料理后为角色附加持续 120 秒的移速增益（20%），重复祈顺会延长持续时间。",
    obtain: "花仙子专属合成（装饰分类）",
    usage: "放置后提供小范围理智光环；对其使用成品食物(烹饪)可祈顺，获得120秒移速+20%效果，重复使用可续时；可用锤子拆除",
    recipe: "金块 x3，木头 x5",
    skins: []
  },
  {
    id: "wanyuan_meihua",
    name: "梅花景",
    icon: "wanyuan_meihua.png",
    category: "道具",
    desc: "梅花景，花仙子专属装饰摆件。放置后持续播放梅花待机动画，自带微弱理智光环，可作为纯装饰建筑摆放在基地中。",
    obtain: "花仙子专属合成（装饰分类）",
    usage: "放置后提供小范围理智光环；默认外观为梅花，可在拥有皮肤授权时切换迎春花或海棠花外观；可用锤子拆除",
    recipe: "花瓣 x8，树枝 x4，木头 x4",
    skins: [
      {
        name: "迎春花",
        icon: "wanyuan_meihua_yingchun.png",
        desc: "收费皮肤，使用同一套建筑动画包，切换为迎春花待机外观。"
      },
      {
        name: "海棠花",
        icon: "wanyuan_meihua_haitang.png",
        desc: "收费皮肤，使用同一套建筑动画包，切换为海棠花待机外观。"
      }
    ]
  }
];
