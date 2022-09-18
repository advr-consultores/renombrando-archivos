import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseGroup from './components/UI/BaseGroup.vue'
import BaseSelect from './components/UI/BaseSelect.vue'
import BaseShow from './components/UI/BaseShow.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App);

app.component('base-dialog', BaseDialog);
app.component('base-show', BaseShow);
app.component('base-select', BaseSelect);
app.component('base-group', BaseGroup);
app.component('base-button', BaseButton);
app.mount('#app');

