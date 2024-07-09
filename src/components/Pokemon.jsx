const  Pokemon = ({props}) => {

    const pokeName = props.name;
    // const pokeImg = props.sprites.front_default;

    //Da error por estar undefined pero en los componentes des de chrome esta todo el objeto
    // en las props, no veo porque peta ):

    return (
        <div>
            <h2>Personaje Pokemon</h2>
            <p>{pokeName}</p>
            {/* <img src={pokeImg}  /> */}
        </div>
    )
}

export default Pokemon;