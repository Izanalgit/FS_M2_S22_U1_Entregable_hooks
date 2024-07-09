const  Character = ({props}) => {

    const charName = props.name;
    const charImg = props.image;

    return (
        <div>
            <h2>Personaje Rick and Morty</h2>
            <p>{charName}</p>
            <img src={charImg}  />
        </div>
    )
}

export default Character;