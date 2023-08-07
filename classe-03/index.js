function taAberto(data) {
    const horas = data.getUTCHours();

    if (horas >= 8 && horas <= 18) {
        return true;
    } else {
        return false;
    }
}


console.log(taAberto(new Date(2015,1,1,12)));
console.log(taAberto(new Date(2015,1,1,2)));