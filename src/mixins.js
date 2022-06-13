import axios from 'axios'

export default {
   methods: {
      async $api(url, data) {
         return (await axios({
            method: 'post',
            url,
            data
         }).catch(e => {
            console.log(e)
         })).data
      }
   },

   $base64 (file) {
      return new Promise(resolve => {
         var a = new FileReader()
         a.onload = e => resolve(e.target.result)
         a.readAsDataURL(file)
      })
   },

   $currencyFormat (value, format = '#, ###') {
      if (value === 0 || value === null) return 0

      var currency = format.substring(0, 1)
      if (currency === '$' || currency === '\\') {
         format = format.substring(1, format.length)
      } else {
         currency = ''
      }

      var groupingSeparator = ","
      var maxFractionDigits = 0
      var decimalSeparator = "."

      if (format.indexOf(".") == -1) {
         groupingSeparator = ","
      } else {
         if (format.indexOf(",") < format.indexOf(".")) {
            groupingSeparator = ","
            decimalSeparator= "."
            maxFractionDigits = format.length - format.indexOf(".") - 1
         } else {
            groupingSeparator = ","
            decimalSeparator= "."
            maxFractionDigits = format.length - format.indexOf(".") - 1
         }
      }
   }
}
