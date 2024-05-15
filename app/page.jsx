export default function Home() {
  return (
    <main className="p-5">
      <section>
        <h1>This is {"Ahsoka's"} Holocron</h1>
        <sub>
          A proof of concept and a learning journey in Next.JS with a Star Wars
          API
        </sub>

        <article>
          <br />
          <p>
            This is a tecnical MVP that uses the
            <a
              className={"hover:text-sky-400"}
              href="https://swapi.dev/"
              target="_blank"
              rel="noreferrer"
            >
               Star Wars API 
            </a>
            to fetch and display data about the Star Wars universe. It is built
            with Next.JS and Tailwind CSS.
          </p>
          <p>
            The app is a work in progress, meant to be a scalable baseline and
            will be updated as me, and hopefully a group of friends, take upon
            the challenge to learn more about Next.JS and Tailwind CSS.
          </p>
        </article>
      </section>
      <br />
      <section>
        <article>
          <h2>App Features✨</h2>
          <p>Responsive</p>
          <p>Dark Mode</p>
          <p>PWA</p>
          <p>Pagination</p>
          <p>Tailwind</p>
        </article>
        <br />
        <article>
          <h2>Constraints👓</h2>
          <p>Style with Tailwind</p>
          <p>Develop with Next.Js</p>
          <p>Only use {"Next's "} Apis</p>
          <p>Map the fetched data as the view is supposed to render</p>
        </article>
        <br />
        <article>
          <h2>Next.js Features👌</h2>
          <p>Client and Server Side Rendering</p>
          <p>Lazy Loading</p>
          <p>Dynamic Routing</p>
          <p>Error routing</p>
        </article>
      </section>
      <br />
      <section>
        <article>
          <h2>Notes</h2>
          <p>
            I wasnt able to implement a solid filter function to the characters
            page, although I managed to get it to work at one point, it felt
            like a hacky solution.😿 <br />
            Therefore it will be a feature to implement in the next sprint as
            the team grows.😉
          </p>
        </article>
      </section>
    </main>
  );
}
