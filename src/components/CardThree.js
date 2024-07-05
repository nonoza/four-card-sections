import iconKarma from '../icon-karma.svg';
function CardThree() {
    return <section className ="card" id="karma">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <figure>
            <img src = {iconKarma} alt = "icon-karma" className ="supervisor-img"/>
            </figure>
    </section>
}

export default CardThree;