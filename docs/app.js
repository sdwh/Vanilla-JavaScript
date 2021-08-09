const tag_a_a1 = document.getElementById('a1');

const htmlCollections_a = document.getElementsByTagName('a');
// htmlCollection is array-like

htmlCollections_a.length
// 5

htmlCollections_a.item(0)
// euqal htmlCollections_a[0]

Array.from(htmlCollections_a).forEach(item => {
    console.log(item);
});

const htmlCollections_btn = document.getElementsByClassName('btn');

htmlCollections_btn.namedItem('a4')
// null

const tag_a_a5 = htmlCollections_btn.namedItem('a5');
// link5

const tag_a_link4 = document.querySelector('.btn')
// link4

const nodeList_btn = document.querySelectorAll('.btn')
// nodelist: a.btn, a#a5.btn

const nodeList_name_link = document.querySelectorAll('[name="link"]')