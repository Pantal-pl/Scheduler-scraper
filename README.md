## Scheduler-scraper
Download schedule in PDF format from Academy website using cronjob. 

## 1. 
- Script run 0 8-18/1 ? * mon-fri * (cronjob) on AWS EventBridge using AWS lambda.
## 2.
- Download pdf's and calculate thier hash, next compare calculated hash with value stored in mongoDb document.

    a.  If the hashes are diffrent, send SMS using Twilio or send email using SendGrid, with URL and value in database.

    b.  If the hashes are the same do nothing.

## Used technologies ##
- AWS (Lambda, EventBridge, Cloudwatch)  <img height="24" width="24" src="https://cdn.simpleicons.org/amazonaws/white" />
- Twilio, to sent SMS <img height="24" width="24" src="https://cdn.simpleicons.org/twilio" />
- SendGrid to sent Emails
- node.js <img height="24" width="24" src="https://cdn.simpleicons.org/node.js" />
- mongoDb, mongoose <img height="24" width="24" src="https://cdn.simpleicons.org/mongodb" />
- cheerio
- js-md5

![Diagram bez tytułu drawio (1)](https://user-images.githubusercontent.com/61602042/200808275-2843bd1b-45cd-4d0c-8b3e-6df608b38591.svg)
