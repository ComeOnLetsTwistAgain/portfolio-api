/* global sails */

/**
* Mail.js
*
* @description :: Mailing Service
* @help        :: http://sailsjs.org/#!/documentation/concepts/Services
*/

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const config = sails.config.services.mail;

const transporter = nodemailer.createTransport(smtpTransport(config.transporter));

module.exports = {

	send(options, next) {
        transporter.sendMail(options, next);
    },

};