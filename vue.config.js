const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({

        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),

        // Required - Routes to render.
        routes: [ '/', '/new-message/', '/about/', '/redirect/', '/intellectual-property-copyright-protection/', '/cease-and-desist-letter-generator/' ],

        postProcessHtml: function (context) {
          var titles = {
            '/': '<?php \n  \/\/ HOME\n  $link = basename(parse_url($_SERVER[\'REQUEST_URI\'], PHP_URL_PATH));\n  if (strlen($link) > 0) {\n    \/\/ page meta\n    ?>\n    <title>Set in Block - Everlasting Message<\/title>\n    <meta name=\"description\" content=\"Message transaction hash: <?php echo ($link); ?>\"\/>\n\n    <!-- Schema.org for Google -->\n    <meta itemprop=\"name\" content=\"Set in Block - Everlasting Message\">\n    <meta itemprop=\"description\" content=\"Message transaction hash: <?php echo ($link); ?>\">\n\n    <!-- Twitter -->\n    <meta name=\"twitter:card\" content=\"summary\">\n    <meta name=\"twitter:title\" content=\"Set in Block - Everlasting Message\">\n    <meta name=\"twitter:description\" content=\"Message transaction hash: <?php echo ($link); ?>\">\n\n    <!-- Open Graph general (Facebook, Pinterest & Google+) -->\n    <meta property=\"og:title\" content=\"Set in Block - Everlasting Message\">\n    <meta property=\"og:description\" content=\"Message transaction hash: <?php echo ($link); ?>\">\n    <!-- <meta name=\"og:url\" content=\"https:\/\/setinblock.com\"> -->\n    <meta property=\"og:site_name\" content=\"Set in Block\">\n    <?php\n    } else { \n    \/\/ message meta\n    ?>\n    <title>Set in Block - Immutable and Indestructible Records in the Ethereum Blockchain Archive<\/title>\n    <meta name=\"description\" content=\"Write and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and \'set in stone\' it on the blockchain.\"\/>\n    \n    <!-- Schema.org for Google -->\n    <meta itemprop=\"name\" content=\"Set in Block - Immutable and Indestructible Blockchain Messages\">\n    <meta itemprop=\"description\" content=\"Write and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and \'set in stone\' it on the blockchain.\">\n\n    <!-- Twitter -->\n    <meta name=\"twitter:card\" content=\"summary\">\n    <meta name=\"twitter:title\" content=\"Set in Block - Immutable and Indestructible Blockchain Messages\">\n    <meta name=\"twitter:description\" content=\"Write and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and \'set in stone\' it on the blockchain.\">\n\n    <!-- Open Graph general (Facebook, Pinterest & Google+) -->\n    <meta property=\"og:title\" content=\"Set in Block - Immutable and Indestructible Blockchain Messages\">\n    <meta property=\"og:description\" content=\"Write and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and \'set in stone\' it on the blockchain.\">\n    <meta property=\"og:url\" content=\"https:\/\/setinblock.com\">\n    <meta property=\"og:site_name\" content=\"Set in Block\">\n<?php } ?>',
            '/new-message/': '<title>Set in Block - Record a New Permanent Message<\/title>\n<meta name=\"description\" content=\"Enter the message and \'set in stone\' it on the Ethereum blockchain. You will create a permanent record, which is message permanently recorded in the Ethereum blockchain.\"\/>\n\n<!-- Schema.org for Google -->\n<meta itemprop=\"name\" content=\"Set in Stone: A Permanent Record in The Blockchain Archive\">\n<meta itemprop=\"description\" content=\"Enter the message and \'set in stone\' it on the Ethereum blockchain. You will create a permanent record, which is message permanently recorded in the Ethereum blockchain.\">\n\n<!-- Twitter -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"Set in Stone: A Permanent Record in The Blockchain Archive\">\n<meta name=\"twitter:description\" content=\"Enter the message and \'set in stone\' it on the Ethereum blockchain. You will create a permanent record, which is message permanently recorded in the Ethereum blockchain.\">\n\n<!-- Open Graph general (Facebook, Pinterest & Google+) -->\n<meta property=\"og:title\" content=\"Set in Stone: A Permanent Record in The Blockchain Archive\">\n<meta property=\"og:description\" content=\"Set in Block - Create a New Permanent Message\">\n<meta property=\"og:url\" content=\"https:\/\/setinblock.com\/new-message\">\n<meta property=\"og:site_name\" content=\"Set in Block\">',
            '/about/': '<title>Set in Block - Hidden Messages in the Ethereum, Proof-of-Existence<\/title>\n\n<!-- Schema.org for Google -->\n<meta itemprop=\"name\" content=\"Make a Proof of Existence on the Ethereum Blockchain - Set in Block\">\n\n<!-- Twitter -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"Make a Proof of Existence on the Ethereum Blockchain - Set in Block\">\n\n<!-- Open Graph general (Facebook, Pinterest & Google+) -->\n<meta property=\"og:title\" content=\"Make a Proof of Existence on the Ethereum Blockchain - Set in Block\">\n<meta property=\"og:url\" content=\"https:\/\/setinblock.com\/about\">\n<meta property=\"og:site_name\" content=\"Set in Block\">',

            '/intellectual-property-copyright-protection/': '<title>Set in Block - Intellectual Property Protection with Blockchain<\/title>',

            '/cease-and-desist-letter-generator/': '<title>Set in Block - Cease and Desist Letter Generator<\/title>',

            '/redirect/': '<?php \n  $link = basename(parse_url($_SERVER[\'REQUEST_URI\'], PHP_URL_PATH));\n?>\n<title>Set in Block - Everlasting Message<\/title>\n<meta name=\"description\" content=\"Message transaction hash: <?php echo ($link); ?>\"\/>\n<!-- Schema.org for Google -->\n<meta itemprop=\"name\" content=\"Set in Block - Everlasting Message\">\n<meta itemprop=\"description\" content=\"Message transaction hash: <?php echo ($link); ?>\">\n\n<!-- Twitter -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"Set in Block - Everlasting Message\">\n<meta name=\"twitter:description\" content=\"Message transaction hash: <?php echo ($link); ?>\">\n\n<!-- Open Graph general (Facebook, Pinterest & Google+) -->\n<meta property=\"og:title\" content=\"Set in Block - Everlasting Message\">\n<meta property=\"og:description\" content=\"Message transaction hash: <?php echo ($link); ?>\">\n<meta property=\"og:site_name\" content=\"Set in Block\">'
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            titles[context.route]
          )
        }
      })
    ]
  }
}
