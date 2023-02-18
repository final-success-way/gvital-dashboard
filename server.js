var compression = require('compression');
const fs = require('fs')

const express = require('express')
const app = express()
const PORT = 3000

app.use(compression());
//app.use(express.static(__dirname + '/public', { maxAge: 31557600 }))

app.get('*', function(req, res, next) {
    const host = req.headers.host
    const fullUrl = req.url
    let url = req.url.split('?')[0]
    let urlParams = null
    if (req.url.includes('?')) {
      urlParams = '?' + req.url.split('?')[1]
    }

    const redirect = redirects.hasOwnProperty(url.toLowerCase())
    console.log(redirect)
    const other = url.includes('%20')
    if (url.includes(' ')) {
      url = url.split(' ').join('%20')
    }
    if (redirect) {
      let newLocation
      if (urlParams) {
        newLocation = redirects[url.toLowerCase()] + urlParams
      } else {
        newLocation = redirects[url.toLowerCase()]
      }
      res.writeHead(301, {
        Location: newLocation
      })
      res.end()
    } else if (other) {
      let newLocation
      if (urlParams) {
        newLocation = url.toLowerCase().split('%20').join('-') + urlParams
      } else {
        newLocation = url.toLowerCase().split('%20').join('-')
      }
      res.writeHead(301, {
        Location: newLocation
      })
      res.end()
    } else {
      next()
    }
  }
)
// let counter = 100
// let data = ''
//
// function getProfileSiteMap(counter) {
//   axios.get(`https://www.pulse.qa/sitemaps/sitemap_profile${counter}.xml.gz`).then((res) => {
//     data = data + res.data
//     fs.writeFileSync('profiles1.txt', data)
//     console.log(counter)
//     if(counter<=296) {
//       setTimeout(() => {
//         getProfileSiteMap(counter + 1)
//       }, 1000)
//     }
//   }).catch((e)=>{
//     console.log(e)
//   })
// }

// getProfileSiteMap(counter)

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
