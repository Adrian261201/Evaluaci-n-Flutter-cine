import 'package:flutter/material.dart';

class MovieDetailsScreen extends StatelessWidget {
  final Map<String, dynamic> movie;

  MovieDetailsScreen({required this.movie});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: movie['color'],
        title: Text(
          movie['title'],
          style: TextStyle(
            color: Colors.white, // Cambié el color del título de la appBar a blanco
          ),
        ),
      ),
      backgroundColor: Theme.of(context).scaffoldBackgroundColor, // Fondo que varía según el tema
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Título de la película
            Text(
              movie['title'],
              style: Theme.of(context).textTheme.headline6?.copyWith(
                    fontWeight: FontWeight.bold,
                    color: Colors.white, // Título en blanco
                  ),
            ),
            SizedBox(height: 10),
            // Puntuación en formato "9.5 / 10" con estrellas
            Row(
              children: [
                Text(
                  'Puntuación: ${movie['rating']} / 10',
                  style: TextStyle(
                    fontSize: 18,
                    color: Colors.white, // Puntuación en blanco
                  ),
                ),
                SizedBox(width: 8),
                Icon(
                  Icons.star,
                  color: Colors.yellow, // Estrella de color amarillo
                  size: 20,
                ),
              ],
            ),
            SizedBox(height: 20),
            // Sinopsis de la película
            Text(
              movie['synopsis'],
              style: TextStyle(
                fontSize: 16,
                color: Colors.white, // Sinopsis en blanco
              ),
            ),
          ],
        ),
      ),
    );
  }
}