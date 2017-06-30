const state = {
  awardProjects: [
    {'code': '201609118762', 'name': '中国大学生“互联网+”应用创新大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '陈飞', 'college': '计算机科学与技术学院', 'state': 1}
  ],
  summaryProjects: [
    {'code': '201606274198', 'name': '中国大学生计算机设计大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '段鸣生', 'college': '计算机科学与技术学院', state: 1}
  ],
  adminProjects: [
    {'code': '201606240024', 'name': 'ACM国际大学生程序设计竞赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '梁静婧', 'college': '计算机科学与技术学院'}
  ],
  teachersForSearch: {
    '201513063': {'id': '1', 'no': '201513063', 'name': '林雪丽', 'college': '工商管理学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13000166065', 'awardNum': '0'},
    '201516509': {'id': '2', 'no': '201516509', 'name': '刘永策', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13105207085', 'awardNum': '2'},
    '201512829': {'id': '3', 'no': '201512829', 'name': '柳中杰', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13205355230', 'awardNum': '8'},
    '201516967': {'id': '4', 'no': '201516967', 'name': '赵瑞芳', 'college': '工商管理学院', 'title': '研究员', 'duty': '专职科研', 'phone': '13405355976', 'awardNum': '2'},
    '201511400': {'id': '5', 'no': '201511400', 'name': '魏春洋', 'college': '工商管理学院', 'title': '助理研究员', 'duty': '专职科研', 'phone': '13405452102', 'awardNum': '4'},
    '201511327': {'id': '6', 'no': '201511327', 'name': '杨晓龙', 'college': '工商管理学院', 'title': '副研究员', 'duty': '专职科研', 'phone': '13506453614', 'awardNum': '3'},
    '201514718': {'id': '7', 'no': '201514718', 'name': '杨秀文', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13800536652', 'awardNum': '7'},
    '201513540': {'id': '8', 'no': '201513540', 'name': '李彦', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13906454009', 'awardNum': '8'},
    '201512921': {'id': '9', 'no': '201512921', 'name': '吕如敏', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13953511714', 'awardNum': '0'},
    '201513515': {'id': '10', 'no': '201513515', 'name': '孙晓羽', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13953523797', 'awardNum': '2'},
    '201514378': {'id': '11', 'no': '201514378', 'name': '陈玉明', 'college': '工商管理学院', 'title': '副教授', 'duty': '专任教师', 'phone': '13854513588', 'awardNum': '3'},
    '201512567': {'id': '12', 'no': '201512567', 'name': '马金智', 'college': '工商管理学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13864581327', 'awardNum': '5'},
    '201517218': {'id': '13', 'no': '201517218', 'name': '李中东', 'college': '工商管理学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13884646088', 'awardNum': '0'},
    '201516414': {'id': '14', 'no': '201516414', 'name': '王发明', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13884937534', 'awardNum': '2'},
    '201515547': {'id': '15', 'no': '201515547', 'name': '周蕾', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13791227873', 'awardNum': '7'},
    '200211234': {'id': '16', 'no': '200211234', 'name': '曹阳', 'college': '计算机科学与技术学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13105207743', 'awardNum': '2'}
  },
  competitionTeams: {
    '201612374852': [
      {'code': '20170251', 'team': '来了', 'number': '3', 'hasTeacher': '无', 'title': ''},
      {'code': '20170252', 'team': 'dream life', 'number': '7', 'hasTeacher': '有', 'teacher': '隋金雪', 'title': '讲师'},
      {'code': '20170253', 'team': '安全线 ', 'number': '2', 'hasTeacher': '有', 'teacher': '杨莉', 'title': '讲师'},
      {'code': '20170254', 'team': '薛定谔的蛋糕', 'number': '4', 'hasTeacher': '无', 'teacher': '　', 'title': ''},
      {'code': '20170255', 'team': 'Say what all late', 'number': '5', 'hasTeacher': '有', 'teacher': '谭玲玲', 'title': '讲师'},
      {'code': '20170256', 'team': '荔枝王', 'number': '2', 'hasTeacher': '有', 'teacher': '张天则', 'title': '讲师'},
      {'code': '20170257', 'team': 'item', 'number': '4', 'hasTeacher': '有', 'teacher': '张杰', 'title': '讲师'},
      {'code': '20170258', 'team': 'VAULT', 'number': '6', 'hasTeacher': '有', 'teacher': '王乐杰', 'title': '讲师'},
      {'code': '20170259', 'team': '一己', 'number': '1', 'hasTeacher': '有', 'teacher': '庞清乐', 'title': '讲师'}
    ]
  },
  applyingProjects: [
    {'code': '201612374852', 'name': '全国大学生网络技术大赛', 'type': '校外项目', 'time': '2017-5-14至2017-7-13'}
  ],
  username: 'Admin-233',
  applyList: [
    {'code': '201705040069', 'name': '“ORACLE OAEC”杯校园软件与网页设计大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '熊杰希', 'college': '计算机科学与技术学院'}
  ],
  file1: 'static/files/项目立项申报书.doc',
  file2: 'static/files/项目总结报告书.doc',
  workloadDetail: {
    '201604010128': {
      'code': '201604010128',
      'name': '全国大学生数字媒体作品竞赛',
      'type': '校外项目',
      collegeRes: '通过',
      collegeOpinion: '团队任务分工明确，项目计划制定周密并且严格执行，经过指导老师的辛勤指导、各项目成员的不懈努力，取得了全国一等奖的好成绩，我院予以高度认可。项目负责人填写的工作量分配详实有依据，符合学校的有关要求，我院通过工作量认定。',
      schoolRes: '通过',
      schoolOpinion: '',
      teams: [
        {
          name: '吴贤鹏',
          no: '201633660425',
          workload: '500',
          desc: '1.查阅往年竞赛和同类型赛事或作品的相关信息，收集竞赛情报；2.作为创意的主要发起人，提出多个方案，并和成员一起最终商议确定作品的发展方向；3.协调成员间的工作，明确各人的分工，明确各个阶段的工作任务；4.从方案之初便多方收集意见，作品从确定方案到最终成型的各个阶段经过多轮验证；5.与成员一起打磨作品，直至最终定稿'
        },
        {
          name: '章力文',
          no: '201633660422',
          workload: '480',
          desc: '1.通过拍摄、图片制作、特效制作、素材收集等多种方式积累作品素材；2.在项目执行的各个阶段，制作大纲版、粗略版、精剪版等不同版本的可视化作品，以保证成员间对方案的理解保持一致性；3.基于多方反馈意见，多次调整作品，直至最终定稿'
        },
        {
          name: '李昊正',
          no: '201633660421',
          workload: '425',
          desc: '1.完成项目组对外的沟通协商工作，包括人员协商、调查对象的组织、顾问预约、场地协商、经费申请报销等事项；2.输出项目所需的必要文档；3.与项目组成员一起对作品提出改进意见，并参与粗略版、精剪版作品的制作。'
        }
      ],
      teachers: [
        {
          name: '欧陆',
          no: '201417732',
          workload: '120',
          desc: '1.引导项目组成员制定项目目标、分解任务，并为项目方向提供参考材料 2.定期组织项目成员开会，总结阶段性工作，并提供优化建议 3.组织行业顾问为参赛学生开展培训，提升成员对作品的认知，开阔视野，发散思路；4.与成员密切沟通，输出多个版本的作品，并协助项目成员征集反馈意见，最终确定参赛作品的最终稿'
        }
      ]
    }
  },
  workloadList: [
    {'code': '201604010128', 'name': '全国大学生数字媒体作品竞赛', 'type': '校外项目', 'admin': '刘云霄', 'teacher': '欧陆', 'college': '人文与传播学院', 'state': 1},
    {'code': '201603129874', 'name': '烟台市大学生创新创业大赛', 'type': '校外项目', 'admin': '钱允新', 'teacher': '李文军', 'college': '中科创业学院', 'state': 0},
    {'code': '201602118467', 'name': '山东省财税技能大赛', 'type': '校外项目', 'admin': '万春华', 'teacher': '张列', 'college': '统计学院', 'state': 2}
  ],
  teaAwardDetail: {
    '201417732': {
      'no': '201417732',
      'name': '欧陆',
      'college': '金融学院',
      major: '金融学',
      title: '副教授',
      awards: [
        {
          proName: '全国大学生数字媒体作品竞赛',
          time: '2016.12',
          award: '国家级一等奖',
          money: '10000',
          workload: 120,
          result: 1
        }
      ]
    }
  },
  teaAwardList: [
    {'no': '201417732', 'name': '欧陆', 'college': '金融学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '10000'},
    {'no': '201415421', 'name': '章炳麟', 'college': '金融学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '8000'},
    {'no': '201416733', 'name': '郭淮', 'college': '金融学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '6000'},
    {'no': '201312169', 'name': '邱仁杰', 'college': '计算机科学与技术', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000'},
    {'no': '201318055', 'name': '田彬彬', 'college': '计算机科学与技术', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000'},
    {'no': '201319731', 'name': '盛开', 'college': '人文与传播学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000'},
    {'no': '201315690', 'name': '杜克', 'college': '人文与传播学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000'},
    {'no': '201314859', 'name': '秦萌萌', 'college': '公共管理学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000'},
    {'no': '201312379', 'name': '安红', 'college': '公共管理学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '4000'},
    {'no': '201311145', 'name': '段勇', 'college': '公共管理学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000'},
    {'no': '201317258', 'name': '陈金发', 'college': '经济学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000'},
    {'no': '201317743', 'name': '毛成盈', 'college': '经济学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000'},
    {'no': '201317744', 'name': '王文翰', 'college': '统计学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000'}
  ],
  stuAwardDetail: {
    '201633660425': {
      'no': '201633660425',
      'name': '吴贤鹏',
      'college': '金融学院',
      major: '金融学',
      awards: [
        {
          proName: '全国大学生数字媒体作品竞赛',
          time: '2016.12',
          award: '国家级一等奖',
          money: '10000',
          credit: '5'
        },
        {
          proName: '山东省广告创意设计大赛',
          time: '2016.12',
          award: '省级三等奖',
          money: '4000',
          credit: '2'
        }
      ]
    }
  },
  stuAwardList: [
    {'no': '201633660425', 'name': '吴贤鹏', 'college': '金融学院', 'year': '2016', 'proNum': '5', 'awardNum': '2', 'money': '14000', 'credit': '7'},
    {'no': '201633660422', 'name': '章力文', 'college': '金融学院', 'year': '2016', 'proNum': '5', 'awardNum': '1', 'money': '10000', 'credit': '5'},
    {'no': '201633660421', 'name': '李昊正', 'college': '金融学院', 'year': '2016', 'proNum': '3', 'awardNum': '1', 'money': '10000', 'credit': '5'},
    {'no': '201533560416', 'name': '刘少杰', 'college': '计算机科学与技术', 'year': '2016', 'proNum': '3', 'awardNum': '1', 'money': '5000', 'credit': '2'},
    {'no': '201533560413', 'name': '赵衫', 'college': '计算机科学与技术', 'year': '2016', 'proNum': '2', 'awardNum': '1', 'money': '5000', 'credit': '2'},
    {'no': '201533460409', 'name': '桂想', 'college': '人文与传播学院', 'year': '2016', 'proNum': '2', 'awardNum': '1', 'money': '5000', 'credit': '2'},
    {'no': '201533460406', 'name': '蔡丽丽', 'college': '人文与传播学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000', 'credit': '2'},
    {'no': '201533360405', 'name': '杜斌', 'college': '公共管理学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '5000', 'credit': '2'},
    {'no': '201533360315', 'name': '黄海', 'college': '公共管理学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '4000', 'credit': '2'},
    {'no': '201533360312', 'name': '高亚麟', 'college': '公共管理学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000', 'credit': '0.5'},
    {'no': '201533260218', 'name': '陈明', 'college': '经济学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000', 'credit': '0.5'},
    {'no': '201533260216', 'name': '侯奇耀', 'college': '经济学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000', 'credit': '0.5'},
    {'no': '201533160213', 'name': '王文一', 'college': '统计学院', 'year': '2016', 'proNum': '1', 'awardNum': '1', 'money': '2000', 'credit': '0.5'}
  ],
  awardDetail: {
    '201604010128': {
      'code': '201604010128',
      'name': '全国大学生数字媒体作品竞赛',
      'type': '校外项目',
      'admin': '刘云霄',
      teams: '吴贤鹏201633660425 章力文201633660422 李昊正201633660421',
      'teacher': '欧陆2014117732',
      stuAward: 10000,
      stuCredit: 5,
      teaAward: 10000,
      workload: 120,
      award: '国家级一等奖'
    }
  },
  awardList: [
    {'code': '201604010128', 'name': '全国大学生数字媒体作品竞赛', 'type': '校外项目', 'admin': '刘云霄', 'teacher': '欧陆', 'college': '人文与传播学院'},
    {'code': '201603129874', 'name': '烟台市大学生创新创业大赛', 'type': '校外项目', 'admin': '钱允新', 'teacher': '李文军', 'college': '中科创业学院'},
    {'code': '201602118467', 'name': '山东省财税技能大赛', 'type': '校外项目', 'admin': '万春华', 'teacher': '张列', 'college': '统计学院'}
  ],
  summaryDetail: {
    '201606251174': {
      code: '201606251174',
      name: '第一届“韶华杯”知识竞赛',
      type: '校内项目',
      admin: '柳慈',
      teacher: '',
      title: '',
      college: '人文与传播学院',
      userNum: 218,
      teamNum: 59,
      budget: 50000,
      pay: 44196.3,
      desc: '经费支出主要由下述几个方面构成，具体每类型的消费明细请见附件票据。1. 印刷费：包括印刷、打印、复印、彩扩、版面费等支出；2. 租赁费：包括场地、设备租借费；3. 会议费：包括场地租金、住宿费、交通费、伙食费以及资料印刷费等；4. 专用材料费：包括购置办公耗材和用品、专用服装等材料开支；5. 其他商品和服务支出：包括广告宣传费、奖品购置等；6. 专业设备购置：包括抢答器等设备费等',
      awardNum: 3,
      awardPast: 0,
      awardDesc: '一等奖1名，人文与传播学院；二等奖1名，经济学院；三等奖1名，公共管理学院',
      collegeRes: '通过',
      collegeOpinion: '本次主要通过富有常识性、知识性、趣味性的知识竞赛，使学生对奥运知识、安全知识、防震知识及社会科学、自然科学、人文地理、历史生物等学科的基本常识有一个全面的了解，拓宽学生的知识面，活跃学习气氛，提升同学的综合素质能力，培养了其积极发言和善于思考的良好习惯；大大的激发了同学的读书兴趣，提高了同学学习激情。加强了学生“五爱”教育，培养了学生善学习、知安全的意识，促进了学生健康发展及社会的和谐进步。',
      schoolRes: '通过',
      schoolOpinion: ''
    },
    '201606251175': {
      code: '201606251175',
      name: '山东省广告创意设计大赛',
      type: '校外项目',
      admin: '柳慈',
      teacher: '曾华',
      title: '讲师',
      college: '人文与传播学院',
      userNum: 54,
      teamNum: 10,
      budget: 80000,
      pay: 75742.8,
      desc: '经费支出主要由下述几个方面构成，具体每类型的消费明细请见附件票据: 1. 差旅费：包括参赛队员去外地交通、住宿、就餐等费用；2. 培训费：包括聘请行业顾问为参赛队伍进行培训等费用；3. 材料费：包括资料印刷费、参考材料购买费等；4. 租赁费：包括训练场地租赁费用；5. 邮电费：包括电话费用、传真费等。',
      awardNum: 1,
      awardPast: 0,
      awardDesc: '省级三等奖1名，工商管理学院',
      collegeRes: '通过',
      collegeOpinion: '本次主要通过富有常识性、知识性、趣味性的知识竞赛，使学生对奥运知识、安全知识、防震知识及社会科学、自然科学、人文地理、历史生物等学科的基本常识有一个全面的了解，拓宽学生的知识面，活跃学习气氛，提升同学的综合素质能力，培养了其积极发言和善于思考的良好习惯；大大的激发了同学的读书兴趣，提高了同学学习激情。加强了学生“五爱”教育，培养了学生善学习、知安全的意识，促进了学生健康发展及社会的和谐进步。',
      schoolRes: '通过',
      schoolOpinion: ''
    }
  },
  summaryProjectList: [
    {'code': '201606251174', 'name': '第一届“韶华杯”知识竞赛', 'type': '校内项目', 'admin': '柳慈', 'college': '人文与传播学院', 'state': 1},
    {'code': '201606251175', 'name': '山东省广告创意设计大赛', 'type': '校外项目', 'admin': '柳慈', 'teacher': '曾华', 'college': '人文与传播学院', 'state': 1},
    {'code': '201606274198', 'name': '中国大学生计算机设计大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '段鸣生', 'college': '计算机科学与技术学院', 'state': 0}
  ],
  doingProjectList: [
    {'code': '201610290058', 'name': '精创教育杯”人力资源管理沙盘竞赛', 'type': '校外项目', 'admin': '赵天祥', 'teacher': '王乐杰，高毅蓉，高建丽', 'college': '工商管理学院', 'state': 1},
    {'code': '201610070049', 'name': '第四届山东省网络短片大赛', 'type': '校外项目', 'admin': '朱雀', 'teacher': '罗文迪', 'college': '计算机科学与技术学院', 'state': 1},
    {'code': '201610110132', 'name': '全国大学英语写作竞赛', 'type': '校外项目', 'admin': '李光旭', 'teacher': '陈晨', 'college': '外国语学院', 'state': 0},
    {'code': '201610081374', 'name': '中国高校计算机大赛—移动应用创新赛', 'type': '校外项目', 'admin': '连续石', 'teacher': '曾问', 'college': '数学与信息科学学院', 'state': 1},
    {'code': '201610094368', 'name': '大学生汉字诗词听写大赛', 'type': '校内项目', 'admin': '黄山', 'college': '人文与传播学院', 'state': 1},
    {'code': '201610119873', 'name': '全国大学生条码自动识别知识竞赛', 'type': '校外项目', 'admin': '高谷', 'teacher': '胡林', 'college': '信息与电子工程学院', 'state': 1},
    {'code': '201612374852', 'name': '全国大学生网络技术大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '李萍', 'college': '计算机科学与技术学院', 'state': 0}
  ],
  checkedProjectList: [
    {'code': '201602010004', 'name': 'iCAN创新创业大赛', 'type': '校外项目', 'admin': '隋金雪', 'teacher': '隋金雪、杨莉、张岩、张鑫、庞清乐、郭文', 'college': '信息与电子工程学院'},
    {'code': '201610070048', 'name': '山东省电子商务专业竞赛', 'type': '全国大学生数学竞赛', 'admin': '刘琦', 'teacher': '张天则', 'college': '数学与信息科学学院'},
    {'code': '201610200130', 'name': '相声小品大赛', 'type': '校内项目', 'admin': '王宇哲', 'teacher': '', 'college': '公共管理学院'}
  ],
  projectDetail: {
    '201610290058': {
      code: '201610290058',
      name: '“精创教育杯”人力资源管理沙盘竞赛',
      type: '校外项目',
      admin: '赵天祥',
      title: '讲师',
      teacher: '王乐杰，高毅蓉，高建丽',
      college: '工商管理学院',
      applyYear: 2016,
      hostCmp: '中国人力资源开发研究会',
      coCmp: '精创教育',
      url: 'http://www.jcjyet.com/',
      category: '沙盘团队竞赛',
      scope: '全国',
      subjects: '人力资源',
      form: '团队',
      scale: '',
      time: '2016-10-29~2016-11',
      desc: '进一步推进实践育人工作开展，加强就业创业教育，促进创新人才成长，推动经管类特别是人力资源管理专业的实践教学改革，提高人才培养质量，搭建全国各高校专业交流平台，中国人力资源开发研究会决定举办第一届全国大学生人力资源管理沙盘模拟竞赛。',
      target: '提升各院校的人力资源管理专业实践教学水平和创新型人才培养质量。',
      budget: 357000,
      workload: 460,
      file: '',
      collegeRes: '通过',
      collegeOpinion: '',
      expertRes: '通过',
      expertOpinion: '',
      schoolRes: '通过',
      schoolOpinion: ''
    },
    '201602010004': {
      code: '201602010004',
      name: 'iCAN创新创业大赛',
      type: '校外项目',
      admin: '隋金雪',
      teacher: '隋金雪、杨莉、张岩、张鑫、庞清乐、郭文',
      college: '信息与电子工程学院',
      applyYear: 2016,
      hostCmp: '国际iCAN联盟, 全球华人微纳米分子系统学会, 教育部创新方法教学指导分委员会',
      coCmp: '中国iCAN联盟（筹备组），IEEE Nanotechnology Council, VDE, United MEMS Park, Asian Nano Forum',
      url: 'http://www.ican-contest.org/',
      category: '创新物联网',
      scope: '国际',
      subjects: '信息与电子工程',
      form: '团队',
      scale: '',
      time: '2016-02-01~2017-06',
      desc: 'iCAN大赛始于2007年，秉承“传递iCAN理念、激发创新热情、点燃创业梦想”精神  ，倡导科技创新创业服务社会、改善人类生活，引导和激励高校学生勇于创新，发现和培养一批有作为、有潜力的优秀青年创新创业人才，促进和加强以物联网、智能硬件等为代表的高科技领域的产学研结合，推动高科技产业的发展，为高科技创新创业搭建国际交流平台。',
      target: '秉承“传递iCAN理念、激发创新热情、点燃创业梦想”精神。“政产学研用”五维结合引导、激励和启迪高校大学生勇于实践创新，发现和培养一批有作为、有潜力的优秀青年科技人才，促进和加强物联网技术领域政、产、学、研、用的有机结合，以探索高等教育的创新、创业教育改革以及推动物联网高科技产品诞生和发展，为高科技创新创业搭建交流平台。高科技创新教育鼓励学生通过自主创新设计和公平竞赛，培养创新思维和加强过程训练，学以致用把理论知识转化为具有应用价值的作品，为造就成为优秀工程师和设计师以及企业家奠定坚实一步，同时也加强辅导和推介，鼓励学生通过参赛作品进一步走上成功创业之路。国际合作大赛积极促进国内外物联网技术领域的学习与交流，为优秀的高校在校生提供与其他同领域学生竞技及交流的机会。',
      budget: 370000,
      workload: 1440,
      file: '',
      title: '讲师',
      collegeRes: '通过',
      collegeOpinion: '项目符合科技创新创业服务社会、改善人类生活的精神，对推动高校学生勇于创新起到了积极作用。该项目符合申请条件要求，所提供的项目研究思路与方案齐全，该项目方案思路明确，成熟可靠，该项目的实施预计会产生较好的效益。',
      expertRes: '通过',
      expertOpinion: '使大学生能充分展示自己分析问题和 解决问题的能力，竞赛成果有一定的实用价值，项目研究思路清晰，方案明确，且目标合理，有一定的创新性，团队人员构成合理，有较好的试验条件，故通过审核。',
      schoolRes: '通过',
      schoolOpinion: '使大学生能充分展示自己分析问题和 解决问题的能力，竞赛成果有一定的实用价值，项目研究思路清晰，方案明确，且目标合理，有一定的创新性，团队人员构成合理，有较好的试验条件，故通过审核。'
    },
    '201610200130': {
      code: '201610200130',
      name: '相声小品大赛',
      type: '校内项目',
      admin: '王宇哲',
      title: '',
      teacher: '',
      college: '公共管理学院',
      phone: '187xxxxxxxxx',
      coCmp: '',
      basic: '如果说戏剧是社会生活的一幅画面或镜子,小品则是一幅漫画,是一个“哈哈镜”.它的特点是用“笑”和夸张的语言反映事物、折射事物；如果说戏剧是以剧情和脚色的台词直接感染人,使人们受到正面教育的话,小品则既不属正面教育,也不属反面教育,它是用一种“启发式”的形象思维激活人的感官,使人们从笑中受到感悟.',
      meaning: '反映社会现状，揭示价值观，为大家带来欢乐。',
      characteristic: '小品',
      form: '现场表演',
      rate: '观众、专业老师打分',
      purpose: '',
      tool: '签字笔',
      platform: '校内网',
      budget: 10000,
      plan: '22%',
      file: '',
      collegeRes: '通过',
      collegeOpinion: '',
      expertRes: '通过',
      expertOpinion: '',
      schoolRes: '通过',
      schoolOpinion: ''
    },
    '201606240024': {
      code: '201606240024',
      name: 'ACM国际大学生程序设计竞赛',
      type: '校外项目',
      admin: '曹阳',
      teacher: '梁静婧',
      college: '计算机科学与技术学院',
      applyYear: 2016,
      hostCmp: 'ACM学会',
      coCmp: '',
      url: 'http://acm.sdibt.edu.cn/JudgeOnline/',
      category: '程序设计',
      scope: '国际',
      subjects: 'C语言，数据结构，算法，数学，计算几何学',
      form: '团队',
      scale: '',
      time: '2016-06-24~2016-08-24',
      desc: 'ACM国际大学生程序设计竞赛（简称ACM-ICPC）是由国际计算机界具有悠久历史的权威性组织ACM学会（Association for Computing Machinery）主办，是世界上公认的规模最大、水平最高、参与人数最多的大学生程序设计竞赛，其宗旨是使大学生能通过计算机充分展示自己分析问题和 解决问题的能力。ACM-ICPC赛事是目前国内高校承办的唯一一项具有国际影响的计算机竞赛，受到教育界和工业界的高度重视和承认。',
      target: '深入学习编程，并且和全国最杰出的计算机程序员比赛交流',
      budget: 450000,
      workload: 960,
      file: '',
      title: '讲师',
      collegeRes: '通过',
      collegeOpinion: '该项竞赛受到国际各知名大学的重视,并备受全世界各著名 IT公司 如微软、GOOGLE 、IBM等的高度关注,成为世界各国大学生最具影响力的国际级计算机的赛事, ACM所颁发的获奖证书也为世界各著名 IT 公司、各知名大学所认可。随着 ACM活动的深入开展,亚洲尤其是中国内地高校都十分重视该项赛事,参加非常拥跃,国内有名的高校几乎是无一不参与。ACM主要是培养参赛选手的创造力、团队合作精神以及在软件程序开发过程中的创新意识。与其他编程竞赛相比, ACM题目难度更大,更强调算法的高效性,它涉及知识面广,与大学计算机系本科以及研究生如程序设计、离散数学、 数据结构、人工智能、算法分析与设计等相关课程直接关联,对数学要求很高,由于采用英文命题,对英语要 求较高, ACM采用 3人合作、共用一台电脑,所 以它同样也很强调团队协作精神。而许多题目并无现 成的算法,需要具备创新的精神,因此 ACM不仅强调学科的基础,更强调全面素质和能力的培养。',
      expertRes: '通过',
      expertOpinion: 'ACM竞赛影响范围广、学科代表性强，它的开展促进了学校对创新型应用人才培养，具有重要的实践意义。(1) 有利于培养学生的实践动手能力与科研能力。(2) 有利于培养学生的创新意识、创新精神、创新能力。( 3)有利于培养学生的团队的协作精神。符合一类竞赛项目的认定标准。',
      schoolRes: '通过',
      schoolOpinion: ''
    },
    '201603110018': {
      code: '201603110018',
      name: '山东省电子商务专业竞赛',
      type: '校外项目',
      admin: '李锐',
      title: '讲师',
      teacher: '谭玲玲，张杰',
      college: '外国语学院',
      applyYear: 2016,
      hostCmp: '教育部高等学校经济与贸易类专业教学指导委员会，中国国际贸易促进委员会商业行业分会，中国国际商会商业行业商会，（国资委）商业国际交流合作培训中心',
      coCmp: '中国国际贸易促进委员会商业行业分会教育培训部，工业和信息化部人才交流中心',
      url: 'http://www.shangwudasai.org/',
      category: '商业信息化创新创业',
      scope: '山东省',
      subjects: '电子商务专业竞赛',
      form: '团队',
      scale: '',
      time: '2016-03-11~2016-05-11',
      desc: '全国高校商业精英挑战赛信息化创新创业竞赛由工业和信息化部人才交流中心支持，中国国际商会商业行业商会、中国国际贸易促进委员会商业行业分会和（国资委）商业国际交流合作培训中心牵头主办，面向全国高等院校电子商务专业和相关专业的学生，鼓励学生充分发挥专业特长和创新能力，结合互联网优势，促进学生对“互联网+”的深度认识，提升创业意识和创业能力。',
      target: '深入学习编程，并且和全国最杰出的计算机程序员比赛交流',
      budget: 340000,
      workload: 960,
      file: '',
      collegeRes: '通过',
      collegeOpinion: '',
      expertRes: '通过',
      expertOpinion: '',
      schoolRes: '通过',
      schoolOpinion: ''
    },
    '201604090122': {
      code: '201604090122',
      name: '政治理论知识竞赛',
      type: '校内项目',
      admin: '张凡',
      title: '',
      teacher: '',
      college: '政治学与行政学专业',
      phone: '186xxxxxxxxx',
      coCmp: '',
      basic: '为深入学习掌握习近平总书记的《习近平总书记系列重要讲话读本》，推动我校马克思主义理论研究和建设工程迈上更高水平，进一步提高我校学生对党的十八大以来一系列重大理论、路线、方针、政策学习的积极性，引导大学生努力践行社会主义核心价值观，结合团中央在全国集中开展“学习总书记讲话 做合格共青团员”教育实践的通知，我校决定在全校范围内开展以“学《习近平总书记系列重要讲话读本》重要著作，努力实现中华民族伟大复兴中国梦”为主题的第二届政治理论知识竞赛。',
      meaning: '进一步提高我校学生对党的十八大以来一系列重大理论、路线、方针、政策学习的积极性，引导大学生努力践行社会主义核心价值观，同时为了配合将在全党开展的“两学一做”学习教育活动（学党章党规、学系列讲话，做合格党员）',
      characteristic: '程序设计',
      form: '个人赛笔试，团队赛答题',
      rate: '观众、专业老师打分',
      purpose: '',
      tool: '签字笔',
      platform: '校内网',
      budget: 258000,
      plan: '56%',
      file: '',
      collegeRes: '通过',
      collegeOpinion: '',
      expertRes: '通过',
      expertOpinion: '',
      schoolRes: '通过',
      schoolOpinion: ''
    },
    '201606010128': {
      code: '201606010128',
      name: '校园微电影大赛',
      type: '校内项目',
      admin: '李鹏飞',
      title: '',
      teacher: '',
      college: '计算机科学与技术学院',
      phone: '135xxxxxxxxx',
      coCmp: '',
      basic: '一个好的微电影以完整的故事情节、精良的电影画面、鲜明的人物形象、精彩的对白音乐，结合网络传播的特性，原创制作的带有强大互动性和感染力的作品。在注意力碎片化的现状下，这类微电影的显著共性是可以集中网民的注意力，增加观看时间、可玩性和重复观看/使用次数，所以不论从哪个方面，微电影都是很有研究意义的。',
      meaning: '对于微电影来讲，最重要的是创意与精悍，而“有意思”比“有意义”更加重要。而微电影之所以受欢迎，则是因为其本身具有的快捷与自由的特点，基本属于零门槛，能与读者自由互动，可以在第一时间或阅读、或点评、或转发、或分享，无拘无束，而这一优势恰恰是传统文学所不具备的。',
      characteristic: '微电影拍摄',
      form: '作品展演',
      rate: '观众、专业老师打分',
      purpose: '',
      tool: '移动盘',
      platform: '校内阶梯教室',
      budget: 8000,
      plan: '72%',
      file: '',
      collegeRes: '通过',
      collegeOpinion: '',
      expertRes: '通过',
      expertOpinion: '',
      schoolRes: '通过',
      schoolOpinion: ''
    }
  },
  toCheckProjectList: [
    {'code': '201606240024', 'name': 'ACM国际大学生程序设计竞赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '梁静婧', 'college': '计算机科学与技术学院'},
    {'code': '201603110018', 'name': '山东省电子商务专业竞赛', 'type': '校外项目', 'admin': '李锐', 'teacher': '谭玲玲，张杰', 'college': '外国语学院'},
    {'code': '201604280027', 'name': '全国企业竞争模拟大赛', 'type': '校外项目', 'admin': '张聪', 'teacher': '李静宜', 'college': '工商管理学院'},
    {'code': '201604090122', 'name': '政治理论知识竞赛', 'type': '校内项目', 'admin': '张凡', 'college': '公共管理学院'},
    {'code': '201701100062', 'name': '全国新闻出版行业平面设计大赛', 'type': '校外项目', 'admin': '徐良卿', 'teacher': '葛涛', 'college': '人文与传播学院'},
    {'code': '201705040069', 'name': '“ORACLE OAEC”杯校园软件与网页设计大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '熊杰希', 'college': '计算机科学与技术学院'},
    {'code': '201705070072', 'name': '全国品牌策划大赛', 'type': '校外项目', 'admin': '王旭东', 'teacher': '李逸然', 'college': '外国语学院'},
    {'code': '201606010128', 'name': '校内微电影大赛', 'type': '校内项目', 'admin': '李鹏飞', 'college': '计算机科学与技术学院'}
  ],
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
    {'name': 'ACM国际大学生程序设计竞赛', 'college': '计算机科学与技术学院', 'scale': '国际', 'category': '一类'},
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
    {'name': '周蕾', 'no': '201515547', 'rights': [4, 10, 11, 13, 6]},
    {'name': '学校管理员', 'no': '200200001', 'rights': [2, 3, 7, 8, 9, 12, 14, 15, 16]},
    {'name': '项目负责人', 'no': '200200002', 'rights': [1, 3, 4, 5, 6, 10, 11, 13]}
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
    {'id': '15', 'no': '201515547', 'name': '周蕾', 'college': '工商管理学院', 'title': '教授', 'duty': '专任教师', 'phone': '13791227873', 'awardNum': '7'},
    {'id': '16', 'no': '200211234', 'name': '曹阳', 'college': '计算机科学与技术学院', 'title': '讲师', 'duty': '专任教师', 'phone': '13105207743', 'awardNum': '2'}
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
  ],
  proProjectList: [
    {'code': '201705040069', 'name': '“ORACLE OAEC”杯校园软件与网页设计大赛', 'type': '校外项目', 'admin': '曹阳', 'teacher': '熊杰希', 'college': '计算机科学与技术学院'}
  ],
  proProjectDetail: {
    201705040069: {
      code: '201705040069',
      name: '“ORACLE OAEC”杯校园软件与网页设计大赛',
      type: '校外项目',
      admin: '曹阳',
      teacher: '熊杰希',
      title: '讲师',
      college: '计算机科学与技术学院',
      applyYear: 2017,
      hostCmp: '教育部创新方法教学指导分委员会',
      coCmp: '',
      url: 'http://www.oracleoaec.com',
      category: '创新物联网',
      scope: '国际',
      subjects: '信息与电子工程',
      form: '团队',
      scale: '',
      time: '2017-02-01~2017-06',
      desc: '大赛倡导科技创新创业服务社会、改善人类生活，引导和激励高校学生勇于创新，发现和培养一批有作为、有潜力的优秀青年创新创业人才，促进和加强以物联网、智能硬件等为代表的高科技领域的产学研结合，推动高科技产业的发展，为高科技创新创业搭建国际交流平台。',
      target: '省级三等奖以上',
      budget: 2000000,
      workload: 1440,
      file: '',
      college: '通过',
      collegeOpinion: '通过',
      professor: '通过',
      professorOpinion: '通过',
      school: '',
      schoolOpinion: ''
    }
  }
}

export default state
