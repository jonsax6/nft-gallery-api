const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  ipfsImageUrl: {
    type: String,
    required: true
  },
  displayImageUrl: {
    type: String
  },
  medium: {
    type: String,
    required: true
  },
  artistRoyalty: {
    type: Number,
    required: true
  },
  curatorRoyalty: {
    type: Number,
    required: true
  },
  provenance: {
    type: String,
    required: true
  },
  exhibitionHistory: {
    type: String
  },
  publishingHistory: {
    type: String
  },
  releaseDate: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  contractAddress: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Artwork', artworkSchema)
