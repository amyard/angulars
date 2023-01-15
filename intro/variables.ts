const myName: string = 'Max';

let someName = ''; // name
someName = 'Asd';

let someName2; // any
someName = 'asd';

let s1: string | null = null;
s1 = 'aaaa';


// ARRAY
let items1 = ['aaa', 'bbb'];
let items2: string[] | number[] = []; // empty array
let items3:(string | number)[] = [5, 'max'];


// Object
const account: {
    name:string,
    balance: number
    status?: string // ? optional
} = {
    name: 'Luis',
    balance: 10
};

let accounts: {}[]; // array of objects 


// interface
interface IAccount {
    name:string,
    balance: number
    status?: string, // ? optional
    deposit?: () => void
};

const acc: IAccount = {
    name: 'Luis',
    balance: 10
}

let acc1: IAccount[];



// CLASS
class InvestmentAccount implements IAccount{ 
    constructor(public name, public balance) {}
    
    private withdraw() {
        
    }
};



// GENERICS





