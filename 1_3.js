let str = prompt('Введите строку:');
        let s1 = ' ';
        str = str + s1;
        function isNumber(str) {
            return !isNaN(str) && !isNaN(parseFloat(str));
        }

        let sum = 0;
        let buffer = '';

        let i = 0;

        while(i < str.length){
            if (str[i] !== ' ' || str[i] == str[str.length - 2] ){
                buffer += str[i];
            }
            else{
                if (isNumber(buffer)){
                    for (let j = 0; j < buffer.length; j++){
                        if (buffer[j] !== '-' && buffer[j] !== '.' && buffer[buffer.length - 1] !== '.'  && buffer[0] !== '.'){
                            sum += parseInt(buffer[j]);
                        }
                    }
                }
                buffer = '';
            }
            i++;
        }

        alert(sum);