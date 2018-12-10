window.Event = new Vue();

Vue.component('site', {
    template: `
        <div class="fullsite">
            <toolbar/>
            <banner v-if="!alt"/>
            <torso>
                <welcome v-if="!alt"></welcome>
                <preview-list :model="panels"></preview-list>
            </torso>
        </div>
    `,
    data() {
        return {
            alt: true,
            msg: 'Hello app',
            panels: [
                {
                    name: 'Color History',
                    patron: ['Jiesi Huang'],
                    details: 'Dynamic colors swatches with recent history',
                    features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                    file: 'builds/protoColors1.05.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/protoColors',
                        demo: 'https://github.com/Inventsable/protoColors', 
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                        { appName: 'PHXS', status: 'stable' },
                        { appName: 'AEFT', status: 'unstable' },
                    ],
                },
                {
                    name: 'Scribe',
                    patron: ['r/AdobeIllustrator'],
                    details: 'Dynamic colors swatches with recent history',
                    features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                    file: 'builds/Scribe1.01.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/protoColors',
                        demo: 'https://github.com/Inventsable/protoColors',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'unstable' },
                        { appName: 'PHXS', status: 'unstable' },
                    ],
                },
                {
                    name: 'Smart Align',
                    patron: ['Herman van Boeijen'],
                    details: 'Dynamic colors swatches with recent history',
                    features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                    file: 'builds/Smart-Align1.01.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/protoColors',
                        demo: 'https://github.com/Inventsable/protoColors',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                    ],
                },
                {
                    name: 'Nimbling SSR 30',
                    patron: ['Herman van Boeijen'],
                    details: 'Dynamic colors swatches with recent history',
                    features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                    file: 'builds/axo1.00.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/axo',
                        demo: 'https://github.com/Inventsable/axo',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                    ],
                },
                {
                    name: 'MightyFolders',
                    patron: ['Vasily Hall'],
                    details: 'Dynamic colors swatches with recent history',
                    features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                    file: 'builds/mightyFolders1.00.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/mightyFolders',
                        demo: 'https://github.com/Inventsable/mightyFolders',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                    ],
                },
                {
                    name: 'Playwrite',
                    patron: [],
                    details: 'Dynamic colors swatches with recent history',
                    features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                    file: 'builds/axo1.00.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/playwrite',
                        demo: '',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                    ],
                },
            ]
        }
    },
    mounted() {
        console.log(this.msg)
    }
})

Vue.component('torso', {
    template: `
        <div class="content">
            <slot></slot>
        </div>
    `
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
                <div class="centered">in·vents·a·ble</div>
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
    props: {
        model: Array,
    },
    template: `
        <div class="preview-list">
            <preview-app v-for="(app, key) in model" :key="app.name" :model="app"></preview-app>
        </div>
    `,
    data() {
        return {
            msg: 'Hello'
        }
    },

})

Vue.component('preview-app', {
    props: {
        model: Object,
    },
    template: `
        <div class="preview-main">
            <div class="card-header">
                <div class="preview-title">
                    <div class="preview-title-top">
                        <div class="preview-title-main">{{model.name}}</div>
                        <div v-if="!alt" class="preview-title-version">{{buildNumber}}</div>
                    </div>
                    <div class="preview-title-sub">{{authors}}</div>
                </div>
            </div>
            <div class="preview-body">
                <div class="preview-body-L">
                    <div class="preview-wrapper">
                        <placeholder w="200" h="200" />
                    </div>
                    <div class="preview-wrapper">
                        <placeholder w="200" h="200" />
                    </div>
                </div>
                <div class="preview-body-R">
                    <div class="preview-details">
                        <div class="detail-subtitle">{{details}}</div>
                        <ul class="feature-list">
                            <li v-for="(item,key) in model.features" class="list-feature">{{item}}</li>
                        </ul>
                    </div>
                    <div class="preview-links">
                        <a class="preview-links-L" :href="model.file" download>
                            <icon type="s" name="download"></icon>
                        </a>
                        <a v-if="!alt" class="preview-links-C" :href="model.links.demo" target="_blank">
                            <icon type="s" name="gamepad"></icon>
                        </a>
                        <a class="preview-links-R" :href="model.links.github" target="_blank">
                            <icon type="b" name="github"></icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            alt: true,
        }
    },
    computed: {
        buildNumber: function() {
            let match = this.model.file.match(/\d\.\d{2}(?=\.zxp)/);
            return match[0];
        },
        authors: function () {
            if (this.model.patron.length) {
                return `${this.model.patron} and Tom Scharstein`
            } else {
                return `Tom Scharstein`
            }
        },
        details: function () {
            if (this.model.details.length) {
                // return `${this.model.details.join(',')} and Tom Scharstein`
            // } else {
                return this.model.details;
            }
        }
    },
    mounted() {
        console.log('Previewing:')
        console.log(this.model)
    }
})

Vue.component('placeholder', {
    props: {
        w: String,
        h: String,
    },
    template: `
        <div :style="getPlaceholderStyle()"></div>
    `,
    methods: {
        getPlaceholderStyle() {
            let url = `https://via.placeholder.com/${this.w}x${this.h}`;
            return `width:${this.w}px;height:${this.h}px;background: url('${url}') center center / contain no-repeat;`;
        }
    }
})

Vue.component('icon', {
    props: {
        name: String,
        type: String,
    },
    template: `
        <span :class="getIconClass()"></span>
    `,
    methods: {
        getIconClass() {
            return `fa${this.type} fa-lg fa-${this.name}`
        }
    },
    mounted() {
        if (this.name == 'download')
            console.log(this.$el)
        // console.log(`icon is ${this.name}`)
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