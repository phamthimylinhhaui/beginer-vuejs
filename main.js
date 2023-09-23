const app = Vue.createApp({
    template: `
        <h2>nội dung biến {{ tenBien }}</h2> 
        <button v-on:click="onChangeName"> change </button>
        <button @click="onChangeName"> show modal </button>
        <div class="modal" v-if="isShowModal">
            <h2>this is modal</h2>
        </div>
    `,
    data() {
        return {
            tenBien: "XXX",
            tenBien2: "val: vue bien abc2",
            isShowModal: false,
        }
    },
    methods: {
        onChangeName() {
            this.tenBien = 'ten bien da change';
            this.isShowModal = !this.isShowModal;
        }
    },
});

app.mount('#contact');