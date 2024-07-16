const CommonUtils = {
     capitalizeWords: function (str) {
        return str.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
      }
}

export default CommonUtils