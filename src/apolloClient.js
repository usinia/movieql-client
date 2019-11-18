import ApolloCilent from "apollo-boost";

const client = new ApolloCilent({
  // uri: "http://localhost:4000/"
  uri: "https://movieql.now.sh/"
});

export default client;
