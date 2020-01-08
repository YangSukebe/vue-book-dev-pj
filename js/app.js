var items = [
    {
        name: '鉛筆',
        price: 300,
        quality: 0
    },
    {
        name: 'ノート',
        price: 400,
        quality: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quality: 0
    },
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    }
})
//
window.vm = vm
