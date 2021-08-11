// ⭐setting cookie
document.cookie = 'name=loto';
document.cookie = 'weapon=club';

function addCookie(){
    const [key, value] = [
        document.getElementById('cookieKey').value, 
        document.getElementById('cookieVal').value
    ];
    document.cookie = `${key}=${value}`;

    getCookie();
}

// ⭐read cookie

function getCookie(){
    const cookie = {};
    document.cookie.split('; ').forEach(
        c => {
          [k, v] = c.split('=');
          cookie[k] = v;
        }
    );

    document.getElementById('cookieDisplay').innerHTML = 
        JSON.stringify(cookie)
            .replaceAll('\"', '')
            .replaceAll(',', '<br/><span class="mt"/>')
            .replaceAll('{', '{<br/><span class="mt"/>')
            .replaceAll('}', '<br/>}');
}

// ⭐delete cookie
//document.cookie = "weapon=club; expires=Thu, 1 Jan 1980 12:00:00 UTC";

function deleteCookie(){
    const key = document.getElementById('cookieKey').value; 
    document.cookie = `${key}=0;expires=Tue, 1 Jan 1980 12:00:00 UTC`;
    getCookie()
}

// ⭐setting localStorage

const pseudoData = {"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}};

localStorage.setItem('json', JSON.stringify(pseudoData));

// ⭐get from localStorage
//const slime = localStorage.getItem('monster');

// ⭐remove key from localStorage
//localStorage.removeItem('monster');

// ⭐delete all keys from localStorage
//localStorage.clear();