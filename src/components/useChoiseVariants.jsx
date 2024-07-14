export default function useChoiceVariants(variants,answer) {
    console.log("Choice Test")
    let newArrVariants=[]
    let count=0;
    let maxVariants=4;
    const indexTrueVariants=Math.floor(Math.random()*maxVariants)
    if(variants.length<=maxVariants){
        maxVariants=variants.length
    }
    while(count<maxVariants){
        const randomVariant=variants[Math.floor(Math.random()*variants.length)];
        if(count===indexTrueVariants){
            pushTrueVariants(randomVariant)
        }else{
            pushRandomVariants(randomVariant)
        }
    }
    function pushTrueVariants(randomVariant) {
        if(newArrVariants.indexOf(answer)===-1){
            newArrVariants.push(answer);
            count++
        }else{
            pushRandomVariants(randomVariant)
        }
    }
    function pushRandomVariants(randomVariant) {
        if(newArrVariants.indexOf(randomVariant)===-1){
            newArrVariants.push(randomVariant)
            count++
        }
    }
    return newArrVariants;
}