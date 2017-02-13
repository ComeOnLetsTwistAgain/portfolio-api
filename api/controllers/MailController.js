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
		const name = req.param('name');
		const email = req.param('email');
		const phone = req.param('phone');
		const message = req.param('message');

		if(!name || !email || !phone || !message) return res.send(400, 'All params are required');

		const text = name + " - " + email + " - " + phone + "\n\n" + message;

		MailService.send({
			to,
			subject: 'Demande de contact antoinesouesme.fr',
			text,
		}, (err, info) => {
			if(err) return res.send(err.code, err.message);

			sails.log('[MAIL] email sent to ==>', to);
		});


		return res.ok('email sent');
	}

};

