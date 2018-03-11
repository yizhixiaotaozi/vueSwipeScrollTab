import data from './fakeNews'
export default {
  getBanner() {
    console.log('开始ajax请求')
    return new Promise((resolve, reject) => {
      resolve([{
          src: 'http://www.zuel.edu.cn/_upload/article/images/a1/28/1bbffc9d49119e3bab5572afabb1/9fff47ba-c9e8-4e40-b3c2-b2adde8f37b8.jpg'
        },
        {
          src: 'http://www.zuel.edu.cn/_upload/article/images/e8/de/f65ca3b9493ba0abbd83eae5d69d/27259693-c482-4859-9117-c12d8a37b601.jpg'
        },
        {
          src: 'http://www.zuel.edu.cn/_upload/article/images/27/ba/69b653894296ab06f2d3950301bf/dcc4ceaf-4c57-48c0-be3a-877c4dfcac0b.jpg'
        },
        {
          src: 'http://www.zuel.edu.cn/_upload/article/images/b6/8d/e7a476884a768c3a32e04656567b/afd4ab71-a1b7-4fdf-824e-05366087c53d.jpg'
        }
      ])
    })
  },
  getNews(pageNo, pageSize) {
    console.log('开始ajax请求')
    return new Promise((resolve, reject) => {
      //模拟ajax
      setTimeout(() => {
        console.log(pageNo)
        if (pageNo == 1) {
          resolve(data.page1news)
        } else if (pageNo == 2) {
          resolve(data.page2news)
        } else {
          resolve(data.page3news)
        }
      },1000)
    })
  }
}
