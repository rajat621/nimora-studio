import Image from "next/image";
import styles from "./CaseStudy.module.css";

// --- content block types ---
type TextBlock    = { type: "text";    value: string };
type HeadingBlock = { type: "heading"; value: string };
type BulletsBlock = { type: "bullets"; items: string[] };
type SpacerBlock  = { type: "spacer" };

type ContentBlock = TextBlock | HeadingBlock | BulletsBlock | SpacerBlock;

type Step = {
  title: string;
  content: string | ContentBlock[];
};

type Props = {
  data: {
    intro: {
      eyebrow: string;
      title: string;
      description: string;
    };
    image: string;
    steps: Step[];
  };
};

function RenderContent({ content }: { content: string | ContentBlock[] }) {
  if (typeof content === "string") {
    return (
      <>
        {content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </>
    );
  }

  return (
    <>
      {content.map((block, i) => {
        if (block.type === "text")
          return <p key={i} className={styles.stepText}>{block.value}</p>;

        if (block.type === "heading")
          return <p key={i} className={styles.stepHeading}>{block.value}</p>;

        if (block.type === "bullets")
          return (
            <ul key={i} className={styles.stepBullets}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );

        if (block.type === "spacer")
          return <div key={i} className={styles.stepSpacer} />;

        return null;
      })}
    </>
  );
}

export default function ProcessSection({ data }: Props) {
  return (
    <section className={styles.processWrapper}>
      <div className={styles.processContainer}>

        {/* TEXT CONTENT (890px centered) */}
        <div className={styles.contentWrap}>

          {/* Intro */}
          <div className={styles.processIntro}>
            <div className={styles.processLeft}>
              <p className={styles.eyebrow}>
                {data.intro.eyebrow}
              </p>
              <h2 className={styles.processTitle}>
                {data.intro.title}
              </h2>
            </div>

            <div className={styles.processRight}>
              {data.intro.description
                .split("\n\n")
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </div>
        </div>

        {/* IMAGE (1120px centered) */}
        <div className={styles.processImage}>
          <Image src={data.image} alt="Process" width={1120} height={700} />
        </div>

        {/* STEPS (890px centered) */}
        <div className={styles.contentWrap}>
          <div className={styles.stepsGrid}>
            {data.steps.map((step, index) => (
              <div key={index} className={styles.stepRow}>
                <div className={styles.stepTitle}>
                  {step.title}
                </div>

                <div className={styles.stepContent}>
                  <RenderContent content={step.content} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
// import styles from "./CaseStudy.module.css";

// type Step = {
//   title: string;
//   content: string;
// };

// type Props = {
//   data: {
//     intro: {
//       eyebrow: string;
//       title: string;
//       description: string;
//     };
//     image: string;
//     steps: Step[];
//   };
// };

// export default function ProcessSection({ data }: Props) {
//   return (
//     <section className={styles.processWrapper}>
//       <div className={styles.processContainer}>
        
//         {/* TEXT CONTENT (890px centered) */}
//         <div className={styles.contentWrap}>
          
//           {/* Intro */}
//           <div className={styles.processIntro}>
//             <div className={styles.processLeft}>
//               <p className={styles.eyebrow}>
//                 {data.intro.eyebrow}
//               </p>
//               <h2 className={styles.processTitle}>
//                 {data.intro.title}
//               </h2>
//             </div>

//             <div className={styles.processRight}>
//               {data.intro.description
//                 .split("\n\n")
//                 .map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//             </div>
//           </div>
//         </div>

//         {/* IMAGE (1120px centered) */}
//         <div className={styles.processImage}>
//           <img src={data.image} alt="Process" />
//         </div>

//         {/* STEPS (890px centered) */}
//         <div className={styles.contentWrap}>
//           <div className={styles.stepsGrid}>
//             {data.steps.map((step, index) => (
//               <div key={index} className={styles.stepRow}>
//                 <div className={styles.stepTitle}>
//                   {step.title}
//                 </div>

//                 <div className={styles.stepContent}>
//                   {step.content}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }