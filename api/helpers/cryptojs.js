const CryptoJS = require("crypto-js")

class Crypto {
  static encrypt (password, secret) {
    return CryptoJS.AES.encrypt(password, secret).toString()
  }

  static decrypt (password, secret) {
    return CryptoJS.AES.decrypt(password, secret).toString(CryptoJS.enc.Utf8)
  }
}

module.exports = Crypto