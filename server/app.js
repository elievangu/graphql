//npm import
const express = require('express');
const graphqlHTTP = require('express-graphql');

//local import

const app = express()
const port = 4000
app.use('/graphql', graphqlHTTP({

  })
)

app.listen(port, () => {
  console.log(`You are listening port ${port}`)
})