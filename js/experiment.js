

class ProductInsert {

  // метод конструктор инициализирует объект
  constructor() {
    this.goods = [];
    this.insertPlace = '.products';

    this.getGoods();
    this.render();
    this.totalSum();
  };


  // получаем товары
  getGoods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  };

  render() {
    const block = document.querySelector(this.insertPlace);
    for (let index = 0; index < this.goods.length; index++) {
      block.insertAdjacentHTML('beforeend', `<div class="product-item" data-id="${this.goods[index].id}">
      <img src="https://picsum.photos/seed/2/200" alt="Some img">
      <div class="desc">
          <h3>${this.goods[index].product_name}</h3>
          <p>${this.goods[index].price} \u20bd</p>
          <button class="buy-btn">Купить</button>
      </div>
    </div>`);

    };
  };

  // вычисление суммарной стоимости всех товаров
  totalSum(){
    let sum = 0;
    for (let index = 0; index < this.goods.length; index++) {
      sum = sum + this.goods[index].price;
    }
    console.log(sum);
  };
};

let newList = new ProductInsert();


                          // возможные методы класса корзины

class AddedToCart {
  // создается новый объект на основе списка товаров.
  // в нем должны присутствовать все свойства объекта товаров
  // дополнительно к этим свойствам должно быть прописано количество выбранных единиц товара

  tableDiscount(){
    // таблица значений скидки в зависимости от суммы заказа
  };

  tableDelivery(){
    // таблица стоимости доставки в зависимости от выбранного адреса
  };

  totalDiscount() {
    // расчет скидки в зависимости от суммарной стоимости корзины
  };

  totalDelivery() {
    // расчет стоимости доставки в зависимости от выбранного адреса
  };

  cartTotal() {
    // расчет суммарной стоимости корзины
  };

};