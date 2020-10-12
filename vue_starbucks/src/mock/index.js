import Mock from 'mockjs'

const { newsList } = Mock.mock({
  'newsList|15-50': [
    {
      name: "@cname()", 		// 生成随机名字
      address: "@city(true)",	// 表示显示省
      id: "@increment(1)",		// 增量
      img_url: "@image('200x100', '#ffcc33', '#FFF', 'png', '!')"
    }
  ]
})

/******    支持正则匹配url地址    ******/

// 定义拦截get请求
Mock.mock(/\/api\/get\/news/, 'get', {
  //返回的数据
  status: 200,
  msg: 'get-ok',
  list: newsList
})
// 定义拦截post请求

Mock.mock(/\/api\/post\/news/, 'post', (options) => {
  console.log(options) // {url: "/api/post/news", type: "POST", body: null}
  return {
    //返回的数据
    status: 200,
    msg: 'post-ok',
    list: newsList
  }
})