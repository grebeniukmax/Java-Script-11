// N1 +- sam
const bankAccount = {
    ownerName: "Cheburek cheburekovich",
    accountNumber: "111111111111",
    balance: 1000,
    deposit: function() {
        if (confirm("Кидаєш гроші?")) {
            let amount = parseFloat(prompt("Вводь сумму:"));
            if (!isNaN(amount) && amount > 0) {
                this.balance += amount;
                alert(`Тепер ти мільйонер: ${this.balance}`);
            } else {
                alert("Ушибочка.");
            }
        }
    },
    withdraw: function() {
        if (confirm("Мені забрати гроші?")) {
            let amount = parseFloat(prompt("Вводь сумму:"));
            if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                alert(`Тепер ти мільйонер: ${this.balance}`);
            } else {
                alert("Щось пішло не так.");
            }
        }
    }
};




// N2 only sam
const weather = {
    temperature: 0,
    dimok: 50,
    windSpeed: 10,
    isBelowZero: function() {
        this.temperature = parseFloat(prompt("Вводьте температурку:"));
        if (this.temperature < 0) {
            alert("Менше 0 градусів");
            return true;
        } else {
            alert("Температура вище або дорівнює 0 градусам");
            return false;
        }
    }
};




// N3 only sam
const user = {
    name: "Alison",
    email: "aliconcucuson@example.com",
    password: "aneskaguvam",
    login: function() {
        let inputEmail = prompt("Введи email:");
        let inputPassword = prompt("Введи пароль:");
        if (inputEmail === this.email && inputPassword === this.password) {
            alert("Ахаха я тебе взламав!");
        } else {
            alert("Введи пароль ще раз,бо я тебе не зламав");
        }
    }
};




// N4 +- sam
const movie = {
    title: "Venom",
    director: "Hrebeniuk Max",
    year: 2010,
    rating: 9.9,
    isHighRated: function() {
        return this.rating > 8;
    }
};
console.log(`Title: ${movie.title}`);
console.log(`Director: ${movie.director}`);
console.log(`Year: ${movie.year}`);
console.log(`Rating: ${movie.rating}`);
console.log(`Is high rated: ${movie.isHighRated()}`);