import 'package:flutter/material.dart';
import 'splash_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Reseñas de Películas',
      theme: ThemeData(
        primarySwatch: Colors.purple,
        brightness: Brightness.light,
      ),
      darkTheme: ThemeData(
        primarySwatch: Colors.purple,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: Colors.black, // Fondo oscuro
        textTheme: TextTheme(
          bodyText1: TextStyle(color: Colors.white), // Texto en blanco
          bodyText2: TextStyle(color: Colors.white70), // Texto gris claro
        ),
      ),
      themeMode: ThemeMode.system, // Sigue el tema del sistema
      home: SplashScreen(),
    );
  }
}