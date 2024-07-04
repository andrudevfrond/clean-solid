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
    
    function createMovie(title: string, description: string, rating: number, casts: string[] ) {
        console.log({ title, description, rating, casts });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Actor creado');
        return true;        

    }
})();