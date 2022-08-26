import Vue from 'vue'
import {
    MessageBox,
    Message,
    Loading,
    Tabs,
    TabPane,
    Select,
    Option,
    Input,
    Carousel,
    CarouselItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dialog,
    Button,
    CollapseTransition,
    Steps,
    Step,
} from 'element-ui'

Vue.use(Image)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Loading)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(CollapseTransition)
Vue.use(Steps)
Vue.use(Step)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
