// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const text_theme = flutter_sdk.src__material__text_theme;
  const text_style = flutter_sdk.src__painting__text_style;
  const framework = flutter_sdk.src__widgets__framework;
  const binding = flutter_sdk.src__widgets__binding;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  const scaffold = flutter_sdk.src__material__scaffold;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const text = flutter_sdk.src__widgets__text;
  const progress_indicator = flutter_sdk.src__material__progress_indicator;
  const animations = flutter_sdk.src__animation__animations;
  const app_bar = flutter_sdk.src__material__app_bar;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const sliver_grid = flutter_sdk.src__rendering__sliver_grid;
  const gesture_detector = flutter_sdk.src__widgets__gesture_detector;
  const container = flutter_sdk.src__widgets__container;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const box_shadow = flutter_sdk.src__painting__box_shadow;
  const image = flutter_sdk.src__widgets__image;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const text_painter = flutter_sdk.src__painting__text_painter;
  const theme = flutter_sdk.src__material__theme;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var splash_screen = Object.create(dart.library);
  var movie_list = Object.create(dart.library);
  var movie_details = Object.create(dart.library);
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    BuildContextToMovieListScreen: () => (T.BuildContextToMovieListScreen = dart.constFn(dart.fnType(movie_list.MovieListScreen, [framework.BuildContext])))(),
    AlwaysStoppedAnimationOfColor: () => (T.AlwaysStoppedAnimationOfColor = dart.constFn(animations.AlwaysStoppedAnimation$(ui.Color)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    JSArrayOfMapOfString$dynamic: () => (T.JSArrayOfMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(T.MapOfString$dynamic())))(),
    BuildContextToMovieDetailsScreen: () => (T.BuildContextToMovieDetailsScreen = dart.constFn(dart.fnType(movie_details.MovieDetailsScreen, [framework.BuildContext])))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    JSArrayOfBoxShadow: () => (T.JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))(),
    BuildContextAndintToGestureDetector: () => (T.BuildContextAndintToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "file:///zapp/project/lib/splash_screen.dart",
    "file:///zapp/project/lib/movie_list.dart",
    "file:///zapp/project/lib/movie_details.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Reseñas de Películas", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.purple, brightness: ui.Brightness.light}), darkTheme: theme_data.ThemeData.new({primarySwatch: colors.Colors.purple, brightness: ui.Brightness.dark, scaffoldBackgroundColor: colors.Colors.black, textTheme: new text_theme.TextTheme.new({bodyText1: new text_style.TextStyle.new({color: colors.Colors.white}), bodyText2: new text_style.TextStyle.new({color: colors.Colors.white70})})}), themeMode: app.ThemeMode.system, home: new splash_screen.SplashScreen.new()});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  splash_screen.SplashScreen = class SplashScreen extends framework.StatefulWidget {
    createState() {
      return new splash_screen._SplashScreenState.new();
    }
    static ['_#new#tearOff']() {
      return new splash_screen.SplashScreen.new();
    }
  };
  (splash_screen.SplashScreen.new = function() {
    splash_screen.SplashScreen.__proto__.new.call(this);
    ;
  }).prototype = splash_screen.SplashScreen.prototype;
  dart.addTypeTests(splash_screen.SplashScreen);
  dart.addTypeCaches(splash_screen.SplashScreen);
  dart.setMethodSignature(splash_screen.SplashScreen, () => ({
    __proto__: dart.getMethods(splash_screen.SplashScreen.__proto__),
    createState: dart.fnType(splash_screen._SplashScreenState, [])
  }));
  dart.setLibraryUri(splash_screen.SplashScreen, I[1]);
  splash_screen._SplashScreenState = class _SplashScreenState extends framework.State$(splash_screen.SplashScreen) {
    initState() {
      super.initState();
      T.FutureOfNull().delayed(new core.Duration.new({seconds: 3}), dart.fn(() => {
        navigator.Navigator.pushReplacement(dart.dynamic, T.ObjectN(), this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new movie_list.MovieListScreen.new(), T.BuildContextToMovieListScreen())}));
      }, T.VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.purple, body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.movie, {size: 100, color: colors.Colors.white}), new basic.SizedBox.new({height: 20}), new text.Text.new("Reseñas de Películas", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 24, fontWeight: ui.FontWeight.bold})}), new basic.SizedBox.new({height: 20}), new progress_indicator.CircularProgressIndicator.new({valueColor: new (T.AlwaysStoppedAnimationOfColor()).new(colors.Colors.white)})])})})});
    }
    static ['_#new#tearOff']() {
      return new splash_screen._SplashScreenState.new();
    }
  };
  (splash_screen._SplashScreenState.new = function() {
    splash_screen._SplashScreenState.__proto__.new.call(this);
    ;
  }).prototype = splash_screen._SplashScreenState.prototype;
  dart.addTypeTests(splash_screen._SplashScreenState);
  dart.addTypeCaches(splash_screen._SplashScreenState);
  dart.setMethodSignature(splash_screen._SplashScreenState, () => ({
    __proto__: dart.getMethods(splash_screen._SplashScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(splash_screen._SplashScreenState, I[1]);
  var movies = dart.privateName(movie_list, "MovieListScreen.movies");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  movie_list.MovieListScreen = class MovieListScreen extends framework.StatelessWidget {
    get movies() {
      return this[movies];
    }
    set movies(value) {
      super.movies = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.purple, title: new text.Text.new("Películas", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 24})})}), body: new basic.Padding.new({padding: C[1] || CT.C1, child: new scroll_view.GridView.builder({gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 2, crossAxisSpacing: 8, mainAxisSpacing: 8}), itemCount: this.movies[$length], itemBuilder: dart.fn((context, index) => {
              let movie = this.movies[$_get](index);
              return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                  navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new movie_details.MovieDetailsScreen.new({movie: movie}), T.BuildContextToMovieDetailsScreen())}));
                }, T.VoidTovoid()), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: T.ColorN().as(movie[$_get]("color")), borderRadius: new border_radius.BorderRadius.circular(8), boxShadow: T.JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.purple, blurRadius: 5, offset: new ui.Offset.new(2, 2)})])}), child: new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new image.Image.asset(core.String.as(movie[$_get]("image")), {height: 100, fit: box_fit.BoxFit.cover}), new basic.SizedBox.new({height: 8}), new text.Text.new(core.String.as(movie[$_get]("title")), {style: new text_style.TextStyle.new({fontSize: 16, fontWeight: ui.FontWeight.bold, color: colors.Colors.white}), maxLines: 1, overflow: text_painter.TextOverflow.ellipsis}), new basic.SizedBox.new({height: 4}), new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new("Puntuación: " + dart.str(movie[$_get]("rating")), {style: new text_style.TextStyle.new({fontSize: 14, color: colors.Colors.white})}), new basic.SizedBox.new({width: 8}), new icon.Icon.new(icons.Icons.star, {color: colors.Colors.yellow, size: 20})])})])})})})});
            }, T.BuildContextAndintToGestureDetector())})})});
    }
    static ['_#new#tearOff']() {
      return new movie_list.MovieListScreen.new();
    }
  };
  (movie_list.MovieListScreen.new = function() {
    this[movies] = T.JSArrayOfMapOfString$dynamic().of([new (T.IdentityMapOfString$dynamic()).from(["title", "El Señor de los Anillos: La Comunidad del Anillo", "synopsis", "En este episodio de la trilogía, el joven y tímido hobbit, Frodo Bolsón, hereda un anillo. Lejos de ser una simple baratija, se trata del Anillo único, un instrumento de poder que permitiría a Sauron, el Señor Oscuro, reinar en la Tierra Media y convertir en esclavos a sus habitantes. Frodo, con la ayuda de una Compañía formada por hobbits, hombres, un mago, un enano y un elfo, tiene la misión de llevar el Anillo viajando por toda la Tierra Media hasta el Monte del Destino, lugar donde fue forjado, y destruirlo para siempre.", "rating", 9.5, "image", "assets/images/El_senor_de_los_anillos.jpg", "color", new ui.Color.new(4283315246)]), new (T.IdentityMapOfString$dynamic()).from(["title", "Matrix", "synopsis", "Neo es un joven pirata informático que lleva una doble vida: durante el día ejerce en una empresa de servicios informáticos, mientras que por la noche se dedica a piratear bases de datos y saltarse sistemas de alta seguridad. Su vida cambiará cuando una noche conozca a Trinity, una misteriosa joven que parece ser una leyenda en el mundo de los hackers informáticos.", "rating", 8.7, "image", "assets/images/Matrix.jpg", "color", new ui.Color.new(4278255360)]), new (T.IdentityMapOfString$dynamic()).from(["title", "La sustancia", "synopsis", "Elisabeth Sparkle es una actriz cuyos mejores años de carrera ya pasaron. Tras ser despedida por un productor sexista y no poder conseguir más papeles por su edad, cae en una espiral de desesperación. Un día una empresa le ofrece una misteriosa sustancia para ser la mejor versión de sí misma.", "rating", 7, "image", "assets/images/La_sustancia.jpg", "color", new ui.Color.new(4290190364)]), new (T.IdentityMapOfString$dynamic()).from(["title", "Godzilla Minus One", "synopsis", "El filme muestra un Japón de posguerra ya devastado se enfrenta a una nueva amenaza en forma de Godzilla, un enorme kaiju mutado. Dirigida por el especialista en ciencia ficción y fantasía Yamazaki Takashi, la película es la primera producción japonesa de la franquicia desde Shin Godzilla (2016).", "rating", 8, "image", "assets/images/Minus_One.jpg", "color", new ui.Color.new(4289961435)]), new (T.IdentityMapOfString$dynamic()).from(["title", "Pinocho de Guillermo del Toro", "synopsis", "El carpintero Gepetto vive completamente solo y aislado en la Italia de la década de 1930, mientras el fascismo va creciendo a su alrededor. Cansado de esta situación, decide cambiarlo él mismo y crear a un hijo de madera que llamará Pinocho. Una noche gracias a un poco de magia el muñeco de madera cobra vida y cumple todos los sueños de Gepetto de tener un pequeño hijo. Sin embargo, Pinocho no es como el carpintero espera, en vez de ser obediente y tranquilo, el niño adora la diversión y las travesuras. Pinocho está harto de no ser lo que su padre desea, así que se marcha a vivir aventuras, pero pronto se dará cuenta de que ha ido demasiado lejos.", "rating", 9, "image", "assets/images/Pinocho.jpg", "color", new ui.Color.new(4292332744)]), new (T.IdentityMapOfString$dynamic()).from(["title", "Scary Movie", "synopsis", "Una bella estudiante muere asesinada. Un grupo de desorientados adolescentes descubre que entre ellos hay un asesino. La heroína Cyndi Campbell y su grupo de despistados amigos se verán aterrorizados por un singular psicópata enmascarado que pretende vengarse de ellos, después de que lo atropellaran por accidente el pasado Halloween.", "rating", 6.5, "image", "assets/images/SCARY_MOVIE.jpg", "color", new ui.Color.new(4280908287)]), new (T.IdentityMapOfString$dynamic()).from(["title", "La La Land: Ciudad de sueños", "synopsis", "Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares. Un día sus caminos se cruzan e inmediatamente se enamoran. Los dos trabajan juntos para hacer realidad sus sueños, pero pronto se dan cuenta de que el mundo del arte pide sacrificios que ponen en peligro su relación.", "rating", 8, "image", "assets/images/La_la_land.jpg", "color", new ui.Color.new(4284246976)]), new (T.IdentityMapOfString$dynamic()).from(["title", "Entergalactic", "synopsis", "La historia sigue a Jabari, un joven artista en Nueva York que intenta equilibrar su carrera creativa con su vida personal. Cuando se enamora de Meadow, su vida comienza a cambiar, pero también enfrenta desafíos relacionados con su arte y sus relaciones. La película es una experiencia visual y musical, con un enfoque en la música de Kid Cudi y en cómo el arte y el amor se cruzan.", "rating", 7.5, "image", "assets/images/Entergalactic.jpg", "color", new ui.Color.new(4294246487)]), new (T.IdentityMapOfString$dynamic()).from(["title", "El Principito (2015)", "synopsis", "En esta adaptación animada del clásico de Antoine de Saint-Exupéry, una niña que lleva una vida estructurada y disciplinada se encuentra con su excéntrico vecino, un aviador retirado que le cuenta la historia del Principito, un niño que viaja por el universo y conoce a personajes que le enseñan importantes lecciones sobre la vida. La película alterna entre la narración del cuento original y la historia de la niña, explorando temas sobre la amistad, el amor y la pérdida.", "rating", 8, "image", "assets/images/El_Principito.jpg", "color", new ui.Color.new(4294034447)])]);
    movie_list.MovieListScreen.__proto__.new.call(this);
    ;
  }).prototype = movie_list.MovieListScreen.prototype;
  dart.addTypeTests(movie_list.MovieListScreen);
  dart.addTypeCaches(movie_list.MovieListScreen);
  dart.setMethodSignature(movie_list.MovieListScreen, () => ({
    __proto__: dart.getMethods(movie_list.MovieListScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(movie_list.MovieListScreen, I[2]);
  dart.setFieldSignature(movie_list.MovieListScreen, () => ({
    __proto__: dart.getFields(movie_list.MovieListScreen.__proto__),
    movies: dart.finalFieldType(core.List$(core.Map$(core.String, dart.dynamic)))
  }));
  var movie$ = dart.privateName(movie_details, "MovieDetailsScreen.movie");
  movie_details.MovieDetailsScreen = class MovieDetailsScreen extends framework.StatelessWidget {
    get movie() {
      return this[movie$];
    }
    set movie(value) {
      super.movie = value;
    }
    static ['_#new#tearOff'](opts) {
      let movie = opts && 'movie' in opts ? opts.movie : null;
      return new movie_details.MovieDetailsScreen.new({movie: movie});
    }
    build(context) {
      let t0;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: T.ColorN().as(this.movie[$_get]("color")), title: new text.Text.new(core.String.as(this.movie[$_get]("title")), {style: new text_style.TextStyle.new({color: colors.Colors.white})})}), backgroundColor: theme.Theme.of(context).scaffoldBackgroundColor, body: new basic.Padding.new({padding: C[2] || CT.C2, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(core.String.as(this.movie[$_get]("title")), {style: (t0 = theme.Theme.of(context).textTheme.headline6, t0 == null ? null : t0.copyWith({fontWeight: ui.FontWeight.bold, color: colors.Colors.white}))}), new basic.SizedBox.new({height: 10}), new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new("Puntuación: " + dart.str(this.movie[$_get]("rating")) + " / 10", {style: new text_style.TextStyle.new({fontSize: 18, color: colors.Colors.white})}), new basic.SizedBox.new({width: 8}), new icon.Icon.new(icons.Icons.star, {color: colors.Colors.yellow, size: 20})])}), new basic.SizedBox.new({height: 20}), new text.Text.new(core.String.as(this.movie[$_get]("synopsis")), {style: new text_style.TextStyle.new({fontSize: 16, color: colors.Colors.white})})])})})});
    }
  };
  (movie_details.MovieDetailsScreen.new = function(opts) {
    let movie = opts && 'movie' in opts ? opts.movie : null;
    this[movie$] = movie;
    movie_details.MovieDetailsScreen.__proto__.new.call(this);
    ;
  }).prototype = movie_details.MovieDetailsScreen.prototype;
  dart.addTypeTests(movie_details.MovieDetailsScreen);
  dart.addTypeCaches(movie_details.MovieDetailsScreen);
  dart.setMethodSignature(movie_details.MovieDetailsScreen, () => ({
    __proto__: dart.getMethods(movie_details.MovieDetailsScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(movie_details.MovieDetailsScreen, I[3]);
  dart.setFieldSignature(movie_details.MovieDetailsScreen, () => ({
    __proto__: dart.getFields(movie_details.MovieDetailsScreen.__proto__),
    movie: dart.finalFieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "file:///zapp/project/lib/splash_screen.dart": splash_screen,
    "file:///zapp/project/lib/movie_list.dart": movie_list,
    "file:///zapp/project/lib/movie_details.dart": movie_details
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/splash_screen.dart","/zapp/project/lib/movie_list.dart","/zapp/project/lib/movie_details.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    zapp__project__lib__splash_screen: splash_screen,
    zapp__project__lib__movie_list: movie_list,
    zapp__project__lib__movie_details: movie_details
  };
}));

//# sourceMappingURL=main.js.map
