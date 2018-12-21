import { param2Obj } from '@/utils'
const data = [{
  id: '1',
  title: '关于BACnet协议',
  context: `80年代以后，随着经济活动中心城市化，大都市的高层与超高层建筑如雨后春笋般耸立起来。楼内的各种设备和系统逐渐增多，且日趋复杂，能量的消耗也大幅度上升。

  如何规范运 行，节能，延长设备寿命，确保大楼内工作、生活的安全、舒适、高效和楼内外信息的处理、交换、传输，资源共享成为大楼智能建筑重要问题。可喜的是80年代以来，电子、微电子、通讯与计算机、网络、自控技术的迅猛发展，支持与造就了智能建筑各个子系统的诞生和完善。
  
  1987年l月ASHRAE(美国供热、制冷及空调工程师协会)组织了世界各地的20余名楼宇自动控制工业部门、包括大学、控制器制造商、政府机构与咨询公司的志愿者组成了一个名为"SPCl35P"的工作组。工作组的目标是制定一个关于楼宇能量管理与控制系统(EMCS)的通讯协议。在长达8年多制定过程中，共收到12个国家741份的意见，经过3次公开评审，最后于1995年6月BACnet协议获得通过，成为ASHRAEl35-1995标准。井于同年12月升为美国国家标准。

  自从BACnet协议作为美国国家标准发表以来，不但在美国本土引起巨大的反响，同时也引起了世界各国智能建筑业界的广泛注意。在发达国家，已纷纷成立了一些重的组织，其中最重要的如在北美成立了BIG-NA(BACnet’s Interest Group-North America)，在欧洲成立了BIG-Eu(BIG-Europe)，在澳大利亚和亚洲成立了BIG-AA(BIG-AustraliaAsia，这些组织在本地区共同推进BACnet协议的实施。

  SmartIO - B BACnet路由器相当于以太网路由器，它完成了MS/TP广播数据、请求数据(BACnet UDP包)在MS/TP和以太网之间相互转换，路由器本身不参与数据读写与变换，仅仅将BACnet数据包总线与以太网之间互相转发。
  
  SmartIO - B配套BACnet Schedule，能识别Honeywell SymmetrE、EBI对时指令，不用担心SmartIO - B系统时间与电脑时间误差。
  
  现成Honeywell PC8000系统、XL5000系统、Webs系统、艾顿系统等能够直接识别,完全兼容。
  
  使用非常简单，仅仅接入电源，设置IP地址和MSTP通讯速率。`,
  time: '2018-3-4 08:43',
  describe: 'SmartIO - B配套BACnet Schedule，能识别Honeywell SymmetrE、EBI对时指令，不用担心SmartIO - B系统时间与电脑时间误差。',
  type: '行业新闻'
}, {
  id: '2',
  title: 'BAS技术方案XL5000(BACnet)',
  context: `目                       录

  第1章 建筑设备监控系统 4
  
  1.1 系统综述 4
  
  1.2 系统设计总则 5
  
  1.2.1 系统设计原则 5
  
  1.2.2 系统设计目标 7
  
  1.3 系统设计 7
  
  1.3.1 设计概述 7
  
  1.3.2 设计依据及原则 8
  
  1.3.3 需求分析 9
  
  1.3.4 系统网络结构 10
  
  1.3.5 系统控制原理与功能实现 11
  
  1.3.5.1 新风机组系统 12
  
  1.3.5.2 空调机组系统 15
  
  1.3.5.3 冷热源系统 16
  
  1.3.5.4 送排风系统 19
  
  1.3.5.5 风机盘管系统 19
  
  1.3.5.6 给排水系统 22
  
  1.3.5.7 照明系统 22
  
  1.3.6 第三方系统集成 23
  
  1.3.6.1 冷热源系统群控 23
  
  1.3.6.2 高低压变配电系统 25
  
  1.3.6.3 发电机系统 25
  
  1.3.6.4 电梯系统 26
  
  1.4 设备选型 27
  
  1.4.1 控制器分站 27
  
  1.4.2 主要末端设备 28
  
  1.5 应用软件 29
  
  1.5.1 系统集成软件 30
  
  1.5.2 DDC控制软件设计 34
  
  1.6 系统特点 35 1.7 系统配置清单 36`,
  time: '2018-3-4 08:43',
  describe: 'SmartIO - B配套BACnet Schedule，能识别Honeywell SymmetrE、EBI对时指令，不用担心SmartIO - B系统时间与电脑时间误差。',
  type: '行业新闻'
}, {
  id: '3',
  title: 'Excel5000软件平台SymmetrE EBI430安装教程',
  context: `6.1基础设施要求

  1、硬件平台：服务器（工作站）：
  
  .处理器：英特尔Pentium IV 以上
  
  .操作系统: Windows server 2008
  
  .内存:2GB
  
  .WEB游览器：IE9或以上
  
  .硬盘：20GB或以上
  
  .显示器:支持1024x786或以上
  
  .网卡：10/100网络适配器
  
  6.2安装步骤
  
  6.2.1安装前的准备工作
  
  1，安装win2008 sp1补丁，这个补丁可在官方网站下载；
  
  2，电脑安装IE9或以上版本浏览器；
  
  3，Microsofl Exce
  
  4，关闭IPV6`,
  time: '2018-3-4 08:43',
  describe: 'SmartIO - B配套BACnet Schedule，能识别Honeywell SymmetrE、EBI对时指令，不用担心SmartIO - B系统时间与电脑时间误差。',
  type: '行业新闻'
}, {
  id: '4',
  title: 'I830 小型直接数字控制器',
  context: `概述：
  SmartIO-I830直接数字控制器,采用32位CPU,83MHz，18输入输出点，控制器从传感器上接以物理、电气转换方式输入信号，经固定程序、整理转换成网络变量，传输给SmartIO-C控制器和中央控制中心，并接收SmartIO-CI上发出的命令，将其转换成物理输出信号传送给执行器。
 

应用：
SmartIO(I830、I831、I823) 现场控 制器，是完 全符合 BACnet 标准的控 制器。适 用于空气 处理机、VAV Box、热泵、排风机、污水井、风机盘管等设备的控制。
控 制器含4个通用信号输入点，广泛适用于能接受NTC20K模拟量信号的现场控制系统。
模拟信号输入规格：电压0～10V,用软件控制开关，具有高输入阻抗，最大24Vdc,≤2.5V时逻辑状态为0；电流0~20mA，外部加499欧电阻；分辨率12比特。
8个数字信号输入点， 输入端口有光电隔离保护。
3个模拟信号输出点，模拟信号输出规格：电压0～10V，最大11V，±1mA，分辨率8比特。
3个数字信号输出点。数字信号输出规格：交流24V输出。
485总线的通讯距离最大1000米。`,
  describe: 'SmartIO - B配套BACnet Schedule，能识别Honeywell SymmetrE、EBI对时指令，不用担心SmartIO - B系统时间与电脑时间误差。',
  time: '2018-3-4 08:43',
  type: '行业新闻'
}]

export default {
  getNews: config => {
    let request = config.body
    console.log(request)
    return data
  },
  getArticle: config => {
    let url = param2Obj(config.url)
    let article
    data.forEach((ele, ind, arr) => {
      if (url.id === ele.id) {
        article = ele
      }
    })
    if (article) {
      return { state: true, article }
    } else {
      console.log('error')
      return { state: false, error: 'url错误' }
    }
  }
}
