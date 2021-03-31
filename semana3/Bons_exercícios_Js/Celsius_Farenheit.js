/* Crie uma função que receba uma string em celsius ou
farenheit e faça a transformação de uma unidade para 
outra

C=(F-32) * 5/9
F C* 9/5 + 32
*/

// transformDegree('50F')

function transformDegree(degree) {
    const celsiusExists=degree.toUpperCase().includes('C')
    const farenheitExists=degree.toUpperCase().includes('F')

    if(!celsiusExists && !farenheitExists) {
        throw new Error('Grau não identificado')
    }

     //fluxo ideal, F->C
     let updatedDegree =Number( degree.toUpperCase().replace("F", ""));
     let formula = (farenheit) => (farenheit - 32) * 5/9
     let degreeSign = 'C'


     //fluxo alternativo C->
     if(celsiusExists){
        updatedDegree =Number( degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius* 9/5 + 32
        degreeSign = 'F'
     }
 
     return formula(updatedDegree) + degreeSign 

}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
     transformDegree('50Z')
  
} catch (error) {
        console.log(error.message)
}

