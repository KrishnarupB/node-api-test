const { ApolloServer } = require('apollo-server');
const port = process.env.PORT || 5000;

// 1
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`
// 1
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone krish`,
    // 2
    feed: () => links,
    
  }, 
  // 3
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

//server
 // .listen(port)
 // .then (({ port }) =>
  
 // console.log (`Server is running on http://localhost:'+ ${port}));  

 //.then ( port ) = {console.log (`Server is running on http://localhost:')}; 
 
 server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );