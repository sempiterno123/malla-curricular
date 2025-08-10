
// Definición de la malla curricular con todos los ramos y sus requisitos
const curriculum = {
    1: [
        { name: 'fundamentos de la matemática', id: 'm-1' },
        { name: 'bases del desarrollo cognitivo', id: 'm-2' },
        { name: 'fundamentos de la ciencia', id: 'm-3' },
        { name: 'biología y comportamiento', id: 'm-4' },
        { name: 'psicología general', id: 'm-5' },
        { name: 'teorías y sistemas psicológicos 1', id: 'm-6' },
        { name: 'comunicación efectiva y resolución de problemas', id: 'm-7' }
    ],
    2: [
        { name: 'bases de la investigación científica', id: 's-1' },
        { name: 'sociedad, psicología y cultura', id: 's-2' },
        { name: 'ciclo vital 1', id: 's-3' },
        { name: 'introducción a la neurociencia', id: 's-4', requires: ['m-4'] },
        { name: 'teoría y sistemas psicológicos 2', id: 's-5', requires: ['m-6'] },
        { name: 'trabajo de equipo', id: 's-6' }
    ],
    3: [
        { name: 'bioestadística', id: 't-1', requires: ['s-1'] },
        { name: 'psicología general', id: 't-2' },
        { name: 'ciclo vital 2', id: 't-3', requires: ['s-3'] },
        { name: 'inteligencia y neuro cognición', id: 't-4', requires: ['s-4'] },
        { name: 'psicología del aprendizaje', id: 't-5', requires: ['s-5'] },
        { name: 'práctica de observación', id: 't-6', requires: ['s-3', 's-4', 's-5'] },
        { name: 'derechos humanos y ciudadanía', id: 't-7' }
    ],
    4: [
        { name: 'epistemología y metodología de la investigación', id: 'c-1', requires: ['t-1'] },
        { name: 'psicología de la comunicación', id: 'c-2', requires: ['m-5'] },
        { name: 'medición y evaluación psicologica 1', id: 'c-3', requires: ['t-1'] },
        { name: 'psicología de la personalidad', id: 'c-4', requires: ['s-5'] },
        { name: 'psicopatologia 1', id: 'c-5', requires: ['s-5'] },
        { name: 'práctica comunicación cliente usuario', id: 'c-6', requires: ['t-6'] },
        { name: 'optativo 1', id: 'c-7' }
    ],
    5: [
        { name: 'investigación cuantitativa', id: 'q-1', requires: ['c-1'] },
        { name: 'medición y evaluación psicologica 2', id: 'q-2', requires: ['c-3'] },
        { name: 'estrategias de evaluación cognitiva 1', id: 'q-3', requires: ['c-3', 'c-4'] },
        { name: 'psicología de la personalidad 2', id: 'q-4', requires: ['c-4'] },
        { name: 'psicopatologia 2', id: 'q-5', requires: ['c-5'] },
        { name: 'práctica de evaluación psicologica 1', id: 'q-6', requires: ['c-3', 'c-6'] },
        { name: 'desarrollo humano sostenible', id: 'q-7' }
    ],
    6: [
        { name: 'investigación cualitativa', id: 'x-1', requires: ['q-1'] },
        { name: 'psicología educacional', id: 'x-2', requires: ['q-3'] },
        { name: 'estrategias de evaluación cognitiva 2', id: 'x-3', requires: ['q-3'] },
        { name: 'estrategias de evaluación de la personalidad', id: 'x-4', requires: ['q-2', 'q-4'] },
        { name: 'psicología clínica', id: 'x-5', requires: ['q-5'] },
        { name: 'práctica de evaluación psicologica 2', id: 'x-6', requires: ['q-6'] },
        { name: 'optativo 2', id: 'x-7' }
    ],
    7: [
        { name: 'seminario de grado', id: 'p-1', requires: ['q-1', 'x-1'] },
        { name: 'intervención psicoeducativa 1', id: 'p-2', requires: ['x-6'] },
        { name: 'psicologica comunitaria', id: 'p-3', requires: ['c-2'] },
        { name: 'elaboración de proyectos', id: 'p-4', requires: ['q-1'] },
        { name: 'teorías de la psicoterapia 1', id: 'p-5', requires: ['x-5'] },
        { name: 'práctica de habilidades del psicólogo', id: 'p-6', requires: ['x-6'] },
        { name: 'optativo 3', id: 'p-7' }
    ],
    8: [
        { name: 'seminario de grado 2', id: 'o-1', requires: ['p-1'] },
        { name: 'investigación psicoeducativa 2', id: 'o-2', requires: ['p-2'] },
        { name: 'modelos de intervención psicosocial', id: 'o-3', requires: ['p-3'] },
        { name: 'psicología organizacional', id: 'o-4', requires: ['c-2'] },
        { name: 'teoría de la psicoterapia 2', id: 'o-5', requires: ['p-5'] },
        { name: 'practica de intervención 1', id: 'o-6', requires: ['p-6', 'x-5', 'p-3', 'x-2'] },
        { name: 'ética profesional', id: 'o-7' }
    ],
    9: [
        { name: 'seminario de integración disciplinar', id: 'l-1', requires: ['o-2', 'o-6', 'o-5'] },
        { name: 'tópicos emergentes', id: 'l-2', requires: ['o-1'] },
        { name: 'estrategias de promoción psicosocial', id: 'l-3', requires: ['m-5'] },
        { name: 'gestion de RRHH y desarrollo organizacional', id: 'l-4', requires: ['o-4'] },
        { name: 'práctica de intervención 2', id: 'l-5', requires: ['o-6'] }
    ],
    10: [
        { name: 'práctica profesional', id: 'z-1', requires: ['m-2', 's-1', 'm-4', 't-1', 's-3', 't-3', 'm-7', 't-7', 'q-7', 'p-4', 'q-3', 'x-3', 'x-4', 'l-3', 'o-7', 'm-3', 'm-1', 'l-4', 's-4', 't-4', 'p-2', 'o-2'] },
        { name: 'tesina', id: 'z-2' },
        { name: 'examen de título', id: 'z-3' }
    ]
};

// Variable global para almacenar los ramos aprobados
let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

// Referencias a los elementos del DOM
const curriculumGrid = document.getElementById('curriculum-grid');
const notificationContainer = document.getElementById('notification-container');

// Función para generar la malla curricular en el DOM
function generateCurriculum() {
    curriculumGrid.innerHTML = ''; // Limpiar el contenedor
    
    // Iterar sobre cada semestre
    for (const semesterNumber in curriculum) {
        const semesterData = curriculum[semesterNumber];
        
        // Crear el elemento del semestre
        const semesterDiv = document.createElement('div');
        semesterDiv.classList.add('semester');
        semesterDiv.innerHTML = `<h2>Semestre ${semesterNumber}</h2>`;

        const courseList = document.createElement('ul');
        courseList.classList.add('course-list');

        // Iterar sobre cada ramo del semestre
        semesterData.forEach(course => {
            const courseItem = document.createElement('li');
            courseItem.classList.add('course');
            courseItem.textContent = course.name;
            courseItem.dataset.id = course.id;

            // Determinar si el ramo está aprobado o bloqueado
            if (isApproved(course.id)) {
                courseItem.classList.add('approved');
            } else if (!canApprove(course.id)) {
                courseItem.classList.add('blocked');
            }
            
            // Asignar el evento de clic
            courseItem.addEventListener('click', () => handleCourseClick(course));
            courseList.appendChild(courseItem);
        });

        semesterDiv.appendChild(courseList);
        curriculumGrid.appendChild(semesterDiv);
    }
}

// Función para verificar si un ramo está aprobado
function isApproved(courseId) {
    return approvedCourses.includes(courseId);
}

// Función para verificar si un ramo puede ser aprobado (cumple requisitos)
function canApprove(courseId) {
    const course = findCourseById(courseId);
    if (!course || !course.requires) {
        return true; // No tiene requisitos
    }

    return course.requires.every(reqId => isApproved(reqId));
}

// Función para encontrar un ramo por su ID en la estructura de datos
function findCourseById(courseId) {
    for (const semesterNumber in curriculum) {
        const semesterData = curriculum[semesterNumber];
        const foundCourse = semesterData.find(course => course.id === courseId);
        if (foundCourse) {
            return foundCourse;
        }
    }
    return null;
}

// Manejador del evento de clic en un ramo
function handleCourseClick(course) {
    const courseElement = document.querySelector(`[data-id="${course.id}"]`);

    if (isApproved(course.id)) {
        return; // No hacer nada si ya está aprobado
    }

    if (canApprove(course.id)) {
        // Marcar como aprobado
        approvedCourses.push(course.id);
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
        
        showNotification('Felicidades, sabía que lo lograrías. ¡Vamos por más!', 'success');
        
        // Volver a generar la malla para actualizar los estados de todos los ramos
        generateCurriculum();
    } else {
        // Mostrar mensaje de requisitos faltantes
        const missingRequirements = course.requires.filter(reqId => !isApproved(reqId));
        const missingCourseNames = missingRequirements.map(reqId => findCourseById(reqId).name);
        
        const message = `No puedes aprobar este ramo. Debes aprobar primero: ${missingCourseNames.join(', ')}.`;
        showNotification(message, 'error');
    }
}

// Función para mostrar notificaciones
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    if (type === 'success') {
        notification.classList.add('success');
    }

    notificationContainer.appendChild(notification);
    
    // Usar un pequeño retraso para la animación de entrada
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Ocultar y eliminar la notificación después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500); // Esperar a que la transición termine
    }, 5000);
}

// Inicializar la malla al cargar la página
document.addEventListener('DOMContentLoaded', generateCurriculum);
