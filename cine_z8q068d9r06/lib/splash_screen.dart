import 'package:flutter/material.dart';
import 'movie_list.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {

  @override
  void initState() {
    super.initState();
    // Establece un retraso de 3 segundos antes de redirigir a la siguiente pantalla.
    Future.delayed(Duration(seconds: 3), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => MovieListScreen()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Icono de película
            Icon(
              Icons.movie,
              size: 100,
              color: Colors.white,
            ),
            SizedBox(height: 20),
            // Título de la aplicación
            Text(
              'Reseñas de Películas',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 20),
            // Indicador de carga (círculo)
            CircularProgressIndicator(
              valueColor: AlwaysStoppedAnimation<Color>(Colors.white), // Color del círculo
            ),
          ],
        ),
      ),
    );
  }
}