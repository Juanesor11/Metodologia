export const questions = [
    // Multiple Choice
    {
        id: 1,
        type: 'multiple-choice',
        question: "¿Cuál es el objetivo principal de la investigación científica según el texto?",
        options: [
            "Generar conocimiento útil o eficiente en el caso de I+D.",
            "Generar conocimiento verdadero.",
            "Proponer una hipótesis como solución a un problema.",
            "Ambas 'Generar conocimiento útil o eficiente en el caso de I+D.' y 'Generar conocimiento verdadero.'.",
        ],
        correctAnswer: "Ambas 'Generar conocimiento útil o eficiente en el caso de I+D.' y 'Generar conocimiento verdadero.'.",
        explanation: "El texto indica que el objetivo es 'generar conocimiento verdadero en el caso de la investigación científica, útil o eficiente en el caso de la I+D.'"
    },
    {
        id: 2,
        type: 'multiple-choice',
        question: "La inferencia científica se define como el razonamiento empleado para determinar:",
        options: [
            "Si la hipótesis principal de la investigación es creativa.",
            "Si la hipótesis principal de la investigación es verdadera o falsa a partir de la evidencia empírica.",
            "Las consecuencias contrastables de una hipótesis.",
            "El marco teórico de una investigación."
        ],
        correctAnswer: "Si la hipótesis principal de la investigación es verdadera o falsa a partir de la evidencia empírica.",
        explanation: "El texto define la inferencia científica como 'el razonamiento empleado para determinar si la hipótesis principal de la investigación es efectivamente verdadera o falsa a partir de la evidencia obtenida en la contrastación empírica.'"
    },
    {
        id: 3,
        type: 'multiple-choice',
        question: "¿Cuál de las siguientes afirmaciones es correcta sobre la confirmación de una hipótesis?",
        options: [
            "Es una forma de razonamiento válida.",
            "Garantiza que la hipótesis es definitivamente verdadera.",
            "Es una inferencia inductiva y, por lo tanto, contingente.",
            "Se produce cuando las consecuencias contrastables resultan falsas."
        ],
        correctAnswer: "Es una inferencia inductiva y, por lo tanto, contingente.",
        explanation: "El texto afirma que la confirmación 'siempre es contingente porque es la conclusión de una inferencia inductiva.' También menciona que es una 'falacia de afirmación del consecuente', lo que la hace inválida lógicamente."
    },
    {
        id: 4,
        type: 'multiple-choice',
        question: "La refutación de una hipótesis, desde el punto de vista lógico, es definitiva porque sigue la estructura de:",
        options: [
            "La falacia de afirmación del consecuente.",
            "El Modus Ponens.",
            "El Modus Tollens.",
            "La reducción fuerte."
        ],
        correctAnswer: "El Modus Tollens.",
        explanation: "El texto establece que 'la refutación es definitiva porque sigue la estructura del Modus Tollens.'"
    },
    {
        id: 5,
        type: 'multiple-choice',
        question: "Según el texto, ¿qué problema implícito existe en la operación de contrastación de hipótesis?",
        options: [
            "Cómo asegurar que el conocimiento sea útil.",
            "Cómo legitimar la correlación entre datos singulares e hipótesis generales.",
            "Cómo deducir las consecuencias observacionales.",
            "Cómo controlar los saltos audaces en la investigación."
        ],
        correctAnswer: "Cómo legitimar la correlación entre datos singulares e hipótesis generales.",
        explanation: "El texto señala: 'En esta operación hay un problema implícito que es el siguiente: cómo legitimar la correlación entre los datos que se expresan en enunciados singulares y las hipótesis que son enunciados generales'."
    },
    {
        id: 6,
        type: 'multiple-choice',
        question: "¿Qué se entiende por 'salto inductivo' en el contexto de la inferencia científica?",
        options: [
            "El paso de una hipótesis general a sus consecuencias contrastables.",
            "La justificación de la correlación entre datos singulares y las hipótesis generales.",
            "La deducción de conclusiones a partir de premisas verdaderas.",
            "El control de las hipótesis mediante la experimentación."
        ],
        correctAnswer: "La justificación de la correlación entre datos singulares y las hipótesis generales.",
        explanation: "El texto menciona: 'En consecuencia, se trata de justificar el salto inductivo que hay entre los resultados de la contrastación y las hipótesis.'"
    },
    {
        id: 7,
        type: 'multiple-choice',
        question: "Cuando las consecuencias contrastables de una hipótesis resultan falsas, la inferencia científica lleva a:",
        options: [
            "La confirmación de la hipótesis.",
            "La refutación de la hipótesis.",
            "La necesidad de buscar más evidencia empírica.",
            "La revisión del marco teórico únicamente."
        ],
        correctAnswer: "La refutación de la hipótesis.",
        explanation: "El texto describe que cuando las consecuencias contrastables resultan falsas (-CC), la inferencia toma la forma que lleva a la refutación de la hipótesis (-H)."
    },
    {
        id: 8,
        type: 'multiple-choice',
        question: "¿Cuál es la principal ventaja de las inferencias deductivas?",
        options: [
            "Amplían el conocimiento al referirse a hechos contingentes.",
            "Garantizan la verdad de las conclusiones si las premisas son verdaderas.",
            "Permiten el 'salto inductivo' necesario en la investigación fáctica.",
            "Son el procedimiento principal para la confirmación de hipótesis."
        ],
        correctAnswer: "Garantizan la verdad de las conclusiones si las premisas son verdaderas.",
        explanation: "El texto afirma: 'Se puede decir que la ventaja de las inferencias deductivas es que garantiza la verdad de las conclusiones.'"
    },
    {
        id: 9,
        type: 'multiple-choice',
        question: "Según Bunge, ¿qué caracteriza la actitud científica respecto a los 'saltos' en la investigación?",
        options: [
            "Prohibirlos completamente para evitar errores.",
            "Controlarlos mediante procedimientos rigurosos.",
            "Ignorarlos, ya que son parte inevitable del proceso creativo.",
            "Aceptarlos sin cuestionamiento si llevan a conclusiones audaces."
        ],
        correctAnswer: "Controlarlos mediante procedimientos rigurosos.",
        explanation: "Bunge afirma que 'lo propio de la actitud científica no es prohibir estos saltos, sino controlarlos.'"
    },
    {
        id: 10,
        type: 'multiple-choice',
        question: "¿Qué papel juega la inferencia inductiva en la redacción del ítem 'Discusión' de un informe final de investigación?",
        options: [
            "Carecería de sentido sin ella, ya que relaciona el conocimiento inicial con los resultados.",
            "Es irrelevante, ya que la discusión se basa en inferencias deductivas.",
            "Solo se utiliza para sintetizar las conclusiones.",
            "Se limita a la presentación de los datos empíricos."
        ],
        correctAnswer: "Carecería de sentido sin ella, ya que relaciona el conocimiento inicial con los resultados.",
        explanation: "El texto indica: 'En particular la redacción del ítem Discusión carecería de sentido si allí no se pusiese en relación el conocimiento que fue punto de partida, sus derivaciones y los resultados obtenidos'."
    },
    {
        id: 11,
        type: 'multiple-choice',
        question: "¿Cuál de las siguientes afirmaciones describe mejor el 'aprendizaje supervisado'?",
        options: [
            "Busca descubrir información y estructura implícita en los datos sin ninguna guía externa.",
            "Modela un proceso particular subyacente a los datos, aprendiendo una función a partir de ejemplos.",
            "Se enfoca en la recolección de datos sin hipótesis previas.",
            "Es sinónimo de estadística descriptiva."
        ],
        correctAnswer: "Modela un proceso particular subyacente a los datos, aprendiendo una función a partir de ejemplos.",
        explanation: "El texto de 'Clasificación_en_R.pdf' define el aprendizaje supervisado como: 'Estamos interesados en modelar un proceso particular subyacente a los datos; para ello, aprenderemos (o estimamos) una función que no conocemos, pero de la cual tenemos ejemplos.'"
    },
    {
        id: 12,
        type: 'multiple-choice',
        question: "En el contexto de la clasificación, ¿cuál es la principal diferencia entre la regresión lineal y la regresión logística?",
        options: [
            "La regresión lineal asume una variable respuesta cualitativa, mientras que la logística asume una cuantitativa.",
            "La regresión logística modela directamente la variable respuesta Y, mientras que la lineal modela P(Y=1|X).",
            "La regresión lineal se usa para variables respuesta cuantitativas, y la logística para variables respuesta cualitativas.",
            "La regresión logística utiliza mínimos cuadrados para estimar coeficientes, a diferencia de la lineal."
        ],
        correctAnswer: "La regresión lineal se usa para variables respuesta cuantitativas, y la logística para variables respuesta cualitativas.",
        explanation: "El texto de 'Clasificación_en_R.pdf' indica: 'La regresión lineal asume que la variable respuesta Y es cuantitativa. Pero muchas veces la variable respuesta es cualitativa. En tales casos, determinar a qué clase pertenece una observación se conoce como clasificación... REGRESIÓN LOGISTICA Sea Y una variable respuesta cualitativa que puede tomar dos valores.'"
    },
    {
        id: 13,
        type: 'multiple-choice',
        question: "Según el texto, ¿cuál es una de las virtudes de la sistematicidad en la ciencia?",
        options: [
            "Permite amontonar generalizaciones aisladas sin criterio crítico.",
            "Hace que una proposición factual adquiera pleno sentido dentro de un contexto y sus relaciones lógicas.",
            "Reduce la necesidad de contrastabilidad de las hipótesis.",
            "Fomenta la acumulación de datos sin elaboración teórica."
        ],
        correctAnswer: "Hace que una proposición factual adquiera pleno sentido dentro de un contexto y sus relaciones lógicas.",
        explanation: "El texto de 'Teoría - M.Bunge - LIC - Cap7. (selección).pdf' menciona: 'La sistematicidad tiene, entre otras, las siguientes virtudes: (i) una proposición factual puede adquirir pleno sentido sólo dentro de un contexto y por virtud de sus relaciones lógicas con otros elementos de dicho contexto'."
    },
    {
        id: 14,
        type: 'multiple-choice',
        question: "¿Qué tipo de variable es 'grado de infección'?",
        options: [
            "Cualitativa Nominal",
            "Cuantitativa Discreta",
            "Cualitativa Ordinal",
            "Cuantitativa Continua"
        ],
        correctAnswer: "Cualitativa Ordinal",
        explanation: "El texto de 'Estadistica_descriptiva.pdf' clasifica las variables cualitativas ordinales como aquellas que 'no se pueden asociar naturalmente a un número' pero tienen un orden, y da 'grado de infección' como ejemplo."
    },
    {
        id: 15,
        type: 'multiple-choice',
        question: "¿Cuál de los siguientes estadísticos de tendencia central es robusto frente a valores extremos?",
        options: [
            "Media",
            "Varianza",
            "Mediana",
            "Desviación estándar"
        ],
        correctAnswer: "Mediana",
        explanation: "El texto de 'Estadistica_descriptiva.pdf' afirma sobre la mediana: 'Es robusto como estimador' en contraste con la media que 'No es robusto frente a valores extremos.'"
    },
    {
        id: 16,
        type: 'multiple-choice',
        question: "En el Análisis Discriminante Lineal (LDA), ¿qué asunción se hace sobre la función de densidad f_k(x) para una observación que viene de la k-ésima clase?",
        options: [
            "Es una distribución de Poisson.",
            "Es una normal Gaussiana.",
            "Es una distribución exponencial.",
            "No se hace ninguna asunción específica sobre su distribución."
        ],
        correctAnswer: "Es una normal Gaussiana.",
        explanation: "El texto de 'Clasificación_en_R.pdf' establece: 'LDA asume que la es una normal Gaussiana'."
    },
    {
        id: 17,
        type: 'multiple-choice',
        question: "¿Cuál es el propósito principal de la contrastación en la investigación científica?",
        options: [
            "Generar nuevas hipótesis.",
            "Recolectar datos empíricos sin interpretación.",
            "Generar la prueba empírica para decidir si la hipótesis se corresponde con la realidad.",
            "Desarrollar modelos teóricos sin necesidad de validación."
        ],
        correctAnswer: "Generar la prueba empírica para decidir si la hipótesis se corresponde con la realidad.",
        explanation: "El texto de 'INFERENCIA CIENTÍFICA.pdf' dice: 'Esa es la finalidad de la contrastación: generar la prueba empírica que permita decidir... si la hipótesis se corresponde con la realidad a la que se refiere.'"
    },
    {
        id: 18,
        type: 'multiple-choice',
        question: "Según el texto, ¿por qué la ciencia fáctica no puede justificar sus inferencias si se atiene puramente a procedimientos deductivos?",
        options: [
            "Porque sus inferencias son lógicamente inválidas.",
            "Porque sería estéril y no incrementaría el conocimiento.",
            "Porque las hipótesis auxiliares siempre son falsas.",
            "Porque solo las ciencias formales usan la deducción."
        ],
        correctAnswer: "Porque sería estéril y no incrementaría el conocimiento.",
        explanation: "El texto de 'Inferencia_científica.pdf' concluye: 'La ciencia fáctica si se atiene a procedimientos puramente deductivos sería estéril'. El archivo 'INFERENCIA CIENTÍFICA.pdf' añade que las inferencias deductivas 'no incrementan el conocimiento ya que esas conclusiones sólo explicitan el contenido de las premisas.'"
    },
    {
        id: 19,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre el aprendizaje supervisado y no supervisado:",
        options: [
            "El aprendizaje no supervisado busca modelar un proceso particular subyacente a los datos a partir de ejemplos.",
            "El aprendizaje supervisado busca descubrir información y estructura implícita en los datos sin ninguna guía externa.",
            "El aprendizaje supervisado se basa en ejemplos para aprender una función desconocida.",
            "Ambos tipos de aprendizaje se centran en la recolección de datos sin hipótesis previas."
        ],
        correctAnswer: "El aprendizaje supervisado se basa en ejemplos para aprender una función desconocida.",
        explanation: "El texto de 'Clasificación_en_R.pdf' define el aprendizaje supervisado como el proceso de 'aprenderemos (o estimamos) una función que no conocemos, pero de la cual tenemos ejemplos.' Las otras opciones son incorrectas según las definiciones proporcionadas."
    },
    {
        id: 20,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre la Regresión Logística:",
        options: [
            "Modela la probabilidad condicional P(Y=1|X) en lugar de la respuesta Y directamente.",
            "Utiliza variables dummy (0 y 1) para representar las clases de la variable respuesta cualitativa.",
            "Estima sus coeficientes utilizando el método de mínimos cuadrados.",
            "La función log-odds (logit) está definida entre -∞ y +∞."
        ],
        correctAnswer: "Estima sus coeficientes utilizando el método de mínimos cuadrados.",
        explanation: "El texto de 'Clasificación_en_R.pdf' afirma: 'Para estimar los coeficientes y no se usa regresión lineal sino el método de máxima verosimilitud'."
    },
    {
        id: 21,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre las teorías científicas según Bunge:",
        options: [
            "La actividad científica más importante se centra en la recolección de datos y clasificaciones.",
            "Las teorías factuales son reconstrucciones completas e icónicas de sistemas reales.",
            "Las teorías científicas son parciales y aproximadas, no perfectas.",
            "La teorización debe retrasarse hasta tener una gran masa de observaciones."
        ],
        correctAnswer: "Las teorías científicas son parciales y aproximadas, no perfectas.",
        explanation: "El texto de 'Teoría - M.Bunge - LIC - Cap7. (selección).pdf' establece: 'Todas las teorías científicas son (i) parciales, en el sentido de que tratan sólo algunos aspectos de sus correlatos, y (ii) aproximadas, en el sentido de que no están libres de errores. La teoría científica perfecta (completa y enteramente precisa) no existe ni existirá nunca.'"
    },
    {
        id: 22,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre los tipos de variables:",
        options: [
            "El 'peso' es una variable cuantitativa continua.",
            "La 'cantidad de frutos por planta' es una variable cuantitativa discreta.",
            "El 'color' es una variable cualitativa ordinal.",
            "El 'estadio' (como en una enfermedad) es una variable cualitativa nominal."
        ],
        correctAnswer: "El 'color' es una variable cualitativa ordinal.",
        explanation: "El texto de 'Estadistica_descriptiva.pdf' clasifica el 'color' como una variable 'Cualitativa Nominal', no ordinal, ya que no tiene un orden inherente."
    },
    {
        id: 23,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre la inferencia científica:",
        options: [
            "La confirmación de una hipótesis es lógicamente válida y garantiza su verdad",
            "La refutación de una hipótesis es lógicamente válida y definitiva.",
            "La ciencia fáctica puede justificar sus inferencias puramente mediante la deducción.",
            "Una hipótesis falsa no puede predecir consecuencias verdaderas."
        ],
        correctAnswer: "La refutación de una hipótesis es lógicamente válida y definitiva.",
        explanation: "El texto de 'INFERENCIA CIENTÍFICA.pdf' y 'Inferencia_científica.pdf' explica que la refutación sigue la estructura del Modus Tollens, que es una forma de razonamiento válida, y que es 'definitiva' en contraste con la confirmación."
    },
    {
        id: 24,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre el Análisis Discriminante Lineal (LDA) y Cuadrático (QDA):",
        options: [
            "LDA asume que la función de densidad f_k(x) es una normal Gaussiana.",
            "QDA asume que cada clase sigue una distribución Gaussiana, teniendo cada una su propia matriz de covarianza.",
            "LDA es preferible a la extensión de regresión logística para más de dos clases en la práctica.",
            "LDA y QDA no utilizan el teorema de Bayes para la clasificación."
        ],
        correctAnswer: "LDA y QDA no utilizan el teorema de Bayes para la clasificación.",
        explanation: "El texto de 'Clasificación_en_R.pdf' indica explícitamente: 'LDA usa el teorema de Bayes para la clasificación de las distintas clases.' Por extensión, QDA, siendo una variante, también se basa en principios bayesianos."
    },
    {
        id: 25,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre el sesgo inductivo:",
        options: [
            "El sesgo inductivo es un conjunto de afirmaciones que permite deducir el valor de la clasificación de una instancia, determinando los tipos de funciones que un algoritmo puede aprender.",
            "El sesgo inductivo se refiere únicamente a los errores que un algoritmo comete al clasificar nuevas instancias.",
            "Un algoritmo con un sesgo inductivo alto es siempre preferible, ya que garantiza una mayor precisión.",
            "El sesgo inductivo es un concepto exclusivo del aprendizaje no supervisado."
        ],
        correctAnswer: "El sesgo inductivo es un conjunto de afirmaciones que permite deducir el valor de la clasificación de una instancia, determinando los tipos de funciones que un algoritmo puede aprender.",
        explanation: "El texto de 'Clasificación_en_R.pdf' define el sesgo inductivo como 'cualquier conjunto mínimo de afirmaciones B tal que para cualquier función objetivo y los ejemplos de entrenamiento de D, se puede deducir el valor'. Y añade: 'El sesgo inductivo determina los tipos de funciones que el algoritmo puede aprender y los tipos de errores que se espera que cometa'."
    },
    {
        id: 26,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre las teorías científicas y la acumulación de datos:",
        options: [
            "La acumulación de datos al azar, sin un contexto teórico, es la forma más eficiente de progreso científico.",
            "Las teorías son indispensables para interpretar datos y sugerir la búsqueda de nueva información.",
            "La teorización prematura es siempre estéril y debe evitarse a toda costa.",
            "Un gran número de datos sin estructurar facilita la construcción de modelos sencillos."
        ],
        correctAnswer: "Las teorías son indispensables para interpretar datos y sugerir la búsqueda de nueva información.",
        explanation: "El texto de 'Teoría - M.Bunge - LIC - Cap7. (selección).pdf' afirma: 'No se puede saber si un dato es relevante si no se es capaz de interpretarlo; y la interpretación de datos requiere el uso de teorías. Además, sólo las teorías pueden sugerir la búsqueda de información no suministrada espontáneamente por los sentidos'."
    },
    {
        id: 27,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre las métricas de dispersión en estadística descriptiva:",
        options: [
            "La varianza es el promedio de las desviaciones al cuadrado de cada dato con respecto a la media.",
            "El desvío estándar tiene las mismas unidades que la variable original.",
            "El coeficiente de variación no tiene unidades y se utiliza para comparar variabilidad entre diferentes conjuntos de datos.",
            "Un mayor desvío estándar indica una menor variabilidad de los datos."
        ],
        correctAnswer: "Un mayor desvío estándar indica una menor variabilidad de los datos.",
        explanation: "El texto de 'Estadistica_descriptiva.pdf' dice: 'A mayor variabilidad, mayor desvío estándar'. Por lo tanto, un mayor desvío estándar indica una mayor variabilidad."
    },
    {
        id: 28,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre el sobreajuste (overfitting) en modelos de clasificación:",
        options: [
            "Un modelo sobreajustado tiene un buen rendimiento tanto en el conjunto de entrenamiento como en el de prueba.",
            "El sobreajuste ocurre cuando el modelo aprende demasiado bien el ruido y los detalles específicos del conjunto de entrenamiento, lo que reduce su capacidad de generalización a nuevos datos.",
            "El sobreajuste es un problema común en modelos con poca complejidad o pocos parámetros.",
            "La solución al sobreajuste es siempre aumentar la complejidad del modelo."
        ],
        correctAnswer: "El sobreajuste ocurre cuando el modelo aprende demasiado bien el ruido y los detalles específicos del conjunto de entrenamiento, lo que reduce su capacidad de generalización a nuevos datos.",
        explanation: "Aunque el término 'overfitting' no está explícitamente definido en los documentos proporcionados, es un concepto fundamental en el aprendizaje automático que se infiere de la discusión sobre la generalización y la capacidad de los modelos para aprender de los datos. Esta opción describe correctamente el fenómeno del sobreajuste, donde el modelo se ajusta demasiado a los datos de entrenamiento, perdiendo la capacidad de predecir bien en datos no vistos."
    },
    {
        id: 29,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre la relación entre confirmación y refutación de hipótesis:",
        options: [
            "La confirmación de una hipótesis, aunque se base en muchos casos favorables, nunca es una prueba definitiva.",
            "La refutación de una hipótesis es lógicamente definitiva debido a la estructura del Modus Tollens.",
            "La asimetría entre confirmación y refutación implica que un solo caso refutatorio puede cuestionar severamente una hipótesis.",
            "La confirmación y la refutación son ambas inferencias deductivas válidas"
        ],
        correctAnswer: "La confirmación y la refutación son ambas inferencias deductivas válidas",
        explanation: "El texto de 'INFERENCIA CIENTÍFICA.pdf' establece claramente que la confirmación de una hipótesis es una 'forma inválida llamada falacia de afirmación del consecuente', mientras que la refutación es una 'forma válida' (Modus Tollens). Por lo tanto, no ambas son deductivas válidas."
    },
    {
        id: 30,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre la utilidad de la estadística:",
        options: [
            "La estadística descriptiva se utiliza principalmente para probar hipótesis formuladas sobre una población.",
            "La estadística inferencial se enfoca en describir un conjunto de hipótesis y datos.",
            "La estadística sirve para estimar parámetros poblacionales y construir modelos estadísticos para predicciones.",
            "La estadística sólo es útil para la recolección de datos, no para su interpretación."
        ],
        correctAnswer: "La estadística sirve para estimar parámetros poblacionales y construir modelos estadísticos para predicciones.",
        explanation: "El texto de 'Estadistica_descriptiva.pdf' lista entre los usos de la estadística: 'Para estimar parámetros poblacionales' y 'Para construir modelos estadísticos y efectuar predicciones: Estadística inferencial'. Las opciones a y b confunden los roles de la estadística descriptiva e inferencial."
    },
    {
        id: 31,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre la generalización en modelos de aprendizaje automático:",
        options: [
            "La generalización se refiere a la capacidad de un modelo para realizar predicciones precisas sobre datos nuevos y no vistos.",
            "Un modelo con buena generalización ha aprendido los patrones subyacentes en los datos de entrenamiento sin memorizar el ruido.",
            "El overfitting (sobreajuste) es un problema que mejora la capacidad de generalización del modelo.",
            "El underfitting (subajuste) ocurre cuando el modelo es demasiado simple para capturar la complejidad de los datos, lo que resulta en una mala generalización."
        ],
        correctAnswer: "El overfitting (sobreajuste) es un problema que mejora la capacidad de generalización del modelo.",
        explanation: "El overfitting es precisamente lo contrario; reduce la capacidad de generalización del modelo porque el modelo se ajusta demasiado a los datos de entrenamiento, incluyendo el ruido, y no se desempeña bien en datos nuevos."
    },
    {
        id: 32,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre las métricas de evaluación de modelos de clasificación:",
        options: [
            "La Precisión mide la proporción de verdaderos positivos que fueron correctamente identificados por el modelo.",
            "El Recall (Sensibilidad) mide la proporción de predicciones positivas correctas entre todas las predicciones positivas realizadas por el modelo.",
            "La Accuracy (Exactitud) mide la proporción de todas las predicciones correctas (tanto positivas como negativas) sobre el total de observaciones.",
            "Un modelo con alta Precisión siempre tendrá un alto Recall."
        ],
        correctAnswer: "La Accuracy (Exactitud) mide la proporción de todas las predicciones correctas (tanto positivas como negativas) sobre el total de observaciones.",
        explanation: "Esta es la definición estándar de Accuracy."
    },
    {
        id: 33,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre el underfitting (subajuste):",
        options: [
            "Un modelo subajustado tiene un rendimiento pobre tanto en el conjunto de entrenamiento como en el conjunto de prueba.",
            "El underfitting suele ocurrir cuando el modelo es demasiado complejo o tiene demasiados parámetros.",
            "Una posible solución al underfitting es aumentar la complejidad del modelo o añadir más características relevantes.",
            "El underfitting indica que el modelo no ha capturado adecuadamente la relación entre las variables de entrada y la variable objetivo."
        ],
        correctAnswer: "El underfitting suele ocurrir cuando el modelo es demasiado complejo o tiene demasiados parámetros.",
        explanation: "El underfitting ocurre cuando el modelo es demasiado simple o no tiene suficientes parámetros para capturar la complejidad de los datos. Un modelo demasiado complejo o con demasiados parámetros es más propenso al overfitting."
    },
    {
        id: 34,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre la importancia de la teoría en la ciencia moderna:",
        options: [
            "La actividad científica más importante se centra primordialmente en la recolección de datos y la clasificación de los mismos.",
            "La observación, medición y experimento se realizan exclusivamente para recoger información y producir hipótesis sueltas.",
            "La ciencia moderna se caracteriza por la insistencia en la teoría, especialmente la empíricamente contrastable.",
            "Las explicaciones y predicciones se realizan de forma independiente de las teorías."
        ],
        correctAnswer: "La ciencia moderna se caracteriza por la insistencia en la teoría, especialmente la empíricamente contrastable.",
        explanation: "Bunge afirma: 'lo que caracteriza la ciencia moderna es la insistencia en la teoría -en la teoría empíricamente contrastable, desde luego- y no el interés primordial por la experiencia en bruto.'"
    },
    {
        id: 35,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre el estadio semi-empírico de una ciencia:",
        options: [
            "En este estadio, las hipótesis son aisladas y carecen de unidad lógica.",
            "La contrastación empírica de una hipótesis en este estadio puede dejar sin afectar a las demás.",
            "Las ideas de una ciencia en este estadio se enriquecen y controlan mutuamente.",
            "Se compara con un 'manojo de hipótesis sin coordinar' o un 'acúmulo de protoplasmas sin sistema nervioso'."
        ],
        correctAnswer: "Las ideas de una ciencia en este estadio se enriquecen y controlan mutuamente.",
        explanation: "Bunge dice lo contrario: 'mientras se encuentran en el estadio semi-empírico -preteorético-, las ideas de una ciencia no se enriquecen ni controlan las unas a las otras.'"
    },
    {
        id: 36,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre la definición de una teoría científica según Bunge:",
        options: [
            "Una teoría científica es cualquier conjunto de hipótesis, sin necesidad de una relación de deducibilidad entre ellas.",
            "Una teoría científica es un sistema de hipótesis que refiere a un determinado tema factual, donde cada miembro es un supuesto inicial o una consecuencia lógica de supuestos iniciales.",
            "El término 'teoría' es sinónimo de 'ley' o 'hipótesis' en la metaciencia contemporánea.",
            "Las teorías axiomáticas no contienen supuestos iniciales, solo consecuencias lógicas."
        ],
        correctAnswer: "Una teoría científica es un sistema de hipótesis que refiere a un determinado tema factual, donde cada miembro es un supuesto inicial o una consecuencia lógica de supuestos iniciales.",
        explanation: "Esta es la definición provisional que Bunge adopta: 'un conjunto de hipótesis científicas es una teoría científica si y sólo si refiere a un determinado tema factual y cada miembro del conjunto es o bien un supuesto inicial (axioma, supuesto subsidiario o dato) o bien una consecuencia lógica de uno o más supuestos iniciales.'"
    },
    {
        id: 37,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre las virtudes de la sistematicidad (teorización):",
        options: [
            "La teorización hace más precisa la significación de las hipótesis y refuerza su contrastabilidad.",
            "Una proposición factual puede adquirir pleno sentido solo dentro de un contexto teórico.",
            "La sistematicidad promueve la acumulación de datos sueltos sin necesidad de coordinación.",
            "Las teorías explican hipótesis subsumiéndolas bajo supuestos más fuertes."
        ],
        correctAnswer: "La sistematicidad promueve la acumulación de datos sueltos sin necesidad de coordinación.",
        explanation: "Bunge argumenta que el progreso de la ciencia 'no consiste en amontonar sin criterio crítico generalizaciones aisladas, y aún menos datos sueltos.' La sistematicidad busca la coordinación y el contexto."
    },
    {
        id: 38,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre los objetivos de la teorización científica:",
        options: [
            "Un conjunto de conjeturas se considera una teoría científica factual si solo sistematiza el conocimiento, sin necesidad de explicación o previsión.",
            "Las teorías científicas deben ser capaces de explicar los hechos e incrementar el conocimiento derivando nuevas proposiciones.",
            "Las pseudoteorías, como el psicoanálisis, satisfacen todos los requisitos básicos de una teoría científica factual.",
            "Las 'grandes teorías científicas' se distinguen por su capacidad de resumir datos de manera exhaustiva."
        ],
        correctAnswer: "Las teorías científicas deben ser capaces de explicar los hechos e incrementar el conocimiento derivando nuevas proposiciones.",
        explanation: "Estos son dos de los desiderata básicos de la construcción de teorías científicas: '(ii) Explicar los hechos por medio de hipótesis que impliquen las proposiciones que expresan dichos hechos, (iii) Incrementar el conocimiento derivando nuevas proposiciones (por ejemplo, previsiones) de las premisas'."
    },
    {
        id: 39,
        type: 'multiple-choice',
        question: "Marca la afirmación FALSA sobre la relación entre teorías y modelos ideales:",
        options: [
            "Las teorías científicas tratan con modelos ideales que representan ciertos aspectos de los sistemas reales, no todos.",
            "Un teorizador maneja sistemas reales en todos sus detalles relevantes para construir una teoría.",
            "Las teorías factuales son abocetadas y simbólicas, no reconstrucciones completas e icónicas de sistemas reales.",
            "La correspondencia entre los modelos teóricos y sus correlatos reales es 'de sistema a sistema', no puntual."
        ],
        correctAnswer: "Un teorizador maneja sistemas reales en todos sus detalles relevantes para construir una teoría.",
        explanation: "Bunge aclara: 'el teorizador no maneja en absoluto sistemas reales, sino que crea idealizaciones de los mismos que no conservan sino algún parecido con ellos.' Las teorías se limitan a 'pocos aspectos' y 'pocas variables'."
    },
    {
        id: 40,
        type: 'multiple-choice',
        question: "Marca la afirmación VERDADERA sobre la perfección de las teorías científicas:",
        options: [
            "La teoría científica perfecta (completa y enteramente precisa) existe y es el objetivo alcanzable de la investigación.",
            "Todas las teorías científicas son parciales y aproximadas, lo que implica que no están libres de errores.",
            "Las simplificaciones en la construcción de teorías son confusiones que deben evitarse a toda costa.",
            "Si una teoría parece perfecta, significa que ha alcanzado su forma final y no necesita más perfeccionamiento."
        ],
        correctAnswer: "Todas las teorías científicas son parciales y aproximadas, lo que implica que no están libres de errores.",
        explanation: "Bunge es enfático: 'Todas las teorías científicas son (i) parciales, en el sentido de que tratan sólo algunos aspectos de sus correlatos, y (ii) aproximadas, en el sentido de que no están libres de errores. La teoría científica perfecta (completa y enteramente precisa) no existe ni existirá nunca.'"
    },

    // True/False
    {
        id: 41,
        type: 'true-false',
        question: "La inferencia deductiva, desde el punto de vista epistemológico, incrementa el conocimiento al explicitar el contenido de las premisas.",
        correctAnswer: false,
        explanation: "El texto dice: 'Sin embargo, desde el punto de vista epistemológico, no incrementan el conocimiento ya que esas conclusiones sólo explicitan el contenido de las premisas.'"
    },
    {
        id: 42,
        type: 'true-false',
        question: "La falacia de afirmación del consecuente es una forma de razonamiento válida para la confirmación de hipótesis.",
        correctAnswer: false,
        explanation: "El texto indica: 'Lo paradójico es que la primera forma de razonamiento, la que corresponde a la confirmación de la hipótesis, es una forma inválida llamada falacia de afirmación del consecuente'."
    },
    {
        id: 43,
        type: 'true-false',
        question: "La verdad de las proposiciones en la inferencia inductiva es una conjetura que se acepta por el resultado de la contrastación.",
        correctAnswer: true,
        explanation: "El texto dice: 'La verdad de estas proposiciones es una conjetura que se acepta por el resultado de la contrastación.'"
    },
    {
        id: 44,
        type: 'true-false',
        question: "El control estadístico en la investigación garantiza la verdad de la generalización obtenida a partir de datos empíricos.",
        correctAnswer: false,
        explanation: "El texto aclara que el control estadístico 'Permite cuantificar el riesgo asumido al obtener conclusiones partiendo de datos empíricos, pero no garantiza la verdad de la generalización.'"
    },
    {
        id: 45,
        type: 'true-false',
        question: "El sesgo inductivo de un modelo determina los tipos de funciones que el algoritmo puede aprender y los tipos de errores que se espera que cometa.",
        correctAnswer: true,
        explanation: "El texto de 'Clasificación_en_R.pdf' define el sesgo inductivo: 'El sesgo inductivo determina los tipos de funciones que el algoritmo puede aprender y los tipos de errores que se espera que cometa'."
    },
    {
        id: 46,
        type: 'true-false',
        question: "La regresión logística estima los coeficientes utilizando el método de mínimos cuadrados.",
        correctAnswer: false,
        explanation: "El texto de 'Clasificación_en_R.pdf' indica: 'Para estimar los coeficientes y no se usa regresión lineal sino el método de máxima verosimilitud, pues la función logística no es lineal respecto a p(x)'."
    },
    {
        id: 47,
        type: 'true-false',
        question: "Una teoría científica perfecta (completa y enteramente precisa) existe y es el objetivo final de la investigación.",
        correctAnswer: false,
        explanation: "El texto de 'Teoría - M.Bunge - LIC - Cap7. (selección).pdf' afirma: 'La teoría científica perfecta (completa y enteramente precisa) no existe ni existirá nunca.'"
    },
    {
        id: 48,
        type: 'true-false',
        question: "La inferencia inductiva, aunque lógicamente inválida, carece de valor epistemológico.",
        correctAnswer: false,
        explanation: "El texto de 'INFERENCIA CIENTÍFICA.pdf' dice: 'Pero no significa que estas inferencias carezcan de valor epistemológico. Por el contrario, amplían el conocimiento puesto que tanto las premisas como las conclusiones se refieren a hechos y, en consecuencia, su verdad es contingente.'"
    },
    {
        id: 49,
        type: 'true-false',
        question: "La precisión indica la validez de una medición, es decir, si se acerca en promedio al verdadero valor.",
        correctAnswer: false,
        explanation: "El texto de 'Estadistica_descriptiva.pdf' define: 'Exactitud: indica la validez de una medición, i.e., si se acerca en promedio al verdadero valor. Precisión: indica la repetitibilidad de una medición, i.e., si las mediciones necesarias producen resultados similares'. La afirmación confunde precisión con exactitud."
    },
    {
        id: 50,
        type: 'true-false',
        question: "Un solo caso de refutación es suficiente para considerar falsa una hipótesis, mientras que la confirmación requiere múltiples casos favorables para ser definitiva.",
        correctAnswer: true,
        explanation: "La refutación es lógicamente definitiva porque sigue la estructura del Modus Tollens (((H → CC) y -CC) → -H), lo que significa que si las consecuencias contrastables son falsas, la hipótesis debe ser falsa. En contraste, la confirmación es una inferencia inductiva (falacia de afirmación del consecuente: (((H → CC) y CC) → H) y, por lo tanto, no garantiza la verdad de la hipótesis, sin importar cuántos casos favorables se encuentren. La verdad de la hipótesis confirmada es siempre provisional y contingente."
    },
    {
        id: 51,
        type: 'true-false',
        question: "Si una hipótesis (H) y una hipótesis auxiliar (H.A) implican una consecuencia contrastable (CC), y CC resulta ser falsa, se puede determinar formalmente si la falsedad reside en H, en H.A, o en ambas.",
        correctAnswer: false,
        explanation: "El texto explica que cuando se incluyen hipótesis auxiliares (H.A) en la derivación de las consecuencias contrastables, la refutación de (H y H.A.) → CC y la falsedad de CC (-CC)solo nos permiten concluir -(H y H.A.). Esto significa que la falsedad puede estar en la hipótesis principal (H), en alguna de las hipótesis auxiliares (H.A), o en ambas, y la lógica formal por sí sola no permite determinar la fuente exacta de la falsedad. Se requiere una revisión metodológica para identificarla."
    },
    {
        id: 52,
        type: 'true-false',
        question: "Las teorías científicas son retratos completos e icónicos de los sistemas reales, representando todos sus aspectos",
        correctAnswer: false,
        explanation: "El texto de 'Teoría - M.Bunge - LIC - Cap7. (selección).pdf' explica que las teorías científicas son 'abocetadas y simbólicas, no reconstrucciones completas e icónicas de sistemas reales'. Además, señala que son 'parciales, en el sentido de que tratan sólo algunos aspectos de sus correlatos, y aproximadas, en el sentido de que no están libres de errores'. No buscan retratar todos los aspectos de la realidad, sino idealizaciones y modelos que representan ciertos aspectos con alguna aproximación."
    },
    {
        id: 53,
        type: 'ordering',
        question: "Una vez definida la hipotesis principal de investigacion ¿Cuales son los pasos a seguir?",
        correctOrder: [
            "Inferir las consecuencias contrastables",
            "Realizar las pruebas empinicas elegidas para recolectar los datos",
            "Organizar la evidencia reunida",
            "Interpretar los resultados",
            "Sacar conclusiones sobre el valor de verdad de la hipótesis"
        ],
        explanation: ""
    }
];
