window.Event = new Vue();

Vue.component('sandbox', {

    // This Vue component takes care of all overhead for Bodymovin'
    template: `
    <div class="site-wrap">
        <div class="container">
            <lottie-simple classname="anim-red" file="red" />
            <span class="testAnno">Under construction</span>
         </div>
    </div>
  `,
})


Vue.component('lottie-simple', {
    props: {
        classname: String,
        file: String,
    },
    template: `<div :class="classname"></div>`,
    data() {
        return {
            animData: {},
        }
    },
    mounted() {
        this.animData = this.buildAnimation();
    },
    methods: {
        buildAnimation() {
            const elt = this.$el;
            const animData = {
                wrapper: elt,
                animType: 'svg',
                loop: true,
                prerender: true,
                autoplay: true,
                path: `./animations/${this.file}.json`,
            };
            return lottie.loadAnimation(animData);
        },
    }
})


var app = new Vue({
    el: '#app',
    methods: {
        getCSS(prop) { return window.getComputedStyle(document.documentElement).getPropertyValue('--' + prop); },
        setCSS(prop, data) { document.documentElement.style.setProperty('--' + prop, data); },
    }
})