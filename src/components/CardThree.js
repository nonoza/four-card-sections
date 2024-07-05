import iconKarma from '../icon-karma.svg';
function CardThree() {
    return <section className ="card" id="karma">
        <h1>Karma</h1>
        <p>Regularly evaluates our talent to ensure quality</p>
        <figure>
            <img src = {iconKarma} alt = "icon-karma" className ="supervisor-img"/>
            </figure>
    </section>
}

export default CardThree;