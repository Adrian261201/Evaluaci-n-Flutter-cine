import 'package:flutter/material.dart';
import 'movie_details.dart';

class MovieListScreen extends StatelessWidget {
  final List<Map<String, dynamic>> movies = [
    {
      'title': 'El Señor de los Anillos: La Comunidad del Anillo',
      'synopsis': 'En este episodio de la trilogía, el joven y tímido hobbit, Frodo Bolsón, hereda un anillo. Lejos de ser una simple baratija, se trata del Anillo único, un instrumento de poder que permitiría a Sauron, el Señor Oscuro, reinar en la Tierra Media y convertir en esclavos a sus habitantes. Frodo, con la ayuda de una Compañía formada por hobbits, hombres, un mago, un enano y un elfo, tiene la misión de llevar el Anillo viajando por toda la Tierra Media hasta el Monte del Destino, lugar donde fue forjado, y destruirlo para siempre.',
      'rating': 9.5,
      'image': 'assets/images/El_senor_de_los_anillos.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFF4E342E),  // Marrón oscuro
    },
    {
      'title': 'Matrix',
      'synopsis': 'Neo es un joven pirata informático que lleva una doble vida: durante el día ejerce en una empresa de servicios informáticos, mientras que por la noche se dedica a piratear bases de datos y saltarse sistemas de alta seguridad. Su vida cambiará cuando una noche conozca a Trinity, una misteriosa joven que parece ser una leyenda en el mundo de los hackers informáticos.',
      'rating': 8.7,
      'image': 'assets/images/Matrix.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFF00FF00),  // Verde neón
    },
    {
      'title': 'La sustancia',
      'synopsis': 'Elisabeth Sparkle es una actriz cuyos mejores años de carrera ya pasaron. Tras ser despedida por un productor sexista y no poder conseguir más papeles por su edad, cae en una espiral de desesperación. Un día una empresa le ofrece una misteriosa sustancia para ser la mejor versión de sí misma.',
      'rating': 7.0,
      'image': 'assets/images/La_sustancia.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFFB71C1C),  // Rojo oscuro
    },
    {
      'title': 'Godzilla Minus One',
      'synopsis': 'El filme muestra un Japón de posguerra ya devastado se enfrenta a una nueva amenaza en forma de Godzilla, un enorme kaiju mutado. Dirigida por el especialista en ciencia ficción y fantasía Yamazaki Takashi, la película es la primera producción japonesa de la franquicia desde Shin Godzilla (2016).',
      'rating': 8.0,
      'image': 'assets/images/Minus_One.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFFB39DDB),  // Morado claro
    },
    {
      'title': 'Pinocho de Guillermo del Toro',
      'synopsis': 'El carpintero Gepetto vive completamente solo y aislado en la Italia de la década de 1930, mientras el fascismo va creciendo a su alrededor. Cansado de esta situación, decide cambiarlo él mismo y crear a un hijo de madera que llamará Pinocho. Una noche gracias a un poco de magia el muñeco de madera cobra vida y cumple todos los sueños de Gepetto de tener un pequeño hijo. Sin embargo, Pinocho no es como el carpintero espera, en vez de ser obediente y tranquilo, el niño adora la diversión y las travesuras. Pinocho está harto de no ser lo que su padre desea, así que se marcha a vivir aventuras, pero pronto se dará cuenta de que ha ido demasiado lejos.',
      'rating': 9.0,
      'image': 'assets/images/Pinocho.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFFD7CCC8),  // Café claro
    },
    {
      'title': 'Scary Movie',
      'synopsis': 'Una bella estudiante muere asesinada. Un grupo de desorientados adolescentes descubre que entre ellos hay un asesino. La heroína Cyndi Campbell y su grupo de despistados amigos se verán aterrorizados por un singular psicópata enmascarado que pretende vengarse de ellos, después de que lo atropellaran por accidente el pasado Halloween.',
      'rating': 6.5,
      'image': 'assets/images/SCARY_MOVIE.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFF2979FF),  // Azul eléctrico
    },
    {
      'title': 'La La Land: Ciudad de sueños',
      'synopsis': 'Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares. Un día sus caminos se cruzan e inmediatamente se enamoran. Los dos trabajan juntos para hacer realidad sus sueños, pero pronto se dan cuenta de que el mundo del arte pide sacrificios que ponen en peligro su relación.',
      'rating': 8.0,
      'image': 'assets/images/La_la_land.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFF5C6BC0),  // Azul morado
    },
    {
      'title': 'Entergalactic',
      'synopsis': 'La historia sigue a Jabari, un joven artista en Nueva York que intenta equilibrar su carrera creativa con su vida personal. Cuando se enamora de Meadow, su vida comienza a cambiar, pero también enfrenta desafíos relacionados con su arte y sus relaciones. La película es una experiencia visual y musical, con un enfoque en la música de Kid Cudi y en cómo el arte y el amor se cruzan.',
      'rating': 7.5,
      'image': 'assets/images/Entergalactic.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFFF50057),  // Rosado neón
    },
    {
      'title': 'El Principito (2015)',
      'synopsis': 'En esta adaptación animada del clásico de Antoine de Saint-Exupéry, una niña que lleva una vida estructurada y disciplinada se encuentra con su excéntrico vecino, un aviador retirado que le cuenta la historia del Principito, un niño que viaja por el universo y conoce a personajes que le enseñan importantes lecciones sobre la vida. La película alterna entre la narración del cuento original y la historia de la niña, explorando temas sobre la amistad, el amor y la pérdida.',
      'rating': 8.0,
      'image': 'assets/images/El_Principito.jpg',  // Asegúrate de tener la imagen
      'color': Color(0xFFF1C40F),  // Dorado claro
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: Text(
          'Películas',
          style: TextStyle(
            color: Colors.white,
            fontSize: 24,
          ),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2, // Dos columnas
            crossAxisSpacing: 8.0,
            mainAxisSpacing: 8.0,
          ),
          itemCount: movies.length,
          itemBuilder: (context, index) {
            final movie = movies[index];
            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MovieDetailsScreen(movie: movie),
                  ),
                );
              },
              child: Container(
                decoration: BoxDecoration(
                  color: movie['color'],
                  borderRadius: BorderRadius.circular(8.0),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.purple,
                      blurRadius: 5,
                      offset: Offset(2, 2),
                    ),
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Image.asset(
                        movie['image'],
                        height: 100,
                        fit: BoxFit.cover,
                      ),
                      SizedBox(height: 8),
                      Text(
                        movie['title'],
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      SizedBox(height: 4),
                      Row(
                        children: [
                          Text(
                            'Puntuación: ${movie['rating']}',
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.white, 
                            ),
                          ),
                          SizedBox(width: 8),
                          Icon(
                            Icons.star,
                            color: Colors.yellow, // Estrella amarilla
                            size: 20, // Tamaño de la estrella
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}