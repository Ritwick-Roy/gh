const getBackendUrl = () => {
  let url;
  switch (process.env.NODE_ENV) {
    case "production":
      url = "";
      break;
    case "development":
      url = "http://localhost:5000/graphql";
      break;
    default:
      url = "http://localhost:5000/graphql";
  }
  return url;
};

module.exports= { getBackendUrl };