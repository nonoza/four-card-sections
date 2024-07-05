import iconCalculator from '../icon-calculator.svg';
function CardFour() {
    return <section className ="card" id="calculator">
        <h1>Calculator</h1>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <figure>
            <img src = {iconCalculator} alt = "icon-karma" className ="supervisor-img"/>
            </figure>
    </section>
}

export default CardFour;