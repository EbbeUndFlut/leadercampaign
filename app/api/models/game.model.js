import mongoose from "mongoose"
const tbaCampaignSchema = new mongoose.Schema({
    campaignName: {
        type: String,
        required: true
    },
    campaignYear: {
        type: Number,
        required: true
    },
    campaignDifficulty: {
        type: String,
        required: true
    },
    campaignSetup: {
        type: Number,
        required: true
    },
    campaignTerrain: {
        type: [Number]
    },
    campaignEvaluation: {
        great: Number,
        good: Number,
        adequate: Number,
        poor: Number,
        dismal: Number
    },
    campaignSpecialRules: {
        type: String
    }
})

const tbaOperations = new mongoose.Schema({
    operationName: String,
    operationDays: Number,
    operationsSOpoints: Number,
    dailySOPints: Number,
    tacticalSituation: String
})
const gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    gameSlug: String,
    active: {
        type: Boolean,
        default: false
    },
    campaigns: {
        type: [tbaCampaignSchema]
    },
    operations: {
        type: [tbaOperations]
    }

})

export const Game = mongoose.models.Game || mongoose.model('Game', gameSchema)