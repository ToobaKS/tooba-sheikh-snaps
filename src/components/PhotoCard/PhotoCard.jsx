import "./PhotoCard.scss"

function PhotoCard({url, alt, photographer}){
    return(
        <div className="photos__photo">
            <img className="photos__image" src={url} alt={alt}/>
            <h2 className="photos__photographer">{photographer}</h2>
        </div>
    );
}

export default PhotoCard;