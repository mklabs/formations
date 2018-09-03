

/**
 * Homepage function
 *
 * @param req Express request
 * @param res Express response
 * @param next Express next function
 */
const homepage = (req, res, next) => {
  console.log('Req:', req.params);

  const user = req.params.user || 'User';
  console.log('User', user);
  res.send(`Hello ${user}. You are on Homepage.`);
};

module.exports = {
  homepage
};
