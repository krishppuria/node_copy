import UserModel from '../model/User.js'
import { MongoClient } from 'mongodb';

export const userRegistration = async (req, res) => {
  const { name, email, password, password_confirmation, tc } = req.body

  const user = new UserModel({
    name: name,
    email: email,
    password: password,
    tc: tc
  })
  await user.save()
  res.status(201).send({ "status": "success", "message": "Registration Success", "user": user })


}

export const GetAllUser = async (req, res) => {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  let connect = await client.connect()
  let db = connect.db('geekshop')
  let collection = db.collection('users')
  const users = await collection.find().toArray()

  users.forEach(async (user) => {
    const { _id, name, email, password, tc } = user;
    const doc = new UserModel({
      _id: _id,
      name: name,
      email: email,
      password: password,
      tc: tc
    })
    await doc.save()
  });

  res.send({ 'status': 'Success' })
}