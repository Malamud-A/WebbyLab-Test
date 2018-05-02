import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = Schema({
  title: {type: String, required: true},
  releaseYear: {type: Number, required: true},
  stars: {type: Array, required: true},
},
  {versionKey: false});

const Movie = mongoose.model("Movie", MovieSchema);