module.exports = function(req, res, next) {
  const internalLinks = ['instagram', 'youtube', 'facebook', 'spotify', 'twitter', 'tiktok']
  const host = req.headers.host
  const fullUrl = req.url
  let url = req.url.split('?')[0]
  let urlParams = null
  if (req.url.includes('?')) {
    urlParams = '?' + req.url.split('?')[1]
  }
  if (url.includes(' ')) {
    url = url.split(' ').join('%20')
  }
  url = url.toLowerCase()
  //type 1: /buy-twitter-retweets.html
  //type 2: /facebook-followers-likes.php
  //type 3: /brunei-darussalam/instagram-followers-likes
  //type 4: /south-africa/youtube-views-likes-subscribers

  url = url.split('/')
  const len = url.length
  if (url.join('/') === '/') {
    next()
  } else if (url.join('/').includes('/robots.txt')) {
    next()
  }  else if (url.join('/').includes('/favicon')) {
    next()
  } else if (url.join('/').includes('/_nuxt')) {
    next()
  } else if (url.join('/').includes('/contact')) {
    next()
  } else if (url.join('/').includes('/verify-email')) {
    next()
  } else if (url.join('/').includes('/reset-password')) {
    next()
  } else if (url.join('/').includes('/order')) {
    next()
  } else if (url.join('/').includes('/blog')) {
    next()
  } else if (url.join('/').includes('/faq')) {
    next()
  } else if (url.join('/').includes('/about')) {
    next()
  } else if (url.join('/').includes('/terms')) {
    next()
  } else if (url.join('/').includes('/sitemap')) {
    next()
  } else if (url.join('/').includes('/register')) {
    next()
  } else if (url.join('/').includes('/login')) {
    next()
  } else if (url.join('/').includes('/dashboard')) {
    next()
  } else if (url.join('/').includes('__webpack_hmr')) {
    next()
  } else if (len === 2 && url[1].includes('-services')) {
    next()
  } else if (len === 3 && url[1].includes('-services') && url[2].includes('buy-')) {
    next()
  } else if (len > 2) {
    const service = internalLinks.find((link) => {
      return url.join('/').includes(link)
    })
    const isNotCity = internalLinks.find((link) => {
      return url[1].includes(link)
    })

    console.log('++++', service, '++++')
    if (!isNotCity) {
      url = `/${service}-services/${url[1]}`
      console.log('xxxxxx', url, 'xxxxxx')
      res.writeHead(301, {
        Location: url
      })
      res.end()
    } else {
      url = `${url[1]}/`
      console.log('here')
      next()
    }
  } else {
    console.log(url)
  }
}
