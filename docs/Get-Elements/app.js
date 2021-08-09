const tag_a_a1 = document.getElementById('a1');
// tag.innerHtml
// tag.href
// tag.search
// tag.hostname
// tag.pathname
// tag.innerText
// tag.text


const htmlCollections_a = document.getElementsByTagName('a');
// htmlCollection is array-like

htmlCollections_a.length
// 5

htmlCollections_a.item(0)
// euqal htmlCollections_a[0]
// avoid index range problems

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
// nodelist: a#a2, a.btn, a#a5.btn

nodeList_btn.item(0)

for(let value of nodeList_btn.values()) {
    console.log(value);
}

for(let entry of nodeList_btn.entries()) {
    console.log(entry);
}

// Application

const res = []
document.querySelectorAll('a').forEach(aTag => res.unshift([aTag.text, aTag.href]))
copy(res)