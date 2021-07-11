new Vue ({
    el: '#FAQ',
    data: {
        clicked: false,
    },
    methods: {
        logs() {
            console.log(this.clicked);
        }
    }
})