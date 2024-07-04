(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getAllActorsByIdMovie( idMovie: string ) {
        console.log({ idMovie });
    }

    function getBioByIdActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie{
        casts: string[] 
        description: string; 
        rating: number;
        title: string; 
    }

    function createMovie({casts, description, rating, title}: Movie) {
        console.log(casts, description, rating, title);
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Actor creado', birthdate);
        return true; 
    }
})();