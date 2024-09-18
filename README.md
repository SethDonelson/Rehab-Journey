# Rehab Journey
A Social Network for Your Physical and Mental Rehab.

A positive support network to post and track your physical and/or mental rehab progress. View posts from the community, like, and comment to support others. <br>


<img width="1122" alt="Rehab Journey Post Screen" src="https://i.ibb.co/WsByS2s/Screenshot-2024-09-18-115045.png">

## How It's Made:

**Tech used:** ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![BOOTSTRAP BADGE](https://img.shields.io/static/v1?label=|&message=BOOTSTRAP&color=316c5e&style=plastic&logo=bootstrap)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)![EXPRESS BADGE](https://img.shields.io/static/v1?label=|&message=EXPRESS&color=bbb111&style=plastic&logo=express)![MONGODB BADGE](https://img.shields.io/static/v1?label=|&message=MONGO-DB&color=cdd148&style=plastic&logo=mongodb)


## Optimizations
I would add the ability to save/bookmark post from the community feed, additional methods for authentication such as google auth, the ability to reset/retrieve passwords.


## Lessons Learned:
Using the ID from the user and post to track/attach comments and likes along with pulling up specific post from the feed.  


## Installation

1. Clone repo
2. run `npm install`
3. update DB_STRNG in config/env and config/database
4. create a cloudinary account and add the following in the env
5. CLOUD_NAME = ''
   API_KEY = ''
   API_SECRET = ''

## Usage

1. run `node server.js`
2. Navigate to `localhost:2121`
