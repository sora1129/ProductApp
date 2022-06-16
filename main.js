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
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg'
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
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeToCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})