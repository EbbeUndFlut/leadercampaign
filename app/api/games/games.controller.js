import { Game } from "../models/game.model";

export async function getGames() {
    try {
        const games = Game.find({ active: true }, 'gameName gameSlug')
        return games
    }
    catch (err) {
        console.log(err)
        throw err
    }
}