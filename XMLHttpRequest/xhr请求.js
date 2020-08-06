import {XMLHttpRequest} from 'xmlhttprequest'

const getData = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          const res = {code: xhr.status, response: this.response}
          reject(res);
        }
      }
    };
    xhr.send();
  })
}

getData('http://39.105.138.173:666/admin/article/index?views=3').then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})