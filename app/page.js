import Image from "next/image";
import GameThumbnail from "./GameThumbnail";
import { getGames } from "./api/games/games.controller";
import mongoose from 'mongoose'

await mongoose.connect('mongodb://leaderdb:27017/leadercampaigns')
let data = await getGames()
console.log('HHHHHHHH', global)
export default function Home() {
  return (
    <main >
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Leader Campaigns</h1>
            <p className="py-6">Bring your Leader games to the next Level and track your campaign</p>
            <a href="#content" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
      <div id="content" className="h-screen">
        {data &&
          data.map((item, key) => <GameThumbnail key={key} game={item} />)

        }
      </div>

    </main>
  );
}
