export default function GameThumbnail({ game }) {
    console.log(game)
    return (
        <div className="w-96 shadow-xl card bg-base-100 image-full" >
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="justify-end card-actions">
                    <a href={'/games/' + game.gameSlug} className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div >
    )
}