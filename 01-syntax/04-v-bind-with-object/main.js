const app = Vue.createApp({
  setup() {
    const src =
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
    const alt = 'Vue.js'
    const width = 50;

    return {
      src, alt, width
    }
    
  }
})

app.mount('#app')