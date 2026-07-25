// lib/mongodb.js

import { MongoClient } from 'mongodb'

let clientPromise

function connectToDatabase() {
  if (clientPromise) return clientPromise

  const uri = process.env.MONGODB_URI

  if (!uri) {
    clientPromise = Promise.reject(new Error('Add Mongo URI to .env.local'))
    return clientPromise
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    const client = new MongoClient(uri)
    clientPromise = client.connect()
  }

  return clientPromise
}

export default connectToDatabase