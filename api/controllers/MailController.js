/*global sails MailService*/

/**
 * MailController
 *
 * @description :: Server-side logic for managing mails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const to = "antoine.souesme@gmail.com";

module.exports = {

	send(req, res) {
		const subject = req.param('subject');
		const text = req.param('text');

		if(!text || !subject) return res.send(400, 'Subject and Text are required');

		MailService.send({
			to,
			subject,
			text,
		}, (err, info) => {
			sails.log('[MAIL] email sent to ==>', to);
		});


		return res.ok('email sent');
	}

};

