export class UiUtils {
  static h_calc(percent) {
    return window.innerHeight * (percent / 100)
  }

  static w_calc(percent) {
    return window.innerWidth * (percent / 100)
  }

  static mergeCss(objOrArr: any) {
    if (objOrArr && Array.isArray(objOrArr)) {
      let style = {};
      for (let item of objOrArr) {
        if (!item) continue;
        Object.keys(item).map(key => style[key] = item[key]);
      }
      return style;
    }
    return objOrArr;
  }
}
