import ApolloCilent from "apollo-boost";

const client = new ApolloCilent({
  uri: "http://localhost:4000/"
});

export default client;
