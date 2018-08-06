# Personal Automation
This is a collection of things that i'm automating in my life, mostly using Google Cloud Functions. My goal is to bring tasks that I heavily use Zapier to to something that Ihave more control of environment wise.

## Create Trello Card (`create-card.js`)
This is a generic wrapper to create a Trello Card. Currently it's configured using environment variables:

* `idList` - The ID of the list to add the card to
* `idMembers` - The ID of the members you want to subscribe to the card
* `key` - API Key
* `token` - API token

@todo:

1. Make some logical variables to configure from POST body
