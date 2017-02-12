module.exports.services = {
	mail: {
		transporter: {
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.USER_PASSWORD
			}
		}
	}
};