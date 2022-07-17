console.log('Carrito');

elegirModoPago();


function contado() {
    alert ('Valor de contado: $' + sumaProductos)
}



function cuotas(valor) {
    cantidadCuotas = parseInt (prompt ('Inserte cantidad de cuotas'))
    console.log('Cuotas: ' + cantidadCuotas);
    alert ('Calculando valor por cuota...')
    alert ('Valor por cuota: $' + valor / cantidadCuotas)
}


function elegirModoPago() {
    
    const TOTAL_ITERACIONES = 4
    let total = 0

    for (let i = 0; i < TOTAL_ITERACIONES; i++ ) {
        valor = parseInt (prompt ('Inserte un valor')) 
        console.log('Valor $' + valor);
        total = total + valor
    }

    let precioTotal = total   

    let comando = prompt ('¿Como quiere pagar? (Contado o Cuotas)')

    switch (comando) {
        case 'Contado':

            alert ('Calculando valor de contado...')
            alert ('Precio de contado: $' + precioTotal)
            
            
            
            break;
        case 'Cuotas':
            
            cuotas(precioTotal)
        


            break;
    }

    }








