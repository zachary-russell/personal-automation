/**
 * Responds to any HTTP request.
 *
 * @param {!Object} req HTTP request context.
 * @param {!Object} res HTTP response context.
 */
exports.createTrelloCard = (req, res) => {
	var options = {
		method: 'POST',
		url: 'https://api.trello.com/1/cards',
		qs: {
			name: 'Laundry',
			idList: process.env.idList,
			idMembers: process.env.idMembers,
			keepFromSource: 'all',
			key: process.env.key,
			token: process.env.token
		}
	};


	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		res.status(200).send(body);
	});
};