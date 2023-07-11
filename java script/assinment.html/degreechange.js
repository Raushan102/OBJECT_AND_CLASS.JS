

let celsius= 65;

function  inFahrenheit(celsius)
{
    return fahrenheit=(celsius*9/5)+32;
}

console.log("temperature in fahrenheit is =",inFahrenheit(celsius));

function inCelsius(fahrenheit1)
{
    

    return (fahrenheit1-32)*5/9;

}

console.log("temperature in celsius is =",inCelsius(inFahrenheit(celsius)));