window.Event = new Vue();

Vue.component('site', {
    template: `
        <div>
            <toolbar/>
            <banner></banner>
            <div class="content">
                <welcome></welcome>
                <preview-list v-if="false"></preview-list>
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

Vue.component('welcome', {
    template: `
        <div class="welcome-card">
            <div class="welcome-full">
                <div class="welcome-title">Open source Adobe panels by you and me</div>
                <div class="welcome-line"></div>
            </div>
        </div>
    `
})

Vue.component('tab-list', {
    template: `
        <div class="tabs">
            <div 
                v-for="tab in tabs"
                class="tab-body"
                @click="selectTab(tab)" @mouseover="hoverTab(tab)" @mouseout="hoverOutTab(tab)">
                    <div :class="getTabClass(tab)">{{tab.name}}</div>
                    <div :class="getLineClass(tab)" :style="getLineStyle(tab)"></div>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: [
                {
                    name: 'Home',
                    active: true,
                    hover: false,
                },
                {
                    name: 'Panels',
                    active: false,
                    hover: false,
                },
                {
                    name: 'Tutorials',
                    active: false,
                    hover: false,
                }
            ]
        }
    },
    methods: {
        hoverTab(tab) {
            tab.hover = true;
        },
        hoverOutTab(tab) {
            tab.hover = false;
        },
        getTabClass(tab) {
            var style = '';
            if (tab.active) {
                style = 'tab-main-active'
            } else {
                style = 'tab-main-idle'
            }
            return style;
        },
        getLineClass(tab) {
            var style = '';
            if (tab.active) {
                style = 'tab-line-active'
            } else {
                style = 'tab-line-idle'
            }
            return style;
        },
        getLineStyle(tab) {
            var style = 'border-style:solid;';
            if (tab.active) {
                style += 'border-color:' + this.$root.getCSS('color-tab-active');
            } else if (tab.hover) {
                style += 'border-color:' + this.$root.getCSS('color-tab-fade');
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
                <div class="banner-title">
                <div class="centered">in·vents·a·ble.cc</div>
                <div v-if="hasAnno" class="cc">cc</div>
                </div>
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

Vue.component('preview-list', {   
    template: `
        <div class="preview-list">
            <div class="preview-main">
                <div class="preview-title">
                    <div class="preview-title-top">
                        <div class="preview-title-main">Color History</div>
                        <div class="preview-title-version">1.0.0</div>
                    </div>
                    <div class="preview-title-sub">Jiesi Huang and Tom Scharstein</div>
                </div>
                <div class="preview-body">
                    <div class="preview-body-L"></div>
                    <div class="preview-body-R">
                        <div class="preview-body-anno"></div>
                    </div>
                </div>
                <div class="preview-bottom">
                    <a class="preview-bottom-L" href="protoColors1.01.zxp" download>DOWNLOAD</a>
                    <div class="preview-bottom-C">DEMO</div>
                    <div class="preview-bottom-R">GITHUB</div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            msg: 'Hello'
        }
    },
    mounted() {
        console.log(this.msg)
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
        this.handleResize(null);
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