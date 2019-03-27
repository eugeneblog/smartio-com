const menulist = {
  state: {
    list: [
      {
        id: '1',
        name: 'home',
        text: '网站首页',
        link: '/index/home',
        active: false,
        show: false
      }, {
        id: '2',
        name: 'success',
        text: '成功案例',
        link: '/index/cases',
        active: false,
        show: false
      }, {
        id: '3',
        text: '产品中心',
        name: 'product',
        link: '/index/product',
        active: false,
        show: false,
        children: [{
          id: '1',
          text: '说明书下载',
          link: '/index/instructions',
          show: false
        }, {
          id: '2',
          text: '资料下载',
          link: '/index/trainbooks',
          show: false
        }, {
          id: '3',
          text: '产品列表',
          link: '/index/productlist',
          show: false
        }, {
          id: '4',
          text: 'DDC控制器',
          link: '/index/ddc',
          show: false
        }, {
          id: '5',
          text: '照明模块',
          link: '/index/illumination',
          show: false
        }]
      }, {
        id: '4',
        name: 'software',
        text: '软件中心',
        link: '/index/tools',
        active: false,
        show: false,
        children: [{
          id: '1',
          text: 'program',
          link: '/index/softwareTool',
          show: false
        }, {
          id: '2',
          text: '下载中心',
          link: '/index/download',
          show: false
        }]
      }, {
        id: '5',
        name: 'news',
        text: '行业资讯',
        link: '/index/information',
        active: false,
        show: false
      }, {
        id: '6',
        name: 'about',
        text: '联系我们',
        link: '/index/about',
        active: false,
        show: false
      }
    ]
  },
  getters: {
    getMenuList: state => {
      return state.list
    },
    getTodoById: (state) => (name) => {
      return state.list.find(todo => todo.name === name)
    }
  }
}

export default menulist
