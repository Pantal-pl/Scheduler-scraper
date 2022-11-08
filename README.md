## Scheduler-scraper
Download schedule in PDF format from Academy website using cronjob. 

## 1. 
- Script run 0 8-18/1 ? * mon-fri * (cronjob) on AWS EventBridge using AWS lambda.
## 2.
- Download pdf's and calculate thier hash, next compare calculated hash with value stored in mongoDb document.

    a.  If the hashes are diffrent, send SMS using Twilio or send email using SendGrid, with URL and value in database.

    b.  If the hashes are the same do nothing.
