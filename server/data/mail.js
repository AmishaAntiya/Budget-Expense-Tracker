const nodemailer = require('nodemailer');

const sendEmail = (email, subject, message) => {
	let transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com', // hostname
		secureConnection: false, // TLS requires secureConnection to be false
		port: 587, // port for secure SMTP
		auth: {
			user: 'bet.budget.expense.tracker@outlook.com',
			pass: 'bet123456',
		},
	});

	let mailOptions = {
		from: 'bet.budget.expense.tracker@outlook.com',
		to: email,
		subject: subject,
		html: message,
		attachments: [
			// {
			// 	filename: `${name}.pdf`,
			// 	path: path.join(__dirname, `../../src/assets/books/${name}.pdf`),
			// 	contentType: 'application/pdf',
			// },
		],
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log('Sent :' + info);
		}
	});
};
sendEmail(
	'dpmanek@gmail.com',
	'BET: User ID create',
	'Welcome to BET Family. Your new account is created'
);