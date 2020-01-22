// 根据name获取地址栏的参数值
export const getQueryString = (name) => {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  let hash = window.location.hash
  let search = hash.split('?')
  let r = search[1] && search[1].match(reg)
  if (r != null) return r[2];
  return ''
}
// 拼接参数至url
export const queryString = (url, query) => {
  let str = []
  for (let key in query) {
      str.push(key + '=' + query[key])
  }
  let paramStr = str.join('&')
  return paramStr ? `${url}?${paramStr}` : url
}

/**
* table 计算 总页数
* @param {*} rowCount 总数
* @param {*} pageSize 每页条数
*/
export const pageTotal = (rowCount, pageSize) => {
  if (rowCount == null || rowCount == "") {
      return 0;
  } else {
      if (pageSize != 0 &&
          rowCount % pageSize == 0) {
          return parseInt(rowCount / pageSize);
      }
      if (pageSize != 0 &&
          rowCount % pageSize != 0) {
          return parseInt(rowCount / pageSize) + 1;
      }
  }
};



/**
*  给手机号中间增加 *
* @param {*} val 手机号
*/
export const formatPhoneHide = (val) => {
  let result = ''
  if(val) {
      result = val.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
  }
  return result;
}

/**
* @description: 格式化日期
* @param {type} date new Date() 
* @param {type} fmt  yyyy-MM-dd hh:mm:ss 
* @return: string
*/
export const formatDate = function(date, fmt) {
  fmt = fmt ? fmt : 'yyyy-MM-dd hh:mm:ss';
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  };

  // 遍历这个对象
  for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
      }
  }
  return fmt;
};
