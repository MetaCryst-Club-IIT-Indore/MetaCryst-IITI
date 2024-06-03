// import React from "react";
// import design from "../assets/design.png";

// function NewsCard() {
//   return (
//     <div style={{ marginBottom: "10px" }} class="col">
//       <div class="card shadow-sm">
//         <img
//           src={design}
//           style={{ height: "225px" }}
//           //   class="bd-placeholder-img card-img-top"
//           //   width="100%"
//           //   height="225"
//           //   xmlns="http://www.w3.org/2000/svg"
//           //   role="img"
//           //   aria-label="Placeholder: Thumbnail"
//           //   preserveAspectRatio="xMidYMid slice"
//           //   focusable="false">
//           //   <title>Placeholder</title>
//           //   <rect width="100%" height="100%" fill="#55595c"></rect>
//           //   <text x="50%" y="50%" fill="#eceeef" dy=".3em">
//           //     Image
//           //   </text>
//         ></img>
//         <div class="card-body">
//           <p class="card-text">
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </p>
//           <div class="d-flex justify-content-between align-items-center">
//             <div class="btn-group">
//               <button type="button" class="btn btn-sm btn-outline-secondary">
//                 Link
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewsCard;
import React from "react";
import styles from "../Pages/projects/projects.module.css";

function PCard() {
  return (
    <>
      <div className={styles.ProjectsCard}>
        <div className={styles.Photo}></div>
        <div className={styles.Info}>
          <h2>Project Name</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            explicabo odio, sit sapiente maiores earum placeat ex tempora natus.
            Molestiae iusto consectetur voluptatibus ex modi facere corporis
            accusantium voluptas dicta, id vel suscipit hic qui omnis officia.
            Est nihil libero accusantium consectetur temporibus vel porro saepe
            neque! Optio voluptatum ut inventore vero obcaecati, dolorem
            laudantium atque, eveniet quidem, saepe corrupti? Consequatur fugiat
            pariatur totam, nesciunt in impedit odit quod cupiditate cumque hic
            delectus explicabo et labore! Quibusdam quod voluptate optio tenetur
            expedita modi, in ipsum dolor odit, et temporibus facilis maxime
            dolores quas deleniti dolore dolorum reiciendis accusamus, ex
            sapiente nisi veniam. Earum, odio modi animi molestiae, eius quo
            quibusdam, temporibus cupiditate facere obcaecati corrupti amet
            expedita numquam accusamus repellat.
          </p>
          <div>
            <button className={styles.button}>Link</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCard;
