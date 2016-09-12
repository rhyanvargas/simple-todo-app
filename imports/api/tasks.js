import { Mongo } from 'meteor/mongo';

// Creates a Mongo collection and exports it
export const Tasks = new Mongo.Collection('tasks');
