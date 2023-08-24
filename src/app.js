import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add( faPlus, faCheck, faTrash )

import './assets/scss/app.scss'
import * as bootstrap from 'bootstrap'

createApp( App )
    .component( 'font-awesome-icon', FontAwesomeIcon )
    .mount( '#app' )
