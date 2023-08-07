function taAberto(data) {
    const horas = data.getHours();
    const dia = data.getDay();
    if ((horas >= 8 && horas <= 18) && (dia > 0 && dia < 6)) {
        return true;
    } else {
        return false;
    }
}


console.log(taAberto(new Date(2021,3,25,12)));
console.log(taAberto(new Date(2021,3,26,12)));
console.log(taAberto(new Date(2021,3,26,7,59)));

