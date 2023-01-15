function addShipping(price: number, shipping: number) : number {
    return price + shipping;
}

function addShipping2(price: number, shipping: number) : number | boolean {
    return price + shipping;
}


addShipping(10 , 5);