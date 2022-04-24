geturlparam() {
    let that = this
    // window.location.href 获取地址
    let url = 'https://xxxx.com/xxx/demo?type=1&id=2'
    let p = url.split('?')[1]
    let keyValue = p.split('&');
    let obj = {};
    for (let i = 0; i < keyValue.length; i++) {
      let item = keyValue[i].split('=');
      let key = item[0];
      let value = item[1];
      obj[key] = value;
    }
    console.log(keyValue); //  ['type=1','id=2']
    console.log(obj);      //  {type:'1',id:'2'}
  }
