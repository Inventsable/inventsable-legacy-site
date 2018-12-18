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
            msg: 'Welcome to my domain',
            panels: [
                {
                    name: 'protoBrowser',
                    patron: [],
                    details: 'Web browser',
                    features: ['Homepage is free panel hub',
                               'See updates for all related panels',
                               'Show/hide source toolbar'],
                    file: 'builds/protoBrowser1.00.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/protoBrowser',
                        demo: 'https://github.com/Inventsable/protoBrowser',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                    ],
                },
                {
                    name: 'protoDebug',
                    patron: [],
                    details: 'Debug utility',
                    features: ['Logs all user input',
                        'Display system information', 
                        'Share data with other panels', 
                        `Responds to console.log() in JSX`],
                    file: 'builds/protoDebug1.02.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/protoDebug',
                        demo: 'https://github.com/Inventsable/protoDebug',
                    },
                    range: '2017+',
                    apps: [
                        { appName: 'ILST', status: 'stable' },
                    ],
                },
                {
                    name: 'protoColors',
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
                    details: 'Layer renaming utility',
                    features: [
                        'Submit new layer name with Enter',
                        'Nagivate layers with arrow keys',
                        'Layer/Artboard name toggle',
                        'Prefix/suffix injection',
                        `Auto-delete ' copy' from names`
                    ],
                    file: 'builds/Scribe1.01.zxp',
                    links: {
                        github: 'https://github.com/Inventsable/Scribe',
                        demo: 'https://github.com/Inventsable/Scribe',
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
                    features: [
                            'Real-time selection detection',
                            'GUI for extended Align To positions',
                            'If one object selected, align to artboard',
                            'If multiple objects selected, align to selection', 
                            'Scrunch together function'],
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
                    details: 'GUI for isometric angles',
                    features: [
                        'Modular scale-shear-rotate actions', 
                    ],
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
                // {
                //     name: 'MightyFolders',
                //     patron: ['Vasily Hall'],
                //     details: 'Dynamic colors swatches with recent history',
                //     features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                //     file: 'builds/mightyFolders1.00.zxp',
                //     links: {
                //         github: 'https://github.com/Inventsable/mightyFolders',
                //         demo: 'https://github.com/Inventsable/mightyFolders',
                //     },
                //     range: '2017+',
                //     apps: [
                //         { appName: 'ILST', status: 'stable' },
                //     ],
                // },
                // {
                //     name: 'Playwrite',
                //     patron: [],
                //     details: 'Dynamic colors swatches with recent history',
                //     features: ['Real-time detection', 'Sort by time/spectrum', 'Contextual select same fill/stroke'],
                //     file: 'builds/axo1.00.zxp',
                //     links: {
                //         github: 'https://github.com/Inventsable/playwrite',
                //         demo: '',
                //     },
                //     range: '2017+',
                //     apps: [
                //         { appName: 'ILST', status: 'stable' },
                //     ],
                // },
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
    // <div class="logo" :style="getLogoStyle()"></div>
    template: `
        <div class="header">
            <icon type="infi" />
            <tab-list></tab-list>
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        getLogoStyle() {
            // return `background-image: url("https://i.imgur.com/eryxWD2.gif");`
            return `background-image: url("https://via.placeholder.com/30x30/434343/b7b7b7?text=logo");`
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
        <a :id="model.name" class="preview-main">
            <div class="card-header">
                <div class="preview-icon">
                    <placeholder 
                        :name="((winW > 407) || (winW < 249)) ? '80x80' : '40x40'"
                        :w="((winW > 407) || (winW < 249)) ? '80' : '40'"
                        :h="((winW > 407) || (winW < 249)) ? '80' : '40'" />
                </div>
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
                        <placeholder :name="model.name" w="200" h="200" />
                    </div>
                    <div class="preview-wrapper">
                        <placeholder :name="model.name" w="200" h="200" />
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
                             <icon haslink="false" samewindow="true" type="download" detail="Download as a .ZXP"></icon>
                        </a>
                        <a class="preview-links-R" :href="model.links.github" target="_blank">
                            <icon haslink="true" samewindow="false" :link="model.links.github" type="github" detail="Go to Github"></icon>
                        </a>
                    </div>
                </div>
            </div>
        </a>
    `,
    data() {
        return {
            alt: true,
        }
    },
    computed: {
        // realname: function() {
        //     let str = this.model.name.toLowerCase();
        //     return (str.test(/\s/)) ? str.replace(/\s/, '-') : str;
        // },
        winW: function() {
            return this.$root.w;
        },
        buildNumber: function() {
            let match = this.model.file.match(/\d\.\d{2}(?=\.zxp)/);
            return match[0];
        },
        authors: function () {
            if (this.model.patron.length) {
                return `${this.model.patron} and me`
            } else {
                return `me`
            }
        },
        details: function () {
            if (this.model.details.length) {
                // return `${this.model.details.join(',')} and me`
            // } else {
                return this.model.details;
            }
        }
    },
    mounted() {
        // console.log('Previewing:')
        // console.log(this.model)
    }
})

Vue.component('placeholder', {
    props: {
        w: String,
        h: String,
        name: String,
    },
    template: `
        <div :style="getPlaceholderStyle()" :class="getPlaceholderClass()"></div>
    `,
    methods: {
        getPlaceholderStyle() {
            // let altUrl = 'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com C/O https://placeholder.com/'
            let url = `https://via.placeholder.com/${this.w}x${this.h}/434343/b7b7b7?text=${this.name}`;
            return `width:${this.w}px;height:${this.h}px;background: url('${url}') center center / contain no-repeat;`;
        },
        getPlaceholderClass() {
            // let altUrl = 'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com C/O https://placeholder.com/'
            let url = `https://via.placeholder.com/${this.w}x${this.h}/434343/b7b7b7?text=${this.name}`;
            return `width:${this.w}px;height:${this.h}px;background: url('${url}') center center / contain no-repeat;`;
        }
    }
})

Vue.component('icon', {
    props: {
        detail: String,
        type: String,
        parent: String,
        which: String,
        canceller: String,
        haslink: String,
        link: String,
        samewindow: String,
    },
    template: `
    <a 
      :class="type == 'cancel' ? 'icon-cancel' : 'icon'" 
      :href="haslink == 'true' ? link : ''"
      :target="samewindow !== 'true' ? '_blank' : ''"
      @mouseover="hover = true" 
      @mouseout="hover = false" 
      @click="testBtn(type)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <title>{{detail}}</title>
        <polygon v-if="type == 'cursor'" :style="iconColor" points="13.29 44.41 25.48 32.37 42.51 32.37 13.29 3 13.29 44.41"/>
        <path v-if="type == 'key'" :style="iconColor" d="M42,46H8.05A4,4,0,0,1,4,42V8.05A4,4,0,0,1,8.05,4H42a4,4,0,0,1,4,4.05V42A4,4,0,0,1,42,46ZM29.57,29.11,32.23,37h3.44L27.17,12H23.28L14.82,37h3.32l2.59-7.84ZM21.4,26.59l2.44-7.21c.48-1.51.89-3,1.25-4.51h.08c.37,1.44.74,2.92,1.29,4.55l2.44,7.17Z"/>
        <path v-if="type == 'user'" :style="iconColor" d="M34,16a9,9,0,1,1-9-9A9,9,0,0,1,34,16Zm8.06,25.74-2.41-8.43A8.72,8.72,0,0,0,31.27,27H18.73a8.72,8.72,0,0,0-8.38,6.31L7.94,41.74A2.55,2.55,0,0,0,10.39,45H39.61A2.55,2.55,0,0,0,42.06,41.74Z"/>
        <path v-if="type == 'listener'" :style="iconColor" d="M19,17H9V7H19ZM31,7V17H41V7Zm0,14a6,6,0,0,1-6,6,6,6,0,0,1-6-6V19H9v8a16,16,0,0,0,32,0V19H31Z"/>
        <path v-if="type == 'sender'" :style="iconColor" d="M34.76,22.47h-6.4a1.18,1.18,0,0,1-1.11-1.56L32.57,5.55a.47.47,0,0,0-.81-.45L15.14,26.27a1.22,1.22,0,0,0,1,2h6.36a1.18,1.18,0,0,1,1.11,1.57L18.33,44.45a.48.48,0,0,0,.82.45L35.7,24.45A1.22,1.22,0,0,0,34.76,22.47Z"/>
        <path v-if="type == 'cancel'"  :style="iconColor" d="M29.24,25,41.12,13.12a3,3,0,0,0-4.24-4.24L25,20.76,13.12,8.88a3,3,0,0,0-4.24,4.24L20.76,25,8.88,36.88a3,3,0,0,0,0,4.24,3,3,0,0,0,4.24,0L25,29.24,36.88,41.12a3,3,0,0,0,4.24,0,3,3,0,0,0,0-4.24Z"/>
        <path v-if="type == 'favorite'"  :style="iconColor" d="M25,43.75,8.38,27.13A11.5,11.5,0,0,1,24.65,10.87l.35.35.35-.35A11.5,11.5,0,0,1,41.62,27.13Z"/>
        <path v-if="type == 'home'"  :style="iconColor" d="M35.5,34.92a9.93,9.93,0,0,1-7-2.9L25,28.54,21.52,32a9.93,9.93,0,1,1,0-14L25,21.46,28.48,18a9.93,9.93,0,1,1,7,16.94Zm-7-9.92L32,28.48a4.92,4.92,0,1,0,0-7Zm-14-4.92A4.92,4.92,0,1,0,18,28.48L21.46,25,18,21.52A4.91,4.91,0,0,0,14.5,20.08Z"/>
        <path v-if="type == 'infi'"  :style="iconColor" d="M35.5,34.92a9.93,9.93,0,0,1-7-2.9L25,28.54,21.52,32a9.93,9.93,0,1,1,0-14L25,21.46,28.48,18a9.93,9.93,0,1,1,7,16.94Zm-7-9.92L32,28.48a4.92,4.92,0,1,0,0-7Zm-14-4.92A4.92,4.92,0,1,0,18,28.48L21.46,25,18,21.52A4.91,4.91,0,0,0,14.5,20.08Z"/>
        <path v-if="type == 'download'"  :style="iconColor" d="M40.5,39v5H8.5V39ZM37.58,22.58l-3.53-3.53-7,7V5.5H22V26.09l-7-7-3.53,3.53L24.5,35.66Z"/>
        <path v-if="type == 'github'"  :style="iconColor" d="M25,3.21A20.91,20.91,0,0,0,18.39,44c1,.18,1.43-.44,1.43-1s0-2.15,0-3.9c-5.26,1-6.61-1.28-7-2.45a7.64,7.64,0,0,0-2.15-3c-.73-.39-1.77-1.36,0-1.38s2.82,1.51,3.21,2.14a4.47,4.47,0,0,0,6.09,1.72,4.39,4.39,0,0,1,1.34-2.79C16.58,32.83,11.72,31,11.72,23a8.13,8.13,0,0,1,2.15-5.62,7.48,7.48,0,0,1,.2-5.54s1.76-.55,5.75,2.15a19.62,19.62,0,0,1,10.46,0c4-2.72,5.75-2.15,5.75-2.15a7.5,7.5,0,0,1,.21,5.54A8.11,8.11,0,0,1,38.38,23c0,8-4.89,9.81-9.54,10.33a4.94,4.94,0,0,1,1.41,3.87c0,2.79,0,5,0,5.75,0,.55.39,1.2,1.44,1A20.92,20.92,0,0,0,25,3.21Z"/>
      </svg>
    </a>
  `,
    data() {
        return {
            hover: false,
        }
    },
    computed: {
        iconColor: function () {
            if (this.$root.isWake) {
                if (this.hover) {
                    return `fill: ${this.$root.getCSS('color-selection')}`;
                } else {
                    return `fill: ${this.$root.getCSS('color-icon')}`;
                }
            } else {
                return `fill: ${this.$root.getCSS('color-text-disabled')}`;
            }
        }
    },
    methods: {
        testBtn(type) {
            if (type == 'infi') {
                console.log('Home was clicked');
                Event.$emit('submitLink', this.$root.homepage);
            }
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