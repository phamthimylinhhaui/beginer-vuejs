const app = Vue.createApp({
    template:``,
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    methods: {
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
});

app.mount('#contact');