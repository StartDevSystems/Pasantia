// Datos de los carros
const cars = [
    {
        id: 1,
        name: "BMW M3 Competition",
        description: "Deportivo de alta performance con motor twin-turbo",
        price: "$89,000",
        emoji: "🏎️",
        specs: {
            "Motor": "3.0L Twin-Turbo I6",
            "Potencia": "503 HP",
            "Torque": "479 lb-ft",
            "Aceleración 0-100": "3.8 segundos",
            "Velocidad Máxima": "290 km/h",
            "Transmisión": "8-Speed Automatic",
            "Tracción": "Trasera (RWD)",
            "Combustible": "Premium"
        }
    },
    {
        id: 2,
        name: "Tesla Model S Plaid",
        description: "Sedán eléctrico de lujo con tecnología avanzada",
        price: "$129,000",
        emoji: "⚡",
        specs: {
            "Motor": "Tri-Motor Eléctrico",
            "Potencia": "1,020 HP",
            "Torque": "1,424 lb-ft",
            "Aceleración 0-100": "2.1 segundos",
            "Velocidad Máxima": "322 km/h",
            "Autonomía": "628 km",
            "Tracción": "Integral (AWD)",
            "Carga": "Supercharger V3"
        }
    },
    {
        id: 3,
        name: "Porsche 911 Turbo S",
        description: "Ícono deportivo alemán con diseño atemporal",
        price: "$207,000",
        emoji: "🏁",
        specs: {
            "Motor": "3.8L Twin-Turbo Flat-6",
            "Potencia": "640 HP",
            "Torque": "590 lb-ft",
            "Aceleración 0-100": "2.6 segundos",
            "Velocidad Máxima": "330 km/h",
            "Transmisión": "8-Speed PDK",
            "Tracción": "Integral (AWD)",
            "Peso": "1,640 kg"
        }
    },
    {
        id: 4,
        name: "Mercedes-AMG GT 63 S",
        description: "Gran turismo de 4 puertas con lujo y performance",
        price: "$161,000",
        emoji: "💎",
        specs: {
            "Motor": "4.0L Twin-Turbo V8",
            "Potencia": "630 HP",
            "Torque": "664 lb-ft",
            "Aceleración 0-100": "3.2 segundos",
            "Velocidad Máxima": "315 km/h",
            "Transmisión": "9-Speed Automatic",
            "Tracción": "Integral (4MATIC+)",
            "Puertas": "4 puertas"
        }
    },
    {
        id: 5,
        name: "Audi RS6 Avant",
        description: "Station wagon deportiva con espacio y velocidad",
        price: "$116,000",
        emoji: "🚛",
        specs: {
            "Motor": "4.0L Twin-Turbo V8",
            "Potencia": "591 HP",
            "Torque": "590 lb-ft",
            "Aceleración 0-100": "3.6 segundos",
            "Velocidad Máxima": "280 km/h",
            "Transmisión": "8-Speed Tiptronic",
            "Tracción": "Quattro AWD",
            "Capacidad": "565L maletero"
        }
    },
    {
        id: 6,
        name: "Lamborghini Huracán",
        description: "Supercar italiano con diseño agresivo",
        price: "$248,000",
        emoji: "🔥",
        specs: {
            "Motor": "5.2L V10 Atmosférico",
            "Potencia": "630 HP",
            "Torque": "443 lb-ft",
            "Aceleración 0-100": "2.9 segundos",
            "Velocidad Máxima": "325 km/h",
            "Transmisión": "7-Speed Dual-Clutch",
            "Tracción": "Integral (AWD)",
            "Peso": "1,422 kg"
        }
    }
];

// Función para generar las tarjetas de carros
function generateCarCards() {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.onclick = () => showCarSpecs(car);
        
        card.innerHTML = `
            <div class="car-image">
                <span>${car.emoji}</span>
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
                <div class="price">${car.price}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Función para mostrar las especificaciones del carro
function showCarSpecs(car) {
    const modal = document.getElementById('carModal');
    const title = document.getElementById('modalTitle');
    const specsContainer = document.getElementById('modalSpecs');

    title.innerHTML = `${car.emoji} ${car.name}`;
    specsContainer.innerHTML = '';

    Object.entries(car.specs).forEach(([label, value]) => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <div class="spec-label">${label}</div>
            <div class="spec-value">${value}</div>
        `;
        specsContainer.appendChild(specItem);
    });

    modal.style.display = 'block';
}

// Función para scroll suave a la galería
function scrollToGallery() {
    document.getElementById('galeria').scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('carModal');
    modal.style.display = 'none';
}

// Función para inicializar animaciones de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar las tarjetas cuando se cargan
    setTimeout(() => {
        document.querySelectorAll('.car-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

// Función para efecto parallax
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Event listeners principales
document.addEventListener('DOMContentLoaded', function() {
    // Generar las tarjetas de carros
    generateCarCards();
    
    // Inicializar animaciones
    initScrollAnimations();
    initParallaxEffect();

    // Configurar el modal
    const modal = document.getElementById('carModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Cerrar modal con botón X
    closeBtn.onclick = closeModal;

    // Cerrar modal haciendo clic fuera del contenido
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// Funciones auxiliares para manipulación de datos
const CarManager = {
    // Obtener carro por ID
    getCarById: function(id) {
        return cars.find(car => car.id === id);
    },

    // Filtrar carros por precio máximo
    filterByMaxPrice: function(maxPrice) {
        return cars.filter(car => {
            const price = parseInt(car.price.replace(/[$,]/g, ''));
            return price <= maxPrice;
        });
    },

    // Buscar carros por nombre
    searchByName: function(searchTerm) {
        return cars.filter(car => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },

    // Obtener carros ordenados por precio
    sortByPrice: function(ascending = true) {
        return [...cars].sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[$,]/g, ''));
            const priceB = parseInt(b.price.replace(/[$,]/g, ''));
            return ascending ? priceA - priceB : priceB - priceA;
        });
    }
};

// Función para añadir nuevos carros (para futuras expansiones)
function addNewCar(carData) {
    const newId = Math.max(...cars.map(car => car.id)) + 1;
    const newCar = { ...carData, id: newId };
    cars.push(newCar);
    generateCarCards();
}

// Exportar funciones para uso global (si es necesario)
window.DriveHub = {
    cars: cars,
    generateCarCards: generateCarCards,
    showCarSpecs: showCarSpecs,
    scrollToGallery: scrollToGallery,
    CarManager: CarManager,
    addNewCar: addNewCar
};