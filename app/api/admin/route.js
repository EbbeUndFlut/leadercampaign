import mongoose from "mongoose";
import { Game } from "../models/game.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log('hjhjhHJHJH')
    try {
        await mongoose.connect('mongodb://leaderdb:27017/leadercampaigns')
        const spiel = new Game({
            gameName: "TestLeader",
            gameSlug: 'test-leader',
            active: true,
            campaigns: [
                {
                    campaignName: 'Germany',
                    campaignYear: 2020,
                    campaignDifficulty: 'Advanced',
                    campaignSetup: 36,
                    campaignTerrain: [1, 5, 7, 9, 11, 13, 14, 16, 17, 18],
                    campaignEvaluation: {
                        great: 29,
                        good: 20,
                        adequate: 15,
                        poor: 12,
                        dismal: 11
                    }
                }
            ],
            operations: [
                {
                    operationName: "Freedom",
                    operationDays: 5,
                    operationsSOpoints: 26,
                    tacticalSituation: "Fight for Freedom"
                }
            ]
        })

        await spiel.save()

        return NextResponse.json({})
    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }

}