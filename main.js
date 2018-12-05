window.Event = new Vue();

Vue.component('site', {
    template: `
        <div>
            <toolbar/>
            <banner></banner>
            <div class="content">
                <dummytext />
            </div>
        </div>
    `,
    data() {
        return {
            msg: 'Hello app'
        }
    },
    mounted() {
        console.log(this.msg)
    }
})

Vue.component('tab-list', {
    template: `
        <div class="tabs">
            <div 
                v-for="tab in tabs"
                class="tab-body"
                @click="selectTab(tab)">
                    <div :class="getTabClass(tab)">{{tab.name}}</div>
                    <div class="tab-line" :style="getLineStyle(tab)"></div>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: [
                {
                    name: 'Home',
                    active: true,
                },
                {
                    name: 'Panels',
                    active: false,
                },
                {
                    name: 'Tutorials',
                    active: false,
                }
            ]
        }
    },
    methods: {
        getTabClass(tab) {
            var style = '';
            if (tab.active) {
                style = 'tab-main-active'
            } else {
                style = 'tab-main-idle'
            }
            return style;
        },
        getLineStyle(tab) {
            var style = 'border-width:2px;border-style:solid;';
            if (tab.active) {
                style += 'border-color:' + this.$root.getCSS('color-tab-active');
            } else {
                style += 'border-color:transparent;'
            }
            return style;
        },
        clearTabs() {
            for (var i = 0; i < this.tabs.length; i++)
                this.tabs[i].active = false;
        },
        selectTab(tab) {
            if (!tab.active) {
                this.clearTabs();
                tab.active = true;
            }
        }
    },
})

Vue.component('banner', {
    template: `
        <div class="banner">
            <div class="fullscreen-bg" :style="getScreenStyle">
                <video loop muted autoplay poster="demo.png" class="fullscreen-bg__video">
                    <source src="demo.mp4" type="video/mp4">
                </video>
            </div>
            <div class="banner-anno">
                <div></div>
                <div class="banner-title centered">in·vents·a·ble</div>
                <div></div> 
                <div v-if="hasAnno" class="banner-subtitle centered">Custom open source Adobe panels</div>
                <div></div>
            </div>
        </div>
    `,
    data() {
        return {
            hasAnno: false,
            msg: 'Hello world',
        }
    },
    methods: {
        getScreenStyle() {
            var style = '';
            if (this.w < 300) {
                style += `background: url('demo.png') center center / cover no-repeat;`
            } else if (this.w < 767) {
                style += `background: url('https://thumbs.gfycat.com/ThatThirdHumpbackwhale-size_restricted.gif') center center / cover no-repeat;`
            }
            return style;
        },

    },
})

Vue.component('toolbar', {
    template: `
        <div class="header">
            <div class="logo"></div>
            <tab-list></tab-list>
        </div>
    `,
    data() {
        return {

        }
    }
})

Vue.component('dummytext', {
    template: `
        <div class="dummy">
            <p></p>
        </div>
    `,
    data() {
        return {
            msg: `test`
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello world',
        isDesktop: false,
        isMobilePortrait: false,
        isMobileLandscape: false,
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.w = document.documentElement.clientWidth;
            this.h = document.documentElement.clientHeight;
            this.findDevice();
        },
        findDevice() {
            if (this.w <= 767) {
                if (this.h > this.w) {
                    this.isMobileLandscape = false;
                    this.isMobilePortrait = true;
                    // this.setCSS('banner-h', '200px');
                } else {
                    this.isMobileLandscape = true;
                    this.isMobilePortrait = false;
                    // this.setCSS('banner-h', '400px');

                }
                this.isDesktop = false;
            // } else if (this.$root.windowWidth <= 992) {
            //     target = 'Tablet'
            } else {
                this.setCSS('banner-h', '800px');
                this.isDesktop = true;
                this.isMobileLandscape = false;
                this.isMobilePortrait = false;
            }
        },
        getCSS(prop) {
            return window.getComputedStyle(document.documentElement).getPropertyValue('--' + prop);
        },
        setCSS(prop, data) {
            document.documentElement.style.setProperty('--' + prop, data);
        },
    }
})