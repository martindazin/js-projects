function convertEuro(euro, currency){
    switch(currency){
        case 'USD' :
            return euro * 1.06; 
        case 'GBP' :
            return euro * 0.87;
        case 'JPY' :
            return euro * 120.78;
        default : {
            throw new Error('Currency not handled');
        }
    }
}