/**
 * API Version 1.0
 */
// Imports ------------------------------------------------------------------//
import express from '../../../node_modules/express';
var tweetOfType = require('../../TweetOfType');
var tweetOfUser = require('../../TweetOfUser');
var bestForMe = require ('../../bestForMe')

// no need to create a new application just grab the router to add routes
const router = express.Router();

// Routes -------------------------------------------------------------------//

// default version 1.0 route
router.get('/',(req,res)=>{
    tweetOfType.getData('funny', (data) => {
        res.json({"speech":data.topTweet.tweet_text, "displayText": data.name});
        console.log(data);
      });
}); // end router.get(/)

router.post('/',(req,res)=>{
    let intentID = req.body.result.metadata.intentId;
    console.log(req.body.result);
    //let requestJson = JSON.parse(req.body);
    //136ac534-9d8f-44f3-a4a5-21b67fd271f9
    if (intentID == '136ac534-9d8f-44f3-a4a5-21b67fd271f9') {
        let slug = req.body.result.parameters.Category;
        console.log('slug: ' + slug);
        if (slug) {
            tweetOfType.getData(slug, (data) => {
        	   res.json({"speech": "From " + data.topTweet.tweet_by_name + ": " + data.topTweet.tweet_text, "displayText": data.name});
    	   });
        } else {
            res.send(404);
        }

    } else if (intentID == '1824050b-8eef-48d5-a9a7-f6d737d4372e') {
        //tweetOfUser.getData()
        let user = req.body.result.parameters.name;
        console.log(user);
        if (user) {
            tweetOfUser.getData(user, (data) => {
                    console.log(data);
                    if (data) {
                        res.json({"speech":data, "displayText": user});
                    } else {
                        res.json({"speech":"I don't have a tweet from " + user + " right now", "displayText": user});
                    }
               });
        }
        else {
            res.json({"speech":"unable to find tweet for that query", "displayText": user});
        }
        //res.json({"speech":"wo", "displayText": "Fuck Trump"});
    }
    else if (intentID =='543e157c-d9db-4282-af0f-6f07c03b5d38') {
            console.log(req.body.result);
            bestForMe.getData ( data => {
                res.json({"speech": data, "displayText": "Home"});
                console.log(data);
            })
    }

}); // end router.get(/)


// router.post('/', (req, res) => {
//     let userName = req.body.username;
//     let pass = req.body.pass;
//     if (userName && pass) {
//         token.getToken(userName, pass)
//             .then(token => {
//                 loginResponseJson.success = true;
//                 loginResponseJson.token = token;
//                 res.json(loginResponseJson);
//             })
//             .catch(error => {
//                 console.error(error);
//                 res.json(loginResponseJson);
//             });
//     } else {
//         res.send(403)
//     }
// }); //end router.post(/login)

// router.get('/protected', (req, res) => {

//     const bearer = req.headers['authorization'];

//     token.resolveToken(req.query.token)
//         .then(decoded => {
//             res.send(decoded.username);
//         })
//         .catch(() => {
//             res.send(403);
//         });
// }); //end router.get(/protected)




// Exports ------------------------------------------------------------------//

export default router;
