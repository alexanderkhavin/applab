new Vue ({
    el: '#FAQ',
    data: {
        clicked: false,
    },
    methods: {
        isActive() {
            this.clicked = !this.clicked;
            console.log('click '+ this.clicked);
        }
    },
    computed: {
        FAQ_OBJECT: function () {
            return {
                'Clicked': this.clicked,
            }
        },
    }
})