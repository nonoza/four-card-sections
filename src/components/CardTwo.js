import iconTeamBuilder from '../icon-team-builder.svg';
function CardTwo() {
    return <section className ="card" id="teambuilding">
        <h1>Team Builder</h1>
        <p>Scans our talent network to create the optimal team for your project</p>
        <figure>
            <img src = {iconTeamBuilder} alt = "icon-team-builder" className ="supervisor-img" />
            </figure>
    </section>
}

export default CardTwo;