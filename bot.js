import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv'
dotenv.config()

const client = new TwitterApi({
  appKey: process.env.CONSUMER_KEY,
  appSecret: process.env.CONSUMER_SECRET,
  accessToken: process.env.ACCESS_TOKEN_KEY,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
  bearerToken: process.env.BEARER_TOKEN,
});

const v2Client = client.v2;
const user = await v2Client.userByUsername('MintIce16');
const twitID = '1307197041420808192'

const { data: createdTweet } = await client.v2.tweet('twitter-api-v2 test :)', {
  poll: { duration_minutes: 120, options: ['Absolutely', 'For sure!'] },
});
console.log('Tweet', createdTweet.id, ':', createdTweet.text);

// get a Single tweet
const tweetOfId = await client.v2.singleTweet(twitID, {
  expansions: [
    'entities.mentions.username',
    'in_reply_to_user_id',
  ],
});


    