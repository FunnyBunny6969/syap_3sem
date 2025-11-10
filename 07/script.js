//TASK01=======================================
console.log('TASK01'); 
const person = {
    name: 'Anna',
    age: 25,
    
    greet() {
        return `Hi! My name's ${this.name}!`;
    },
    
    ageAfterYears(years) {
        return this.age + years;
    }
};

console.log(person.greet()); 
console.log(person.ageAfterYears(5)); 

//TASK02=======================================
console.log('TASK02'); 
const car_ = {
    model: 'Toyota Camry',
    year: 2022,
    
    getInfo() {
        return `Модель: ${this.model}, Год выпуска: ${this.year}`;
    }
};

console.log(car_.getInfo()); 

//TASK03=======================================
console.log('TASK03'); 
function Book(title, author) {
    this.title = title;
    this.author = author;
    
    this.getTitle = function() {
        return this.title;
    };
    
    this.getAuthor = function() {
        return this.author;
    };
}

const book1 = new Book('Война и мир', 'Лев Толстой');
const book2 = new Book('1984', 'Джордж Оруэлл');

console.log(book1.getTitle()); 
console.log(book1.getAuthor()); 
console.log(book2.getTitle()); 
console.log(book2.getAuthor()); 

//TASK04=======================================
console.log('TASK04'); 
const team = {
    players: [
        { name: 'Анна', position: 'нападающий', number: 10 },
        { name: 'Иван', position: 'защитник', number: 5 },
        { name: 'Мария', position: 'вратарь', number: 1 }
    ],
    
    showPlayers() {
        this.players.forEach(function(player) {
            console.log(`Игрок: ${player.name}, Позиция: ${player.position}, Номер: ${player.number}`);
        });
    }
};

team.showPlayers();

//TASK05=======================================
console.log('TASK05'); 
const counter = (function() {
    let count = 0;
    
    return {
        increment() {
            return ++this.count;
        },
        
        decrement() {
            return --this.count;
        },
        
        getCount() {
            return this.count;
        }
    };
})();

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.getCount()); 

//TASK06=======================================
console.log('TASK06'); 
let item = {};
Object.defineProperty(item, 'price', {
    value: 100,
    writable: true,      // можно изменять
    configurable: true,  // можно удалять
    enumerable: true
});
console.log(item.price); 
item.price = 150;        
console.log(item.price); 

Object.defineProperty(item, 'price', {
    writable: false,     // нельзя изменять
    configurable: false  // нельзя удалять
});
console.log(item.price); 

//TASK07=======================================
console.log('TASK07'); 
const circle = {
    _radius: 5,
    
    get area() {
        return Math.PI * this._radius * this._radius;
    },
    
    get radius() {
        return this._radius;
    },
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log('Радиус должен быть положительным числом');
        }
    }
};

console.log(circle.radius); 
console.log(circle.area);   
circle.radius = 10;
console.log(circle.radius); 
console.log(circle.area);   

//TASK08=======================================
console.log('TASK08'); 
let car = {};
Object.defineProperties(car, {
    make: {
        value: 'Toyota',
        writable: true,
        configurable: true,
        enumerable: true
    },
    model: {
        value: 'Camry',
        writable: true,
        configurable: true,
        enumerable: true
    },
    year: {
        value: 2022,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
car.make = 'Honda'; 
console.log(car.make); 

Object.defineProperties(car, {
    make: {
        writable: false,
        configurable: false
    },
    model: {
        writable: false,
        configurable: false
    },
    year: {
        writable: false,
        configurable: false
    }
});

console.log(car.make);     
console.log(car.model);   
console.log(car.year); 

//TASK09=======================================
console.log('TASK09'); 
const numbers = [10, 20, 30];
Object.defineProperty(numbers, 'sum', {
    get: function() {
        return this.reduce((total, num) => total + num, 0);
    },
    enumerable: false,    
    configurable: false   
});

console.log(numbers);     
console.log(numbers.sum); 
numbers.push(40);
console.log(numbers.sum); 

//TASK10=======================================
console.log('TASK10'); 
const rectangle = {
    _width: 10,
    _height: 5,
    
    get area() {
        return this._width * this._height;
    },
    
    get width() {
        return this._width;
    },
    
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log('Ширина должна быть положительным числом');
        }
    },
    
    get height() {
        return this._height;
    },
    
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log('Высота должна быть положительным числом');
        }
    }
};

console.log(rectangle.width);  
console.log(rectangle.height); 
console.log(rectangle.area);   

rectangle.width = 15;
rectangle.height = 8;
console.log(rectangle.area);   

rectangle.width = -5; 
rectangle.height = -5; 

//TASK11=======================================
console.log('TASK11'); 
const user = {
    _firstName: 'Анна',
    _lastName: 'Иванова',
    
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
    
    set fullName(value) {
        const parts = value.split(' ');
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            console.log('Введите имя и фамилию через пробел');
        }
    },
    
    get firstName() {
        return this._firstName;
    },
    
    get lastName() {
        return this._lastName;
    }
};

console.log(user.firstName);  
console.log(user.lastName);   
console.log(user.fullName);   

user.fullName = 'Мария Петрова';
console.log(user.firstName);  
console.log(user.lastName);   
console.log(user.fullName);   

user.fullName = 'ОдинокоеИмя'; 