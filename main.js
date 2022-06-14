var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpg',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutual"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: [
      {
        sizeId: 2234,
        size: "23cm"
      },
      {
        sizeId: 2234,
        size: "25cm"
      }
    ]
  }
})