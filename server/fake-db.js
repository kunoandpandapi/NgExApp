const Product = require('./model/product')

class FakeDb {

  constructor() {
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        image: 'phone-cover.jpg',
        heading1: 'This is great.',
        heading2: 'One of the my favarit things.',
        heading3: 'I want to get it!',
        headingtxt1: 'This is great.',
        headingtxt2: 'One of the my favarit things.',
        headingtxt3: 'I want to get it!'
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        image: '2.jpeg',
        heading1: 'pu- nyu- nya- nyu-',
        heading2: '...',
        heading3: 'これはすごいです。',
        headingtxt1: 'This is great.',
        headingtxt2: 'One of the my favarit things.',
        headingtxt3: 'I want to get it!'
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '',
        image: '3.png',
        heading1: 'あつまれどうぶつの森が好きです。',
        heading2: '東京特許許可局',
        heading3: '京都はとても暑かった。',
        headingtxt1: 'This is great.',
        headingtxt2: 'One of the my favarit things.',
        headingtxt3: 'I want to get it!'
      },
      {
        name: 'Phone Special',
        price: 999,
        description: '',
        image: '4.jpeg',
        heading1: '落とし穴に落ちないように注意',
        heading2: 'お金を地面に埋めた',
        heading3: '海岸沿いに瓶が流れ着いていた。',
        headingtxt1: 'This is great.',
        headingtxt2: 'One of the my favarit things.',
        headingtxt3: 'I want to get it!'
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct =  new Product(product)
        newProduct.save()
      }
    )
  }

  // seeDb() {
  //   this.pushProductsToDb()
  // }
}

module.exports = FakeDb
