const hunterCardList = [
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0272303c997bf72bd7781bb1d2a10a077b3ea251dd9177eb610d842fd42c4066.png",
        "description": "使一只友方野兽获得<b>剧毒</b>。",
        "legacyKeywords": "剧毒,普通,法术,猎人,贫瘠之地"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/be20973296cfcbc49c78029652a2dde3a423877c11cba7f2dd2752ea84ba8599.png",
        "description": "选择一个敌方随从，使你的所有随从攻击该随从，并将死亡的友方随从移回你的手牌。",
        "legacyKeywords": "暴风城下的集结,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/97fc72dbfabc5ef71fca2ddf6e309ce8d78edcf3d0e39ed5939ab27e2a515734.png",
        "description": "<b>任务线：</b>通过三张法术牌造成伤害。<b>奖励：</b>你的英雄技能能够以随从为目标。",
        "legacyKeywords": "任务线,传说,暴风城下的集结,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/fd7b4dd3e3deff3a46af66f6d5611f6ed79eba8b1dad513738fa3a313b2df463.png",
        "description": "对一个敌人造成 2点伤害。如果你在此牌在你手中时使用过纳迦牌，则再选择一个目标。",
        "legacyKeywords": "探寻沉没之城,普通,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/f6c0b2d0ae45b459ddeff387e06ace75a46940571352dcdcf2aec8a8be90fa83.png",
        "description": "造成 1点伤害。召唤一只1/1并具有<b>突袭</b>的土狼。",
        "legacyKeywords": "普通,法术,猎人,突袭,贫瘠之地"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/7652c99c7ced1f6fc276d8782378003431451bfc6440e481c9d6bebd8b323c19.png",
        "description": "在三个友方野兽死亡后，抽一张野兽牌并使其获得+1/+1。失去1点耐久度。",
        "legacyKeywords": "暴风城下的集结,武器,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/514700026a7aa6cdfc0ec1b5ed7b7d7b3e0a6dd3ab6c20f6846d9b0b732cea32.png",
        "description": "造成 2点伤害。",
        "legacyKeywords": "奥术,核心,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/1946da556bcc1cfcaa0455e71f4709f134831b27d82e81d8f5bbd8936c6cfcc2.png",
        "description": "随机对三个敌人造成 1点伤害。",
        "legacyKeywords": "奥术,巫妖王的进军,普通,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/269a1efe52819aa192decf3ba5917c7a5960a2e465bd3360518d81fd1f77442d.png",
        "description": "在本回合中，你的法术具有<b>剧毒</b>。",
        "legacyKeywords": "剧毒,史诗,探寻沉没之城,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/beea5e3363f32ac6d3dce7349e4e46dab5be1166e6b091af7b375cde3b390019.png",
        "description": "<b>亡语：</b>召唤一只2/1的蝙蝠。",
        "legacyKeywords": "亡语,普通,猎人,纳斯利亚堡的悬案,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/6b1ab6ebf71cb5636aa1ddf43c9698cd18a3d19e16e4d6d655b8039cc3711fb1.png",
        "description": "你的英雄在攻击时具有<b>免疫</b>。",
        "legacyKeywords": "免疫,普通,核心,武器,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/dd0af21af4656a6cda7b3cf7066aa9c2cad48ebc723d57961bdce5576ee8e17b.png",
        "description": "<b>暴怒：</b>将一张赤鳞迅猛龙洗入你的牌库并使其永久获得+2/+1。",
        "legacyKeywords": "暴怒,猎人,稀有,贫瘠之地,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0ab0f8273d5e353dd3e79cc9988742d9e067047a1ebd624efa22255277698fa1.png",
        "description": "从你的牌库中<b>发现</b>一张牌。",
        "legacyKeywords": "发现,核心,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0b40fbd403b27ed6eadd43b96d4979042cec69b8df18931a59ad33cb4c57e9db.png",
        "description": "<b>突袭，战吼：</b>将一张1/1并具有<b>突袭</b>的山猫置入你的手牌。",
        "legacyKeywords": "战吼,普通,核心,猎人,突袭,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/4ae321d0c844211b96d05dc7200317729381769318b3a21a0de29b1e2016988e.png",
        "description": "<b>战吼：</b> <b>探底</b>。如果选中的是法力值消耗为（1）的随从牌，则召唤它。",
        "legacyKeywords": "战吼,探寻沉没之城,探底,普通,机械,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/d93be0fa13e24e50ffe4231ecc2bdcb205acb9eafa669ef4d0212a9d98c2fadb.png",
        "description": "在你的回合结束时，抽一张<b>奥秘</b>牌并将其法力值消耗变为（1）点。持续3回合。",
        "legacyKeywords": "奥特兰克的决裂,奥秘,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/458fb0202733d45ee69a79875f8fd3af756a05ac6fdc640a690057ac8824a761.png",
        "description": "<b>奥秘：</b>当一个敌方随从攻击时，将其移回拥有者的手牌，并且法力值消耗增加（2）点。",
        "legacyKeywords": "冰霜,奥秘,普通,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/92eab520d140e4fa3e2e362e4fea7d120eab001884d1b64e13858f83774e8e2c.png",
        "description": "<b>奥秘：</b>当你的对手施放一个法术时，改为将其移回拥有者的手牌，并且法力值消耗增加（1）点。",
        "legacyKeywords": "冰霜,史诗,奥特兰克的决裂,奥秘,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/722ae2302f47bb5929e5db8f8b2ada42fb94827e36e50886a79cb79872683556.png",
        "description": "在你的回合开始时，使你手牌中的所有随从牌获得+1/+1。",
        "legacyKeywords": "猎人,稀有,贫瘠之地,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/9da0263abaa9656976268adef7e2c23d2fb45cea7601ec87a97c48f7fe1af6c1.png",
        "description": "<b>奥秘：</b>在你的对手在一回合中使用三张牌后，对敌方英雄造成 6点伤害。",
        "legacyKeywords": "奥秘,普通,法术,猎人,纳斯利亚堡的悬案"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/39a8b8924cbd77262e45c6e2aa102f775f2624973e0e7574c7c05b20a0bfeab6.png",
        "description": "对一个随从造成 2点伤害。<b>法力渴求（6）：</b>抽取相同数量的牌。",
        "legacyKeywords": "奥术,巫妖王的进军,法力渴求（X）,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/6b74dd483a7b4c2412f4c6e1956c71998d56ba71c6ee7a7d8ba0be513218eec4.png",
        "description": "<b>战吼：</b>造成 点伤害。<i>（在本局对战中，你的英雄每攻击一次都会提升！）</i>",
        "legacyKeywords": "巫妖王的进军,战吼,普通,猎人,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/e30fddc231dbd438b58de555879259139058ed6adff084ec61ad6f06bdcd13dc.png",
        "description": "使一个友方随从获得+2攻击力。如果是野兽，还会使其获得<b>突袭</b>。",
        "legacyKeywords": "地标,猎人,稀有,突袭,纳斯利亚堡的悬案"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/304be2b18b667cb93163f18c50c0437546f435fdd464b155ff4adb46188ca3e6.png",
        "description": "<b>战吼：</b>制造一个自定义的僵尸兽。",
        "legacyKeywords": "亡灵,史诗,巫妖王的进军,战吼,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/6faf1bc2eee9d9b6152ffaa2fb86b4396f773ec95b828b4bd33e9e14083f2879.png",
        "description": "从你的牌库中<b>发现</b>一张法术牌。如果选中的是奥术法术牌，使其获得<b>法术伤害+1</b>。",
        "legacyKeywords": "发现,史诗,奥术,巫妖王的进军,法术,法术伤害,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/e3232fa0049c36513ca5a9362c4b2a61203cee216e9fed0f77b23cb3a073e54a.png",
        "description": "造成 3点伤害。 如果你没有其他手牌，则抽一张牌。",
        "legacyKeywords": "普通,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/3a67f632c8ad4b0ff71e436ef48190c5c424237ea7989b58f063891b011e6a56.png",
        "description": "在你施放一个法术后，对敌方英雄造成等同于其法力值消耗的 伤害。",
        "legacyKeywords": "传说,探寻沉没之城,猎人,纳迦,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/8b849861f6156b69dc8318a2af39032046b1d3002780f9e080db704961442803.png",
        "description": "<b>奥秘：</b>当你的随从受到攻击时，召唤三条1/1的蛇。",
        "legacyKeywords": "史诗,奥秘,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/f94187b3696e8e0d4c05758264b331e66ecbf2d2d06d8c88480882184080b6cf.png",
        "description": "<b>战吼：</b>随机召唤一个<b>休眠</b>的灵种。",
        "legacyKeywords": "战吼,猎人,稀有,纳斯利亚堡的悬案,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/f5daf046ab6ca1d238a15749584a4a6709b891790b41f0b35013a0288449daa1.png",
        "description": "<b>奥秘：</b>当你的英雄受到攻击，对所有敌人造成 2点伤害。",
        "legacyKeywords": "奥秘,普通,核心,法术,火焰,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/d263727089efbf3b3a07c810de17129a31102b67e2a693d7813062666a9f2251.png",
        "description": "抽一张牌。重复，直到你拥有至少三张牌。",
        "legacyKeywords": "奥特兰克的决裂,普通,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/a2510a804e8fd81c31967b497fbf20ea09a21f56b8175c419ad2a79ed81983ce.png",
        "description": "召唤两只2/1的蝙蝠。<b>注能（ ）：</b>使其获得+1/+2。",
        "legacyKeywords": "普通,法术,注能,猎人,纳斯利亚堡的悬案"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0ebf70c3cc910327e122b88f0756c0d7c295ad984e0496e3bcb2fc612a66e8d7.png",
        "description": "<b>可交易</b> 使一个随从获得+2/+3。在你<b>交易</b>此牌后，使一个友方随从获得<b>突袭</b>。",
        "legacyKeywords": "可交易,暴风城下的集结,法术,猎人,稀有,突袭"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/a5f516ad51fe2bbd1ae82768535cdef0420ee44241fa1e82ff2aec4695159a50.png",
        "description": "<b>奥秘：</b>当一个友方随从死亡时，召唤一个它的复制。复制会<b>休眠</b>1回合。",
        "legacyKeywords": "史诗,奥秘,探寻沉没之城,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/cef77fb66672551d4d09b31f35e3b4e06d8d77e9fadef2825679dbdb48bca175.png",
        "description": "<b>荣誉消灭：</b>获得+1/+1。",
        "legacyKeywords": "奥特兰克的决裂,普通,武器,猎人,荣誉消灭"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/3b1cb94baefa84edf2c8a56f9dee07ac1d33d82d0d52494045a73dd8274d1f01.png",
        "description": "<b>战吼：</b> 从你的牌库中<b>发现</b>一张野兽牌的复制。",
        "legacyKeywords": "发现,战吼,核心,猎人,稀有,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/c80f9267b7b700caa0935d133c7fe0c4e451bf1aa97170c76f48248d8695be27.png",
        "description": "<b>战吼：</b>使你手牌中所有奥术法术牌获得<b>法术伤害+1</b>。",
        "legacyKeywords": "巫妖王的进军,战吼,法术伤害,猎人,稀有,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/3f26c262feb303161e13a367f71b50dbe4036170efc0f801f6990823ff11ddff.png",
        "description": "召唤一只2/2并具有<b>突袭</b>的野兽。<i>（当你有5点法力值时升级。）</i>",
        "legacyKeywords": "法术,猎人,稀有,突袭,贫瘠之地"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/603cae224a8c5d714fdadf2b49a0b5848d6ee173969198c5d5b38be11ae4da20.png",
        "description": "<b>战吼：</b>如果你在此牌在你手中时施放过三个法术，造成5点伤害。 <i>（还剩 个！）</i> <i>（已经就绪！）</i>",
        "legacyKeywords": "战吼,探寻沉没之城,猎人,稀有,纳迦,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/b47b5568d27bab205dc9545372950bff713e9ff449cb7b5e67b1b60eb7ac32eb.png",
        "description": "随机召唤一个野兽伙伴。",
        "legacyKeywords": "普通,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/27d8dafdec24df33ac7a1b903672ea08c61f872eed55148fb5891e5fe1784cd3.png",
        "description": "<b>战吼：</b>使你牌库中所有奥术法术牌获得<b>法术伤害+1</b>。",
        "legacyKeywords": "传说,巫妖王的进军,战吼,法术伤害,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0f5bf5abfc84ffd58c560478032c8f1d97411a505354057ee205532a05501cbf.png",
        "description": "在一只友方野兽攻击后，从你的牌库中召唤一只法力值消耗减少（1）点的野兽。",
        "legacyKeywords": "传说,猎人,贫瘠之地,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/79295d12a3470eea3a3ea1cba79896d53d8d33012625f83c985c0674d91ac9b4.png",
        "description": "<b>发现</b>一只在本局对战中死亡的友方野兽，并召唤该随从。",
        "legacyKeywords": "发现,奥特兰克的决裂,法术,猎人,稀有,自然"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/47d6c987ed2db0ff0da3f062f2e118b347ea4ad70dc7d43255683165888face7.png",
        "description": "使一个随从获得+2/+2和攻击时具有<b>免疫</b>。当该随从死亡时，召唤一只山羊。",
        "legacyKeywords": "免疫,暴风城下的集结,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/6a11b58caf153a7e4837733a37ad6152559e2a115e4bab1cda840f6645908ce6.png",
        "description": "在该随从攻击后，使你的野兽获得+1/+1。",
        "legacyKeywords": "恶魔,普通,暴风城下的集结,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/fd940ba782912c6975a9ddd56318a038827b519b5ed6a0b7d041194443b31aec.png",
        "description": "造成 2点伤害。<b>荣誉消灭：</b>将一张灭龙射击置入你的手牌。",
        "legacyKeywords": "奥特兰克的决裂,法术,猎人,稀有,荣誉消灭"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/da55c55016fa7a1d03ddfe6d1f51677352d16475a6d66f67765a916c9aa96c59.png",
        "description": "造成 3点伤害。你的下一个英雄技能会额外造成2点伤害。",
        "legacyKeywords": "普通,暴风城下的集结,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/3213bf79e204e64116d1a55748297262d15161747ff0aaf8529fa4031eeeadf8.png",
        "description": "你的<b>奥秘</b>牌法力值消耗为（0）点。",
        "legacyKeywords": "奥秘,普通,核心,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/f0f51c75dfdac061b1e70f482b9f9a28ebdf61569a432fee8febbfec0b8c19d0.png",
        "description": "在你施放一个法术后，召唤一只1/1并具有<b>突袭</b>的土狼。",
        "legacyKeywords": "史诗,猎人,突袭,贫瘠之地,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/930d0d3f51e5946b47ca9a1bce7ac711bcacc7e8e1213f81e8d7fdc24e65f714.png",
        "description": "召唤两条2/2的狮子鱼。如果你在此牌在你手中时使用过纳迦牌，使它们获得+1/+1。",
        "legacyKeywords": "探寻沉没之城,法术,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/4162a93184e1ec7a76ab4f6854fe57659a6a3ea0d8426f5d9006f191d1f05320.png",
        "description": "随机消灭一个敌方随从。",
        "legacyKeywords": "普通,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/c05db8a6348bc52440f368e4c3d82094b8e9cbb8637739650b7b8f4489b511e3.png",
        "description": "抽一张纳迦牌和一张法术牌。",
        "legacyKeywords": "探寻沉没之城,普通,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/605fba7da3c7d20a14fd2b348fa5760e3c3f0e33be2b31a1af0095e971626c35.png",
        "description": "随机对一个敌方随从造成 3点伤害。重复此效果，每次伤害减少1点。",
        "legacyKeywords": "探寻沉没之城,法术,猎人,稀有,自然"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/2d5cf4b8a1adec9bd44e9bd5e6245e40e904ed2bdad1370310f51f9063da65ce.png",
        "description": "<b>战吼：</b><b>发现</b>一张野兽牌，<b>奥秘</b>牌或 武器牌。",
        "legacyKeywords": "发现,奥秘,战吼,普通,猎人,贫瘠之地,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/67814aed9ca9a2cd58ce44c1dbc4b0b2c671125659e13ec10778e05f3487a287.png",
        "description": "召唤两个不同的<b>休眠</b>灵种。使你的灵种提前1回合唤醒。",
        "legacyKeywords": "史诗,法术,猎人,纳斯利亚堡的悬案,自然"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/f58e85098f8b0af6517b7e97c6e6e1f35379ee7d0ddf0363b66c7ec95981c167.png",
        "description": "每当你的英雄攻击随从时，将随从的攻击力变为1。",
        "legacyKeywords": "巫妖王的进军,普通,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/df064ecc0be6832bf2fd9c81f739509351da58848b0bb50860c141eb26e0b405.png",
        "description": "造成 3点伤害。随机召唤一个<b>休眠</b>的灵种。",
        "legacyKeywords": "史诗,法术,猎人,纳斯利亚堡的悬案"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/c032bfd9bd19677d4cac3ab78c23666a8feee989b9b8f2ad60be39ea04d121ae.png",
        "description": "<b>战吼：</b>如果你控制一个<b>奥秘</b>，便获得+1/+1和<b>潜行</b>。",
        "legacyKeywords": "奥特兰克的决裂,奥秘,战吼,普通,潜行,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/9f65bc49871159cb6727d3613b3e4e48fcea0999b7b9d86260d42546626462ea.png",
        "description": "在你的英雄攻击后，<b>探底</b>。如果选中的是野兽牌，使其法力值消耗减少（2）点。",
        "legacyKeywords": "探寻沉没之城,探底,武器,猎人,稀有"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/a4f301b73c3a97fa947fc2740316e46731c627e8b17667ab5e4ad619dce22e8e.png",
        "description": "使一个野兽获得+3/+3。将它的三张复制洗入你的牌库，且这些复制都具有+3/+3。",
        "legacyKeywords": "普通,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/00b52c19dccc9a2cf5820116abe12f581f464e86fdca234594c22daddace2e9f.png",
        "description": "<b>战吼：</b>如果你在此牌在你手中时施放过法术，你的下一个法术会施放两次。",
        "legacyKeywords": "战吼,探寻沉没之城,猎人,稀有,纳迦,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0203c594db5a126a2443d4aeb2099b329b1d5f48a298c7d7c3ed23cf31248ae4.png",
        "description": "<b>战吼：</b>重复上一个触发过的友方<b>亡语</b>。",
        "legacyKeywords": "亡语,战吼,普通,暴风城下的集结,猎人,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/da5e551dbcd84044c81a6f3c44c5482f2a5539234f1d75c6ae9532d2f73a30ef.png",
        "description": "对一个随从造成 3点伤害，从你的牌库中施放一个<b>奥秘</b>。<b>荣誉消灭：</b>改为施放两个。",
        "legacyKeywords": "史诗,奥特兰克的决裂,奥秘,法术,猎人,荣誉消灭"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/dbd2e740ab4f34f1fe53077d158a4c9022dd8fa7f35dfc551fab3b251d19076a.png",
        "description": "<b>战吼：</b>从你的牌库中<b>发现</b>一张野兽牌。使其所有的复制获得+2/+1<i>（无论它们在哪）</i>。",
        "legacyKeywords": "发现,史诗,战吼,猎人,贫瘠之地,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/da425d356315c0927a7d544d3ea92d85ef7189c8e4563fcf28ccb2695bd30fc1.png",
        "description": "对一个随从造成 4点伤害。<b>发现</b>一张法术牌。",
        "legacyKeywords": "发现,普通,核心,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/5f4530dc2b4987d5f0c43cb99eaf0f4db5ff16dc39a674c1432fbd46b29b204d.png",
        "description": "<b>剧毒</b>",
        "legacyKeywords": "剧毒,武器,猎人,稀有,贫瘠之地"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/7dc243477b5d6aa459d288d40ae9020bd8912302afdd95ad05ccdc4aa1cf6989.png",
        "description": "召唤 1只4/4并具有<b>突袭</b>的山猫<i>（受<b>法术伤害</b>加成影响）</i>。",
        "legacyKeywords": "奥术,巫妖王的进军,法术,法术伤害,猎人,稀有,突袭"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/7cd911530b0368f8f4191ae2a79da63d0a6bc51893adf5544f49581fd61a530a.png",
        "description": "<b>突袭</b>，<b>注能（ ）：</b>同时对其攻击目标相邻的随从造成伤害。",
        "legacyKeywords": "普通,注能,猎人,突袭,纳斯利亚堡的悬案,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/b3da3c063c611c83304184a668c3d9af612dd2656182ab2477a6cfed9026bbe3.png",
        "description": "对一个随从造成 6点伤害，超过目标生命值的伤害会命中敌方英雄。",
        "legacyKeywords": "普通,法术,猎人,贫瘠之地"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/a7f5edc01b9ffb73e804038d20c184db6e75ca2be94abf4358078f1f0fb74a9c.png",
        "description": "<b>亡语：</b>召唤五只1/1的老鼠。",
        "legacyKeywords": "亡语,普通,暴风城下的集结,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/5367f4bc28d714902fd2effc00ba39d8129f8dacdf25eb03486e0e18ada53f8f.png",
        "description": "<b>突袭</b>，<b>亡语：</b>将一张沉没的刃豹置于你的牌库底。",
        "legacyKeywords": "亡语,探寻沉没之城,普通,猎人,突袭,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/4f67e6d1ca8e880552a404c354857daf4d4b0f44b4b8ebcb051d4d47a3e3cd22.png",
        "description": "<b>暴怒：</b>召唤四只1/1并具有<b>突袭</b>的土狼。",
        "legacyKeywords": "普通,暴怒,猎人,突袭,贫瘠之地,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/d363c3073a14f351263db9ce067ddbaf8cc60d067d00e38cc420b34d9ba4fd78.png",
        "description": "<b>突袭</b>，<b>亡语：</b>你的下一张野兽牌法力值消耗减少（2）点。",
        "legacyKeywords": "亡语,奥特兰克的决裂,猎人,稀有,突袭,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/b398426fd7a76a0de818e9514d0441ce8cef1073544931f33f81f9f3ef7e9a3e.png",
        "description": "你的其他随从都获得<b>突袭</b>。",
        "legacyKeywords": "传说,核心,猎人,突袭,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/332f48864e4abcde0ff2739eee785beba2d283228c9beb71b2eab30813f7634d.png",
        "description": "<b>战吼：</b>从你的牌库中召唤一只法力值消耗小于或等于（5）点的野兽。",
        "legacyKeywords": "奥特兰克的决裂,战吼,普通,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/bf0b751200489f7916cb00f3ff169e86d359ff617fd7fe1b383937abbe93fbf7.png",
        "description": "<b>战吼：</b> 抽取法力值消耗为（1），（2）和（3）点的法术牌各一张。",
        "legacyKeywords": "传说,战吼,猎人,贫瘠之地,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/f81a0707ba3a0cc8903fa0431c079cce5b3db337e4232ae8b6e230446d642c36.png",
        "description": "每当该随从攻击时，使你的其他野兽获得+2/+2。 <b>注能（ 只野兽）：</b> 获得<b>突袭</b>。",
        "legacyKeywords": "注能,猎人,稀有,突袭,纳斯利亚堡的悬案,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/1792da989998e1dac1925d73ffe9e2b16c994969f4a01ed6ba2fa2ae09c702a5.png",
        "description": "<b>战吼：</b>召唤每种<b>休眠</b>灵种各一个。",
        "legacyKeywords": "传说,战吼,猎人,纳斯利亚堡的悬案,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/a5266b3a4b3a4d7d2f3827a4734d4d6ee040b2045d207f28e2f204805558df7f.png",
        "description": "<b>可交易</b> <b>亡语：</b>召唤两只1/1并具有<b>剧毒</b>和<b>突袭</b>的 蜘蛛。",
        "legacyKeywords": "亡语,剧毒,可交易,史诗,暴风城下的集结,猎人,突袭,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/b2ee884f19a07e325d02c14e9e269ce6e77d27a6c538c3dea7673fa00b31e528.png",
        "description": "<b>战吼：</b> 随机对一个敌人造成2点伤害。每有一只你的野兽，重复一次。",
        "legacyKeywords": "亡灵,战吼,普通,暴风城下的集结,海盗,猎人,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/0a9c5d7a1189fd50d9e8a52b1078e294fc93b3d222877a0a2ca01ae7c43aaa69.png",
        "description": "<b>突袭</b>，<b>亡语：</b>进入<b>休眠</b>状态。在5个友方随从死亡后复活。",
        "legacyKeywords": "亡语,传说,暴风城下的集结,猎人,突袭,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/aeb7a5a5351ce69eafaf044f098414ef4ddefc99662556be2f69049cae84f2b4.png",
        "description": "在你的英雄攻击后，使你的所有随从获得+1/+1<i>（无论它们在哪）</i>。",
        "legacyKeywords": "传说,巫妖王的进军,武器,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/a347e47102ffb4f665fa91b731d3315dba7e264744fa4c25bc6b0c07d1e05f33.png",
        "description": "召唤七只1/1的老鼠。战场上放不下的老鼠会进入你的手牌，并获得+4/+4。",
        "legacyKeywords": "史诗,暴风城下的集结,法术,猎人"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/d259a148d87f42ddbe1597a68120af8ef12c141dd50f3fad358c0f95eadd15e1.png",
        "description": "<b>战吼：</b><b>发现</b>一个在本局对战中死亡的友方<b>亡语</b>随从，触发并获得其<b>亡语</b>。",
        "legacyKeywords": "亡灵,亡语,传说,发现,战吼,猎人,纳斯利亚堡的悬案,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/1e69ae888e427f964dac25720da082b4f00a2f76f57259a0f91baafd796aabe9.png",
        "description": "<b>战吼：</b><b>发现</b>并施放两张强化的<b>奥秘</b>牌。",
        "legacyKeywords": "传说,发现,奥特兰克的决裂,奥秘,战吼,猎人,英雄"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/c634146c21ca1dc4350aad6c6bcfcfa497519179fa534e53451244ed3f24e1db.png",
        "description": "<b>亡语：</b>召唤两只2/2的土狼。",
        "legacyKeywords": "亡语,核心,猎人,稀有,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/6d4a103cbf044af0aa2dcbfc6da0d4a883ba21b3ec9fc7ebcd3665fca7781dba.png",
        "description": "<b>嘲讽</b>，<b>亡语：</b>召唤两只2/4并具有<b>嘲讽</b>的山熊宝宝。",
        "legacyKeywords": "亡语,嘲讽,奥特兰克的决裂,普通,猎人,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/ff530214062a233c7588ed9940a269d3f770b8b9a675057c88cad0c39e431b9a.png",
        "description": "<b>巨型+2</b> <b>战吼：</b>使你的海卓拉顿之头获得<b>突袭</b>。",
        "legacyKeywords": "传说,巨型+X,战吼,探寻沉没之城,猎人,突袭,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/d2beb33e092979e31ccb993a05091d0fedcf02f39c3b6b7535d12019538b227d.png",
        "description": "<b>战吼：</b>召唤一个加尔贡伙伴。<b>注能（ ）：</b>再召唤一个。<b>注能（ ）：</b>再召唤一个！",
        "legacyKeywords": "传说,战吼,注能,猎人,纳斯利亚堡的悬案,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/3a65020dc4c8bb33e797539b6245388f98b21c6d2e843217ed00a8b4ba8df5b8.png",
        "description": "随机对三个敌方随从造成 6点伤害。超过目标生命值的伤害会命中敌方英雄。",
        "legacyKeywords": "法术,猎人,稀有,纳斯利亚堡的悬案"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/67b4699ac0ef1d6a54d74741d9d03174a073bab57961a5768eda4b86ccdc6999.png",
        "description": "<b>冲锋</b>",
        "legacyKeywords": "传说,冲锋,核心,猎人,野兽,随从"
    },
    {
        "imageUrl": "https://hearthstone.nosdn.127.net/hearthstone/99349c3d04af6cf8f9d629a8d51ebdcac6c0419f6322c6893a69f2384f381afd.png",
        "description": "<b>战吼：</b>从你的牌库中召唤一只野兽并使其获得<b>突袭</b>。如果它在本回合中消灭了一个随从，重复此效果。",
        "legacyKeywords": "传说,奥特兰克的决裂,战吼,猎人,突袭,随从"
    }
]

export default hunterCardList