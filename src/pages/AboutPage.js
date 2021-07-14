import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="table" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            molestias accusamus recusandae nemo quisquam doloremque ex quaerat,
            corrupti blanditiis, magni repellendus consequuntur. Delectus
            dignissimos ab, quis dolorum nihil tenetur aspernatur amet tempora
            unde rerum natus ea mollitia ut beatae perferendis! Vero at aliquid,
            pariatur sint accusantium incidunt ducimus maiores ea dignissimos
            et, quas voluptate! Praesentium maiores ullam, placeat perferendis
            minima cumque? Id, suscipit magni? Illum molestiae explicabo
            consequatur non suscipit blanditiis fuga architecto soluta alias.
            Veniam hic aliquam quibusdam laborum et, impedit totam ullam libero,
            nihil, perspiciatis voluptates excepturi possimus. Rerum hic
            distinctio aspernatur illum atque inventore culpa, itaque eius?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
