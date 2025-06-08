// Preguntas originales
const questionsSet1 = [
  {
    id: 1,
    text: '¿Cuál es la velocidad máxima permitida en zonas urbanas para vehículos livianos?',
    options: ['50 km/h', '60 km/h', '40 km/h', '70 km/h'],
    answer: '50 km/h'
  },
  {
    id: 2,
    text: '¿Qué significa una luz roja intermitente en un semáforo?',
    options: ['Ceda el paso', 'Pare', 'Siga con precaución', 'Peligro'],
    answer: 'Ceda el paso'
  },
  {
    id: 3,
    text: 'Al enfrentar una señal "PARE", ¿qué debe hacer usted?',
    options: ['Detenerse y luego continuar si no vienen vehículos', 'Disminuir la velocidad y continuar con precaución', 'Continuar si no vienen vehículos', 'Detenerse sólo si vienen vehículos'],
    answer: 'Detenerse y luego continuar si no vienen vehículos'
  },
  {
    id: 4,
    text: '¿Cuál es la distancia mínima que debe mantener con el vehículo que le precede en condiciones normales?',
    options: ['Una distancia que le permita frenar ante una emergencia (regla de los 3 segundos)', '10 metros', '5 metros', '20 metros'],
    answer: 'Una distancia que le permita frenar ante una emergencia (regla de los 3 segundos)'
  },
  {
    id: 5,
    text: '¿Está permitido el uso del teléfono celular mientras conduce?',
    options: ['Sí, si es con sistema de manos libres', 'No, en ningún caso', 'Sí, si es por pocos segundos', 'Sí, si el vehículo está detenido en un semáforo en rojo'],
    answer: 'Sí, si es con sistema de manos libres'
  },
  {
    id: 6,
    text: '¿Qué indica una línea continua blanca longitudinal en la calzada?',
    options: ['Que no se debe traspasar ni circular sobre ella', 'Que se puede adelantar con precaución', 'Que es una zona de estacionamiento permitido', 'Que es una ciclovía'],
    answer: 'Que no se debe traspasar ni circular sobre ella'
  },
  {
    id: 7,
    text: '¿Cuál es la tasa de alcoholemia máxima permitida para conductores particulares?',
    options: ['0.3 gramos por litro de sangre', '0.8 gramos por litro de sangre', '0.0 gramos por litro de sangre', '0.5 gramos por litro de sangre'],
    answer: '0.3 gramos por litro de sangre'
  },
  {
    id: 8,
    text: '¿Quién tiene preferencia de paso en una intersección no señalizada?',
    options: ['El vehículo que se aproxima por la derecha', 'El vehículo que se aproxima por la izquierda', 'El vehículo más grande', 'El vehículo que va más rápido'],
    answer: 'El vehículo que se aproxima por la derecha'
  },
  {
    id: 9,
    text: '¿Es obligatorio el uso del cinturón de seguridad para todos los ocupantes del vehículo?',
    options: ['Sí, en todos los asientos', 'No, sólo para el conductor y copiloto', 'No, sólo en carreteras', 'No, si el viaje es corto'],
    answer: 'Sí, en todos los asientos'
  },
  {
    id: 10,
    text: '¿Qué debe hacer si sufre un reventón de un neumático trasero?',
    options: ['Sujetar firmemente el volante y frenar suavemente', 'Frenar bruscamente', 'Girar el volante hacia el lado del reventón', 'Acelerar para estabilizar el vehículo'],
    answer: 'Sujetar firmemente el volante y frenar suavemente'
  },
  {
    id: 11,
    text: '¿En qué situación puede usted hacer sonar la bocina?',
    options: ['Para prevenir un accidente', 'Para apurar a otro conductor', 'Para saludar a un conocido', 'En cualquier momento'],
    answer: 'Para prevenir un accidente'
  },
  {
    id: 12,
    text: '¿Cuál es la velocidad máxima permitida en carreteras con una pista de circulación por sentido?',
    options: ['100 km/h', '120 km/h', '90 km/h', '80 km/h'],
    answer: '100 km/h'
  },
  {
    id: 13,
    text: '¿Qué luces debe llevar encendidas un vehículo durante la noche en zonas urbanas?',
    options: ['Luces bajas', 'Luces altas', 'Luces de estacionamiento', 'Neblineros'],
    answer: 'Luces bajas'
  },
  {
    id: 14,
    text: '¿Qué significa una señal de tránsito con forma triangular y borde rojo?',
    options: ['Advertencia de peligro', 'Reglamentaria', 'Informativa', 'Prohibición'],
    answer: 'Advertencia de peligro'
  },
  {
    id: 15,
    text: 'Al estacionar en una pendiente descendente, ¿hacia dónde deben quedar apuntando las ruedas delanteras?',
    options: ['Hacia la cuneta o acera', 'Hacia el centro de la calzada', 'Rectas', 'No importa la dirección'],
    answer: 'Hacia la cuneta o acera'
  },
  {
    id: 16,
    text: '¿Cuál es el documento que acredita que un vehículo está autorizado para circular?',
    options: ['Permiso de circulación', 'Licencia de conducir', 'Seguro obligatorio', 'Revisión técnica'],
    answer: 'Permiso de circulación'
  },
  {
    id: 17,
    text: '¿Qué debe hacer si se aproxima a un cruce ferroviario y la barrera está abajo?',
    options: ['Detenerse y esperar a que suba la barrera y se apaguen las luces rojas', 'Cruzar con precaución si no se ve el tren', 'Tocar la bocina y cruzar', 'Esquivar la barrera y cruzar'],
    answer: 'Detenerse y esperar a que suba la barrera y se apaguen las luces rojas'
  },
  {
    id: 18,
    text: '¿Está permitido adelantar en un paso de peatones?',
    options: ['No, nunca', 'Sí, si no hay peatones cruzando', 'Sí, si se hace con precaución', 'Sí, si el vehículo de adelante va muy lento'],
    answer: 'No, nunca'
  },
  {
    id: 19,
    text: '¿Qué indica la luz amarilla de un semáforo?',
    options: ['Prevención, indica que la luz cambiará a rojo', 'Pasar con precaución', 'Detenerse si es posible hacerlo con seguridad', 'Acelerar para alcanzar a cruzar'],
    answer: 'Prevención, indica que la luz cambiará a rojo'
  },
  {
    id: 20,
    text: '¿Cuál es la principal causa de los accidentes de tránsito?',
    options: ['Error humano', 'Fallas mecánicas', 'Mal estado de las vías', 'Condiciones climáticas'],
    answer: 'Error humano'
  },
  {
    id: 21,
    text: '¿Qué es una "rotonda"?',
    options: ['Una intersección especial donde el tránsito circula en forma giratoria alrededor de una isla central', 'Un tipo de curva peligrosa', 'Un paso a desnivel', 'Una zona de descanso'],
    answer: 'Una intersección especial donde el tránsito circula en forma giratoria alrededor de una isla central'
  },
  {
    id: 22,
    text: '¿Cuándo se debe usar el chaleco reflectante?',
    options: ['Al descender del vehículo en la calzada o berma en caso de emergencia', 'Siempre que se conduzca de noche', 'Solo en carreteras', 'Cuando llueve'],
    answer: 'Al descender del vehículo en la calzada o berma en caso de emergencia'
  },
  {
    id: 23,
    text: '¿Qué significa la sigla "ABS" en un vehículo?',
    options: ['Sistema Antibloqueo de Frenos', 'Airbag System', 'Automatic Brake System', 'Advanced Braking System'],
    answer: 'Sistema Antibloqueo de Frenos'
  },
  {
    id: 24,
    text: '¿Cuál es la edad mínima para obtener la licencia de conducir Clase B?',
    options: ['18 años (o 17 con curso y autorización de los padres)', '21 años', '16 años', '20 años'],
    answer: '18 años (o 17 con curso y autorización de los padres)'
  },
  {
    id: 25,
    text: '¿Qué se debe hacer antes de cambiar de pista?',
    options: ['Señalizar, mirar por los espejos y el punto ciego, y si es seguro, cambiar de pista', 'Cambiar de pista rápidamente', 'Solo señalizar', 'Solo mirar por los espejos'],
    answer: 'Señalizar, mirar por los espejos y el punto ciego, y si es seguro, cambiar de pista'
  },
  {
    id: 26,
    text: '¿Qué es el "aquaplaning" o "hidroplaneo"?',
    options: ['La pérdida de adherencia de los neumáticos por una capa de agua en la calzada', 'Conducir sobre hielo', 'Frenar bruscamente en pavimento mojado', 'Derrapar en una curva'],
    answer: 'La pérdida de adherencia de los neumáticos por una capa de agua en la calzada'
  },
  {
    id: 27,
    text: '¿Cuál es la función del embrague en un vehículo con caja de cambios manual?',
    options: ['Conectar y desconectar la transmisión de fuerza del motor a la caja de cambios', 'Frenar el vehículo', 'Aumentar la potencia del motor', 'Dirigir el vehículo'],
    answer: 'Conectar y desconectar la transmisión de fuerza del motor a la caja de cambios'
  },
  {
    id: 28,
    text: '¿Qué indica una flecha verde en un semáforo?',
    options: ['Se puede virar en la dirección de la flecha, con precaución', 'Se debe detener', 'Se puede seguir derecho', 'Indica que el semáforo está fuera de servicio'],
    answer: 'Se puede virar en la dirección de la flecha, con precaución'
  },
  {
    id: 29,
    text: '¿Es obligatorio llevar un extintor de incendios en un vehículo particular?',
    options: ['Sí, y debe estar en buen estado y vigente', 'No, es opcional', 'Solo para vehículos de transporte de pasajeros', 'Solo para vehículos de carga'],
    answer: 'Sí, y debe estar en buen estado y vigente'
  },
  {
    id: 30,
    text: '¿Qué debe hacer si se encuentra con animales en la vía?',
    options: ['Disminuir la velocidad, estar atento y no asustarlos con la bocina o luces altas', 'Acelerar para pasar rápido', 'Tocar la bocina insistentemente', 'Encender las luces altas para espantarlos'],
    answer: 'Disminuir la velocidad, estar atento y no asustarlos con la bocina o luces altas'
  },
  {
    id: 31,
    text: '¿Cuál es la finalidad de la revisión técnica?',
    options: ['Verificar que el vehículo cumple con las normas de seguridad y emisiones', 'Verificar que el conductor tiene licencia', 'Verificar que el vehículo tiene seguro', 'Verificar que el vehículo está limpio'],
    answer: 'Verificar que el vehículo cumple con las normas de seguridad y emisiones'
  },
  {
    id: 32,
    text: '¿Qué es una "berma"?',
    options: ['Faja lateral, pavimentada o no, adyacente a la calzada de un camino', 'La línea que divide los sentidos del tránsito', 'Un cruce peatonal', 'Una zona de estacionamiento'],
    answer: 'Faja lateral, pavimentada o no, adyacente a la calzada de un camino'
  },
  {
    id: 33,
    text: '¿Qué se considera "conducción bajo la influencia del alcohol"?',
    options: ['Conducir con una tasa de alcohol entre 0.3 y 0.8 gramos por litro de sangre', 'Conducir con cualquier tasa de alcohol', 'Conducir con una tasa de alcohol superior a 0.8 gramos por litro de sangre', 'Solo si se produce un accidente'],
    answer: 'Conducir con una tasa de alcohol entre 0.3 y 0.8 gramos por litro de sangre'
  },
  {
    id: 34,
    text: '¿Qué debe hacer un conductor al ser adelantado por otro vehículo?',
    options: ['Mantener su derecha y no aumentar la velocidad', 'Aumentar la velocidad para no ser adelantado', 'Moverse a la izquierda', 'Frenar bruscamente'],
    answer: 'Mantener su derecha y no aumentar la velocidad'
  },
  {
    id: 35,
    text: '¿Cuál es la sanción por conducir sin licencia?',
    options: ['Multa y posible suspensión de la obtención de licencia', 'Solo una advertencia', 'Retiro del vehículo', 'Prisión'],
    answer: 'Multa y posible suspensión de la obtención de licencia'
  }
];

// Segundo set de 35 preguntas diferentes
const questionsSet2 = [
  {
    id: 1,
    text: '¿Qué documento es obligatorio portar siempre al conducir un vehículo?',
    options: ['Licencia de conducir', 'Manual del conductor', 'Factura del auto', 'Certificado de nacimiento'],
    answer: 'Licencia de conducir'
  },
  {
    id: 2,
    text: '¿Qué significa una señal de tránsito octogonal y roja?',
    options: ['Pare', 'Ceda el paso', 'No estacionar', 'Zona escolar'],
    answer: 'Pare'
  },
  {
    id: 3,
    text: '¿Cuál es la función del cinturón de seguridad?',
    options: ['Proteger en caso de accidente', 'Aumentar la velocidad', 'Reducir el consumo', 'Mejorar la visibilidad'],
    answer: 'Proteger en caso de accidente'
  },
  {
    id: 4,
    text: '¿Qué debe hacer si un peatón cruza por un lugar no habilitado?',
    options: ['Reducir la velocidad y estar atento', 'Ignorar y seguir', 'Tocar la bocina', 'Acelerar'],
    answer: 'Reducir la velocidad y estar atento'
  },
  {
    id: 5,
    text: '¿Qué indica una luz verde fija en un semáforo?',
    options: ['Avanzar', 'Detenerse', 'Precaución', 'Ceda el paso'],
    answer: 'Avanzar'
  },
  {
    id: 6,
    text: '¿Qué debe revisar antes de iniciar un viaje largo?',
    options: ['Estado de neumáticos', 'Color del auto', 'Radio', 'Aire acondicionado'],
    answer: 'Estado de neumáticos'
  },
  {
    id: 7,
    text: '¿Qué significa una señal azul con una "E" blanca?',
    options: ['Estacionamiento permitido', 'Escuela', 'Emergencia', 'Entrada prohibida'],
    answer: 'Estacionamiento permitido'
  },
  {
    id: 8,
    text: '¿Qué debe hacer si ve una señal de "No adelantar"?',
    options: ['No adelantar', 'Adelantar con precaución', 'Acelerar', 'Tocar la bocina'],
    answer: 'No adelantar'
  },
  {
    id: 9,
    text: '¿Cuál es la sanción por conducir bajo los efectos del alcohol?',
    options: ['Multa y suspensión de licencia', 'Premio', 'Nada', 'Descuento en seguro'],
    answer: 'Multa y suspensión de licencia'
  },
  {
    id: 10,
    text: '¿Qué debe hacer si su vehículo presenta fallas en los frenos?',
    options: ['No conducirlo', 'Acelerar', 'Ignorar la falla', 'Solo usarlo de noche'],
    answer: 'No conducirlo'
  },
  {
    id: 11,
    text: '¿Qué significa una línea amarilla discontinua en la calzada?',
    options: ['Se puede adelantar', 'Prohibido adelantar', 'Zona escolar', 'Estacionamiento'],
    answer: 'Se puede adelantar'
  },
  {
    id: 12,
    text: '¿Qué debe hacer si un carabinero le indica detenerse?',
    options: ['Detenerse de inmediato', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Detenerse de inmediato'
  },
  {
    id: 13,
    text: '¿Qué indica una señal de tránsito con un niño y una pelota?',
    options: ['Zona de juegos', 'Hospital', 'Estacionamiento', 'Pare'],
    answer: 'Zona de juegos'
  },
  {
    id: 14,
    text: '¿Qué debe hacer si ve una ambulancia con sirena encendida?',
    options: ['Ceder el paso', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Ceder el paso'
  },
  {
    id: 15,
    text: '¿Qué significa una señal de tránsito circular y azul?',
    options: ['Obligación', 'Prohibición', 'Advertencia', 'Información'],
    answer: 'Obligación'
  },
  {
    id: 16,
    text: '¿Qué debe hacer si sufre un accidente menor sin heridos?',
    options: ['Intercambiar datos y mover los vehículos', 'Dejar los autos donde están', 'Irse sin avisar', 'Esperar a la policía sin mover nada'],
    answer: 'Intercambiar datos y mover los vehículos'
  },
  {
    id: 17,
    text: '¿Qué indica una señal de tránsito con una bicicleta?',
    options: ['Ciclovía', 'Zona escolar', 'Estacionamiento', 'Hospital'],
    answer: 'Ciclovía'
  },
  {
    id: 18,
    text: '¿Qué debe hacer si ve una señal de "Curva peligrosa"?',
    options: ['Reducir la velocidad', 'Acelerar', 'Tocar la bocina', 'Ignorar'],
    answer: 'Reducir la velocidad'
  },
  {
    id: 19,
    text: '¿Qué significa una luz amarilla intermitente?',
    options: ['Precaución', 'Avanzar rápido', 'Detenerse', 'Ceda el paso'],
    answer: 'Precaución'
  },
  {
    id: 20,
    text: '¿Qué debe hacer si un neumático se pincha en carretera?',
    options: ['Detenerse en un lugar seguro', 'Seguir conduciendo', 'Acelerar', 'Tocar la bocina'],
    answer: 'Detenerse en un lugar seguro'
  },
  {
    id: 21,
    text: '¿Qué significa una señal de tránsito con una flecha curva?',
    options: ['Curva en el camino', 'Zona de estacionamiento', 'Hospital', 'Escuela'],
    answer: 'Curva en el camino'
  },
  {
    id: 22,
    text: '¿Qué debe hacer si ve una señal de "Zona escolar"?',
    options: ['Reducir la velocidad y estar atento', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Reducir la velocidad y estar atento'
  },
  {
    id: 23,
    text: '¿Qué significa una señal de tránsito con un camión tachado?',
    options: ['Prohibido el paso a camiones', 'Zona de camiones', 'Estacionamiento de camiones', 'Curva peligrosa'],
    answer: 'Prohibido el paso a camiones'
  },
  {
    id: 24,
    text: '¿Qué debe hacer si ve una señal de "Puente angosto"?',
    options: ['Reducir la velocidad y pasar con precaución', 'Acelerar', 'Tocar la bocina', 'Ignorar'],
    answer: 'Reducir la velocidad y pasar con precaución'
  },
  {
    id: 25,
    text: '¿Qué significa una señal de tránsito con una "P" tachada?',
    options: ['Prohibido estacionar', 'Estacionamiento permitido', 'Pare', 'Zona escolar'],
    answer: 'Prohibido estacionar'
  },
  {
    id: 26,
    text: '¿Qué debe hacer si ve una señal de "Animales sueltos"?',
    options: ['Reducir la velocidad y estar atento', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Reducir la velocidad y estar atento'
  },
  {
    id: 27,
    text: '¿Qué significa una señal de tránsito con una persona cruzando?',
    options: ['Paso peatonal', 'Zona escolar', 'Hospital', 'Estacionamiento'],
    answer: 'Paso peatonal'
  },
  {
    id: 28,
    text: '¿Qué debe hacer si ve una señal de "Desvío"?',
    options: ['Seguir la ruta indicada', 'Ignorar', 'Acelerar', 'Tocar la bocina'],
    answer: 'Seguir la ruta indicada'
  },
  {
    id: 29,
    text: '¿Qué significa una señal de tránsito con una "S"?',
    options: ['Zona de hospital', 'Zona escolar', 'Estacionamiento', 'Pare'],
    answer: 'Zona de hospital'
  },
  {
    id: 30,
    text: '¿Qué debe hacer si ve una señal de "Fin de autopista"?',
    options: ['Reducir la velocidad', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Reducir la velocidad'
  },
  {
    id: 31,
    text: '¿Qué significa una señal de tránsito con una flecha doble?',
    options: ['Doble sentido de circulación', 'Curva peligrosa', 'Zona escolar', 'Hospital'],
    answer: 'Doble sentido de circulación'
  },
  {
    id: 32,
    text: '¿Qué debe hacer si ve una señal de "Obras en la vía"?',
    options: ['Reducir la velocidad y estar atento', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Reducir la velocidad y estar atento'
  },
  {
    id: 33,
    text: '¿Qué significa una señal de tránsito con una "T"?',
    options: ['Intersección en T', 'Zona escolar', 'Hospital', 'Estacionamiento'],
    answer: 'Intersección en T'
  },
  {
    id: 34,
    text: '¿Qué debe hacer si ve una señal de "Ceda el paso"?',
    options: ['Ceder el paso', 'Acelerar', 'Ignorar', 'Tocar la bocina'],
    answer: 'Ceder el paso'
  },
  {
    id: 35,
    text: '¿Qué significa una señal de tránsito con una "U" tachada?',
    options: ['Prohibido virar en U', 'Zona escolar', 'Hospital', 'Estacionamiento'],
    answer: 'Prohibido virar en U'
  }
];
let questions = [];
if (localStorage.getItem('lastTestSet') === '1') {
  questions = questionsSet2;
  localStorage.setItem('lastTestSet', '2');
} else {
  questions = questionsSet1;
  localStorage.setItem('lastTestSet', '1');
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(questions);
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('test-form');
  const questionsDiv = document.getElementById('questions');
  const finalizeBtn = document.getElementById('finalize-btn');
  const resultDiv = document.getElementById('result');
  const resName = document.getElementById('res-name');
  const resScore = document.getElementById('res-score');
  const deleteBtn = document.getElementById('delete-btn');
  const showLeaderboardBtn = document.getElementById('show-leaderboard-btn');
  const leaderboardDiv = document.getElementById('leaderboard');
  const leaderboardList = document.getElementById('leaderboard-list');
  const backToResultBtn = document.getElementById('back-to-result-btn');
  const newTestBtn = document.getElementById('new-test-btn');
  const editModal = document.getElementById('edit-modal');
  const editNameInput = document.getElementById('edit-name');
  const saveEditBtn = document.getElementById('save-edit-btn');
  const cancelEditBtn = document.getElementById('cancel-edit-btn');
  
  let currentEditId = null;

  // Variables para el reloj y tiempo
  let startTime = null;
  const startTimeSpan = document.createElement('span');
  const elapsedTimeSpan = document.createElement('span');

  // Insertar en el DOM en la sección de resultados
  const resTimeInfo = document.createElement('div');
  resTimeInfo.innerHTML = `Hora de inicio: <span id="start-time"></span><br>Tiempo transcurrido: <span id="elapsed-time"></span>`;
  resultDiv.insertBefore(resTimeInfo, resultDiv.children[2]);

  // Al iniciar el test (cuando se muestra el formulario)
  function startTestClock() {
    startTime = new Date();
    document.getElementById('start-time').textContent = startTime.toLocaleTimeString();
    document.getElementById('elapsed-time').textContent = '0:00';
  }

  // Llamar al iniciar
  startTestClock();

  questions.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'question question-style';
    div.innerHTML = `
      <label>${idx + 1}. ${q.text}</label>
      <div class="options">
        ${q.options.map(o => `
          <label><input type="radio" name="q${q.id}" value="${o}"> ${o}</label>
        `).join('')}
      </div>
    `;
    questionsDiv.appendChild(div);
  });


  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    let score = 0;
    
    questions.forEach(q => {
      const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
      if (selected && selected.value === q.answer) score++;
    });

    // Calcular tiempo transcurrido
    const endTime = new Date();
    const elapsedMs = endTime - startTime;
    const minutes = Math.floor(elapsedMs / 60000);
    const seconds = Math.floor((elapsedMs % 60000) / 1000);
    document.getElementById('elapsed-time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    resName.textContent = name;
    resScore.textContent = score;
    form.classList.add('hidden');
    resultDiv.classList.remove('hidden');

  
    try {
      await fetch('http://localhost:3000/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score })
      });
    } catch (err) {
      console.error('Error guardando resultado en backend', err);
    }
  });

  
  deleteBtn.addEventListener('click', async () => {
 
    const name = resName.textContent;
    try {
      await fetch('http://localhost:3000/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
    } catch (err) {
      console.error('Error borrando resultado en backend', err);
    }

    
    form.reset();
    questions.forEach(q => document.querySelector(`input[name="q${q.id}"]`).checked = false);
    resultDiv.classList.add('hidden');
    form.classList.remove('hidden');
  });
  
  async function loadLeaderboard() {
    try {
      const response = await fetch('http://localhost:3000/results');
      const results = await response.json();

      leaderboardList.innerHTML = '';

      if (results.length === 0) {
        leaderboardList.innerHTML = '<p>No hay resultados aún.</p>';
        return;
      }

      results.forEach((result, index) => {
        const date = new Date(result.created_at).toLocaleDateString('es-CL');
        const item = document.createElement('div');
        item.className = `leaderboard-item ${index === 0 ? 'top-score' : ''}`;

        item.innerHTML = `
          <span class="rank">#${index + 1}</span>
          <span class="name" style="color: #fcb045;">${result.name}</span>
          <span class="score">${result.score}/35</span>
          <span class="date">${date}</span>
          <button class="delete-btn" onclick="deleteName(${result.id})">🗑️</button>
        `;

        leaderboardList.appendChild(item);
      });
    } catch (err) {
      console.error('Error cargando leaderboard:', err);
      leaderboardList.innerHTML = '<p>Error al cargar el leaderboard.</p>';
    }
  }

  window.deleteName = async function(id) {
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadLeaderboard();
        alert('Nombre borrado exitosamente.');
      } else {
        const error = await response.json();
        alert('Error al borrar: ' + error.error);
      }
    } catch (err) {
      console.error('Error borrando nombre:', err);
      alert('Error al borrar el nombre');
    }
  };


  showLeaderboardBtn.addEventListener('click', async () => {
    await loadLeaderboard();
    resultDiv.classList.add('hidden');
    leaderboardDiv.classList.remove('hidden');
  });


  backToResultBtn.addEventListener('click', () => {
    leaderboardDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');
  });


  newTestBtn.addEventListener('click', () => {
    form.reset();
    questions.forEach(q => document.querySelector(`input[name="q${q.id}"]`).checked = false);
    leaderboardDiv.classList.add('hidden');
    form.classList.remove('hidden');
    startTestClock();
  });

  window.editName = function(id, currentName) {
    currentEditId = id;
    editNameInput.value = currentName;
    editModal.classList.remove('hidden');
    editNameInput.focus();
  };


  saveEditBtn.addEventListener('click', async () => {
    const newName = editNameInput.value.trim();
    
    if (!newName) {
      alert('El nombre no puede estar vacío');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/update/${currentEditId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName })
      });

      if (response.ok) {
        editModal.classList.add('hidden');
        await loadLeaderboard(); 
      } else {
        const error = await response.json();
        alert('Error al actualizar: ' + error.error);
      }
    } catch (err) {
      console.error('Error actualizando nombre:', err);
      alert('Error al actualizar el nombre');
    }
  });


  cancelEditBtn.addEventListener('click', () => {
    editModal.classList.add('hidden');
    currentEditId = null;
  });


  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) {
      editModal.classList.add('hidden');
      currentEditId = null;
    }
  });


  editNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveEditBtn.click();
    }
  });

  document.getElementById('clear-leaderboard-btn').addEventListener('click', () => {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    alert('Leaderboard borrado exitosamente.');
  });
});