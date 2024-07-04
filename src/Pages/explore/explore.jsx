import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import ExploreCard from "../../components/Explore/exploreCard";
import styles from "./explore.module.css";

const data = [
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
];

function Explore() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div>
        <h1 className={styles.explorename}>Explore</h1>
        <div className="material-list flex flex-col lg:flex-nowrap items-center justify-center my-5 gap-5">
          {data.map((item, index) => (
            <ExploreCard
              key={index}
              name={item.name}
              description={item.description}
              link={item.link}
              photo
              className="material-item"
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Explore;
