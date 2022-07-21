import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'

export function About() {
  const Team = () => {
    return (
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    )
  }
  const Vision = () => {
    return (
      <ol>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          accusantium natus dolores rerum, vero, delectus quis laboriosam
          corporis ipsam id assumenda sint repudiandae modi magnam voluptatem
          facere, incidunt doloremque nobis?
        </li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi modi
          tempora, quaerat unde voluptas quas a fugit, soluta quae quisquam
          repudiandae incidunt mollitia! Temporibus numquam tenetur quod, quis
          deserunt saepe.
        </li>
      </ol>
    )
  }

  return (
    <section className="about">
      <section className="title">
        <h2>About us</h2>
        <p>Lorem, ipsum dolor sit amet consectetur </p>
      </section>
      <nav>
        <NavLink to="/about/team">Team</NavLink>-
        <NavLink to="/about/vision">Vision</NavLink>
      </nav>

      <section>
        <Route path="/about/team" component={Team}></Route>
        <Route path="/about/vision" component={Vision}></Route>
      </section>
    </section>
  )
}
