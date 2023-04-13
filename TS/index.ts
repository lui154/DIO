type Hero = {
    name: string;
    vulgo: string;
};

function printaObj(pessoa: Hero){
    console.log(pessoa);
}

printaObj({
    name:"bruce",
    vulgo: "batman",
});