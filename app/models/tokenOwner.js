const mongoose = require('mongoose')

const tokenOwnerSchema = new mongoose.Schema(
  {
    ownerAccount: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
    contract: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('TokenOwner', tokenOwnerSchema)
