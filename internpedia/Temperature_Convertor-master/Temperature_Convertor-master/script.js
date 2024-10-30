const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;

    const tempSelected=document.getElementById('temp_diff');

    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    let celToFah=(cel)=>{
        let fahrenhite=Math.round((cel*9/5)+32);
        // let fahrenhite=(parseFloat(cel.value)*9)/5+32;
        return fahrenhite;
    }

    let fahToCel=(fah)=>{
        let celsius=Math.round((fah-32)*5/9);
        return celsius;
    }

    // let kelToCel=(kel)=>{
    //     let celsius=Math.round((kel+273.15);
    //     return celsius;
    // }

    let result;

    if(valueTemp=='celsius'){
        result= celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result} ° Fahrenhite`;
    }
    else if(valueTemp=='fahrenhite'){
        result= fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result}° Celsius`;
    }
    // else{
    //     result= kelToCel(numberTemp);
    //     document.getElementById('resultContainer').innerHTML=`=${result} Kelvin`;
    // }
}
