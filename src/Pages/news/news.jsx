import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import styles from "./News.module.css";
// import design from "../../assets/design.png";
import NewsCard from "../../components/NewsCard";

// function News() {
//   return (
//     <div style={{ backgroundColor: "#140A2B", height: "00px" }}>
//       <Navbar></Navbar>
//       <div
//         style={{
//           width: "187px",
//           position: "relative",
//           display: "inline-block",
//           float: "left",
//         }}>
//         <h3 className={styles.name}>IIT Indore</h3>
//         <img
//           style={{ height: "600px", width: "187px", position: "relative" }}
//           src={design}
//         />
//         <h1 className={styles.heading}>Latest News</h1>
//         {/* <h1 style={{ position:"absolute" marginLeft: "0px" }} className={styles.heading}>
//           Latest News
//         </h1> */}
//       </div>
//       <div style={{ display: "inline-block", width: "800px" }}>
//         <div className={styles.images}></div>
//         <div className={styles.images}></div>
//         <div className={styles.images}></div>
//         <div className={styles.images}></div>
//       </div>
//       <div style={{ display: "inline-block", float: "right" }}>
//         <h3 className={styles.topStories}>Top Stories</h3>
//         {/* <hr className={styles.line}></hr> */}
//         {/* <div className={styles.line}></div> */}
//         <div
//           style={{
//             width: "253px",
//             height: "600px",
//             backgroundColor: "#d6b6ff",
//             border: "3px solid #000",
//           }}></div>
//       </div>
//     </div>
//   );
// }

// export default News;

function News() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>

      <h1 className={styles.heading}>Latest News</h1>
      <div class="container">
        <div class="row row-cols-md-3 row-cols-sm-2">
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default News;
