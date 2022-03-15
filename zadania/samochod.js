class Samochod{
    constructor(marka,model,cena, rocznik, spalanie){
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;
    }

wiek(){
        const data=new Date();
        const rok=data.getFullYear();
        const wiekPojazdu = rok - this.rocznik;
    
        return 'Wiek pojazdu ' +this.marka +' wynosi:' +wiekPojazdu;
    }

koszt(){
    const kosztPaliwa = 6.00;
    const spalanko = this.spalanie*kosztPaliwa;

    return 'Spalanie w aucie: ' +this.marka +' wynosi:' +spalanko;

}
}