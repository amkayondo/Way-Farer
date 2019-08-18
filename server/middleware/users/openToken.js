import express from 'express';
import jwt from 'jsonwebtoken';
import createToken from '../../helpers/users/token';

const openToken = (req, res, next) => {
  const openAccess = {
    isadmin: false,
  };
  const token = createToken(openAccess);
  const urls = ('/trips' || 'trips/<:tripid>');
  if (req.url === '/trips' && req.method === 'GET'){
    console.log(req.currentUser);
  }
  next();
};
module.exports = openToken;
