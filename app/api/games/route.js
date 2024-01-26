import { NextResponse } from "next/server";
import { Game } from "../models/game.model";

export async function GET(req) {
    try {
        const games = await Game.find({ active: true }, 'gameName')
        return NextResponse.json(games)

    } catch (err) {
        return NextResponse.json({}, { status: 500 })
    }
}