let prev = Number(prompt("Введите число:"));
if (!isNaN(prev)){
  let curr = Number(prompt("Введите число:"));
  let next;
  let count = 0; // счетчик чисел, которые больше своих соседей
  let count2 = 0;

  while ((!isNaN(curr))){ // продолжаем вводить числа, пока не встретим нечисловое значение
    next = Number(prompt("Введите число:"));
    if ((!isNaN(prev)) && (!isNaN(curr)) && (!isNaN(next))) {
    count2+=1;
    }

    if (curr > prev && curr > next) { // проверяем, больше ли текущее число своих соседей
        count++;
    }
  
    prev = curr;
    curr = next;
  }
  if (count2>=1){
  alert(`Количество чисел, больших своих соседей: ${count}`);
  }
  else{
    alert('Ошибка ввода');
  }
}
else{
  alert('Ошибка ввода');
}