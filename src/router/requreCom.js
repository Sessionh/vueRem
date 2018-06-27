export default(url) => resolve => require([`@/components/${url}.vue`], resolve)

