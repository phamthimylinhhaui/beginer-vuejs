const app = Vue.createApp({
    template:``,
    data() {
        return {
            products: [
                {
                    name: 'SP 1',
                    price: 120,
                    img: './assets/img.png',
                    isCart: true,
                },
                {
                    name: 'SP 2',
                    price: 115,
                    img: './assets/img.png',
                    isCart: false,
                },
                {
                    name: 'SP 3',
                    price: 320,
                    img: './assets/img.png',
                    isCart: true,
                },
            ],
            x: 0,
            y: 0,
            bindClass: 'bind-class',
        }
    },
    methods: {
        onToggleCart(e, product) {
            product.isCart = !product.isCart;
        },
        onLogEvent(e, xDefautl, yDefautl) {
            console.log(e);
            this.x = xDefautl;
            this.y = yDefautl;
        },
        onMouseMoveEvent(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    },
    computed: {
        productFilter() {
            return this.products.filter(
                (product) => product.price < 200
            )
        }
    }
});

app.mount('#contact');