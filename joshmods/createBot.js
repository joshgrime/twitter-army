const pup = require('puppeteer');

module.exports = {
    launch: function() {
        pup.launch().then(async browser => {
            const emailPage = await browser.newPage();
            await emailPage.goto('https://10minutemail.com/10MinuteMail/index.html', {waitUntil:'load'});
            var email = emailPage.evaluate(function(){
               return document.getElementById('mailAddress').value;
            });
            const twitter = await browser.newPage();
            await twitter.goto('https://twitter.com/i/flow/signup', {waitUntil:'load'});
            await twitter.evaluate(async () => {
                var divs = document.getElementsByTagName('div');
                    for (let x of divs) {
                        if (x.innerText == 'Use email instead') {
                        x.id = 'fuck'; 
                        console.log(x);
                        break;	
                        }
                    }
                    return;
              });
            await twitter.hover('#fuck]');
            await twitter.click('#fuck');
            await twitter.screenshot({path: 'twitter.png'});
            await emailPage.screenshot({path: 'email.png'});
            await browser.close();
          });
    }
};
