import 'dart:convert';
import 'package:http/http.dart' as http;

class MovieApi {
  final String apiKey = '79e639e675dedf3a94fa585d8ba51cb8';  // Reemplaza con tu clave API

  // URL base de la API de TMDb
  final String baseUrl = 'https://www.themoviedb.org';

  // Obtener una lista de películas populares
  Future<List<Map<String, dynamic>>> getPopularMovies() async {
    final response = await http.get(
      Uri.parse('$baseUrl/movie/popular?api_key=$apiKey&language=es-ES&page=1'),
    );

    if (response.statusCode == 200) {
      // Parsear la respuesta en formato JSON
      final data = json.decode(response.body);
      List<Map<String, dynamic>> movies = [];
      for (var movie in data['results']) {
        movies.add({
          'title': movie['title'],
          'synopsis': movie['overview'],
          'rating': movie['vote_average'],
          'image': 'https://image.tmdb.org/t/p/w500${movie['poster_path']}',
          'color': movie['backdrop_path'] != null
              ? 'assets/images/default.jpg'
              : 'assets/images/Matrix.jpg',
        });
      }
      return movies;
    } else {
      throw Exception('Error al cargar las películas');
    }
  }

  // Obtener detalles de una película por ID
  Future<Map<String, dynamic>> getMovieDetails(int movieId) async {
    final response = await http.get(
      Uri.parse('$baseUrl/movie/$movieId?api_key=$apiKey&language=es-ES'),
    );

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return {
        'title': data['title'],
        'synopsis': data['overview'],
        'rating': data['vote_average'],
        'image': 'https://image.tmdb.org/t/p/w500${data['poster_path']}',
      };
    } else {
      throw Exception('Error al cargar los detalles de la película');
    }
  }
}