import React from "react";
import abbauf from "../../assets/img/experience/company-logo/abbauf.png";

const ExperienceDetail = () => {
  return (
    <div className="relative z-40 flex justrify-between items-center mb-[5rem]">
      <div className="w-1/2 h-screen ">
        <h1 className="text-5xl text-white mt-[2rem] mb-[1rem]">
          PT Abbauf Mulia Konsultan Teknologi
        </h1>
        <h3 className="text-2xl text-white mb-[2rem]">19 Feb 2023</h3>
        <p className="text-white text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          accusamus impedit aliquam mollitia sit maxime, laborum quasi cum hic
          laboriosam itaque tempore earum? Mollitia, alias? Corrupti,
          consectetur error. Molestiae repellendus error blanditiis consequuntur
          tempora beatae quaerat unde, quibusdam reprehenderit eius ullam ipsam
          commodi aut rem earum, exercitationem ut praesentium voluptas eum
          atque, quasi nesciunt! Ratione sint, totam cum doloribus voluptate
          recusandae possimus quia illum consequuntur laudantium harum nisi
          repudiandae, magnam sequi vero. Accusamus eligendi minus voluptatem
          inventore illum sapiente assumenda officiis at fugiat error, nemo
          nostrum obcaecati quos magnam quod explicabo vero? Totam sint mollitia
          atque adipisci nulla facere optio illum laboriosam dolorem similique
          maxime impedit incidunt quos eveniet praesentium voluptatum enim ea
          neque pariatur, soluta quas odio ipsam excepturi dolor? Asperiores
          vero modi delectus totam, alias reiciendis ratione ex quidem
          necessitatibus voluptas quas adipisci esse veritatis sed ea, aliquid
          eius error impedit id odit ab? Facilis voluptas libero sit, modi eaque
          alias minima officiis labore esse voluptatem? Assumenda sunt quas
          officiis, aspernatur, voluptate soluta, rerum quos hic explicabo neque
          nulla. Provident dolor est in illo fuga sed ipsam nisi, iusto
          laboriosam error nostrum recusandae perferendis ullam quod! Fugit
          sapiente cumque consequuntur cupiditate praesentium architecto alias.
          Soluta autem delectus quis.
        </p>
      </div>
      <div className="w-[50rem] h-[50rem] rounded-full bg-gray-100 left-[40rem] z-40 absolute">
        <img src={abbauf} alt="nmg" className="ml-[10rem] mt-[10rem]" />
      </div>
    </div>
  );
};

export default ExperienceDetail;
