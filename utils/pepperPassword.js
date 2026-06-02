const pepperPasword = async (password) => {
  const PEPPER = process.env.PASSWORD_PEPPER;

  return crypto.createHmac("sha256", PEPPER).update(password).digest("hex");
};

export default pepperPasword;
