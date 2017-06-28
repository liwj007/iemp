const state = {
  username: 'Admin-233',
  projectList: [
    {'name': '全国大学生英语竞赛', 'college': '外国语学院', 'scale': '全国', 'category': '一类'},
    {'name': '中国机器人大赛', 'college': '信息与电子工程学院', 'scale': '全国', 'category': '一类'},
    {'name': '全国英语演讲比赛', 'college': '外国语学院', 'scale': '全国', 'category': '二类'},
    {'name': '全国大学生电子设计大赛', 'college': '信息与电子工程学院', 'scale': '全国', 'category': '二类'},
    {'name': '全国大学生电子竞赛信息安全技术邀请赛', 'college': '信息与电子工程学院', 'scale': '全国', 'category': '二类'},
    {'name': '中国大学生服务外包创新创业大赛', 'college': '计算机科学与技术学院', 'scale': '全国', 'category': '二类'},
    {'name': '全国管理决策模拟大赛', 'college': '公共管理学院', 'scale': '全国', 'category': '二类'}
  ],
  competitionList: [
    {'name': 'ACM国际大学生程序设计竞赛', 'college': '计算机科学与技术', 'scale': '国际', 'category': '一类'},
    {'name': 'iCAN创新创业大赛', 'college': '信息与电子工程学院', 'scale': '国际', 'category': '一类'},
    {'name': '全国大学生数学竞赛', 'college': '数学与信息科学学院', 'scale': '全国', 'category': '一类'},
    {'name': '全国企业竞争模拟大赛', 'college': '工商管理学院', 'scale': '全国', 'category': '一类'},
    {'name': '“精创教育杯”人力资源管理沙盘竞赛', 'college': '工商管理学院', 'scale': '全国', 'category': '一类'},
    {'name': '全国高校商业精英挑战赛', 'college': '国际教育学院', 'scale': '全国', 'category': '一类'},
    {'name': '全国商科院校技能大赛国际贸易专业竞赛', 'college': '经济学院', 'scale': '全国', 'category': '二类'},
    {'name': '高校世博辩论大赛', 'college': '工商管理学院', 'scale': '全国', 'category': '二类'},
    {'name': '泰迪杯全国大学生数据挖掘竞赛', 'college': '管理科学与工程学院', 'scale': '全国', 'category': '二类'},
    {'name': '山东省电子商务专业竞赛', 'college': '外国语学院', 'scale': '山东省', 'category': '三类'},
    {'name': '齐鲁大学生创业计划竞赛', 'college': '工商管理学院', 'scale': '山东省', 'category': '三类'}
  ],
  studentAwardStandard: [
    {'proLevel': '国家级综合类竞赛', 'awardLevel': '国家级一等奖', 'money': '10000', 'credit': '5'},
    {'proLevel': '国家级综合类竞赛', 'awardLevel': '国家级二等奖', 'money': '8000', 'credit': '5'},
    {'proLevel': '国家级综合类竞赛', 'awardLevel': '国家级三等奖', 'money': '6000', 'credit': '5'},
    {'proLevel': '省部级竞赛', 'awardLevel': '省级一等奖', 'money': '6000', 'credit': '3'},
    {'proLevel': '省部级竞赛', 'awardLevel': '省级二等奖', 'money': '5000', 'credit': '2'},
    {'proLevel': '省部级竞赛', 'awardLevel': '省级三等奖', 'money': '4000', 'credit': '2'},
    {'proLevel': '地市级竞赛', 'awardLevel': '地市级一等奖', 'money': '3000', 'credit': '1'},
    {'proLevel': '地市级竞赛', 'awardLevel': '地市级二等奖', 'money': '2000', 'credit': '0.5'},
    {'proLevel': '地市级竞赛', 'awardLevel': '地市级三等奖', 'money': '1000', 'credit': '0.5'},
    {'proLevel': '其他类竞赛', 'awardLevel': '一等奖', 'money': '800', 'credit': '0'},
    {'proLevel': '其他类竞赛', 'awardLevel': '二等奖', 'money': '600', 'credit': '0'},
    {'proLevel': '其他类竞赛', 'awardLevel': '三等奖', 'money': '400', 'credit': '0'}
  ],
  teacherAwardStandard: [
    {'proLevel': '国家级综合类竞赛', 'awardLevel': '国家级一等奖', 'money': '10000'},
    {'proLevel': '国家级综合类竞赛', 'awardLevel': '国家级二等奖', 'money': '8000'},
    {'proLevel': '国家级综合类竞赛', 'awardLevel': '国家级三等奖', 'money': '6000'},
    {'proLevel': '省部级竞赛', 'awardLevel': '省级一等奖', 'money': '6000'},
    {'proLevel': '省部级竞赛', 'awardLevel': '省级二等奖', 'money': '5000'},
    {'proLevel': '省部级竞赛', 'awardLevel': '省级三等奖', 'money': '4000'},
    {'proLevel': '地市级竞赛', 'awardLevel': '地市级一等奖', 'money': '3000'},
    {'proLevel': '地市级竞赛', 'awardLevel': '地市级二等奖', 'money': '2000'},
    {'proLevel': '地市级竞赛', 'awardLevel': '地市级三等奖', 'money': '1000'},
    {'proLevel': '其他类竞赛', 'awardLevel': '一等奖', 'money': '800'},
    {'proLevel': '其他类竞赛', 'awardLevel': '二等奖', 'money': '600'},
    {'proLevel': '其他类竞赛', 'awardLevel': '三等奖', 'money': '400'}
  ],
  rights: [
    {'name': '谭秀森', 'no': '199217763', 'rights': [2, 3, 8, 12, 5, 7, 14, 15]},
    {'name': '温国锋', 'no': '201518476', 'rights': [1, 3, 8, 12, 7, 14, 15]},
    {'name': '林雪丽', 'no': '201513063', 'rights': [4, 10, 11, 13, 6]},
    {'name': '刘永策', 'no': '201516509', 'rights': [3, 4, 13, 6]},
    {'name': '柳中杰', 'no': '201512829', 'rights': [3, 4, 10, 11]},
    {'name': '赵瑞芳', 'no': '201516967', 'rights': [3, 4, 10, 11, 13, 6]},
    {'name': '魏春洋', 'no': '201511400', 'rights': [1, 3, 4, 10, 11, 13, 6]},
    {'name': '杨晓龙', 'no': '201511327', 'rights': [4, 10, 11, 13, 6]},
    {'name': '杨秀文', 'no': '201514718', 'rights': [1, 3, 4, 10, 11, 13, 6]},
    {'name': '李彦', 'no': '201513540', 'rights': [1, 3]},
    {'name': '吕如敏', 'no': '201512921', 'rights': [4, 10, 11, 13, 6]},
    {'name': '孙晓羽', 'no': '201513515', 'rights': [3, 4, 10, 11, 13, 6]},
    {'name': '陈玉明', 'no': '201514378', 'rights': [1, 3, 4, 10, 11]},
    {'name': '马金智', 'no': '201512567', 'rights': [1, 3, 4, 10, 11]},
    {'name': '李中东', 'no': '201517218', 'rights': [1, 3, 4, 10, 11]},
    {'name': '王发明', 'no': '201516414', 'rights': [4, 10, 11, 13, 6]},
    {'name': '周蕾', 'no': '201515547', 'rights': [4, 10, 11, 13, 6]}
  ],
  teachers: [
    {'id': '1', 'no': '201513063', 'name': '林雪丽', 'college': '工商管理学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13000166065', 'awardNum': '0'},
    {'id': '2', 'no': '201516509', 'name': '刘永策', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13105207085', 'awardNum': '2'},
    {'id': '3', 'no': '201512829', 'name': '柳中杰', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13205355230', 'awardNum': '8'},
    {'id': '4', 'no': '201516967', 'name': '赵瑞芳', 'college': '工商管理学院', 'title': '研究员', 'duty': '专职科研', 'phone': '13405355976', 'awardNum': '2'},
    {'id': '5', 'no': '201511400', 'name': '魏春洋', 'college': '工商管理学院', 'title': '助理研究员', 'duty': '专职科研', 'phone': '13405452102', 'awardNum': '4'},
    {'id': '6', 'no': '201511327', 'name': '杨晓龙', 'college': '工商管理学院', 'title': '副研究员', 'duty': '专职科研', 'phone': '13506453614', 'awardNum': '3'},
    {'id': '7', 'no': '201514718', 'name': '杨秀文', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13800536652', 'awardNum': '7'},
    {'id': '8', 'no': '201513540', 'name': '李彦', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13906454009', 'awardNum': '8'},
    {'id': '9', 'no': '201512921', 'name': '吕如敏', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13953511714', 'awardNum': '0'},
    {'id': '10', 'no': '201513515', 'name': '孙晓羽', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13953523797', 'awardNum': '2'},
    {'id': '11', 'no': '201514378', 'name': '陈玉明', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13854513588', 'awardNum': '3'},
    {'id': '12', 'no': '201512567', 'name': '马金智', 'college': '工商管理学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13864581327', 'awardNum': '5'},
    {'id': '13', 'no': '201517218', 'name': '李中东', 'college': '工商管理学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13884646088', 'awardNum': '0'},
    {'id': '14', 'no': '201516414', 'name': '王发明', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13884937534', 'awardNum': '2'},
    {'id': '15', 'no': '201515547', 'name': '周蕾', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13791227873', 'awardNum': '7'}
  ],
  students: [
    {id: '1', no: '201633660425', name: '吴贤鹏', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13000164409', card: '6227002189232454453'},
    {id: '2', no: '201633660422', name: '章力文', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13105203996', card: '6227002184151730408'},
    {id: '3', no: '201633660421', name: '李昊正', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13205352995', card: '6227002126747196467'},
    {id: '4', no: '201633660416', name: '许卓杰', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13405356844', card: '6227002152822641739'},
    {id: '5', no: '201633660413', name: '赵涨涛', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13405453746', card: '6227002121121750765'},
    {id: '6', no: '201633660409', name: '冯骥才', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13506457656', card: '6227002168302731813'},
    {id: '7', no: '201633660406', name: '黄丽丽', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13800537658', card: '6227002149482238049'},
    {id: '8', no: '201633660405', name: '崔恩宇', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13906456543', card: '6227002165753125309'},
    {id: '9', no: '201633660315', name: '吴泽滔', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13953512029', card: '6227002160987895637'},
    {id: '10', no: '201633660312', name: '陈亚非', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13953521165', card: '6227002104475134579'},
    {id: '11', no: '201633660218', name: '陈嘉乐', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13854517516', card: '6227002127152997584'},
    {id: '12', no: '201633660216', name: '李雨柔', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13864587752', card: '6227002130062829488'},
    {id: '13', no: '201633660213', name: '廖文一', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13884647930', card: '6227002105456434326'},
    {id: '14', no: '201633660206', name: '叶邹斌', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13884931787', card: '6227002151018916526'},
    {id: '15', no: '201633660205', name: '张梦苑', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13791222193', card: '6227002104418509138'},
    {id: '16', no: '201633660120', name: '崔浩强', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13685451120', card: '6227002170896837778'},
    {id: '17', no: '201633660118', name: '宋志毅', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13105205427', card: '6227002180196631052'},
    {id: '18', no: '201633660111', name: '钱丰盛', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13685453395', card: '6227002116535557056'},
    {id: '19', no: '201633660109', name: '吴亚棋', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13953527482', card: '6227002185489994873'},
    {id: '20', no: '201633660106', name: '吴钇陶', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13854517743', card: '6227002110313744452'},
    {id: '21', no: '201633660105', name: '王逸凡', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13791224982', card: '6227002190034907220'},
    {id: '22', no: '201633660101', name: '徐奔', college: '金融学院', major: '金融学', class: '金融学16级1班', phone: '13105200884', card: '6227002139222473311'}
  ],
  classes: [
    {
      name: '金融学16级1班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级2班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级3班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级4班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级5班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级6班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级7班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级8班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级9班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学16级10班',
      college: '金属学院',
      major: '金融学',
      year: '2016'
    },
    {
      name: '金融学15级1班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级2班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级3班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级4班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级5班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级6班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级7班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级8班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级9班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    },
    {
      name: '金融学15级10班',
      college: '金属学院',
      major: '金融学',
      year: '2015'
    }
  ],
  majors: {
    '金属学院': [
      {
        name: '金融学',
        college: '金属学院',
        subject: '商科',
        leader: '马宇',
        phone: '13506453118'
      },
      {
        name: '投资学',
        college: '金属学院',
        subject: '商科',
        leader: '辛波',
        phone: '13105205013'
      },
      {
        name: '财政学',
        college: '金属学院',
        subject: '商科',
        leader: '刘光彦',
        phone: '13884937562'
      }
    ]
  },
  colleges: [
    {
      name: '管理科学与工程学院',
      leader: '温国锋',
      phone: '13000161256'
    },
    {
      name: '工商管理学院',
      leader: '毛荐其',
      phone: '13105205476'
    },
    {
      name: '会计学院',
      leader: '桂良军',
      phone: '13205352187'
    },
    {
      name: '公共管理学院',
      leader: '于秀琴',
      phone: '13405354977'
    },
    {
      name: '经济学院',
      leader: '李中东',
      phone: '13405451588'
    },
    {
      name: '金融学院',
      leader: '马宇',
      phone: '13506453118'
    },
    {
      name: '统计学院',
      leader: '王艳明',
      phone: '13800532485'
    },
    {
      name: '法学院',
      leader: '季丽新',
      phone: '13906451816'
    },
    {
      name: '人文与传播学院',
      leader: '韩永传',
      phone: '13953517321'
    },
    {
      name: '外国语学院',
      leader: '刘白玉',
      phone: '13953525836'
    },
    {
      name: '数学与信息科学学院',
      leader: '张云峰',
      phone: '13854512184'
    },
    {
      name: '信息与电子工程学院',
      leader: '朱智林',
      phone: '13864585740'
    },
    {
      name: '计算机科学与技术学院（服务外包软件学院）',
      leader: '冯烟利',
      phone: '13884642403'
    },
    {
      name: '国际教育学院',
      leader: '郭金创',
      phone: '13884932058'
    },
    {
      name: '马克思主义学院',
      leader: '刘新生',
      phone: '13791221342'
    },
    {
      name: '体育教学部',
      leader: '刘英辉',
      phone: '13685453737'
    },
    {
      name: '中科创业学院',
      leader: '毛荐其',
      phone: '13105203486'
    }
  ]
}

export default state
