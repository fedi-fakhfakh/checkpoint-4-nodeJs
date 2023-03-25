require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Import the Person model
const Person = require('./models/person');

// Create a new Person instance
const person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Burgers']
});

// Save the Person instance to the database
person.save()
  .then(data => {
    console.log('Person saved to database');
  })
  .catch(err => {
    console.error('Error saving person to database', err);
  });

const people = [
  { name: 'joe', age: 30, favoriteFoods: ['Pizza', 'Burgers'] },
  { name: 'Jane', age: 25, favoriteFoods: ['Sushi', 'Salad'] },
  { name: 'Bob', age: 40, favoriteFoods: ['Steak', 'Potatoes'] }
];

Person.create(people)
  .then(data => {
    console.log('Successfully saved people to the database!');
  })
  .catch(err => {
    console.error(err);
  });

Person.find({name:'John Doe'})
  .then(data=>console.log(data)).catch(err=>console.log(err))

  
Person.findOne({ favoriteFoods: "Pizza" })
  .then(person => {
    if (person) {
      console.log(person);
    } else {
      console.log(`No person found with favorite food `);
    }
  })
  .catch(error => {
    console.error(error);
  });

  
Person.findById("641ef8f9b94fb80404c0a44b")
  .then(person => {
    console.log(person);
  })
  .catch(err => console.error(err));

  
Person.findById("641ef8f9b94fb80404c0a44b")
  .then(person => {
    person.favoriteFoods.push('hamburger');
    person.save()
  })
  .catch(err => console.error(err));

  
Person.findOneAndUpdate({ name: 'John Doe' }, { age: 20 }, { new: true }).then((updatedPerson) => {
  console.log(updatedPerson);
})
.catch((err) => {
  console.error(err);
});


return Person.deleteMany({ name: "Mary" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
  
Person
  .find({ favoriteFoods: 'burrito' })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec().then(docs => {
    console.log(docs)
  })
  .catch(err=>console.log(err))
